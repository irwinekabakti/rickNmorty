import { useQuery } from "@apollo/client";
import { useNavigate, useParams } from "react-router-dom";
import { Character } from "../../helper/types";
import { GET_CHARACTER_DETAIL } from "../../graphql/queries";
import AsyncHandler from "../../components/Handler/AsyncHandler";
import { formatError } from "../../utils/utils";
import CharacterInfo from "../../components/Info/CharacterInfo";
import { Button, Grid } from "@mui/material";

interface QueryData {
  character: Character;
}

const Detailpage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { loading, data, error } = useQuery<QueryData>(GET_CHARACTER_DETAIL, {
    variables: { id },
  });

  const handlerButtonBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="page">
        <Button className="my-md" variant="text" onClick={handlerButtonBack}>
          Go back
        </Button>

        <AsyncHandler loading={loading} error={formatError(error)}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <img src={data?.character?.image} />
            </Grid>
            <Grid item xs={12} md={6}>
              <CharacterInfo
                sx={{ mb: 2 }}
                text="Name"
                data={data?.character?.name}
                isLast={false}
              />
              <CharacterInfo
                sx={{ my: 2 }}
                text="Gender"
                data={data?.character?.gender}
                isLast={false}
              />
              <CharacterInfo
                sx={{ my: 2 }}
                text="Type"
                data={data?.character?.type}
                isLast={false}
              />
              <CharacterInfo
                sx={{ my: 2 }}
                text="Species"
                data={data?.character?.species}
                isLast={false}
              />
              <CharacterInfo
                sx={{ mt: 2 }}
                text="Status"
                data={data?.character?.status}
                isLast={true}
              />
            </Grid>
          </Grid>
        </AsyncHandler>
      </div>
    </>
  );
};

export default Detailpage;
