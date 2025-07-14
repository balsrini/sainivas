import { Button } from "@/components/ui/button";

export default function NavHeader() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <h1 className="text-xl font-bold">SaiNivas</h1>
        <div className="hidden md:flex gap-6">
          <Button variant="ghost" onClick={() => scrollToSection("gallery")}>Gallery</Button>
          <Button variant="ghost" onClick={() => scrollToSection("amenities")}>Amenities</Button>
          <Button variant="ghost" onClick={() => scrollToSection("location")}>Location</Button>
          <Button onClick={() => scrollToSection("contact")}>Contact Us</Button>
        </div>
      </nav>
    </header>
  );
}
