import { useNavigate } from "react-router";
import { ArrowLeft, MapPin, Calendar, Users, ExternalLink } from "lucide-react";

export function LocalActivities() {
  const navigate = useNavigate();

  const activities = [
    {
      id: 1,
      title: "Community Yoga in the Park",
      location: "Central Park",
      date: "Tomorrow, 9:00 AM",
      attendees: 12,
      category: "Wellness",
    },
    {
      id: 2,
      title: "Local Farmers Market",
      location: "Downtown Square",
      date: "Saturday, 8:00 AM",
      attendees: 45,
      category: "Community",
    },
    {
      id: 3,
      title: "Book Club Meetup",
      location: "City Library",
      date: "Next Monday, 6:00 PM",
      attendees: 8,
      category: "Culture",
    },
    {
      id: 4,
      title: "Volunteer Day: Beach Cleanup",
      location: "Sunset Beach",
      date: "Sunday, 10:00 AM",
      attendees: 23,
      category: "Community",
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="px-6 py-4 border-b border-border bg-card">
        <div className="flex items-center justify-between mb-4">
          <button onClick={() => navigate("/home")} className="p-2 -ml-2">
            <ArrowLeft className="w-6 h-6 text-foreground" />
          </button>
          <h1 className="text-2xl text-foreground flex-1 text-center">Local Activities</h1>
          <div className="w-10"></div>
        </div>
        <p className="text-sm text-muted-foreground text-center">
          Discover real-world activities in your area
        </p>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-6">
        <div className="bg-secondary rounded-xl p-4 mb-6">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-foreground mb-1">Your location: San Francisco</p>
              <p className="text-xs text-muted-foreground">
                Activities are curated to encourage real-world connection, not more screen time.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="bg-card border border-border rounded-2xl p-5 hover:shadow-sm transition-shadow"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="inline-block bg-secondary text-primary text-xs px-3 py-1 rounded-full mb-2">
                    {activity.category}
                  </div>
                  <h3 className="text-foreground mb-2">{activity.title}</h3>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>{activity.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>{activity.date}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="w-4 h-4" />
                  <span>{activity.attendees} people interested</span>
                </div>
              </div>

              <button className="w-full bg-muted text-foreground py-3 rounded-xl hover:bg-accent transition-colors flex items-center justify-center gap-2">
                <span>View details</span>
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-6 bg-muted rounded-xl p-4">
          <p className="text-xs text-muted-foreground text-center leading-relaxed">
            Activities are sourced from verified local organizations and community groups. Link.ly doesn't host events, we just help you discover them.
          </p>
        </div>
      </div>
    </div>
  );
}
