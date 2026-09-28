import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronLeft, Mail, Lock, Shield } from "lucide-react";

export function Login() {
  const navigate = useNavigate();
  const [step, setStep] = useState<"credentials" | "2fa">("credentials");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");

  const handleLogin = () => {
    if (step === "credentials") {
      setStep("2fa");
    } else {
      navigate("/home");
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="px-6 py-4 border-b border-border flex items-center">
        <button onClick={() => step === "credentials" ? navigate("/") : setStep("credentials")} className="p-2 -ml-2">
          <ChevronLeft className="w-6 h-6 text-foreground" />
        </button>
      </div>

      <div className="flex-1 px-6 py-8 flex flex-col justify-center">
        <div className="max-w-md mx-auto w-full">
          {step === "credentials" ? (
            <>
              <h1 className="text-3xl text-foreground mb-2">
                Welcome back
              </h1>
              <p className="text-muted-foreground mb-8">
                Sign in to continue to Link.ly
              </p>

              <div className="space-y-4">
                <div>
                  <label className="text-sm text-foreground mb-2 block">Email address</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="w-full bg-input-background border border-border rounded-2xl pl-12 pr-4 py-4 outline-none focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm text-foreground mb-2 block">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      className="w-full bg-input-background border border-border rounded-2xl pl-12 pr-4 py-4 outline-none focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <button className="text-sm text-primary">
                  Forgot password?
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h1 className="text-3xl text-foreground mb-2 text-center">
                Two-factor authentication
              </h1>
              <p className="text-muted-foreground mb-8 text-center">
                Enter the 6-digit code from your authenticator app
              </p>

              <div className="space-y-4">
                <div>
                  <label className="text-sm text-foreground mb-2 block">Authentication code</label>
                  <input
                    type="text"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="000000"
                    className="w-full bg-input-background border border-border rounded-2xl px-4 py-4 text-center text-2xl tracking-widest outline-none focus:border-primary transition-colors"
                    maxLength={6}
                  />
                </div>

                <div className="bg-secondary rounded-xl p-4">
                  <p className="text-sm text-muted-foreground text-center">
                    Don't have access to your authenticator?{" "}
                    <button className="text-primary">Use backup code</button>
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="px-6 pb-8">
        <button
          onClick={handleLogin}
          className="w-full bg-primary text-white py-4 rounded-2xl transition-opacity hover:opacity-90"
        >
          {step === "credentials" ? "Continue" : "Verify and sign in"}
        </button>
      </div>
    </div>
  );
}
