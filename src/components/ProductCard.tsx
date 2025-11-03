import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  features: string[];
}

const ProductCard = ({ title, description, image, features }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-primary transition-all duration-300 animate-fade-in-up border-2 hover:border-accent">
      <div className="relative overflow-hidden aspect-video">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <CardHeader>
        <CardTitle className="text-xl text-primary group-hover:text-accent transition-colors">
          {title}
        </CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 mr-2 flex-shrink-0" />
              <span className="text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Link to="/contact" className="w-full">
          <Button variant="outline" className="w-full group/btn hover:bg-primary hover:text-primary-foreground transition-all">
            Enquire Now
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
