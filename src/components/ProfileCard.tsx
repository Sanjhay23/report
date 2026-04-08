import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock } from "lucide-react";

interface ProfileCardProps {
  name: string;
  id: string;
  confidence: number;
  status: "present" | "absent" | "late";
  time: string;
}

const statusConfig = {
  present: { label: "Present", className: "bg-success/10 text-success border-success/20" },
  absent: { label: "Absent", className: "bg-destructive/10 text-destructive border-destructive/20" },
  late: { label: "Late", className: "bg-warning/10 text-warning border-warning/20" },
};

export function ProfileCard({ name, id, confidence, status, time }: ProfileCardProps) {
  const s = statusConfig[status];
  return (
    <div className="glass-strong rounded-xl p-4 flex items-center gap-4 transition-all hover:scale-[1.01]">
      <div className="h-12 w-12 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-bold text-lg flex-shrink-0">
        {name.charAt(0)}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-foreground truncate">{name}</p>
        <p className="text-xs text-muted-foreground">ID: {id}</p>
      </div>
      <div className="text-right flex-shrink-0">
        <Badge variant="outline" className={s.className}>{s.label}</Badge>
        <div className="flex items-center gap-1 mt-1 justify-end">
          <Clock className="h-3 w-3 text-muted-foreground" />
          <span className="text-xs text-muted-foreground">{time}</span>
        </div>
      </div>
      <div className="text-right flex-shrink-0">
        <p className="text-lg font-bold text-primary">{confidence}%</p>
        <p className="text-[10px] text-muted-foreground">confidence</p>
      </div>
    </div>
  );
}
