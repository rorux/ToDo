import React, { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { IAuthSnackbarProps } from "./types";

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  }
);

const AuthSnackbar: React.FC<IAuthSnackbarProps> = ({ message, handle }) => {
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(true);

  const handleClose = () => {
    setOpenSnackbar(false);
    handle("");
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <Snackbar
      open={openSnackbar}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      onClose={handleClose}
      action={action}
    >
      <Alert
        data-test="snackbar-alert"
        onClose={handleClose}
        severity="error"
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default AuthSnackbar;
