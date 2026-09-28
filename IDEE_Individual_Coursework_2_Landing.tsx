import { useNavigate } from "react-router";
import { Heart, Users, Clock } from "lucide-react";

export function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8fafc] to-[#e8f0f7] flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
          <Heart className="w-8 h-8 text-white" />
        </div>

        <h1 className="text-4xl tracking-tight text-foreground mb-3 text-center">
          Link.ly
        </h1>

        <p className="text-xl text-muted-foreground mb-4 text-center max-w-sm">
          Real connection, no noise
        </p>

        <div className="space-y-4 my-12 max-w-md">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
              <Users className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="text-foreground mb-1">Friends only</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                No public posts, no strangers. Just your real connections.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
              <Clock className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="text-foreground mb-1">Chronological feed</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                No algorithm. See what matters, in the order it happened.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
              <Heart className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="text-foreground mb-1">Built for wellbeing</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Designed to reduce screen time, not increase it.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 pb-8 space-y-3">
        <button
          onClick={() => navigate("/signup")}
          className="w-full bg-primary text-white py-4 rounded-2xl transition-opacity hover:opacity-90"
        >
          Get started
        </button>
        <button
          onClick={() => navigate("/login")}
          className="w-full bg-transparent text-foreground py-4 rounded-2xl border border-border transition-colors hover:bg-muted"
        >
          I already have an account
        </button>
      </div>
    </div>
  );
}
