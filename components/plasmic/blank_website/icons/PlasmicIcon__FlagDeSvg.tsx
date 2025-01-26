// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FlagDeSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FlagDeSvgIcon(props: FlagDeSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 5 3"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path fill={"#000"} d={"M0 0h5v3H0z"}></path>

      <path fill={"#D00"} d={"M0 1h5v2H0z"}></path>

      <path fill={"#FFCE00"} d={"M0 2h5v1H0z"}></path>
    </svg>
  );
}

export default FlagDeSvgIcon;
/* prettier-ignore-end */
