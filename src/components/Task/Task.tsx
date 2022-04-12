import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Radio from "@mui/material/Radio";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { TTaskProps } from "./types";
import { UPDATE_TASK, REMOVE_TASK } from "../../mutations/task";
import Confirm from "../Confirm";
import Modal from "../Modal";

const Task = ({ task, refetch }: TTaskProps) => {
  const [isOpenConfirm, setIsOpenConfirm] = useState<boolean>(false);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [updateTaskComplete] = useMutation(UPDATE_TASK);
  const [updateTaskRename] = useMutation(UPDATE_TASK);
  const [removeTask] = useMutation(REMOVE_TASK);

  const handleComplete = async () => {
    await updateTaskComplete({
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

  const handleDelete = async () => {
    await removeTask({
      variables: {
        input: {
          _id: task._id,
        },
      },
    });
    refetch();
  };

  const handleEdit = async (editName: string) => {
    await updateTaskRename({
      variables: {
        input: {
          _id: task._id,
          name: editName,
          complete: task.complete,
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
          <IconButton size="small" onClick={() => setIsOpenModal(true)}>
            <EditIcon sx={{ color: "#558b2f" }} />
          </IconButton>
          <IconButton size="small" onClick={() => setIsOpenConfirm(true)}>
            <DeleteIcon sx={{ color: "#ff5722" }} />
          </IconButton>
        </Box>
      </Box>
      <Confirm
        open={isOpenConfirm}
        setOpen={setIsOpenConfirm}
        handler={handleDelete}
        text={{
          disagree: "Отмена",
          agree: "Удалить",
          title: "Удалить задание?",
        }}
      />
      <Modal
        open={isOpenModal}
        setOpen={setIsOpenModal}
        handler={handleEdit}
        name={task.name}
        text={{
          disagree: "Отмена",
          agree: "Изменить",
          title: "Редактирование",
          text: "Введите новое название задачи",
        }}
      />
    </Grid>
  );
};

export default Task;
