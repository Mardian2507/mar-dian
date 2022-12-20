export default function PostCaption({
  places,
  date,
  postTitle,
  shortDescription,
}) {
  return (
    <>
      <div className="flex items-center space-x-4">
        <div className="uppercase">{places}</div>
        <span>&bull;</span>
        <div>{date}</div>
      </div>
      <h2>{postTitle}</h2>
      <div>{shortDescription}</div>
    </>
  );
}
