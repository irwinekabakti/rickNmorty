import React from "react";
import { Alert } from "@mui/material";
import Loader from "../Loader/Loader";

interface Props {
  children: React.ReactNode;
  error: string | undefined;
  loading: boolean;
}

const AsyncHandler = ({ children, error, loading }: Props) => {
  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Alert severity="error">{error}</Alert>;
  }

  return <div className="my-md">{children}</div>;
};

export default AsyncHandler;
