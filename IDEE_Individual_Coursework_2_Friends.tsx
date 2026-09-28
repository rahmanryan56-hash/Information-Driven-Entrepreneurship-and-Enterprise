import { useState } from "react";
import { useNavigate } from "react-router";
import { ArrowLeft, Search, User, UserPlus, UserCheck } from "lucide-react";

export function Friends() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"friends" | "requests">("friends");

  const friends = [
    { id: 1, name: "Sarah Chen", mutualFriends: 12, status: "Active now" },
    { id: 2, name: "Marcus Johnson", mutualFriends: 8, status: "Active 2h ago" },
    { id: 3, name: "Emma Rodriguez", mutualFriends: 15, status: "Active 1d ago" },
    { id: 4, name: "James Wilson", mutualFriends: 6, status: "Active now" },
    { id: 5, name: "Olivia Martinez", mutualFriends: 10, status: "Active 3h ago" },
  ];

  const requests = [
    { id: 1, name: "Alex Thompson", mutualFriends: 5 },
    { id: 2, name: "Sofia Garcia", mutualFriends: 3 },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="px-6 py-4 border-b border-border bg-card">
        <div className="flex items-center justify-between mb-4">
          <button onClick={() => navigate("/home")} className="p-2 -ml-2">
            <ArrowLeft className="w-6 h-6 text-foreground" />
          </button>
          <h1 className="text-2xl text-foreground flex-1 text-center">Friends</h1>
          <div className="w-10"></div>
        </div>

        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setActiveTab("friends")}
            className={`flex-1 py-2 rounded-xl transition-colors ${
              activeTab === "friends"
                ? "bg-primary text-white"
                : "bg-muted text-muted-foreground"
            }`}
          >
            Friends ({friends.length})
          </button>
          <button
            onClick={() => setActiveTab("requests")}
            className={`flex-1 py-2 rounded-xl transition-colors relative ${
              activeTab === "requests"
                ? "bg-primary text-white"
                : "bg-muted text-muted-foreground"
            }`}
          >
            Requests ({requests.length})
            {requests.length > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-destructive text-white text-xs rounded-full flex items-center justify-center">
                {requests.length}
              </span>
            )}
          </button>
        </div>

        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search friends"
            className="w-full bg-input-background border border-border rounded-full pl-12 pr-4 py-3 outline-none focus:border-primary transition-colors"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {activeTab === "friends" ? (
          <div className="px-6 py-4 space-y-1">
            <div className="bg-secondary rounded-xl p-4 mb-4">
              <p className="text-sm text-muted-foreground text-center">
                You can only connect with mutual friends. All connections are private and friends-only.
              </p>
            </div>
            {friends.map((friend) => (
              <div
                key={friend.id}
                className="flex items-center gap-3 p-4 rounded-xl hover:bg-muted transition-colors"
              >
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-foreground mb-1">{friend.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {friend.mutualFriends} mutual friends · {friend.status}
                  </p>
                </div>
                <button className="p-2 rounded-full hover:bg-accent transition-colors">
                  <UserCheck className="w-5 h-5 text-primary" />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="px-6 py-4 space-y-3">
            {requests.map((request) => (
              <div
                key={request.id}
                className="bg-card border border-border rounded-2xl p-4"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-foreground mb-1">{request.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {request.mutualFriends} mutual friends
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 bg-primary text-white py-2 rounded-xl transition-opacity hover:opacity-90">
                    Accept
                  </button>
                  <button className="flex-1 bg-muted text-foreground py-2 rounded-xl transition-colors hover:bg-accent">
                    Decline
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
