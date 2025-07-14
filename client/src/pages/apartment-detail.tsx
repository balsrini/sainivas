import { useParams, useLocation } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import FlatGallery from "@/components/ui/flat-gallery";
import NavHeader from "@/components/nav-header";
import { ArrowLeft, Bed, Bath, Square, MapPin } from "lucide-react";
import type { Flat } from "@shared/schema";

export default function ApartmentDetail() {
  const { id } = useParams<{ id: string }>();
  const [, setLocation] = useLocation();
  
  const { data: flat, isLoading, error } = useQuery<Flat>({
    queryKey: ["/api/flats", id],
    queryFn: async () => {
      const response = await fetch(`/api/flats/${id}`);
      if (!response.ok) {
        throw new Error('Apartment not found');
      }
      return response.json();
    },
  });

  const handleInquire = () => {
    setLocation("/#contact");
  };

  const goBack = () => {
    setLocation("/");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <NavHeader />
        <div className="container mx-auto px-4 py-8 pt-24">
          <div className="animate-pulse">
            <div className="h-8 bg-muted rounded w-32 mb-8"></div>
            <div className="h-96 bg-muted rounded mb-8"></div>
            <div className="h-8 bg-muted rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-muted rounded w-1/2 mb-8"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !flat) {
    return (
      <div className="min-h-screen bg-background">
        <NavHeader />
        <div className="container mx-auto px-4 py-8 pt-24">
          <Button onClick={goBack} variant="ghost" className="mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Listings
          </Button>
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Apartment Not Found</h1>
            <p className="text-muted-foreground">The apartment you're looking for doesn't exist.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <NavHeader />
      <div className="container mx-auto px-4 py-8 pt-24">
        <Button onClick={goBack} variant="ghost" className="mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Listings
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Gallery Section */}
          <div className="space-y-6">
            <div className="h-96 lg:h-[500px]">
              <FlatGallery images={flat.images} title={flat.title} />
            </div>
          </div>

          {/* Details Section */}
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-start mb-4">
                <h1 className="text-3xl font-bold">{flat.title}</h1>
                <Badge variant="secondary" className="text-xl font-semibold px-4 py-2">
                  {flat.price}
                </Badge>
              </div>
              <p className="text-lg text-muted-foreground mb-6">
                {flat.description}
              </p>
            </div>

            {/* Specifications */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Specifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div className="flex flex-col items-center space-y-2">
                    <Bed className="h-8 w-8 text-primary" />
                    <div>
                      <div className="text-2xl font-bold">{flat.bedrooms}</div>
                      <div className="text-sm text-muted-foreground">
                        Bedroom{flat.bedrooms !== 1 ? 's' : ''}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <Bath className="h-8 w-8 text-primary" />
                    <div>
                      <div className="text-2xl font-bold">{flat.bathrooms}</div>
                      <div className="text-sm text-muted-foreground">
                        Bathroom{flat.bathrooms !== 1 ? 's' : ''}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <Square className="h-8 w-8 text-primary" />
                    <div>
                      <div className="text-2xl font-bold">{flat.area.split(' ')[0]}</div>
                      <div className="text-sm text-muted-foreground">
                        {flat.area.split(' ').slice(1).join(' ')}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Features */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Features & Amenities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {flat.features.map((feature, index) => (
                    <Badge key={index} variant="outline" className="justify-start py-2">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact Action */}
            <div className="space-y-4">
              <Button onClick={handleInquire} size="lg" className="w-full">
                Inquire About This Apartment
              </Button>
              <p className="text-sm text-muted-foreground text-center">
                Ready to make this your new home? Get in touch with us for more information 
                about availability, viewing appointments, and lease terms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}