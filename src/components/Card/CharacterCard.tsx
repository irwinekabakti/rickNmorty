import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { MiniCharacter } from "../../helper/types";

interface Props {
  character: MiniCharacter;
}

const CharacterCard = ({ character }: Props) => {
  return (
    <>
      <Link to={`/detail/${character.id}`}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            loading="lazy"
            image={character.image}
            title={character.name}
          />
          <CardContent>
            <Typography variant="h5" component="div">
              {character.name}
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </>
  );
};

export default CharacterCard;
