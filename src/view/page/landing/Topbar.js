import { observer } from "mobx-react-lite";
import { Box, Typography, Link, Button, Stack } from "@mui/material";

export default observer(() => {
  return (
    <Stack direction="row" alignItems="center">
      {/* <Box sx={{ display: "flex", px: { laptop: 10, mobile: 1 }, width: 10 }}>
        <img src="../asset/image/samarindu.png" />
      </Box> */}

      <Box
        sx={{
          py: 5,
          px: { laptop: 10, mobile: 1 },
          display: "flex",
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <Button
          sx={{ color: "primary.light", mx: 3, fontWeight: "bold" }}
          href="/Daftar"
        >
          Daftar
        </Button>
        <Button variant="contained" sx={{ fontWeight: "bold" }} href="/Login">
          Masuk
        </Button>
      </Box>
    </Stack>
  );
});
