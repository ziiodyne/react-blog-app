import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CommentForm from '../components/CommentForm';

function IndividualPostPage() {
  const { id } = useParams();

  const [post, setPost] = useState(null);
  const [author, setAuthor] = useState(null);
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState(0);

  const [postLoading, setPostLoading] = useState(true);
  const [commentsLoading, setCommentsLoading] = useState(true);
  const [postError, setPostError] = useState(null);
  const [commentsError, setCommentsError] = useState(null);

  // Fetch post + author
  useEffect(() => {
    setPostLoading(true);
    setPostError(null);

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error('Post not found.');
        return res.json();
      })
      .then((postData) => {
        setPost(postData);
        return fetch(`https://jsonplaceholder.typicode.com/users/${postData.userId}`);
      })
      .then((res) => {
        if (!res.ok) throw new Error('Could not load author info.');
        return res.json();
      })
      .then((userData) => {
        setAuthor(userData);
        setPostLoading(false);
      })
      .catch((err) => {
        setPostError(err.message);
        setPostLoading(false);
      });
  }, [id]);

  // Fetch comments
  useEffect(() => {
    setCommentsLoading(true);
    setCommentsError(null);

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((res) => {
        if (!res.ok) throw new Error('Could not load comments.');
        return res.json();
      })
      .then((data) => {
        setComments(data);
        setCommentsLoading(false);
      })
      .catch((err) => {
        setCommentsError(err.message);
        setCommentsLoading(false);
      });
  }, [id]);

  const handleAddComment = ({ name, comment }) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, body: comment, email: 'user@inkwell.dev', postId: Number(id) }),
    })
      .then((res) => {
        if (!res.ok) throw new Error('Failed to post comment.');
        return res.json();
      })
      .then((newComment) => {
        // JSONPlaceholder always returns id 501 — give it a unique local id
        setComments((prev) => [
          ...prev,
          { ...newComment, id: Date.now(), body: comment, name },
        ]);
      })
      .catch((err) => {
        alert(`⚠️ ${err.message} Your comment was not saved.`);
      });
  };

  // --- Render states ---
  if (postLoading) {
    return (
      <main className="main-content">
        <Link to="/" className="back-link">← Back to Posts</Link>
        <div className="loading-state">
          <div className="spinner" aria-label="Loading post..." />
          <p>Loading post...</p>
        </div>
      </main>
    );
  }

  if (postError || !post) {
    return (
      <main className="main-content">
        <div className="not-found">
          <h2>Post Not Found</h2>
          <p>{postError || "That post doesn't exist. Maybe it got lost in the void."}</p>
          <Link to="/" className="read-more-link">← Back to Posts</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="main-content">
      <Link to="/" className="back-link">← Back to Posts</Link>

      <article className="post-card post-card--full">
        <div className="post-top-row">
          <span className="post-category">Post #{post.id}</span>
          <span className="post-read-time">User #{post.userId}</span>
        </div>

        <h1 className="post-full-title">{post.title}</h1>

        {author && (
          <div className="author-card">
            <div className="author-avatar" aria-hidden="true">
              {author.name.charAt(0)}
            </div>
            <div className="author-info">
              <p className="author-name">{author.name}</p>
              <p className="author-email">
                <a href={`mailto:${author.email}`}>{author.email}</a>
              </p>
              <p className="author-meta">
                {author.company?.name} · {author.address?.city}
              </p>
            </div>
          </div>
        )}

        <div className="post-body">
          <p>{post.body}</p>
        </div>

        <button className="like-button" onClick={() => setLikes(likes + 1)}>
          ❤ Like {likes > 0 ? likes : ''}
        </button>
      </article>

      <section className="comment-section">
        <h3>Comments</h3>

        {commentsLoading && (
          <div className="loading-state loading-state--small">
            <div className="spinner spinner--small" />
            <p>Loading comments...</p>
          </div>
        )}

        {commentsError && (
          <div className="error-banner">
            <p>⚠️ {commentsError}</p>
          </div>
        )}

        {!commentsLoading && !commentsError && (
          <>
            {comments.length === 0 ? (
              <p className="no-comments">No comments yet. Be the first to comment!</p>
            ) : (
              <div className="comment-list">
                {comments.map((c) => (
                  <div key={c.id} className="comment-item">
                    <p className="comment-author">{c.name}</p>
                    <p className="comment-email">{c.email}</p>
                    <p className="comment-text">{c.body}</p>
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        <CommentForm onAddComment={handleAddComment} />
      </section>
    </main>
  );
}

export default IndividualPostPage;
