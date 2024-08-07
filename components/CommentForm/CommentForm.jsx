import { useState } from "react";

export function CommentForm({
  loading,
  error,
  onSubmit,
  autoFocus = false,
  initialValue = "",
}) {
  const [message, setMessage] = useState(initialValue);

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(message).then(() => setMessage(""));
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="comment-form-row">
        <textarea
          autoFocus={autoFocus}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="message-input"
        />
        <button
          className="btn hover:opacity-85 bg-zzomorod"
          type="submit"
          disabled={loading}
        >
          {loading ? "درحال ثبت..." : "ثبت دیدگاه"}
        </button>
      </div>
      <div className="error-msg">{error}</div>
    </form>
  );
}
