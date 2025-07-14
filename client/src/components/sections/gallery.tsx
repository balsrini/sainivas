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
    url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
    alt: "SaiNivas Building Exterior"
  },
  {
    url: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00",
    alt: "Main Entrance & Lobby"
  },
  {
    url: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf",
    alt: "Swimming Pool & Recreation Area"
  },
  {
    url: "https://images.unsplash.com/photo-1571939228382-b2f2b585ce15",
    alt: "Fitness Center"
  },
  {
    url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
    alt: "Rooftop Garden & Terrace"
  },
  {
    url: "https://images.unsplash.com/photo-1551632811-561732d1e306",
    alt: "Community Lounge"
  },
  {
    url: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136",
    alt: "Parking & Security"
  },
  {
    url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64",
    alt: "Building Courtyard"
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
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            SaiNivas Building Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our premium apartment building featuring world-class amenities, 
            elegant architecture, and beautiful common spaces designed for modern living.
          </p>
        </div>
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