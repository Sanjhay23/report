import { DashboardLayout } from "@/components/DashboardLayout";
import { CameraFeed } from "@/components/CameraFeed";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
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
import { Camera, Upload, Search, Download, UserPlus, CheckCircle2, XCircle, Clock } from "lucide-react";
import { useState } from "react";

const attendanceData = [
  { id: "EMP-1001", name: "John Doe", department: "Engineering", time: "09:01 AM", status: "present", confidence: 98.2, method: "AI" },
  { id: "EMP-1002", name: "Sarah Chen", department: "Design", time: "09:05 AM", status: "present", confidence: 96.5, method: "AI" },
  { id: "EMP-1003", name: "Mike Johnson", department: "Marketing", time: "09:32 AM", status: "late", confidence: 94.1, method: "AI" },
  { id: "EMP-1004", name: "Emily Davis", department: "Engineering", time: "08:55 AM", status: "present", confidence: 97.8, method: "AI" },
  { id: "EMP-1005", name: "Alex Turner", department: "HR", time: "—", status: "absent", confidence: 0, method: "—" },
  { id: "EMP-1006", name: "Lisa Park", department: "Design", time: "09:10 AM", status: "present", confidence: 95.3, method: "AI" },
  { id: "EMP-1007", name: "James Wilson", department: "Engineering", time: "09:20 AM", status: "present", confidence: 91.7, method: "Manual" },
  { id: "EMP-1008", name: "Nina Patel", department: "Marketing", time: "09:45 AM", status: "late", confidence: 93.0, method: "AI" },
];

const statusConfig = {
  present: { label: "Present", icon: CheckCircle2, class: "bg-success/10 text-success border-success/20" },
  absent: { label: "Absent", icon: XCircle, class: "bg-destructive/10 text-destructive border-destructive/20" },
  late: { label: "Late", icon: Clock, class: "bg-warning/10 text-warning border-warning/20" },
};

const MarkAttendance = () => {
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterDept, setFilterDept] = useState("all");

  const filtered = attendanceData.filter((r) => {
    const matchSearch = r.name.toLowerCase().includes(search.toLowerCase()) || r.id.toLowerCase().includes(search.toLowerCase());
    const matchStatus = filterStatus === "all" || r.status === filterStatus;
    const matchDept = filterDept === "all" || r.department === filterDept;
    return matchSearch && matchStatus && matchDept;
  });

  const departments = [...new Set(attendanceData.map((r) => r.department))];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Mark Attendance</h1>
            <p className="text-sm text-muted-foreground mt-0.5">Use AI recognition or mark attendance manually</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="gap-2">
              <Upload className="h-4 w-4" /> Upload Image
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <UserPlus className="h-4 w-4" /> Manual Entry
            </Button>
          </div>
        </div>

        {/* Camera Section */}
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <CameraFeed />
          </div>
          <div className="glass rounded-xl p-5 space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Quick Stats</h3>
            <div className="space-y-3">
              {[
                { label: "Recognized Today", value: "35", color: "text-primary" },
                { label: "Manual Entries", value: "3", color: "text-accent" },
                { label: "Pending Review", value: "2", color: "text-warning" },
                { label: "Failed Recognition", value: "1", color: "text-destructive" },
              ].map((s) => (
                <div key={s.label} className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
                  <span className="text-sm text-muted-foreground">{s.label}</span>
                  <span className={`text-lg font-bold ${s.color}`}>{s.value}</span>
                </div>
              ))}
            </div>
            <Button className="w-full gap-2 gradient-primary text-primary-foreground">
              <Camera className="h-4 w-4" /> Capture & Recognize
            </Button>
          </div>
        </div>

        {/* Attendance Table */}
        <div className="glass rounded-xl p-5">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
            <h3 className="text-sm font-semibold text-foreground">Today's Attendance Log</h3>
            <Button variant="outline" size="sm" className="gap-2">
              <Download className="h-4 w-4" /> Export CSV
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by name or ID..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9 bg-background/50"
              />
            </div>
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-full sm:w-[140px] bg-background/50">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="present">Present</SelectItem>
                <SelectItem value="absent">Absent</SelectItem>
                <SelectItem value="late">Late</SelectItem>
              </SelectContent>
            </Select>
            <Select value={filterDept} onValueChange={setFilterDept}>
              <SelectTrigger className="w-full sm:w-[160px] bg-background/50">
                <SelectValue placeholder="Department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Departments</SelectItem>
                {departments.map((d) => (
                  <SelectItem key={d} value={d}>{d}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="rounded-lg border border-border/50 overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/30">
                  <TableHead>ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead className="hidden md:table-cell">Department</TableHead>
                  <TableHead>Time</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="hidden sm:table-cell">Confidence</TableHead>
                  <TableHead className="hidden lg:table-cell">Method</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filtered.map((row) => {
                  const sc = statusConfig[row.status as keyof typeof statusConfig];
                  const Icon = sc.icon;
                  return (
                    <TableRow key={row.id} className="hover:bg-muted/20">
                      <TableCell className="font-mono text-xs text-muted-foreground">{row.id}</TableCell>
                      <TableCell className="font-medium text-foreground">{row.name}</TableCell>
                      <TableCell className="hidden md:table-cell text-muted-foreground">{row.department}</TableCell>
                      <TableCell className="text-muted-foreground">{row.time}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className={`gap-1 ${sc.class}`}>
                          <Icon className="h-3 w-3" />
                          {sc.label}
                        </Badge>
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">
                        {row.confidence > 0 ? (
                          <span className={`font-mono text-sm ${row.confidence >= 95 ? "text-success" : row.confidence >= 90 ? "text-warning" : "text-destructive"}`}>
                            {row.confidence}%
                          </span>
                        ) : (
                          <span className="text-muted-foreground">—</span>
                        )}
                      </TableCell>
                      <TableCell className="hidden lg:table-cell">
                        <Badge variant="secondary" className="text-xs">{row.method}</Badge>
                      </TableCell>
                    </TableRow>
                  );
                })}
                {filtered.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                      No records found
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
          <p className="text-xs text-muted-foreground mt-3">Showing {filtered.length} of {attendanceData.length} records</p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MarkAttendance;
