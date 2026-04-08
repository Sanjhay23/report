import { Camera, Play, Square, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function CameraFeed() {
  const [isRunning, setIsRunning] = useState(false);

  return (
    <div className="glass-strong rounded-xl overflow-hidden">
      <div className="p-4 border-b border-border/50 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Camera className="h-4 w-4 text-primary" />
          <h3 className="text-sm font-semibold text-foreground">Live Camera Feed</h3>
        </div>
        <div className="flex items-center gap-2">
          <div className={`h-2 w-2 rounded-full ${isRunning ? "bg-success animate-pulse" : "bg-muted-foreground"}`} />
          <span className="text-xs text-muted-foreground">{isRunning ? "Running" : "Idle"}</span>
        </div>
      </div>

      <div className="relative aspect-video bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
        {!isRunning ? (
          <div className="text-center">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
              <Camera className="h-8 w-8 text-primary" />
            </div>
            <p className="text-sm text-muted-foreground">Camera feed will appear here</p>
            <p className="text-xs text-muted-foreground mt-1">Click Start Recognition to begin</p>
          </div>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-muted to-secondary flex items-center justify-center">
            <div className="relative">
              <div className="h-32 w-32 rounded-full border-2 border-primary/50 animate-pulse flex items-center justify-center">
                <div className="h-24 w-24 rounded-full border border-primary/30 flex items-center justify-center">
                  <Zap className="h-8 w-8 text-primary animate-pulse" />
                </div>
              </div>
              <div className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-success border-2 border-card" />
            </div>
            {/* Simulated detection box */}
            <div className="absolute top-4 left-4 border border-success/60 rounded-md px-2 py-0.5">
              <span className="text-xs text-success font-medium">Face Detected — 96.8%</span>
            </div>
            <div className="absolute bottom-4 left-4 right-4 glass rounded-lg p-2 flex items-center justify-between">
              <span className="text-xs text-foreground font-medium">Processing frame...</span>
              <span className="text-xs text-primary font-mono">30 FPS</span>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 flex gap-2">
        <Button
          className="flex-1"
          variant={isRunning ? "destructive" : "default"}
          onClick={() => setIsRunning(!isRunning)}
        >
          {isRunning ? <Square className="h-4 w-4 mr-2" /> : <Play className="h-4 w-4 mr-2" />}
          {isRunning ? "Stop Recognition" : "Start Recognition"}
        </Button>
      </div>
    </div>
  );
}
