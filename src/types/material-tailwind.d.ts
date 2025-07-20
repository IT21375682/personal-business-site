import { TypographyProps } from "@material-tailwind/react";

declare module "@material-tailwind/react" {
  interface TypographyProps {
    placeholder?: string;
    onResize?: React.ReactEventHandler<HTMLElement>;
    onResizeCapture?: React.ReactEventHandler<HTMLElement>;
    onPointerEnterCapture?: React.ReactEventHandler<HTMLElement>;
    onPointerLeaveCapture?: React.ReactEventHandler<HTMLElement>;
    [key: string]: any; // Allow any other optional props
  }
} 