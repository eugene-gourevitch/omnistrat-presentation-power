import { ReactNode } from "react";
import SlideLayout from "./SlideLayout";
import SlidePill from "./SlidePill";
import omnistratLogo from "@/assets/omnistrat-logo.jpg";
import hero3d from "@/assets/hero-3d.jpg";
import missionBg from "@/assets/mission-bg.jpg";
import statsPhoto from "@/assets/stats-photo.jpg";

export interface SlideData {
  id: string;
  title: string;
  content: ReactNode;
}

// Slide 1: Title
const TitleSlide = () => (
  <SlideLayout variant="white">
    <div className="flex h-full">
      <div className="flex-1 flex flex-col justify-between p-[80px]">
        <img src={omnistratLogo} alt="OmniStrat" className="h-[60px] w-auto object-contain object-left" />
        <div>
          <h1 className="text-[120px] font-bold leading-[1.05] tracking-tight text-slide-primary">
            CRISIS<br />MANAGEMENT
          </h1>
          <p className="mt-8 text-[28px] text-slide-muted max-w-[600px] leading-relaxed">
            Strategic advisory for high-stakes situations requiring clarity, speed, and precision.
          </p>
        </div>
      </div>
      <div className="w-[45%] flex items-center justify-center bg-slide-surface">
        <img src={hero3d} alt="3D visual" className="w-[85%] h-auto object-contain" />
      </div>
    </div>
  </SlideLayout>
);

