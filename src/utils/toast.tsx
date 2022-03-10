import React from "react";
import { Alert } from "@mui/material";

interface ToastProps {
  severity: "error" | "info" | "success" | "warning";
  color: "error" | "info" | "success" | "warning";
  message: string;
  position: string;
  [propName: string]: any;
}

export default function Toast(props: ToastProps) {
  return (
    <Alert severity={props.severity} color={props.color}>
      {props.message}
    </Alert>
  );
}
