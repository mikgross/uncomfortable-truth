import * as React from "react";

export default function LinkedinSVG(props: any) {
  const { fillColor, height, width } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.286 0H1.709C.766 0 0 .777 0 1.73v20.54C0 23.223.766 24 1.709 24h20.577c.943 0 1.714-.777 1.714-1.73V1.73C24 .777 23.229 0 22.286 0zM7.254 20.571H3.696V9.118H7.26V20.57h-.005zM5.475 7.554a2.063 2.063 0 010-4.125c1.136 0 2.063.926 2.063 2.062a2.06 2.06 0 01-2.063 2.063zM20.587 20.57H17.03V15c0-1.329-.026-3.037-1.848-3.037-1.853 0-2.137 1.446-2.137 2.94v5.668H9.488V9.118H12.9v1.564h.048c.477-.9 1.64-1.848 3.37-1.848 3.6 0 4.27 2.373 4.27 5.459v6.278z"
        className={fillColor}
      />
    </svg>
  );
}
