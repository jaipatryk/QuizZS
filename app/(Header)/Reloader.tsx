"use client";

import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

function Reloader() {
  const session = useSelector((state: RootState) => state.session);

  return (
    <>
      <p className="absolute opacity-0">{session.session}</p>
    </>
  );
}

export default Reloader;
