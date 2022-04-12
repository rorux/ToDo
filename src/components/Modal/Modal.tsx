import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { TModalProps } from "./types";

const Modal: React.FC<TModalProps> = ({
  open,
  setOpen,
  name,
  handler,
  text,
}) => {
  const [openModal, setOpenModal] = useState(false);
  const [newTaskName, setNewTaskName] = useState<string>(name);

  useEffect(() => {
    setOpenModal(open);
  }, [open]);

  const handleClose = () => {
    setOpen(false);
  };

  const handlerFunc = () => {
    if (newTaskName.trim()) {
      handler(newTaskName);
      setOpen(false);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTaskName(event.target.value);
  };

  return (
    <div>
      <Dialog open={openModal} onClose={handleClose}>
        <DialogTitle>{text.title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{text.text}</DialogContentText>
          <TextField
            onChange={handleChange}
            value={newTaskName}
            autoFocus
            margin="dense"
            label="Название"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>{text.disagree}</Button>
          <Button onClick={handlerFunc}>{text.agree}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Modal;
