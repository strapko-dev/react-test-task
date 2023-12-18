import Icon from "./Inteface";

const DocumentIcon = ({ className, width = 25, height = 25 }: Icon) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={className}
      viewBox="0 0 25 22"
      fill="none"
    >
      <path
        d="M0 0V17.3077C0 19.4327 1.72115 21.1538 3.84615 21.1538H21.1538C23.2788 21.1538 25 19.4327 25 17.3077V6.73077H19.2308V0H0ZM1.92308 1.92308H17.3077V17.3077C17.3077 18.0096 17.5192 18.6635 17.849 19.2308H3.84615C2.70192 19.2308 1.92308 18.4519 1.92308 17.3077V1.92308ZM3.84615 3.84615V8.65385H15.3846V3.84615H3.84615ZM5.5 5.76923H13.4615V6.73077H5.5V5.76923ZM19.2308 8.65385H23.0769V17.3077C23.0769 18.4519 22.2981 19.2308 21.1538 19.2308C20.0096 19.2308 19.2308 18.4519 19.2308 17.3077V8.65385Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default DocumentIcon;
