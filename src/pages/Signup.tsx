import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Cloud, Github } from "lucide-react"; // Or your own logo
import { toast } from "sonner";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await signup(email, password, name);
      toast.success("Account created successfully!");
      navigate("/dashboard");
    } catch (error) {
      toast.error("Failed to create account. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen lg:grid lg:grid-cols-2">
      {/* --- Left Branding Column --- */}
      <div className="hidden bg-muted lg:flex flex-col items-center justify-center p-8 text-center border-r">
        <Cloud className="h-20 w-20 mb-4 text-black" />
        <h1 className="text-4xl font-bold tracking-tighter text-black">
          K0MPLEXINARY
        </h1>
        <p className="text-muted-foreground mt-2 max-w-sm">
          Your secure and elegant solution for cloud infrastructure management.
        </p>
      </div>

      {/* --- Right Form Column --- */}
      <div className="flex items-center justify-center py-12 px-6">
        <div className="mx-auto grid w-[380px] gap-6">
          <div className="flex flex-col justify-center items-center md:hidden">
            <Cloud className="h-10 w-10" />
            <h1 className="text-xl font-bold tracking-tighter">K0MPLEXINARY</h1>
          </div>
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Create an account</h1>
            <p className="text-balance text-muted-foreground">
              Enter your information to get started
            </p>
          </div>
          <form onSubmit={handleSubmit} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="full-name">Full Name</Label>
              <Input
                id="full-name"
                type="text"
                placeholder="John Doe"
                className="border-gray-600 rounded"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                disabled={loading}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                className="border-gray-600 rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                className="border-gray-600 rounded"
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={loading}
              />
              <p className="text-xs text-muted-foreground px-1">
                Password must be at least 8 characters.
              </p>
            </div>
            <Button
              type="submit"
              className="w-full border-white border rounded"
              disabled={loading}
            >
              {loading ? "Creating Account..." : "Create Account"}
            </Button>
            <Button
              variant="outline"
              className="w-full rounded"
              disabled={loading}
            >
              <Github className="mr-2 h-4 w-4" />
              Sign up with GitHub
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link to="/login" className="underline font-semibold">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
