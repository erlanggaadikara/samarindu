import { observer } from "mobx-react-lite";
import { Box, Typography, Button } from "@mui/material";
import { navigate } from "@reach/router";

export default observer(() => {
  return (
    <Box
      sx={{
        width: { laptop: "100vw" },
        display: "flex",
        flexDirection: { mobile: "column-reverse", laptop: "row" },
      }}
    >
      <Box
        sx={{
          mx: { mobile: 10, laptop: 20 },
          my: 10,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: "primary.dark",
            fontWeight: "bold",
          }}
        >
          Sebarkan hari yang spesial dengan mudah
        </Typography>
        <Box
          sx={{
            typography: { mobile: "h5", laptop: "h5" },
            color: "primary.dark",
            my: 3,
          }}
        >
          Hanya di Samarindu
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { mobile: "column", laptop: "row" },
            justifyContent: "space-evenly",
            alignItems: { laptop: "center" },
            mt: { laptop: 30, mobile: 10 },
          }}
        >
          <Box sx={{ width: { laptop: "100%" } }}>
            <Button variant="contained" color="primary" fullWidth size="large">
              Daftar
            </Button>
          </Box>
        </Box>
      </Box>
      <Box sx={{ my: 2, mx: 20, width: { laptop: "50%" } }}></Box>
    </Box>
  );
});
