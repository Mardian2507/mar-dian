export default function PostCaption({
  places,
  date,
  postTitle,
  shortDescription,
}) {
  return (
    <>
      <div className="flex items-center text-center py-1 flex-wrap space-x-1 text-[8px] md:text-[10px] lg:text-xs">
        <div className="uppercase">{places}</div>
        <span>&bull;</span>
        <div>{date}</div>
      </div>
      <span className="flex justify-center text-base md:text-lg font-semibold">
        {postTitle}
      </span>
      <div className="text-sm text-secondary dark:text-light">
        {shortDescription}
      </div>
    </>
  );
}
