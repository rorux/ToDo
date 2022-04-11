import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

function PageLayout() {
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
            <Grid item xs={10}>
              <TextField
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
                  variant="contained"
                  startIcon={<AddCircleOutlineIcon />}
                  sx={{ pr: "4px", py: "9px", minWidth: "40px" }}
                  fullWidth
                ></Button>
              </Grid>
            </Grid>
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
                <Radio value="isNotReady" name="radio-buttons" />
                <Typography variant="body2" color="#666" sx={{ flexGrow: 1 }}>
                  Направить отчет о работе Направить отчет о работе Направить
                  отчет о работе Направить отчет о работе
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
                <Radio value="isNotReady" name="radio-buttons" />
                <Typography
                  variant="body2"
                  color="#666"
                  sx={{ textDecoration: "line-through", flexGrow: 1 }}
                >
                  Направить отчет
                </Typography>
                <IconButton size="small">
                  <EditIcon sx={{ color: "#558b2f" }} />
                </IconButton>
                <IconButton size="small">
                  <DeleteIcon sx={{ color: "#ff5722" }} />
                </IconButton>
              </Box>
            </Grid>

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

export default PageLayout;
