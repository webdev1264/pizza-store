import ContentLoader from "react-content-loader";

const Skeleton = () => {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={466}
      viewBox="0 0 280 466"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <circle cx="137" cy="121" r="120" />
      <rect x="0" y="256" rx="10" ry="10" width="280" height="45" />
      <rect x="0" y="310" rx="10" ry="10" width="280" height="90" />
      <rect x="0" y="418" rx="10" ry="10" width="90" height="45" />
      <rect x="130" y="418" rx="25" ry="25" width="150" height="45" />
    </ContentLoader>
  );
};

export default Skeleton;
