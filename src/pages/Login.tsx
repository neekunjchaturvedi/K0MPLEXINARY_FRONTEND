import { useState } from "react";
// We are using react-router-dom stubs since the full library is not available in this environment.
// In a real application, you would use the actual 'react-router-dom' library.
import { Link, useNavigate } from "react-router-dom";
// --- Mock AuthContext to resolve the compilation error ---
// In a real application, this would be in a separate file (e.g., src/contexts/AuthContext.js)
const mockAuth = {
  login: async (email, password) => {
    console.log("Attempting login with:", email);
    // Simulate network delay for a realistic loading state
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // Simulate a successful login for demonstration purposes
    if (email && password) {
      // In a real app, you would get a user object from your backend
      return { user: { id: "123", email: email } };
    }
    // Simulate a failed login if credentials are not provided
    throw new Error("Invalid credentials");
  },
};

// Custom hook to use the mock auth context
const useAuth = () => mockAuth;
// --- End Mock AuthContext ---

// Assuming these components are available from a UI library like shadcn/ui
const Button = ({ children, ...props }) => (
  <button {...props}>{children}</button>
);
const Input = (props) => <input {...props} />;
const Label = ({ children, ...props }) => <label {...props}>{children}</label>;

// Mock Lucide-React icons
const Cloud = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
  </svg>
);
const Github = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

// Mock sonner toast notifications
const toast = {
  success: (message) => console.log(`SUCCESS: ${message}`),
  error: (message) => console.error(`ERROR: ${message}`),
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await login(email, password);
      toast.success("Welcome back!");
      navigate("/dashboard");
    } catch (error) {
      toast.error("Invalid credentials. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen lg:grid lg:grid-cols-2 bg-background text-foreground">
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
            <h1 className="text-3xl font-bold">Welcome Back</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email below to log into your account
            </p>
          </div>
          <form onSubmit={handleSubmit} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
                className="bg-black border border-gray-800 outline-none rounded p-2 w-full"
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  to="/forgot-password"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={loading}
                className="bg-black border border-gray-800 outline-none rounded p-2 w-full"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-primary text-primary-foreground p-2 rounded border"
              disabled={loading}
            >
              {loading ? "Signing In..." : "Sign In"}
            </Button>
            <Button
              variant="outline"
              className="w-full flex items-center justify-center gap-2 border p-2 rounded"
              disabled={loading}
            >
              <Github className="h-4 w-4" />
              Login with GitHub
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link to="/signup" className="underline font-semibold">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
