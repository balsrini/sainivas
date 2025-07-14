import { useQuery } from "@tanstack/react-query";
import { useLocation } from "wouter";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import FlatGallery from "@/components/ui/flat-gallery";
import { Bed, Bath, Square, MapPin } from "lucide-react";
import type { Flat } from "@shared/schema";

export default function FlatsListing() {
  const [, setLocation] = useLocation();
  const { data: flats, isLoading, error } = useQuery<Flat[]>({
    queryKey: ["/api/flats"],
  });

  const handleViewApartment = (flatId: number) => {
    setLocation(`/apartment/${flatId}`);
  };

  const handleInquire = (flatId: number, flatTitle: string) => {
    // Scroll to contact form and pre-fill with flat information
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      // You could also dispatch an event or use a state management solution
      // to pre-fill the contact form with flat-specific information
    }
  };

  if (isLoading) {
    return (
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Available Apartments
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(9)].map((_, i) => (
              <Card key={i} className="animate-pulse">
                <div className="h-48 bg-muted rounded-t-lg"></div>
                <CardHeader>
                  <div className="h-6 bg-muted rounded w-3/4"></div>
                  <div className="h-4 bg-muted rounded w-1/2"></div>
                </CardHeader>
                <CardContent>
                  <div className="h-16 bg-muted rounded"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Available Apartments
          </h2>
          <div className="text-center text-muted-foreground">
            Unable to load apartments. Please try again later.
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Available Apartments
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our collection of premium apartments, each featuring modern amenities 
            and stunning interiors designed for comfortable living.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {flats?.map((flat) => (
            <Card key={flat.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
              <div className="h-48" onClick={() => handleViewApartment(flat.id)}>
                <FlatGallery images={flat.images} title={flat.title} />
              </div>
              
              <CardHeader onClick={() => handleViewApartment(flat.id)}>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{flat.title}</CardTitle>
                  <Badge variant="secondary" className="text-lg font-semibold">
                    {flat.price}
                  </Badge>
                </div>
                <CardDescription className="text-sm">
                  {flat.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4" onClick={() => handleViewApartment(flat.id)}>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Bed className="h-4 w-4" />
                    <span>{flat.bedrooms} bed{flat.bedrooms !== 1 ? 's' : ''}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath className="h-4 w-4" />
                    <span>{flat.bathrooms} bath{flat.bathrooms !== 1 ? 's' : ''}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Square className="h-4 w-4" />
                    <span>{flat.area}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {flat.features.slice(0, 3).map((feature, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                  {flat.features.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{flat.features.length - 3} more
                    </Badge>
                  )}
                </div>
              </CardContent>
              
              <CardFooter className="flex flex-col space-y-2 p-6">
                <Button 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleViewApartment(flat.id);
                  }}
                  variant="outline"
                  className="w-full"
                >
                  View Gallery & Details
                </Button>
                <Button 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleInquire(flat.id, flat.title);
                  }}
                  className="w-full"
                >
                  Inquire About This Apartment
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}