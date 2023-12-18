import Icon from "./Inteface";

const LogoutIcon = ({ className, width = 25, height = 25 }: Icon) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={className}
      viewBox="0 0 25 23"
      fill="none"
    >
      <path
        d="M7.49993 9.99991V12.4999H18.75V16.2499L25 11.2499L18.75 6.2499V9.99991H7.49993Z"
        fill="currentColor"
      />
      <path
        d="M2.49994 22.5H13.75C15.1287 22.5 16.25 21.3787 16.25 20V14.9999H13.75V20H2.49994V2.49989H13.75V7.49991H16.25V2.49989C16.25 1.12113 15.1287 -0.000125885 13.75 -0.000125885H2.49994C1.12119 -0.000125885 -6.86646e-05 1.12113 -6.86646e-05 2.49989V20C-6.86646e-05 21.3787 1.12119 22.5 2.49994 22.5Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default LogoutIcon;
