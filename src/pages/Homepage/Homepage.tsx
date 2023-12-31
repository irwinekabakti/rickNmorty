import { useQuery } from "@apollo/client";
import { useState, useLayoutEffect, ChangeEvent } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AsyncHandler from "../../components/Handler/AsyncHandler";
import { formatError } from "../../utils/utils";
import { GET_CHARACTERS } from "../../graphql/queries";
import { MiniCharacter } from "../../helper/types";
import CharacterCard from "../../components/Card/CharacterCard";
import { Pagination, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useDebounce } from "../../hooks/useDebounce";
import "./Homepage.scss";

interface QueryData {
  characters: {
    results: MiniCharacter[];
    info: {
      pages: number;
    };
  };
}

const Homepage = () => {
  const [filterName, setFilterName] = useState("");
  const navigate = useNavigate();
  const params = useParams();
  const debouncedFilterName = useDebounce(filterName, 500);

  useLayoutEffect(() => {
    if (debouncedFilterName) {
      navigate(`/1`);
    }
  }, [debouncedFilterName]);

  const page = Number(params.page) || 1;
  const { loading, error, data } = useQuery<QueryData>(GET_CHARACTERS, {
    variables: { page, name: debouncedFilterName },
  });

  const handlePageChange = (_event: any, page: number): void => {
    navigate(`/${page}`);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setFilterName(event.target.value);
  };

  return (
    <>
      <div className="page">
        <div className="search-input-container">
          <TextField
            label="search by name"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            variant="standard"
            value={filterName}
            onChange={handleNameChange}
          />
        </div>
        <AsyncHandler loading={loading} error={formatError(error)}>
          <>
            <div className="characters-grid">
              {data?.characters?.results?.map((character) => (
                <CharacterCard key={character?.id} character={character} />
              ))}
            </div>

            <Pagination
              className="pagination"
              count={data?.characters?.info?.pages}
              variant="outlined"
              color="primary"
              disabled={loading}
              page={page}
              onChange={handlePageChange}
            />
          </>
        </AsyncHandler>
      </div>
    </>
  );
};

export default Homepage;
