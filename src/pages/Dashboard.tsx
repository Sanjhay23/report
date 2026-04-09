import { DashboardLayout } from "@/components/DashboardLayout";
import { StatCard } from "@/components/StatCard";
import { CameraFeed } from "@/components/CameraFeed";
import { ProfileCard } from "@/components/ProfileCard";
import { AttendanceTrendChart, MonthlyAttendanceChart } from "@/components/AttendanceChart";
import { NotificationsPanel } from "@/components/NotificationsPanel";
import { ModelStatus } from "@/components/ModelStatus";
import { Users, UserCheck, UserX, Clock } from "lucide-react";

const recentAttendees = [
  { name: "John Doe", id: "EMP-1001", confidence: 98.2, status: "present" as const, time: "09:01 AM" },
  { name: "Sarah Chen", id: "EMP-1002", confidence: 96.5, status: "present" as const, time: "09:05 AM" },
  { name: "Mike Johnson", id: "EMP-1003", confidence: 94.1, status: "late" as const, time: "09:32 AM" },
  { name: "Emily Davis", id: "EMP-1004", confidence: 97.8, status: "present" as const, time: "08:55 AM" },
];

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
          <p className="text-sm text-muted-foreground mt-0.5">AI-powered attendance monitoring in real-time</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard title="Total Students" value={45} subtitle="Enrolled" icon={Users} variant="info" />
          <StatCard title="Present" value={38} subtitle="84.4% rate" icon={UserCheck} variant="success" />
          <StatCard title="Absent" value={4} subtitle="Today" icon={UserX} variant="destructive" />
          <StatCard title="Late" value={3} subtitle="After 9:15 AM" icon={Clock} variant="warning" />
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <CameraFeed />
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-3">Recent Recognitions</h3>
              <div className="space-y-2">
                {recentAttendees.map((a) => (
                  <ProfileCard key={a.id} {...a} />
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <ModelStatus />
            <NotificationsPanel />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <AttendanceTrendChart />
          <MonthlyAttendanceChart />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
