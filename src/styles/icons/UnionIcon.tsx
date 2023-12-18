import Icon from "./Inteface";

const UnionIcon = ({ className, width = 25, height = 25 }: Icon) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25 11C25 11.3372 24.9844 11.6707 24.9551 12H13V0.0449219C13.3291 0.0151367 13.6631 0 14 0C14.207 0 14.4131 0.00561523 14.6172 0.0170898L14.9238 0.0383301L15 0V0.0449219C20.6064 0.550049 25 5.26196 25 11ZM23.0322 10C22.5703 5.78027 19.2197 2.42944 15 1.96753V10H23.0322Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.9238 3.03833L12 3V13H21.9551C21.9844 13.3293 22 13.6628 22 14C22 20.0752 17.0752 25 11 25C4.9248 25 0 20.0752 0 14C0 7.9248 4.9248 3 11 3C11.3115 3 11.6191 3.01294 11.9238 3.03833ZM20.0322 15C19.5342 19.5481 15.6807 23.0869 11 23.0869C5.98144 23.0869 1.91309 19.0186 1.91309 14C1.91309 9.31934 5.45215 5.46533 10 4.96753V15H20.0322Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default UnionIcon;
