import { Outlet } from "react-router-dom";
import Container from "../../components/Container/Container";
import { Typography } from "@mui/material";

const RootLayout = () => {
  return (
    <>
      <Container>
        <Typography className="title" variant="h4" component="h1">
          Rick and Morty characters
        </Typography>
        <div>
          <Outlet />
        </div>
      </Container>
    </>
  );
};

export default RootLayout;
