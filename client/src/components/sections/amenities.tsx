import { Card, CardContent } from "@/components/ui/card";
import { Wifi, Dumbbell, Coffee, Car } from "lucide-react";

const amenities = [
  {
    icon: <Wifi className="h-6 w-6" />,
    title: "High-Speed WiFi",
    description: "Stay connected with complimentary high-speed internet access"
  },
  {
    icon: <Dumbbell className="h-6 w-6" />,
    title: "Fitness Center",
    description: "24/7 access to our state-of-the-art fitness facility"
  },
  {
    icon: <Coffee className="h-6 w-6" />,
    title: "Café & Lounge",
    description: "Enjoy our premium coffee bar and relaxation areas"
  },
  {
    icon: <Car className="h-6 w-6" />,
    title: "Secure Parking",
    description: "Underground parking with 24/7 security surveillance"
  }
];

export default function Amenities() {
  return (
    <section id="amenities" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Amenities & Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-2 rounded-full bg-primary/10">
                    {amenity.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{amenity.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {amenity.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
