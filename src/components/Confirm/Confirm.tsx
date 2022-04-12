import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { TConfirmProps } from "./types";

const Confirm: React.FC<TConfirmProps> = ({
  open,
  setOpen,
  handler,
  id,
  text,
}) => {
  const [openConfirm, setOpenConfirm] = React.useState(false);

  useEffect(() => {
    setOpenConfirm(open);
  }, [open]);

  const handleClose = () => {
    setOpen(false);
  };

  const handlerFunc = () => {
    handler();
    setOpen(false);
  };

  return (
    <>
      <Dialog
        open={openConfirm}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText>{text.title}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button data-test="disagree" onClick={handleClose}>
            {text.disagree}
          </Button>
          <Button data-test="agree" onClick={handlerFunc} autoFocus>
            {text.agree}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Confirm;
