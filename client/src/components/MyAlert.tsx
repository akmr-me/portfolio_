import React, { SyntheticEvent } from "react";
import Snackbar, { SnackbarCloseReason } from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { AlertTypes } from "src/config/types";

type AlertProps = {
  onClose: (e: SyntheticEvent<Element, Event>) => void;
  severity: "success" | "error" | "warning" | "info";
  sx: React.CSSProperties;
  children?: string;
};

const Alert = function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

type MyAlertProps = {
  setAlert: React.Dispatch<React.SetStateAction<AlertTypes>>;
  alert: AlertTypes;
};

const MyAlert = ({ alert, setAlert }: MyAlertProps) => {
  const handleClose = (
    _event: Event | SyntheticEvent<Element, Event>,
    reason: SnackbarCloseReason
  ) => {
    if (reason && reason === "clickaway") {
      return;
    }
    setAlert({ open: false });
  };

  const handleCloseAlert = (_event: SyntheticEvent<Element, Event>) => {
    setAlert({ open: false });
  };

  return (
    <Snackbar
      open={alert.open}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <div>
        <Alert
          onClose={handleCloseAlert}
          severity={alert.type || "warning"}
          sx={{ width: "100%" }}
        >
          {alert.message}
        </Alert>
      </div>
    </Snackbar>
  );
};
export default MyAlert;
