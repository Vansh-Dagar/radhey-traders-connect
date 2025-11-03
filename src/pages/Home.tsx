import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Truck, Shield, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import heroBanner from "@/assets/hero-banner.jpg";

const Home = () => {
  const featuredProducts = [
    {
      title: "Mica Sheets",
      description: "Premium quality decorative mica sheets for furniture and interiors",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      features: ["Durable finish", "Wide color range", "Easy to apply"],
    },
    {
      title: "Masking Tape",
      description: "High-quality masking tape for professional painting and finishing",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
      features: ["Clean removal", "Strong adhesion", "Multiple widths"],
    },
    {
      title: "Plyboard",
      description: "Strong and reliable plyboards for construction and furniture",
      image: "https://images.unsplash.com/photo-1615875474908-a2e5e49b9b0c?w=800&q=80",
      features: ["Moisture resistant", "Various grades", "Certified quality"],
    },
  ];

  const features = [
    {
      icon: Shield,
      title: "Quality Assured",
      description: "All products meet stringent quality standards",
    },
    {
      icon: Truck,
      title: "Timely Delivery",
      description: "Fast and reliable delivery to your doorstep",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Customer support whenever you need assistance",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[600px] md:min-h-[700px] flex items-center">
        <div className="absolute inset-0">
          <img
            src={heroBanner}
            alt="Quality construction materials"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/50" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Delivering Quality You Can{" "}
              <span className="text-accent">Trust</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Your premier source for Mica, Masking Tape, Edge Band Tape, Plyboard, Panels, and Louvers. 
              Serving individuals and retail stores with excellence since years.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products">
                <Button size="lg" className="bg-accent hover:bg-accent-light text-accent-foreground hover:shadow-gold transition-all group w-full sm:w-auto">
                  Explore Products
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all w-full sm:w-auto">
                  Get a Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-lg bg-card hover:shadow-lg transition-all animate-fade-in-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-primary">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                About Radhey Traders
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We are a trusted name in the construction materials industry, committed to 
                delivering premium quality products at competitive prices. Our extensive range 
                of materials serves both individual customers and retail stores.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Wide range of quality products",
                  "Competitive pricing",
                  "Reliable supply chain",
                  "Expert consultation",
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-foreground">
                    <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/about">
                <Button variant="outline" className="group hover:bg-primary hover:text-primary-foreground transition-all">
                  Learn More About Us
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
            <div className="relative animate-scale-in">
              <img
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80"
                alt="Our warehouse"
                className="rounded-lg shadow-primary w-full"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent rounded-lg opacity-20" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our selection of premium quality construction materials
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/products">
              <Button size="lg" className="bg-primary hover:bg-primary-light transition-all group">
                View All Products
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
            Ready to Get Started?
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto animate-fade-in-up">
            Contact us today for the best deals on quality construction materials
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-accent hover:bg-accent-light text-accent-foreground hover:shadow-gold transition-all animate-scale-in">
              Contact Us Now
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
