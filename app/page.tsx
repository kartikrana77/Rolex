import Navbar from "@/components/Navbar";
import CanvasSequence from "@/components/CanvasSequence";
import StoryBeats from "@/components/StoryBeats";

export default function Home() {
  return (
    <main className="relative bg-[#050505] min-h-screen">
      <Navbar />
      
      {/* The sticky canvas container for the background animation */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <CanvasSequence />
      </div>
      
      {/* Foreground scrollable content */}
      <StoryBeats />
    </main>
  );
}
