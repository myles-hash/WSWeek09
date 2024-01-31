"use client";
import PacmanLoader from "react-spinners/PacmanLoader";

export default function Loading() {
  return (
    <div className="center">
      <PacmanLoader loading={true} />
    </div>
  );
}