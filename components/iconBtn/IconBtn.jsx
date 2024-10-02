export function IconBtn({ Icon, isActive, color, children, size, ...props }) {
  return (
    <button
      className={`btn icon-btn ${isActive ? "icon-btn-active" : ""} ${
        color || ""
      }`}
      {...props}
    >
      <span className={`${children != null ? "mr-1" : ""}`}>
        <Icon size={size}/>
      </span>
      {children}
    </button>
  );
}
