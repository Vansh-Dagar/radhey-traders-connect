import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Target, Eye, Award, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To provide superior quality construction materials at competitive prices while ensuring excellent customer service and timely delivery.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "To become the most trusted and preferred supplier of construction materials across the region, known for reliability and excellence.",
    },
    {
      icon: Award,
      title: "Quality Commitment",
      description: "We are committed to sourcing and delivering only the finest materials that meet stringent quality standards and industry certifications.",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Building lasting relationships with our customers through personalized service, expert guidance, and consistent product quality.",
    },
  ];

  const stats = [
    { number: "500+", label: "Satisfied Customers" },
    { number: "6", label: "Product Categories" },
    { number: "10+", label: "Years Experience" },
    { number: "99%", label: "On-Time Delivery" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            About Radhey Traders
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto animate-fade-in-up">
            Your trusted partner in quality construction materials for over a decade
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Radhey Traders was founded with a simple yet powerful vision: to make premium 
                  quality construction materials accessible to everyone, from individual customers 
                  to large retail stores.
                </p>
                <p>
                  Over the years, we have built a reputation for reliability, quality, and 
                  exceptional customer service. Our extensive product range includes Mica sheets, 
                  Masking Tape, Edge Band Tape, Plyboard, Panels, and Louvers - all carefully 
                  selected to meet the diverse needs of our customers.
                </p>
                <p>
                  Today, we stand as a trusted name in the industry, committed to delivering 
                  not just products, but complete solutions for all your construction and 
                  furnishing requirements.
                </p>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80"
                alt="Our warehouse facility"
                className="rounded-lg shadow-primary w-full"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/20 rounded-lg -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Values & Commitments
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-lg border-2 border-border hover:border-accent hover:shadow-lg transition-all animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-semibold text-primary mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Kumar",
                role: "Furniture Manufacturer",
                content: "Excellent quality products and prompt delivery. Radhey Traders has been our go-to supplier for the past 5 years. Highly recommended!",
              },
              {
                name: "Priya Sharma",
                role: "Interior Designer",
                content: "Their mica sheets and edge banding collection is impressive. The quality is consistent and the prices are very competitive.",
              },
              {
                name: "Amit Patel",
                role: "Retail Store Owner",
                content: "Professional service and genuine products. They always have stock available and their delivery is always on time.",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-all animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-semibold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold text-primary">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-muted-foreground italic leading-relaxed">
                  "{testimonial.content}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
