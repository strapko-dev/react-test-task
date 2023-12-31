import Icon from "./Inteface";

const ListIcon = ({ className, width = 25, height = 25 }: Icon) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={className}
      viewBox="0 0 25 25"
      fill="none"
    >
      <path
        d="M17.5 0H7.5C3.36375 0 0 3.36375 0 7.5V23.75C0 24.0815 0.131696 24.3995 0.366116 24.6339C0.600537 24.8683 0.918479 25 1.25 25H17.5C21.6362 25 25 21.6362 25 17.5V7.5C25 3.36375 21.6362 0 17.5 0ZM22.5 17.5C22.5 20.2575 20.2575 22.5 17.5 22.5H2.5V7.5C2.5 4.7425 4.7425 2.5 7.5 2.5H17.5C20.2575 2.5 22.5 4.7425 22.5 7.5V17.5Z"
        fill="currentColor"
      />
      <path
        d="M10 17H6V15H10V17ZM15.5 13.0003L6 13V11L15.5 11.0003V13.0003ZM19 9H6V7H19V9Z"
        fill="currentColor"
      />
      <path
        d="M14.492 18.8283L11 15.5L12.5 14L14.492 16.0003L19.5 11.0003L20.911 12.4173L14.492 18.8283Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ListIcon;
