import * as React from "react";
import { useMutation } from "@apollo/client";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Radio from "@mui/material/Radio";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { TTaskProps } from "./types";
import { UPDATE_TASK } from "../../mutations/task";

const Task = ({ task, refetch }: TTaskProps) => {
  const [updateTask] = useMutation(UPDATE_TASK);

  const handleComplete = async () => {
    await updateTask({
      variables: {
        input: {
          _id: task._id,
          name: task.name,
          complete: !task.complete,
        },
      },
    });
    refetch();
  };

  return (
    <Grid item xs={12}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#f0f0f0",
          borderRadius: 1,
          py: 1,
          px: 1,
        }}
      >
        <Radio
          value="isNotReady"
          name="radio-buttons"
          checked={task.complete}
          onClick={handleComplete}
        />
        <Typography
          variant="body2"
          color="#666"
          sx={{
            flexGrow: 1,
            textDecoration: task.complete ? "line-through" : "none",
          }}
        >
          {task.name}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <IconButton size="small">
            <EditIcon sx={{ color: "#558b2f" }} />
          </IconButton>
          <IconButton size="small">
            <DeleteIcon sx={{ color: "#ff5722" }} />
          </IconButton>
        </Box>
      </Box>
    </Grid>
  );
};

export default Task;
