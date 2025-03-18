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

const images = [
  {
    url: "https://images.unsplash.com/photo-1489269637500-aa0e75768394",
    alt: "Living Room"
  },
  {
    url: "https://images.unsplash.com/photo-1713832139686-42a1d84ad763",
    alt: "Bedroom"
  },
  {
    url: "https://images.unsplash.com/photo-1713832140683-127683601a67",
    alt: "Kitchen"
  },
  {
    url: "https://images.unsplash.com/photo-1713832139677-7fefa9ee3df0",
    alt: "Bathroom"
  },
  {
    url: "https://images.unsplash.com/photo-1713832139677-a03a41b602e3",
    alt: "Dining Area"
  },
  {
    url: "https://images.unsplash.com/photo-1713832139688-79676097edde",
    alt: "Study"
  }
];

export default function Gallery() {
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
    <section id="gallery" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Gallery
        </h2>
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index} className="cursor-pointer" onClick={() => handleImageClick(index)}>
                <AspectRatio ratio={16 / 9}>
                  <img
                    src={image.url}
                    alt={image.alt}
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
                  src={images[activeImage].url}
                  alt={images[activeImage].alt}
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
      </div>
    </section>
  );
}