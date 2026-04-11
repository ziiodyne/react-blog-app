import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function BlogPostsPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        if (!response.ok) throw new Error('Failed to fetch posts.');
        return response.json();
      })
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <main className="main-content">
      <section className="hero">
        <p className="hero-tag">Lab 8: API Integration & Dynamic Data</p>
        <h1>Fresh Posts, Live from the API</h1>
        <p>Posts fetched dynamically from JSONPlaceholder.</p>
      </section>

      {loading && (
        <div className="loading-state">
          <div className="spinner" aria-label="Loading posts..." />
          <p>Fetching posts...</p>
        </div>
      )}

      {error && (
        <div className="error-banner">
          <p>⚠️ {error}</p>
          <p>Check your connection and try refreshing.</p>
        </div>
      )}

      {!loading && !error && (
        <section id="posts" className="blog-list">
          {posts.map((post) => (
            <article key={post.id} className="post-card post-card--preview">
              <div className="post-top-row">
                <span className="post-category">User #{post.userId}</span>
                <span className="post-read-time">Post #{post.id}</span>
              </div>

              <h2>{post.title}</h2>
              <p className="post-content">{post.body.slice(0, 120)}...</p>

              <Link to={'/post/' + post.id} className="read-more-link">
                Read Full Post →
              </Link>
            </article>
          ))}
        </section>
      )}
    </main>
  );
}

export default BlogPostsPage;
