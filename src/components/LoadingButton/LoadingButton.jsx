import React from "react";
import { CircularProgress } from "@mui/material";
import { Custombutton } from "../Button";
export const LoadingButton = ({ onClick, loading, label }) => {
  return (
    <Custombutton onClick={onClick} disabled={loading}>
      {loading && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            alignContent: "space-around",
          }}
        >
          <span style={{ color: "white" }}>{label}</span>{" "}
          <CircularProgress size={14} />
        </div>
      )}
      {!loading && label}
    </Custombutton>
  );
};
