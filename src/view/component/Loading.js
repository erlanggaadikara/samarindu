import { Card, Box, Typography, Modal } from "@mui/material";
import Spinner from "view/view/component/Spinner";
import { observable, action, makeObservable } from "mobx";
import { observer } from "mobx-react-lite";

class LoadingModel {
  open = false;
  note = "";

  constructor() {
    makeObservable(this, {
      open: observable,
      note: observable,
      show: action,
      close: action,
    });
  }

  show = (note) => {
    this.note = note;
    this.open = true;
  };

  close = () => {
    this.note = "";
    this.open = false;
  };
}

export const loading = new LoadingModel();

export default observer(() => {
  return (
    <Modal
      open={loading.open}
      onClose={loading.close}
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Box
        sx={{
          borderRadius: 3,
          bgcolor: "primary.light",
          width: { laptop: "30%", mobile: "70%" },
          height: "30%",
          p: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Spinner />
        <Typography variant="h6">{loading.note}</Typography>
      </Box>
    </Modal>
  );
});
