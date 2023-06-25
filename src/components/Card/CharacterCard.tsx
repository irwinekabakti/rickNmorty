import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import testImg from "../../assets/react.svg";

// interface Props {
//   character:
// }

const CharacterCard = () => {
  return (
    <>
      <Link to="/">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            loading="lazy"
            image={testImg}
            title="test image"
          />
          <CardContent>
            <Typography variant="h5" component="div">
              test
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </>
  );
};

export default CharacterCard;
