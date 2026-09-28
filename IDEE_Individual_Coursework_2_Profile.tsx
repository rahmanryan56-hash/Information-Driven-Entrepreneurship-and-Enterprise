import { useNavigate } from "react-router";
import { ArrowLeft, MapPin, Link as LinkIcon, Calendar, Settings } from "lucide-react";

export function Profile() {
  const navigate = useNavigate();

  const stats = [
    { label: "Friends", value: "24" },
    { label: "Posts", value: "127" },
    { label: "Joined", value: "2024" },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="px-6 py-4 border-b border-border bg-card flex items-center justify-between">
        <button onClick={() => navigate("/home")} className="p-2 -ml-2">
          <ArrowLeft className="w-6 h-6 text-foreground" />
        </button>
        <h2 className="text-foreground">Profile</h2>
        <button onClick={() => navigate("/settings")} className="p-2 -mr-2">
          <Settings className="w-6 h-6 text-foreground" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="px-6 py-8">
          <div className="flex flex-col items-center mb-6">
            <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-4">
              <span className="text-3xl text-foreground">JD</span>
            </div>
            <h1 className="text-2xl text-foreground mb-1">Jane Doe</h1>
            <p className="text-muted-foreground mb-4">@janedoe</p>

            <div className="flex gap-3 mb-6">
              <button className="bg-primary text-white px-6 py-2 rounded-xl transition-opacity hover:opacity-90">
                Edit profile
              </button>
              <button className="bg-muted text-foreground px-6 py-2 rounded-xl transition-colors hover:bg-accent">
                Share
              </button>
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl p-5 mb-6">
            <p className="text-foreground leading-relaxed mb-4">
              Designer and coffee enthusiast. Passionate about building meaningful connections and enjoying the small moments in life.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <LinkIcon className="w-4 h-4" />
                <span className="text-primary">janedoe.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span>Joined January 2024</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 mb-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-4 text-center"
              >
                <p className="text-2xl text-foreground mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="bg-secondary rounded-xl p-4">
            <h3 className="text-foreground mb-2">Wellbeing insights</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Avg. daily usage</span>
                <span className="text-foreground">18 min</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Posts this week</span>
                <span className="text-foreground">3 of 14</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Screen-free days</span>
                <span className="text-foreground">2 this month</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              You're doing great! Your usage is 40% below average.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
