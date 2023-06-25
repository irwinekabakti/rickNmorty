import { useState, useLayoutEffect, ChangeEvent } from "react";
import { useQuery } from "@apollo/client";
import { useParams, useNavigate } from "react-router-dom";
import CharacterCard from "../../components/Card/CharacterCard";
import "./Homepage.scss";

const Homepage = () => {
  return (
    <>
      <div>Homepage</div>
      <CharacterCard />
    </>
  );
};

export default Homepage;
