import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { AlertCircle, Eye, EyeOff, LogIn } from "lucide-react";
import logo from "@/assets/herpath-logo.png";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email.trim() || !email.includes("@")) { setError("Please enter a valid email."); return; }
    if (!password) { setError("Please enter your password."); return; }
    navigate("/profile");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-28 pb-20 flex items-center justify-center">
        <div className="w-full max-w-md px-6">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-2 mb-4">
              <img src={logo} alt="HerPath" className="h-14 w-14 dark:invert" />
            </div>
            <h1 className="font-display text-3xl font-bold text-foreground mb-2">Welcome Back</h1>
            <p className="text-muted-foreground font-body text-sm">Log in to continue your career journey.</p>
          </div>

          {error && (
            <div className="flex items-center gap-2 p-4 mb-6 rounded-2xl bg-destructive/10 border border-destructive/20 text-destructive text-sm font-body">
              <AlertCircle className="h-4 w-4 flex-shrink-0" />
              {error}
            </div>
          )}

          <div className="compass-card space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-body font-medium text-foreground">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setError(""); }}
                placeholder="you@example.com"
                className="w-full h-12 rounded-2xl border border-input bg-background px-4 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-body font-medium text-foreground">Password</label>
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); setError(""); }}
                  placeholder="Enter your password"
                  className="w-full h-12 rounded-2xl border border-input bg-background px-4 pr-12 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                  {showPass ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <Button variant="hero" size="xl" className="w-full" onClick={handleLogin}>
              <LogIn className="mr-2 h-4 w-4" /> Login
            </Button>

            <p className="text-center text-sm font-body text-muted-foreground">
              Don't have an account?{" "}
              <Link to="/signup" className="text-primary font-medium hover:underline">Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
