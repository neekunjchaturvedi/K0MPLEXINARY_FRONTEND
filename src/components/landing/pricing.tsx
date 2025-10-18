import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

// Data for the pricing plans
const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/ month",
    description: "For individuals and small projects getting started.",
    features: [
      "1 Project",
      "Basic Analytics",
      "10 GB Storage",
      "Community Support",
    ],
    buttonText: "Get Started",
    isFeatured: false,
  },
  {
    name: "Premium",
    price: "$19",
    period: "/ month",
    description: "For growing teams and businesses that need more power.",
    features: [
      "Unlimited Projects",
      "Advanced Analytics",
      "100 GB Storage",
      "Priority Email Support",
      "API Access",
    ],
    buttonText: "Upgrade Now",
    isFeatured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations with custom needs.",
    features: [
      "Everything in Premium",
      "Dedicated Infrastructure",
      "Custom Integrations",
      "24/7 Phone Support",
      "SLA & SSO",
    ],
    buttonText: "Contact Sales",
    isFeatured: false,
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-20 px-6 bg-black">
      <div className="container mx-auto">
        {/* --- Section Header --- */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that's right for you. No hidden fees, ever.
          </p>
        </div>

        {/* --- Pricing Cards Grid --- */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative flex flex-col h-full border-border hover:-translate-y-2 transition-transform duration-300 animate-fade-in bg-black${
                plan.isFeatured
                  ? "border-primary shadow-lg scale-105 bg-black"
                  : "bg-black"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {plan.isFeatured && (
                <div className="absolute top-0 -translate-y-1/2 w-full flex justify-center ">
                  <span className="bg-primary text-primary-foreground px-4 py-1 text-sm font-semibold rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <CardHeader className="pt-10">
                <CardTitle className="text-2xl font-semibold mb-2 text-white">
                  {plan.name}
                </CardTitle>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold tracking-tight text-white">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="ml-1 text-muted-foreground">
                      {plan.period}
                    </span>
                  )}
                </div>
                <p className="text-muted-foreground pt-2">{plan.description}</p>
              </CardHeader>

              <CardContent className="flex-grow flex flex-col">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full mt-auto "
                  variant={plan.isFeatured ? "secondary" : "secondary"}
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
