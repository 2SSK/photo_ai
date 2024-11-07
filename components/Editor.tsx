"use client";
import React from "react";
import Layers from "./layers/layers";
import ActiveImage from "./active-image";
import UploadImage from "./upload/UploadImage";
import { ModeToggle } from "@/components/theme/mode-toggle";

const Editor = () => {
  return (
    <div className="h-full flex">
      <div className="px-4 py-6 basis-[240px] shrink-0">
        <div className="pb-12 text-center">
          <ModeToggle />
        </div>
      </div>
      <UploadImage />
      <ActiveImage />
      <Layers />
    </div>
  );
};

export default Editor;
