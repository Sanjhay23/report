import { useState, useRef, useCallback } from "react";
import { Camera, Upload, Play, Square, Aperture, Scan, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [hasCapture, setHasCapture] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const startCamera = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        streamRef.current = stream;
      }
      setIsRunning(true);
    } catch {
      console.error("Camera access denied");
    }
  }, []);

  const stopCamera = useCallback(() => {
    streamRef.current?.getTracks().forEach((t) => t.stop());
    if (videoRef.current) videoRef.current.srcObject = null;
    streamRef.current = null;
    setIsRunning(false);
  }, []);

  const capture = useCallback(() => {
    setHasCapture(true);
    setTimeout(() => setHasCapture(false), 1500);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center px-4 py-12 bg-[hsl(230,30%,6%)]">
      {/* Gradient background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(245,60%,12%)] via-[hsl(230,30%,6%)] to-[hsl(200,60%,8%)]" />
      <div className="absolute top-[-30%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-[hsl(245,80%,50%)] opacity-[0.07] blur-[120px]" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-[hsl(200,80%,50%)] opacity-[0.06] blur-[100px]" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-2xl flex flex-col items-center gap-8">
        {/* Header */}
        <div className="text-center space-y-3 animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="h-5 w-5 text-accent" />
            <span className="text-xs font-medium tracking-widest uppercase text-accent">AI-Powered</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-primary-foreground">
            SMART ATTENDANCE
            <br />
            <span className="text-gradient">SYSTEM</span>
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-md mx-auto">
            Webcam + Image Upload Attendance — powered by face recognition
          </p>
        </div>

        {/* Main Glass Card */}
        <div className="w-full rounded-2xl border border-[hsl(230,20%,20%)] bg-[hsl(230,20%,10%)]/70 backdrop-blur-2xl shadow-[0_8px_60px_hsl(245,80%,50%,0.12)] animate-scale-in">
          {/* Webcam preview */}
          <div className="relative aspect-video rounded-t-2xl overflow-hidden bg-[hsl(230,25%,8%)]">
            <video
              ref={videoRef}
              autoPlay
              muted
              playsInline
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isRunning ? "opacity-100" : "opacity-0"}`}
            />

            {!isRunning && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <div className="h-16 w-16 rounded-full border border-[hsl(245,60%,40%)] flex items-center justify-center">
                  <Camera className="h-7 w-7 text-muted-foreground" />
                </div>
                <p className="text-muted-foreground text-sm">Camera preview will appear here</p>
              </div>
            )}

            {/* Scan overlay */}
            {isRunning && (
              <>
                <div className="absolute inset-4 border border-accent/30 rounded-lg pointer-events-none" />
                <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-[hsl(230,20%,10%)]/80 backdrop-blur rounded-full px-3 py-1">
                  <div className="h-2 w-2 rounded-full bg-success animate-pulse" />
                  <span className="text-[11px] font-medium text-success">Live</span>
                </div>
              </>
            )}

            {/* Flash on capture */}
            {hasCapture && (
              <div className="absolute inset-0 bg-primary-foreground/20 animate-fade-out pointer-events-none" />
            )}
          </div>

          {/* Controls */}
          <div className="p-5 sm:p-6 space-y-4">
            <div className="grid grid-cols-3 gap-3">
              <Button
                onClick={startCamera}
                disabled={isRunning}
                className="bg-primary hover:bg-primary/80 text-primary-foreground shadow-[0_0_20px_hsl(245,80%,50%,0.35)] hover:shadow-[0_0_30px_hsl(245,80%,50%,0.5)] transition-all duration-300 disabled:shadow-none"
              >
                <Play className="h-4 w-4 mr-1.5" />
                Start
              </Button>
              <Button
                onClick={stopCamera}
                disabled={!isRunning}
                variant="destructive"
              >
                <Square className="h-4 w-4 mr-1.5" />
                Stop
              </Button>
              <Button
                onClick={capture}
                disabled={!isRunning}
                variant="outline"
                className="border-border text-foreground hover:bg-muted"
              >
                <Aperture className="h-4 w-4 mr-1.5" />
                Capture
              </Button>
            </div>

            {/* Upload + Start Recognition */}
            <div className="flex flex-col sm:flex-row gap-3">
              <label className="flex-1 cursor-pointer">
                <input type="file" accept="image/*" className="hidden" />
                <div className="flex items-center justify-center gap-2 rounded-lg border border-dashed border-border bg-muted/30 hover:bg-muted/60 transition-colors py-3 px-4 text-sm text-muted-foreground">
                  <Upload className="h-4 w-4" />
                  Upload Image
                </div>
              </label>

              <Button
                className="flex-1 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold shadow-[0_0_24px_hsl(245,80%,60%,0.4)] hover:shadow-[0_0_36px_hsl(245,80%,60%,0.55)] transition-all duration-300"
              >
                <Scan className="h-4 w-4 mr-2" />
                Start Recognition
              </Button>
            </div>
          </div>
        </div>

        {/* Footer tagline */}
        <p className="text-[11px] text-muted-foreground tracking-wide text-center animate-fade-in">
          Powered by Teachable Machine &amp; TensorFlow.js
        </p>
      </div>
    </div>
  );
};

export default Index;
