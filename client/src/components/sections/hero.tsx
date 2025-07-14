import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="pt-16 min-h-screen relative flex items-center">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1489269637500-aa0e75768394"
          alt="Luxury Apartment Interior"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Discover Your Perfect Apartment
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Choose from our collection of 9 premium apartments, each featuring modern amenities, 
            stylish interiors, and exceptional comfort for your next home.
          </p>
          <Button size="lg" onClick={scrollToContact}>
            Make an Inquiry
          </Button>
        </div>
      </div>
    </section>
  );
}