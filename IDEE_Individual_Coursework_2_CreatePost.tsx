import { useState } from "react";
import { useNavigate } from "react-router";
import { X, Image as ImageIcon, Smile, AlertCircle } from "lucide-react";

export function CreatePost() {
  const navigate = useNavigate();
  const [content, setContent] = useState("");
  const maxChars = 500;
  const dailyPostsUsed = 2;
  const dailyPostLimit = 5;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="px-6 py-4 border-b border-border flex items-center justify-between bg-card">
        <button onClick={() => navigate("/home")} className="p-2 -ml-2">
          <X className="w-6 h-6 text-foreground" />
        </button>
        <h2 className="text-foreground">Create post</h2>
        <button
          onClick={() => navigate("/home")}
          disabled={content.trim().length === 0}
          className={`px-6 py-2 rounded-full transition-opacity ${
            content.trim().length > 0
              ? "bg-primary text-white hover:opacity-90"
              : "bg-muted text-muted-foreground cursor-not-allowed"
          }`}
        >
          Post
        </button>
      </div>

      <div className="flex-1 px-6 py-6">
        <div className="flex gap-3">
          <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-sm text-foreground">You</span>
          </div>
          <div className="flex-1">
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="What's on your mind?"
              className="w-full bg-transparent text-foreground placeholder-muted-foreground outline-none resize-none min-h-[200px]"
              maxLength={maxChars}
            />
          </div>
        </div>

        <div className="mt-6 space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">
              {content.length} / {maxChars}
            </span>
            <span className={`${content.length > maxChars * 0.9 ? "text-destructive" : "text-muted-foreground"}`}>
              {maxChars - content.length} remaining
            </span>
          </div>

          <div className="bg-secondary rounded-xl p-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-foreground mb-1">Daily post limit</p>
                <p className="text-sm text-muted-foreground">
                  {dailyPostsUsed} of {dailyPostLimit} posts used today
                </p>
                <div className="w-full bg-muted rounded-full h-2 mt-2">
                  <div
                    className="bg-primary rounded-full h-2 transition-all"
                    style={{ width: `${(dailyPostsUsed / dailyPostLimit) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-muted rounded-xl p-4">
            <p className="text-xs text-muted-foreground text-center leading-relaxed">
              Posts are only visible to your friends. We encourage thoughtful sharing over frequent posting.
            </p>
          </div>
        </div>
      </div>

      <div className="px-6 py-4 border-t border-border bg-card">
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-muted text-foreground hover:bg-accent transition-colors">
            <ImageIcon className="w-5 h-5" />
            <span className="text-sm">Photo</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-muted text-foreground hover:bg-accent transition-colors">
            <Smile className="w-5 h-5" />
            <span className="text-sm">Emoji</span>
          </button>
        </div>
      </div>
    </div>
  );
}
