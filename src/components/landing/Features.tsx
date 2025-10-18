  import { Card, CardContent } from "@/components/ui/card";
  import { Upload, Zap, Shield, Globe } from "lucide-react";

  const features = [
    {
      icon: Upload,
      title: "Easy Upload",
      description:
        "Drag and drop your media files or upload via API. Support for all major formats.",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description:
        "Optimized delivery with global CDN. Your media loads instantly, anywhere.",
    },
    {
      icon: Shield,
      title: "Secure Storage",
      description:
        "Enterprise-grade security with encryption at rest and in transit.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description:
        "Deliver content worldwide with automatic optimization and caching.",
    },
  ];

  export const Features = () => {
    return (
      <section id="features" className="py-20 px-6 bg-black">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Everything You Need
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powerful features to manage and deliver your media at scale
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-gray-900 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in bg-black"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-6 text-center">
                  <feature.icon className="h-12 w-12 mb-4 text-white mx-auto" />
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  };
