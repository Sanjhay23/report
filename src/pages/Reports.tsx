import { DashboardLayout } from "@/components/DashboardLayout";
import { StatCard } from "@/components/StatCard";
import { AttendanceTrendChart, MonthlyAttendanceChart } from "@/components/AttendanceChart";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { PieChart, Pie, Cell } from "recharts";
import {
  TrendingUp,
  TrendingDown,
  Download,
  Calendar,
  Users,
  UserCheck,
  UserX,
  Clock,
  BarChart3,
  FileText,
} from "lucide-react";
import { useState } from "react";

const pieData = [
  { name: "Present", value: 78, fill: "hsl(var(--success))" },
  { name: "Late", value: 12, fill: "hsl(var(--warning))" },
  { name: "Absent", value: 10, fill: "hsl(var(--destructive))" },
];

const pieConfig = {
  Present: { label: "Present", color: "hsl(var(--success))" },
  Late: { label: "Late", color: "hsl(var(--warning))" },
  Absent: { label: "Absent", color: "hsl(var(--destructive))" },
};

const departmentData = [
  { dept: "Engineering", total: 15, present: 13, absent: 1, late: 1, rate: "86.7%" },
  { dept: "Design", total: 8, present: 7, absent: 0, late: 1, rate: "87.5%" },
  { dept: "Marketing", total: 10, present: 8, absent: 1, late: 1, rate: "80.0%" },
  { dept: "HR", total: 6, present: 5, absent: 1, late: 0, rate: "83.3%" },
  { dept: "Finance", total: 6, present: 5, absent: 1, late: 0, rate: "83.3%" },
];

const topAttendees = [
  { name: "Emily Davis", id: "EMP-1004", rate: "100%", streak: 45 },
  { name: "John Doe", id: "EMP-1001", rate: "97.8%", streak: 32 },
  { name: "Sarah Chen", id: "EMP-1002", rate: "95.6%", streak: 28 },
  { name: "Lisa Park", id: "EMP-1006", rate: "93.3%", streak: 21 },
  { name: "James Wilson", id: "EMP-1007", rate: "91.1%", streak: 15 },
];

const Reports = () => {
  const [period, setPeriod] = useState("this-month");

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Reports & Analytics</h1>
            <p className="text-sm text-muted-foreground mt-0.5">Comprehensive attendance insights and trends</p>
          </div>
          <div className="flex gap-2">
            <Select value={period} onValueChange={setPeriod}>
              <SelectTrigger className="w-[160px] bg-background/50">
                <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="this-week">This Week</SelectItem>
                <SelectItem value="this-month">This Month</SelectItem>
                <SelectItem value="this-quarter">This Quarter</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="sm" className="gap-2">
              <Download className="h-4 w-4" /> Export
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <FileText className="h-4 w-4" /> PDF Report
            </Button>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard title="Avg. Attendance" value="84.4%" subtitle="+2.1% vs last month" icon={TrendingUp} variant="success" />
          <StatCard title="Total Present" value={852} subtitle="This month" icon={UserCheck} variant="info" />
          <StatCard title="Total Absent" value={98} subtitle="-12 vs last month" icon={UserX} variant="destructive" />
          <StatCard title="Avg. Check-in" value="9:04 AM" subtitle="2 min earlier" icon={Clock} variant="warning" />
        </div>

        {/* Charts Row */}
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <AttendanceTrendChart />
          </div>
          <div className="glass rounded-xl p-5">
            <h3 className="text-sm font-semibold text-foreground mb-4">Attendance Distribution</h3>
            <ChartContainer config={pieConfig} className="aspect-square max-h-[220px] mx-auto">
              <PieChart>
                <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={50} outerRadius={80} paddingAngle={4} strokeWidth={0}>
                  {pieData.map((entry, i) => (
                    <Cell key={i} fill={entry.fill} />
                  ))}
                </Pie>
                <ChartTooltip content={<ChartTooltipContent />} />
              </PieChart>
            </ChartContainer>
            <div className="flex justify-center gap-4 mt-4">
              {pieData.map((d) => (
                <div key={d.name} className="flex items-center gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: d.fill }} />
                  <span className="text-xs text-muted-foreground">{d.name} ({d.value}%)</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <MonthlyAttendanceChart />

        {/* Department Breakdown & Top Attendees */}
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="glass rounded-xl p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-foreground">Department Breakdown</h3>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="rounded-lg border border-border/50 overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/30">
                    <TableHead>Department</TableHead>
                    <TableHead className="text-center">Total</TableHead>
                    <TableHead className="text-center">Present</TableHead>
                    <TableHead className="text-center">Absent</TableHead>
                    <TableHead className="text-right">Rate</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {departmentData.map((row) => (
                    <TableRow key={row.dept} className="hover:bg-muted/20">
                      <TableCell className="font-medium text-foreground">{row.dept}</TableCell>
                      <TableCell className="text-center text-muted-foreground">{row.total}</TableCell>
                      <TableCell className="text-center text-success">{row.present}</TableCell>
                      <TableCell className="text-center text-destructive">{row.absent}</TableCell>
                      <TableCell className="text-right">
                        <Badge variant="secondary" className="font-mono">{row.rate}</Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>

          <div className="glass rounded-xl p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-foreground">Top Attendees</h3>
              <TrendingUp className="h-4 w-4 text-success" />
            </div>
            <div className="space-y-3">
              {topAttendees.map((person, i) => (
                <div key={person.id} className="flex items-center gap-3 p-3 rounded-lg bg-background/40 border border-border/30">
                  <div className="h-8 w-8 rounded-full gradient-primary flex items-center justify-center text-xs font-bold text-primary-foreground flex-shrink-0">
                    {i + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">{person.name}</p>
                    <p className="text-xs text-muted-foreground">{person.id}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-sm font-bold text-success">{person.rate}</p>
                    <p className="text-xs text-muted-foreground">{person.streak}d streak</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Reports;
