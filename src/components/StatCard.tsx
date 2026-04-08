import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  variant?: "default" | "success" | "warning" | "destructive" | "info";
}

const variantClasses: Record<string, string> = {
  default: "from-primary/10 to-primary/5 text-primary",
  success: "from-success/10 to-success/5 text-success",
  warning: "from-warning/10 to-warning/5 text-warning",
  destructive: "from-destructive/10 to-destructive/5 text-destructive",
  info: "from-info/10 to-info/5 text-info",
};

export function StatCard({ title, value, subtitle, icon: Icon, variant = "default" }: StatCardProps) {
  return (
    <div className="glass-strong rounded-xl p-5 transition-all hover:scale-[1.02]">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{title}</p>
          <p className="text-2xl font-bold text-foreground mt-1">{value}</p>
          {subtitle && <p className="text-xs text-muted-foreground mt-1">{subtitle}</p>}
        </div>
        <div className={`h-10 w-10 rounded-lg bg-gradient-to-br ${variantClasses[variant]} flex items-center justify-center`}>
          <Icon className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
}