// Slide 2: Our Mission (white)
const MissionWhiteSlide = () => (
  <SlideLayout variant="white">
    <div className="flex flex-col h-full p-[80px]">
      <SlidePill label="OUR MISSION" variant="light" />
      <div className="flex-1 flex flex-col justify-center max-w-[1200px]">
        <h2 className="text-[72px] font-bold leading-[1.15] tracking-tight">
          We don't just manage crises — we create opportunities within them.
        </h2>
        <p className="mt-8 text-[26px] text-slide-muted max-w-[800px] leading-relaxed">
          Our mission is to help clients navigate chaos with clarity, and turn high-pressure situations into strategic advantage.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {[
          { title: "Adaptive experience", desc: "Every situation is different, and so is our response" },
          { title: "Creative problem-solving", desc: "We see possibilities where others see dead ends" },
          { title: "Interdisciplinary consistency", desc: "Unifying legal, media, and policy strategies" },
        ].map((item) => (
          <div key={item.title} className="bg-slide-surface rounded-2xl p-8">
            <h3 className="text-[26px] font-bold mb-2">{item.title}</h3>
            <p className="text-[20px] text-slide-muted">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </SlideLayout>
);

// Slide 3: Our Mission (dark photo)
const MissionDarkSlide = () => (
  <SlideLayout variant="dark" backgroundImage={missionBg}>
    <div className="flex flex-col items-center justify-center h-full text-center p-[80px]">
      <SlidePill label="OUR MISSION" variant="glass" />
      <h2 className="mt-10 text-[68px] font-semibold leading-[1.2] max-w-[1400px]">
        Our mission is to help clients navigate chaos with clarity, and turn high-pressure situations into strategic advantage.
      </h2>
    </div>
  </SlideLayout>
);

// Slide 4: Emergency Solution (blue)
const EmergencySlide = () => (
  <SlideLayout variant="blue">
    <div className="flex flex-col items-center justify-center h-full text-center p-[80px]">
      <SlidePill label="EMERGENCY SOLUTION" variant="glass" />
      <h2 className="mt-10 text-[80px] font-extrabold leading-[1.1] max-w-[1300px]">
        Need urgent help with a critical situation?
      </h2>
      <p className="mt-8 text-[26px] text-white/80 max-w-[900px] leading-relaxed">
        We specialize in managing high-stakes crises involving media, regulatory pressure, or multi-jurisdictional threats. Contact us immediately if you're under pressure and need strategic support.
      </p>
    </div>
  </SlideLayout>
);

// Slide 5: Public Relations Stats
const PRStatsSlide = () => (
  <SlideLayout variant="white">
    <div className="flex flex-col h-full">
      <div className="p-[80px] pb-0">
        <h2 className="text-[80px] font-extrabold leading-[1.05] tracking-tight max-w-[1100px]">
          Control the story before it controls you.
        </h2>
        <div className="absolute top-[80px] right-[80px]">
          <SlidePill label="PUBLIC RELATIONS" variant="light" />
        </div>
      </div>
      <div className="flex flex-1 mt-10 px-[80px] gap-12">
        <div className="w-[45%] rounded-2xl overflow-hidden">
          <img src={statsPhoto} alt="Team meeting" className="w-full h-full object-cover" />
        </div>
        <div className="flex-1 flex flex-col justify-center gap-6">
          {[
            { number: "500+", label: "Crises managed successfully" },
            { number: "10+", label: "Years of advisory experience" },
            { number: "3000+", label: "Media placements secured" },
          ].map((stat) => (
            <div key={stat.number} className="border-b border-slide-foreground/10 pb-6">
              <div className="text-[48px] font-extrabold">{stat.number}</div>
              <p className="text-[22px] text-slide-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </SlideLayout>
);

// Slide 6: Section Divider
const SectionSlide = () => (
  <SlideLayout variant="white">
    <div className="flex h-full">
      <div className="flex-1 flex flex-col justify-center p-[80px]">
        <SlidePill label="PUBLIC RELATIONS" variant="light" />
        <h2 className="mt-10 text-[80px] font-extrabold leading-[1.05] tracking-tight">
          Control the story before it controls you.
        </h2>
        <div className="mt-12 grid grid-cols-2 gap-8">
          <p className="text-[22px] text-slide-muted leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nisl non porta pretium. Praesent sodales gravida quam vel condimentum.
          </p>
          <p className="text-[22px] text-slide-muted leading-relaxed">
            Maecenas maximus sem nec dignissim dictum. Cras consequat, augue non semper elementum, nunc mauris aliquam leo.
          </p>
        </div>
      </div>
      <div className="w-[35%] bg-slide-surface" />
    </div>
    <div className="absolute bottom-[80px] left-[80px] text-[120px] font-extrabold text-slide-primary/10">
      /02
    </div>
  </SlideLayout>
);

// Slide 7: Contact
const ContactSlide = () => (
  <SlideLayout variant="white">
    <div className="flex flex-col h-full p-[80px]">
      <div className="flex justify-between items-start">
        <span className="text-[24px] font-semibold">Contact us</span>
        <span className="text-[20px] text-slide-muted">We're always here and ready to assist!</span>
      </div>
      <div className="flex-1 flex flex-col justify-center">
        <h2 className="text-[100px] font-extrabold tracking-tight leading-none">GET IN TOUCH</h2>
        <div className="mt-12 space-y-4">
          <p className="text-[26px]">hello@omnistrat.com</p>
          <p className="text-[26px]">+30 210 2475500</p>
          <p className="text-[26px] text-slide-muted">www.omnistratgroup.com</p>
        </div>
      </div>
      <div className="flex items-end justify-between">
        <div className="flex gap-8 text-[20px] text-slide-muted">
          {["Instagram", "Facebook", "Youtube", "Linkedin"].map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>
        <button className="bg-slide-foreground text-white px-10 py-5 rounded-full text-[22px] font-semibold">
          Book a Consultation
        </button>
      </div>
      {/* Watermark */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden opacity-5 pointer-events-none">
        <span className="text-[200px] font-extrabold tracking-tighter text-slide-foreground">
          OmniStrat
        </span>
      </div>
    </div>
  </SlideLayout>
);

export const slides: SlideData[] = [
  { id: "title", title: "Title", content: <TitleSlide /> },
  { id: "mission-white", title: "Our Mission", content: <MissionWhiteSlide /> },
  { id: "mission-dark", title: "Mission (Photo)", content: <MissionDarkSlide /> },
  { id: "emergency", title: "Emergency", content: <EmergencySlide /> },
  { id: "pr-stats", title: "PR Stats", content: <PRStatsSlide /> },
  { id: "section", title: "Section Divider", content: <SectionSlide /> },
  { id: "contact", title: "Contact", content: <ContactSlide /> },
];
