import { useState, useCallback } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ZoomIn, ZoomOut, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FlatGalleryProps {
  images: string[];
  title: string;
}

export default function FlatGallery({ images, title }: FlatGalleryProps) {
  const [activeImage, setActiveImage] = useState<number | null>(null);
  const [scale, setScale] = useState(1);

  const handleZoomIn = useCallback(() => {
    setScale(prev => Math.min(prev + 0.5, 3));
  }, []);

  const handleZoomOut = useCallback(() => {
    setScale(prev => Math.max(prev - 0.5, 1));
  }, []);

  const handleImageClick = useCallback((index: number) => {
    setActiveImage(index);
    setScale(1);
  }, []);

  const closeZoom = useCallback(() => {
    setActiveImage(null);
    setScale(1);
  }, []);

  return (
    <>
      <Carousel className="w-full">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="cursor-pointer" onClick={() => handleImageClick(index)}>
              <AspectRatio ratio={16 / 9}>
                <img
                  src={image}
                  alt={`${title} - Image ${index + 1}`}
                  className="rounded-lg object-cover w-full h-full hover:opacity-90 transition-opacity"
                />
              </AspectRatio>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      {/* Zoom overlay */}
      {activeImage !== null && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="absolute top-4 right-4 flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={handleZoomIn}
                disabled={scale >= 3}
              >
                <ZoomIn className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={handleZoomOut}
                disabled={scale <= 1}
              >
                <ZoomOut className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={closeZoom}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div 
              className="w-full h-full overflow-auto p-4"
              style={{
                cursor: scale > 1 ? "move" : "auto"
              }}
            >
              <img
                src={images[activeImage]}
                alt={`${title} - Image ${activeImage + 1}`}
                className="max-w-full max-h-full mx-auto transition-transform duration-200"
                style={{
                  transform: `scale(${scale})`,
                  transformOrigin: "center center"
                }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}