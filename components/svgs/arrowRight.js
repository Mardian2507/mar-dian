export default function ArrowRight(props) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="currentColor"
        className="opacity-70"
        {...props}
      >
        <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z" />
        <path d="M8.707 7.293 7.293 8.707 10.586 12l-3.293 3.293 1.414 1.414L13.414 12 8.707 7.293z" />
        <path d="M11.293 8.707 14.586 12l-3.293 3.293 1.414 1.414L17.414 12l-4.707-4.707-1.414 1.414z" />
      </svg>
    </>
  );
}
