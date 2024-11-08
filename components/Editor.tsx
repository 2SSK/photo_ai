"use client";
import React from "react";
import Layers from "./layers/layers";
import ActiveImage from "./active-image";
import UploadForm from "./upload/upload-form";
import { ModeToggle } from "@/components/theme/mode-toggle";
import { useLayerStore } from "@/lib/layer-store";
import ImageTools from "./toolbar/image-toolbar";

const Editor = () => {
  const activeLayer = useLayerStore((state) => state.activeLayer);

  return (
    <div className="h-full flex">
      <div className="px-4 py-6 basis-[240px] shrink-0">
        <div className="pb-12 text-center cursor-pointer">
          <ModeToggle />
        </div>
        <div className="flex flex-col gap-4">
          {activeLayer.resourceType === "image" ? <ImageTools /> : null}
        </div>
      </div>
      <UploadForm />
      <ActiveImage />
      <Layers />
    </div>
  );
};

export default Editor;
