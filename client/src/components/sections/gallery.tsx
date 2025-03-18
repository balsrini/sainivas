import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";

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
  return (
    <section id="gallery" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Gallery
        </h2>
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <AspectRatio ratio={16 / 9}>
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="rounded-lg object-cover w-full h-full"
                  />
                </AspectRatio>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
