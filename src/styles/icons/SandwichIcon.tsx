import Icon from "./Inteface";

const SandwichIcon = ({ className, width = 20, height = 14 }: Icon) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={className}
      viewBox="0 0 20 14"
      fill="none"
    >
      <rect width="20" height="2" fill="currentColor" />
      <rect y="6" width="20" height="2" fill="currentColor" />
      <rect y="12" width="20" height="2" fill="currentColor" />
    </svg>
  );
};

export default SandwichIcon;
