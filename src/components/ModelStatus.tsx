import { Brain, Upload, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export function ModelStatus() {
  return (
    <div className="glass-strong rounded-xl p-5">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Brain className="h-4 w-4 text-primary" />
          <h3 className="text-sm font-semibold text-foreground">AI Model</h3>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="h-2 w-2 rounded-full bg-success animate-pulse" />
          <span className="text-xs font-medium text-success">Connected</span>
        </div>
      </div>

      <div className="space-y-3">
        <div>
          <div className="flex justify-between text-xs mb-1">
            <span className="text-muted-foreground">Model Accuracy</span>
            <span className="font-medium text-foreground">96.8%</span>
          </div>
          <Progress value={96.8} className="h-1.5" />
        </div>

        <div>
          <div className="flex justify-between text-xs mb-1">
            <span className="text-muted-foreground">Training Progress</span>
            <span className="font-medium text-foreground">Complete</span>
          </div>
          <Progress value={100} className="h-1.5" />
        </div>

        <div className="flex gap-2 pt-2">
          <Button variant="outline" size="sm" className="flex-1 text-xs">
            <Upload className="h-3 w-3 mr-1.5" />
            Upload Dataset
          </Button>
          <Button variant="outline" size="sm" className="flex-1 text-xs">
            <RefreshCw className="h-3 w-3 mr-1.5" />
            Retrain
          </Button>
        </div>
      </div>
    </div>
  );
}
