"use client";
import React from "react";
import Layers from "./layers/layers";
import UploadImage from "./upload/UploadImage";

const Editor = () => {
  return (
    <div className="h-full flex">
      <UploadImage />
      <Layers />
    </div>
  );
};

export default Editor;
