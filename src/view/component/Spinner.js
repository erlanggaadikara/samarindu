import { observer } from "mobx-react-lite";
import { CircularProgress, Box } from "@mui/material";

export default observer(() => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        height: "100vh",
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CircularProgress sx={{ color: "primary.main" }} />
    </Box>
  );
});
