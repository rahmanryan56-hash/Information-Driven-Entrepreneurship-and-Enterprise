import { useState } from "react";
import { useNavigate } from "react-router";
import { Plus, MessageCircle, Bell, User, Users, Calendar, Settings as SettingsIcon, Heart, MessageSquare, Sparkles } from "lucide-react";

export function HomeFeed() {
  const navigate = useNavigate();
  const [showCaughtUp, setShowCaughtUp] = useState(false);

  const posts = [
    {
      id: 1,
      author: "Sarah Chen",
      time: "2 hours ago",
      content: "Just finished a great hike in the mountains. The fresh air really helps clear the mind!",
      likes: 12,
      comments: 3,
    },
    {
      id: 2,
      author: "Marcus Johnson",
      time: "5 hours ago",
      content: "Made my grandmother's recipe for the first time. It turned out perfect and brought back so many memories.",
      likes: 24,
      comments: 7,
    },
    {
      id: 3,
      author: "Emma Rodriguez",
      time: "1 day ago",
      content: "Finally reading that book everyone recommended. Should have started it sooner!",
      likes: 8,
      comments: 2,
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="px-6 py-4 border-b border-border bg-card">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl text-foreground">Link.ly</h1>
          <div className="flex items-center gap-2">
            <button onClick={() => navigate("/notifications")} className="p-2 rounded-full hover:bg-muted transition-colors relative">
              <Bell className="w-6 h-6 text-foreground" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
            </button>
            <button onClick={() => navigate("/profile")} className="p-2 rounded-full hover:bg-muted transition-colors">
              <User className="w-6 h-6 text-foreground" />
            </button>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">
          Chronological feed · Friends only
        </p>
      </div>

      <div className="flex-1 overflow-y-auto pb-24">
        <div className="px-6 py-4 space-y-4">
          {posts.map((post) => (
            <div key={post.id} className="bg-card rounded-2xl p-5 border border-border">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-foreground">{post.author}</h3>
                  <p className="text-sm text-muted-foreground">{post.time}</p>
                </div>
              </div>
              <p className="text-foreground leading-relaxed mb-4">{post.content}</p>
              <div className="flex items-center gap-6">
                <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <Heart className="w-5 h-5" />
                  <span className="text-sm">{post.likes}</span>
                </button>
                <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <MessageSquare className="w-5 h-5" />
                  <span className="text-sm">{post.comments}</span>
                </button>
              </div>
            </div>
          ))}

          <div className="bg-secondary rounded-2xl p-8 text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-foreground mb-2">You're all caught up</h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
              You've seen all posts from your friends. Take a break and enjoy your day!
            </p>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border px-6 py-3 flex items-center justify-around">
        <button onClick={() => navigate("/home")} className="flex flex-col items-center gap-1 text-primary">
          <Calendar className="w-6 h-6" />
          <span className="text-xs">Feed</span>
        </button>
        <button onClick={() => navigate("/friends")} className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
          <Users className="w-6 h-6" />
          <span className="text-xs">Friends</span>
        </button>
        <button
          onClick={() => navigate("/create")}
          className="w-14 h-14 bg-primary rounded-full flex items-center justify-center -mt-6 shadow-lg"
        >
          <Plus className="w-7 h-7 text-white" />
        </button>
        <button onClick={() => navigate("/messages")} className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
          <MessageCircle className="w-6 h-6" />
          <span className="text-xs">Messages</span>
        </button>
        <button onClick={() => navigate("/settings")} className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
          <SettingsIcon className="w-6 h-6" />
          <span className="text-xs">Settings</span>
        </button>
      </div>
    </div>
  );
}
