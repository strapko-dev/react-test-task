import Icon from "./Inteface";

const ThreeDotsIcon = ({ className, width = 20, height = 4 }: Icon) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 4"
      fill="none"
    >
      <circle cx="2" cy="2" r="2" fill="#C1C1CB" />
      <circle cx="10" cy="2" r="2" fill="#C1C1CB" />
      <circle cx="18" cy="2" r="2" fill="#C1C1CB" />
    </svg>
  );
};

export default ThreeDotsIcon;
