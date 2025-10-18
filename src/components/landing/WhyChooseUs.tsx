import { Check } from "lucide-react";

const benefits = [
  "No storage limits on premium plans",
  "99.99% uptime guarantee",
  "Advanced image and video transformations",
  "Real-time analytics and insights",
  "Developer-friendly API and SDKs",
  "24/7 expert support",
];

export const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose CloudVault?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              We're not just another cloud storage provider. We're a complete
              media management solution built for performance and scale.
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="rounded-full bg-primary p-1 mt-0.5">
                    <Check className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <span className="text-lg">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="border-gray-900 border rounded-2xl p-12 animate-scale-in text-center w-full">
            <div className="space-y-8">
              <div>
                <div className="text-5xl font-bold mb-2">500K+</div>
                <div className="text-muted-foreground">Active Users</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">10B+</div>
                <div className="text-muted-foreground">Media Files Served</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">99.99%</div>
                <div className="text-muted-foreground">Uptime SLA</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
