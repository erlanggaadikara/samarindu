import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { observer, useLocalObservable } from "mobx-react-lite";
import { action } from "mobx";
import { Box, Typography } from "@mui/material";
import Topbar from "view/page/landing/Topbar";
import Banner from "view/page/landing/Banner";

export default observer(() => {
  const meta = useLocalObservable(() => ({
    position: 0,
  }));

  const handleScroll = action(() => {
    const getPosition = window.pageYOffset;
    meta.position = getPosition;
  });

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      component="div"
      sx={{
        bgcolor: "bg.main",
      }}
      className="page"
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Samarindu: Buat dan Sebarkan!</title>
      </Helmet>
      <Topbar />
      <Banner />
      <Box
        sx={{
          position: "relative",
          bottom: 0,
          width: "100vw",
          alignContent: "center",
          py: 2,
          mt: 10,
          color: "primary.main",
        }}
      >
        <Typography variant="body2" sx={{ textAlign: "center" }}>
          Copyright © 2021 | All Right Reserved
        </Typography>
        <Typography variant="body2" sx={{ textAlign: "center" }}>
          samarindu.com
        </Typography>
      </Box>
    </Box>
  );
});
