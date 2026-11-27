import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) return;

    setSubmittedEmail(email);
    setIsSubmitted(true);
  };

  const handleReset = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setSubmittedEmail("");
    setIsSubmitted(false);
  };

  return (
    <div className="newsletter-container">
      {!isSubmitted ? (
        <form onSubmit={handleSubmit}>
          <h2 className="newsletter-title">Newsletter Subscription</h2>
          
          <div className="input-group">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="newsletter-input"
            />
          </div>

          <div className="input-group">
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="newsletter-input"
            />
          </div>

          <button type="submit" className="newsletter-button">
            Subscribe
          </button>
        </form>
      ) : (
        <div className="success-banner">
          <p className="success-text">
            Please check your email ({submittedEmail}) for confirmation
          </p>
          <a href="#reset" onClick={handleReset} className="reset-link">
            Subscribe to another email
          </a>
        </div>
      )}
    </div>
  );
}

export default App;