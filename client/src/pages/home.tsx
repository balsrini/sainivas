import NavHeader from "@/components/nav-header";
import Hero from "@/components/sections/hero";
import Gallery from "@/components/sections/gallery";
import Amenities from "@/components/sections/amenities";
import Location from "@/components/sections/location";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <NavHeader />
      <main>
        <Hero />
        <Gallery />
        <Amenities />
        <Location />
        <Contact />
      </main>
    </div>
  );
}
