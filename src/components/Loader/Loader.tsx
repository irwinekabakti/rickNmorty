import { Box, CircularProgress } from "@mui/material";

const Loader = () => {
  return (
    <Box sx={{ m: "6rem auto", width: "fit-content" }}>
      <CircularProgress size={80} />
    </Box>
  );
};

export default Loader;
