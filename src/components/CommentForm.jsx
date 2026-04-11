import { useState } from 'react';

function CommentForm({ onAddComment }) {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = 'Name is required.';
    if (!comment.trim()) newErrors.comment = 'Comment cannot be empty.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    onAddComment({ name: name.trim(), comment: comment.trim() });
    setName('');
    setComment('');
    setErrors({});
  };

  return (
    <form className="comment-form" onSubmit={handleSubmit} noValidate>
      <h4 className="comment-form-title">Leave a Comment</h4>

      <div className="form-group">
        <label htmlFor="commenter-name">Name</label>
        <input
          id="commenter-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className={errors.name ? 'input-error' : ''}
        />
        {errors.name && <span className="error-msg">{errors.name}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="commenter-text">Comment</label>
        <textarea
          id="commenter-text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="What are your thoughts?"
          rows="4"
          className={errors.comment ? 'input-error' : ''}
        />
        {errors.comment && <span className="error-msg">{errors.comment}</span>}
      </div>

      <button type="submit" className="submit-button">Post Comment</button>
    </form>
  );
}

export default CommentForm;
