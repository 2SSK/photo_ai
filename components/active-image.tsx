import React from "react";
import { useImageStore } from "@/lib/image-store";
import { Layer, useLayerStore } from "@/lib/layer-store";
import Image from "next/image";
import { cn } from "@/lib/utils";

const ActiveImage = () => {
  const generating = useImageStore((state) => state.generating);
  const activeLayer = useLayerStore((state) => state.activeLayer);
  // const layers = useLayerStore((state) => state.layers);

  if (!activeLayer.url) return null;

  const renderLayer = (layer: Layer) => (
    <div>
      {layer.resourceType === "image" && (
        <Image
          src={layer.url!}
          alt={layer.name!}
          fill={true}
          className={cn(
            "rounded-lg object-contain",
            generating ? "animate-pulse" : "",
          )}
        />
      )}
      {layer.resourceType === "video" && (
        <video
          src={layer.transcriptionURL || layer.url}
          width={layer.width}
          height={layer.height}
          controls
          className="rounded-lg object-contain max-w-full max-h-full"
        />
      )}
    </div>
  );

  return (
    <div className="w-full relative h-svh p-24 bg-secondary flex flex-col items-center justify-center">
      {renderLayer(activeLayer)}
    </div>
  );
};

export default ActiveImage;
