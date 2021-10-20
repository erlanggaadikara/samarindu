import { observer } from "mobx-react-lite";
import { useFormik } from "formik";
import { Post } from "control/connect/api";
import * as yup from "yup";
import {
  Box,
  TextField,
  Typography,
  Button,
  Stack,
  InputAdornment,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import Container from "view/component/Container";
import { navigate } from "@reach/router";
import { useState, useEffect } from "react";
import store from "control/util/store";

export default observer(() => {
  const [login, setLogin] = useState(false);

  const validationSchema = yup.object({
    username: yup.string().required("Mohon diisi"),
    nohp: yup.number().required("Mohon diisi"),
    password: yup.string().required("Mohon diisi"),
    confirmPassword: yup.string().required("Mohon diisi"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      nohp: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: async (value) => {
      setLogin(true);
      //   const login = await Post("/login_user", value);
      //   if (login.status === 1) {
      //     window.store.set("session", login.data);
      //     window.session = login.data;
      //     setLogin(false);
      //     navigate("/Dashboard", { replace: true });
      //   } else {
      //     window.toast.show("Gagal", login.message, "ERROR");
      //   }
      setLogin(false);
    },
  });

  //   useEffect(() => {
  //     if (window.session || store.view("session")) {
  //       navigate("/Dashboard", { replace: true });
  //     }
  //   }, []);

  return (
    <Container>
      <Box
        sx={{
          bgcolor: "bg.main",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          p: 2,
          height: "100vh",
        }}
      >
        <Typography variant="h4" sx={{ my: 2, fontWeight: "bold" }}>
          Daftar di Samarindu
        </Typography>
        <Box sx={{ mt: 2 }} component="form" onSubmit={formik.handleSubmit}>
          <Stack
            direction={{ mobile: "column", laptop: "row" }}
            space={4}
            alignItems="center"
          >
            <TextField
              label="Nomor HP/Whatsapp"
              name="nohp"
              variant="outlined"
              color="primary"
              fullWidth
              value={formik.values.nohp}
              onChange={formik.handleChange}
              error={formik.touched.nohp && Boolean(formik.errors.nohp)}
              helperText={formik.touched.nohp && formik.errors.nohp}
              sx={{ mb: 1, mr: { laptop: 2 } }}
              inputProps={{
                inputMode: "numeric",
                pattern: "[0-9]*",
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">+62</InputAdornment>
                ),
              }}
            />
            <TextField
              label="Email"
              name="username"
              variant="outlined"
              color="primary"
              fullWidth
              value={formik.values.username}
              onChange={formik.handleChange}
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username}
              sx={{ mb: 1 }}
            />
          </Stack>
          <TextField
            label="Password"
            type="password"
            name="password"
            variant="outlined"
            color="primary"
            fullWidth
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            sx={{ my: 1 }}
          />
          <TextField
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            variant="outlined"
            color="primary"
            fullWidth
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            error={
              formik.touched.confirmPassword &&
              Boolean(formik.errors.confirmPassword)
            }
            helperText={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
            sx={{ my: 1 }}
          />

          <LoadingButton
            variant="contained"
            color="primary"
            size="large"
            loading={login}
            sx={{ mt: 5, px: 10, mb: 5 }}
            type="submit"
          >
            Daftar
          </LoadingButton>
        </Box>
        <Stack direction="row" space={2} alignItems="center">
          <Typography>Sudah punya akun?</Typography>
          <Button href="/Login">Masuk disini</Button>
        </Stack>
      </Box>
    </Container>
  );
});
