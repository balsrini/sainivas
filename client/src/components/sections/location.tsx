import { AspectRatio } from "@/components/ui/aspect-ratio";
import { MapPin, Clock, Phone } from "lucide-react";

export default function Location() {
  return (
    <section id="location" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Location
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <AspectRatio ratio={4/3}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9914406081493!2d2.2922926156744947!3d48.858370079287466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sus!4v1647834456695!5m2!1sen!2sus"
                className="w-full h-full rounded-lg"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </AspectRatio>
          </div>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold mb-2">Address</h3>
                <p className="text-muted-foreground">
                  123 Luxury Lane<br />
                  City Center, 10001
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold mb-2">Reception Hours</h3>
                <p className="text-muted-foreground">
                  24/7 Front Desk Service
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold mb-2">Contact</h3>
                <p className="text-muted-foreground">
                  +1 (555) 123-4567
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
