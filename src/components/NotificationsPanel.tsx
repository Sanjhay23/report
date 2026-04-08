import { Bell, CheckCircle, AlertTriangle, Info } from "lucide-react";

const notifications = [
  { id: 1, type: "success", message: "John Doe marked present", time: "2 min ago", icon: CheckCircle },
  { id: 2, type: "warning", message: "AI model confidence low for ID #1042", time: "5 min ago", icon: AlertTriangle },
  { id: 3, type: "info", message: "New dataset uploaded successfully", time: "12 min ago", icon: Info },
  { id: 4, type: "success", message: "Sarah Chen marked present", time: "15 min ago", icon: CheckCircle },
];

const typeColors = {
  success: "text-success bg-success/10",
  warning: "text-warning bg-warning/10",
  info: "text-info bg-info/10",
};

export function NotificationsPanel() {
  return (
    <div className="glass-strong rounded-xl">
      <div className="p-4 border-b border-border/50 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Bell className="h-4 w-4 text-primary" />
          <h3 className="text-sm font-semibold text-foreground">Notifications</h3>
        </div>
        <span className="text-xs text-primary cursor-pointer hover:underline">View all</span>
      </div>
      <div className="divide-y divide-border/50">
        {notifications.map((n) => (
          <div key={n.id} className="p-3 flex items-start gap-3 hover:bg-muted/30 transition-colors">
            <div className={`h-7 w-7 rounded-md flex items-center justify-center flex-shrink-0 ${typeColors[n.type as keyof typeof typeColors]}`}>
              <n.icon className="h-3.5 w-3.5" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-foreground">{n.message}</p>
              <p className="text-[10px] text-muted-foreground mt-0.5">{n.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
