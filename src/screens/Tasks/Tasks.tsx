import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { CircularProgress } from "@mui/material";
import { GET_ALL_TASKS } from "../../query/task";
import { TTask } from "./types";
import Task from "../../components/Task";
import AddTask from "../../components/AddTask";

function Tasks() {
  const { data, loading, error, refetch } = useQuery(GET_ALL_TASKS);

  const [tasks, setTasks] = useState<TTask[]>([]);

  useEffect(() => {
    if (!loading) {
      setTasks(data.tasks);
    }
  }, [data, loading]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "#dcedc8",
      }}
    >
      <CssBaseline />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          sx={{
            my: { xs: 3, md: 6 },
            p: { xs: 2, md: 3 },
            borderRadius: 2,
          }}
          elevation={3}
        >
          <Typography variant="h5" align="center" mb={3}>
            Список дел
          </Typography>
          <Grid container spacing={2}>
            <AddTask refetch={refetch} />
            {loading ? (
              <CircularProgress />
            ) : (
              tasks.map((task) => <Task task={task} key={task._id} />)
            )}

            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                my: 1,
              }}
            >
              <Button variant="contained" color="error">
                Очистить список
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          backgroundColor: "#4caf50",
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body2" color="#fff" align="center">
            {`Copyright © ${new Date().getFullYear()}`}
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}

export default Tasks;
