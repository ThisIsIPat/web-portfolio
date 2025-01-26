// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type NodejsOriginalSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function NodejsOriginalSvgIcon(props: NodejsOriginalSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 128 128"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"url(#ifmlQ9xucTpPa)"}
        d={
          "M66.958.825a6.07 6.07 0 00-6.035 0L11.103 29.76c-1.895 1.072-2.96 3.095-2.96 5.24v57.988c0 2.143 1.183 4.167 2.958 5.24l49.82 28.934a6.07 6.07 0 006.036 0l49.82-28.935c1.894-1.072 2.958-3.096 2.958-5.24V35c0-2.144-1.183-4.167-2.958-5.24z"
        }
      ></path>

      <path
        fill={"url(#ifmlQ9xucTpPb)"}
        d={
          "M116.897 29.76L66.841.825A8.161 8.161 0 0065.302.23L9.21 96.798a6.251 6.251 0 001.657 1.43l50.057 28.934c1.42.833 3.076 1.072 4.615.595l52.66-96.925a3.702 3.702 0 00-1.302-1.072z"
        }
      ></path>

      <path
        fill={"url(#ifmlQ9xucTpPc)"}
        d={
          "M116.898 98.225c1.42-.833 2.485-2.262 2.958-3.81L65.066.108c-1.42-.238-2.959-.119-4.26.715L11.104 29.639l53.606 98.355c.71-.12 1.54-.358 2.25-.715z"
        }
      ></path>

      <defs>
        <linearGradient
          id={"ifmlQ9xucTpPa"}
          x1={"34.513"}
          x2={"27.157"}
          y1={"15.535"}
          y2={"30.448"}
          gradientTransform={"translate(-129.242 -73.715) scale(6.18523)"}
          gradientUnits={"userSpaceOnUse"}
        >
          <stop stopColor={"#3F873F"}></stop>

          <stop offset={".33"} stopColor={"#3F8B3D"}></stop>

          <stop offset={".637"} stopColor={"#3E9638"}></stop>

          <stop offset={".934"} stopColor={"#3DA92E"}></stop>

          <stop offset={"1"} stopColor={"#3DAE2B"}></stop>
        </linearGradient>

        <linearGradient
          id={"ifmlQ9xucTpPb"}
          x1={"30.009"}
          x2={"50.533"}
          y1={"23.359"}
          y2={"8.288"}
          gradientTransform={"translate(-129.242 -73.715) scale(6.18523)"}
          gradientUnits={"userSpaceOnUse"}
        >
          <stop offset={".138"} stopColor={"#3F873F"}></stop>

          <stop offset={".402"} stopColor={"#52A044"}></stop>

          <stop offset={".713"} stopColor={"#64B749"}></stop>

          <stop offset={".908"} stopColor={"#6ABF4B"}></stop>
        </linearGradient>

        <linearGradient
          id={"ifmlQ9xucTpPc"}
          x1={"21.917"}
          x2={"40.555"}
          y1={"22.261"}
          y2={"22.261"}
          gradientTransform={"translate(-129.242 -73.715) scale(6.18523)"}
          gradientUnits={"userSpaceOnUse"}
        >
          <stop offset={".092"} stopColor={"#6ABF4B"}></stop>

          <stop offset={".287"} stopColor={"#64B749"}></stop>

          <stop offset={".598"} stopColor={"#52A044"}></stop>

          <stop offset={".862"} stopColor={"#3F873F"}></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default NodejsOriginalSvgIcon;
/* prettier-ignore-end */
