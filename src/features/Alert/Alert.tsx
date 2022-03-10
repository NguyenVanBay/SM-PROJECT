import React, { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { AlertState, selectAlert } from "./alertSlice";
import { useAppSelector } from "../../app/hooks";

const AlertTag = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Alert() {
  const initState: AlertState = {
    severity: "error",
    color: "error",
    message: "",
    position: "",
    timeHidden: 2000
  };
  const alerts = useAppSelector(selectAlert).notifications;
  const [alert, setAlert] = useState(initState);
  const [open, setOpen] = useState(false);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    if (alerts.length > 0) {
      setAlert(alerts[alerts.length - 1]);
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
      }, 2000);
    }
  }, [alerts]);

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      {open && alert && (
        <Snackbar
          open={open}
          autoHideDuration={alert.timeHidden}
          onClose={handleClose}
        >
          <AlertTag
            onClose={handleClose}
            severity={alert.severity}
            sx={{ width: "100%" }}
          >
            {alert.message}
          </AlertTag>
        </Snackbar>
      )}
    </Stack>
  );
}
