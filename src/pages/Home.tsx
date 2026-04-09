import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Brain,
  Camera,
  Play,
  Square,
  Aperture,
  Upload,
  ScanFace,
  BarChart3,
  Shield,
  Zap,
  ArrowRight,
  ChevronRight,
  LayoutDashboard,
  Settings,
  Users,
  UserCheck,
  Clock,
  TrendingUp,
  FileText,
  Bell,
} from "lucide-react";

const Home = () => {
  const [cameraOn, setCameraOn] = useState(false);
  const navigate = useNavigate();

  const sections = [
    {
      icon: LayoutDashboard,
      title: "Dashboard",
      desc: "Real-time overview of attendance stats, live camera feed, AI model status, and recent recognitions.",
      route: "/dashboard",
      color: "from-[hsl(245,70%,58%)] to-[hsl(270,70%,55%)]",
      glow: "hsla(245,80%,55%,0.3)",
      stats: [
        { label: "Live Feeds", value: "4" },
        { label: "Active Users", value: "38" },
      ],
    },
    {
      icon: ScanFace,
      title: "Mark Attendance",
      desc: "AI-powered face recognition with webcam integration, manual entry, image upload, and full attendance log.",
      route: "/attendance",
      color: "from-[hsl(200,80%,50%)] to-[hsl(180,70%,45%)]",
      glow: "hsla(200,80%,55%,0.3)",
      stats: [
        { label: "Recognized", value: "35" },
        { label: "Pending", value: "2" },
      ],
    },
    {
      icon: BarChart3,
      title: "Reports & Analytics",
      desc: "Comprehensive attendance trends, department breakdowns, pie charts, leaderboards, and exportable reports.",
      route: "/reports",
      color: "from-[hsl(155,65%,45%)] to-[hsl(170,60%,40%)]",
      glow: "hsla(155,65%,45%,0.3)",
      stats: [
        { label: "Avg Rate", value: "84.4%" },
        { label: "Reports", value: "12" },
      ],
    },
    {
      icon: Settings,
      title: "Settings",
      desc: "Configure AI model parameters, notification preferences, user management, and system preferences.",
      route: "/settings",
      color: "from-[hsl(38,92%,55%)] to-[hsl(25,85%,50%)]",
      glow: "hsla(38,92%,55%,0.3)",
      stats: [
        { label: "Model Ver.", value: "v2.4" },
        { label: "Uptime", value: "99.9%" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[hsl(230,30%,6%)] text-white overflow-hidden relative">
      {/* Animated background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[hsla(245,80%,55%,0.15)] blur-[120px] animate-[pulse_6s_ease-in-out_infinite]" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-[hsla(200,80%,50%,0.12)] blur-[100px] animate-[pulse_8s_ease-in-out_infinite_1s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[hsla(270,70%,50%,0.08)] blur-[80px] animate-[pulse_7s_ease-in-out_infinite_2s]" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsla(0,0%,100%,0.1) 1px, transparent 1px), linear-gradient(90deg, hsla(0,0%,100%,0.1) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-6 md:px-12 py-5">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[hsl(245,70%,58%)] to-[hsl(200,80%,55%)] flex items-center justify-center shadow-[0_0_20px_hsla(245,80%,55%,0.4)]">
            <Brain className="h-5 w-5 text-white" />
          </div>
          <span className="text-lg font-bold tracking-tight">AttendAI</span>
        </div>
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            className="text-white/70 hover:text-white hover:bg-white/10"
            onClick={() => navigate("/dashboard")}
          >
            Dashboard
          </Button>
          <Button
            className="bg-gradient-to-r from-[hsl(245,70%,58%)] to-[hsl(200,80%,55%)] hover:opacity-90 text-white border-0 shadow-[0_0_20px_hsla(245,80%,55%,0.3)]"
            onClick={() => navigate("/attendance")}
          >
            Get Started <ArrowRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center text-center px-6 pt-10 md:pt-16 pb-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6 animate-fade-in">
          <div className="h-2 w-2 rounded-full bg-[hsl(155,65%,45%)] animate-pulse" />
          <span className="text-xs text-white/70 font-medium">AI Model Active — 99.2% Accuracy</span>
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight max-w-4xl animate-fade-in">
          Smart Attendance
          <br />
          <span className="bg-gradient-to-r from-[hsl(245,70%,65%)] via-[hsl(220,80%,65%)] to-[hsl(200,80%,55%)] bg-clip-text text-transparent">
            Powered by AI
          </span>
        </h1>
        <p className="mt-5 text-base md:text-lg text-white/50 max-w-xl leading-relaxed animate-fade-in">
          Real-time face recognition with Teachable Machine & TensorFlow.js.
          Mark attendance instantly, accurately, and effortlessly.
        </p>
      </section>

      {/* Camera Card */}
      <section className="relative z-10 flex justify-center px-6 pb-16">
        <div className="w-full max-w-2xl animate-fade-in">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-[0_0_60px_hsla(245,80%,55%,0.12)] overflow-hidden">
            <div className="relative aspect-video bg-gradient-to-br from-[hsl(230,25%,10%)] to-[hsl(240,20%,8%)] flex items-center justify-center">
              {cameraOn ? (
                <>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-sm text-white/30 font-mono">Camera Feed Active</div>
                  </div>
                  <div className="absolute inset-8 border-2 border-[hsl(200,80%,55%)]/30 rounded-xl">
                    <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[hsl(200,80%,55%)] rounded-tl-lg" />
                    <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[hsl(200,80%,55%)] rounded-tr-lg" />
                    <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[hsl(200,80%,55%)] rounded-bl-lg" />
                    <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[hsl(200,80%,55%)] rounded-br-lg" />
                  </div>
                  <div className="absolute left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-[hsl(200,80%,55%)] to-transparent opacity-60 animate-[scanLine_2.5s_ease-in-out_infinite]" />
                  <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1 rounded-full bg-[hsl(155,65%,45%)]/20 border border-[hsl(155,65%,45%)]/30">
                    <div className="h-2 w-2 rounded-full bg-[hsl(155,65%,45%)] animate-pulse" />
                    <span className="text-xs text-[hsl(155,65%,45%)] font-medium">LIVE</span>
                  </div>
                </>
              ) : (
                <div className="flex flex-col items-center gap-4">
                  <div className="h-16 w-16 rounded-full border-2 border-white/10 flex items-center justify-center bg-white/5">
                    <Camera className="h-7 w-7 text-white/30" />
                  </div>
                  <p className="text-sm text-white/30">Camera is off — press Start to begin</p>
                </div>
              )}
            </div>
            <div className="flex items-center justify-between px-5 py-4 border-t border-white/10 bg-white/[0.02]">
              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  onClick={() => setCameraOn(!cameraOn)}
                  className={cameraOn
                    ? "bg-[hsl(0,72%,55%)] hover:bg-[hsl(0,72%,50%)] text-white gap-1.5"
                    : "bg-[hsl(155,65%,45%)] hover:bg-[hsl(155,65%,40%)] text-white gap-1.5"
                  }
                >
                  {cameraOn ? <Square className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
                  {cameraOn ? "Stop" : "Start"}
                </Button>
                <Button size="sm" variant="outline" className="border-white/10 text-white/70 hover:bg-white/10 hover:text-white gap-1.5" disabled={!cameraOn}>
                  <Aperture className="h-3.5 w-3.5" /> Capture
                </Button>
                <Button size="sm" variant="outline" className="border-white/10 text-white/70 hover:bg-white/10 hover:text-white gap-1.5">
                  <Upload className="h-3.5 w-3.5" /> Upload
                </Button>
              </div>
              <Button
                onClick={() => navigate("/attendance")}
                className="bg-gradient-to-r from-[hsl(245,70%,58%)] to-[hsl(200,80%,55%)] hover:opacity-90 text-white border-0 shadow-[0_0_24px_hsla(245,80%,55%,0.35)] gap-2"
              >
                <ScanFace className="h-4 w-4" /> Start Recognition
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section Cards — Navigate to other pages */}
      <section className="relative z-10 px-6 md:px-12 pb-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold animate-fade-in">Explore the System</h2>
            <p className="text-sm text-white/40 mt-2 animate-fade-in">Jump into any section to manage your attendance workflow</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {sections.map((s, i) => (
              <button
                key={s.title}
                onClick={() => navigate(s.route)}
                className="group text-left rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm p-6 hover:border-white/15 hover:bg-white/[0.06] transition-all duration-300 animate-fade-in cursor-pointer"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div
                  className={`h-12 w-12 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-4 transition-shadow duration-300`}
                  style={{ boxShadow: `0 0 16px ${s.glow}` }}
                >
                  <s.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-base font-semibold text-white mb-1.5">{s.title}</h3>
                <p className="text-xs text-white/40 leading-relaxed mb-4">{s.desc}</p>
                <div className="flex items-center gap-3 mb-4">
                  {s.stats.map((st) => (
                    <div key={st.label} className="flex-1 rounded-lg bg-white/[0.04] border border-white/[0.06] px-3 py-2 text-center">
                      <p className="text-sm font-bold text-white">{st.value}</p>
                      <p className="text-[10px] text-white/30 uppercase tracking-wider">{st.label}</p>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-white/50 group-hover:text-white/80 transition-colors">
                  <span>Go to {s.title}</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 px-6 md:px-12 pb-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold animate-fade-in">Why AttendAI?</h2>
            <p className="text-sm text-white/40 mt-2 animate-fade-in">Built with cutting-edge AI for seamless attendance tracking</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { icon: ScanFace, title: "Face Recognition", desc: "Real-time AI detection with 99%+ accuracy using TensorFlow.js" },
              { icon: Zap, title: "Instant Marking", desc: "Attendance logged automatically the moment a face is recognized" },
              { icon: Shield, title: "Secure & Private", desc: "On-device processing — no images leave your browser" },
            ].map((f, i) => (
              <div
                key={f.title}
                className="group rounded-xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm p-6 hover:border-white/15 hover:bg-white/[0.05] transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-[hsl(245,70%,58%)] to-[hsl(200,80%,55%)] flex items-center justify-center mb-4 shadow-[0_0_16px_hsla(245,80%,55%,0.25)] group-hover:shadow-[0_0_24px_hsla(245,80%,55%,0.4)] transition-shadow">
                  <f.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1.5">{f.title}</h3>
                <p className="text-xs text-white/40 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="relative z-10 px-6 pb-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm p-10">
            <h2 className="text-xl md:text-2xl font-bold mb-3">Ready to get started?</h2>
            <p className="text-sm text-white/40 mb-6">Set up your AI-powered attendance system in minutes</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button
                size="lg"
                onClick={() => navigate("/attendance")}
                className="bg-gradient-to-r from-[hsl(245,70%,58%)] to-[hsl(200,80%,55%)] hover:opacity-90 text-white border-0 shadow-[0_0_30px_hsla(245,80%,55%,0.3)] gap-2 text-base px-8"
              >
                <ScanFace className="h-5 w-5" /> Mark Attendance
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate("/dashboard")}
                className="border-white/10 text-white/70 hover:bg-white/10 hover:text-white gap-2 text-base px-8"
              >
                Open Dashboard <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/[0.06] py-6 px-6 md:px-12">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Brain className="h-4 w-4 text-white/30" />
            <span className="text-xs text-white/30">AttendAI © 2026</span>
          </div>
          <span className="text-xs text-white/20">Smart Attendance System</span>
        </div>
      </footer>
    </div>
  );
};

export default Home;
