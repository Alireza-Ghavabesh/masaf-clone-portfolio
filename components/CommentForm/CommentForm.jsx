import { useState } from "react";
import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export function CommentForm({
  loading,
  error,
  onSubmit,
  autoFocus = false,
  initialValue = "",
  authStatus,
}) {
  const [message, setMessage] = useState(initialValue);

  function handleSubmit(e) {
    e.preventDefault();
    if (authStatus === 'authenticated') {
      onSubmit(message).then(() => setMessage(""));
    } else {

      toast.error("لطفا وارد حساب کاربری شوید", {
        position: "bottom-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
        style: {
          fontFamily: "IranYekanWebBold",
          textAlign: "right",
        },
      });
    }
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
