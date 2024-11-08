"use client";

import { useState } from "react";

// import { cn } from "@/lib/utils";
// import { Card, CardContent } from "../ui/card";
import { useLayerStore } from "@/lib/layer-store";

import UploadImage from "./UploadImage";

export default function UploadForm() {
  const activeLayer = useLayerStore((state) => state.activeLayer);
  const [selectedType, setSelectedType] = useState("image");

  if (!activeLayer.url) {
    return (
      <div className="w-full h-full p-24 flex flex-col justify-center">
        {selectedType === "image" ? <UploadImage /> : null}
      </div>
    );
  }
}
