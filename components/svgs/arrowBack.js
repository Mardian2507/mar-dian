export default function ArrowBack(props) {
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
        <path d="M15.293 7.293 10.586 12l4.707 4.707 1.414-1.414L13.414 12l3.293-3.293-1.414-1.414z" />
        <path d="m12.707 8.707-1.414-1.414L6.586 12l4.707 4.707 1.414-1.414L9.414 12l3.293-3.293z" />
      </svg>
    </>
  );
}
