import React, { useCallback, useState } from "react";
import Grid from "@mui/material/Grid";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const AddTask = () => {
  const [newTaskName, setNewTaskName] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTaskName(event.target.value);
  };

  const addNewTask = useCallback(() => {
    console.log(newTaskName);
    setNewTaskName("");
  }, [newTaskName]);

  return (
    <>
      <Grid item xs={10}>
        <TextField
          onChange={handleChange}
          id="outlined-basic"
          label="Введите новое задание..."
          size="small"
          fullWidth
        />
      </Grid>
      <Grid item xs={2}>
        <Grid
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
        >
          <Button
            onClick={addNewTask}
            variant="contained"
            startIcon={<AddCircleOutlineIcon />}
            sx={{ pr: "4px", py: "9px", minWidth: "40px" }}
            fullWidth
          ></Button>
        </Grid>
      </Grid>
    </>
  );
};

export default AddTask;
