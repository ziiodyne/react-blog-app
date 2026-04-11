import { useState } from 'react';

function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required.';
    if (!form.email.trim()) {
      errs.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Enter a valid email address.';
    }
    if (!form.message.trim()) errs.message = 'Message cannot be empty.';
    return errs;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: undefined });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
  };

  const handleReset = () => {
    setForm({ name: '', email: '', message: '' });
    setErrors({});
    setSubmitted(false);
  };

  return (
    <main className="main-content">
      <section className="hero">
        <p className="hero-tag">Get In Touch</p>
        <h1>Contact</h1>
        <p>Have a question, a thought, or just want to say what's up? Drop a message below.</p>
      </section>

      <div className="contact-card">
        {submitted ? (
          <div className="contact-success">
            <div className="success-icon" aria-hidden="true">✓</div>
            <h3>Message Received!</h3>
            <p>
              Thanks for reaching out, <strong>{form.name}</strong>. This form doesn't submit to a backend,
              but in a real app your message would be on its way.
            </p>
            <button className="submit-button" onClick={handleReset}>
              Send Another
            </button>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="contact-name">Name</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className={errors.name ? 'input-error' : ''}
              />
              {errors.name && <span className="error-msg">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="contact-email">Email</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className={errors.email ? 'input-error' : ''}
              />
              {errors.email && <span className="error-msg">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What's on your mind?"
                rows="6"
                className={errors.message ? 'input-error' : ''}
              />
              {errors.message && <span className="error-msg">{errors.message}</span>}
            </div>

            <button type="submit" className="submit-button">Send Message</button>
          </form>
        )}
      </div>
    </main>
  );
}

export default ContactPage;
