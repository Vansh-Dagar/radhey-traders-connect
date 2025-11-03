import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";

const Products = () => {
  const products = [
    {
      title: "Mica Sheets",
      description: "Premium quality decorative mica sheets available in various colors and finishes for furniture and interior applications",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      features: [
        "Heat and scratch resistant",
        "Wide range of colors and textures",
        "Easy to clean and maintain",
        "Perfect for furniture lamination",
      ],
    },
    {
      title: "Masking Tape",
      description: "Professional-grade masking tape ideal for painting, finishing work, and various industrial applications",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
      features: [
        "Clean removal without residue",
        "Strong adhesion on multiple surfaces",
        "Available in various widths",
        "Temperature resistant",
      ],
    },
    {
      title: "Edge Band Tape",
      description: "High-quality edge banding tape for furniture finishing with excellent adhesion and durability",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      features: [
        "Pre-glued for easy application",
        "Matches various mica colors",
        "Smooth and seamless finish",
        "Durable and long-lasting",
      ],
    },
    {
      title: "Plyboard",
      description: "Superior quality plywood boards suitable for construction, furniture making, and interior design projects",
      image: "https://images.unsplash.com/photo-1615875474908-a2e5e49b9b0c?w=800&q=80",
      features: [
        "Boiling water resistant (BWR & BWP grade)",
        "Termite and borer proof",
        "Uniform thickness and density",
        "ISI certified quality",
      ],
    },
    {
      title: "Decorative Panels",
      description: "Modern decorative panels for walls and ceilings, offering aesthetic appeal and functionality",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
      features: [
        "Lightweight and easy to install",
        "Moisture and fire resistant options",
        "Contemporary designs",
        "Low maintenance requirements",
      ],
    },
    {
      title: "Louvers",
      description: "Architectural louvers for ventilation and aesthetic enhancement of residential and commercial spaces",
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
      features: [
        "Excellent air circulation",
        "Weather resistant materials",
        "Multiple size options",
        "Easy installation and maintenance",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Our Products
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto animate-fade-in-up">
            Discover our comprehensive range of premium quality construction materials, 
            carefully selected to meet all your building and furnishing needs
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Choose Our Products?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We ensure every product meets the highest standards of quality and reliability
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Certified Quality",
                description: "All products meet industry standards and certifications",
              },
              {
                title: "Competitive Prices",
                description: "Best value for money without compromising quality",
              },
              {
                title: "Large Inventory",
                description: "Extensive stock ensuring immediate availability",
              },
              {
                title: "Expert Guidance",
                description: "Professional assistance in product selection",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-lg hover:shadow-lg transition-all animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-accent">{index + 1}</span>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
