import { ReactNode } from "react";
import SlideLayout from "./SlideLayout";
import SlidePill from "./SlidePill";
import OmniStratLogo from "./OmniStratLogo";
import hero3d from "@/assets/hero-3d.jpg";
import missionBg from "@/assets/mission-bg.jpg";
import statsPhoto from "@/assets/stats-photo.jpg";
import teamPhoto from "@/assets/team-photo.jpg";
import officePhoto from "@/assets/office-photo.jpg";

export interface SlideData {
  id: string;
  title: string;
  component: (props: { slideNumber: number; totalSlides: number }) => ReactNode;
}

// ─── 1. TITLE SLIDE ───
const TitleSlide = ({ slideNumber, totalSlides }: { slideNumber: number; totalSlides: number }) => (
  <SlideLayout variant="white" slideNumber={slideNumber} totalSlides={totalSlides} showConfidentiality={false}>
    <div className="flex h-full">
      <div className="flex-1 flex flex-col justify-between p-[80px]">
        <OmniStratLogo />
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

// ─── 2. AGENDA ───
const AgendaSlide = ({ slideNumber, totalSlides }: { slideNumber: number; totalSlides: number }) => (
  <SlideLayout variant="white" slideNumber={slideNumber} totalSlides={totalSlides}>
    <div className="flex flex-col h-full p-[80px]">
      <div className="flex items-center justify-between">
        <OmniStratLogo />
        <SlidePill label="AGENDA" variant="light" />
      </div>
      <div className="flex-1 flex items-center">
        <div className="w-full grid grid-cols-2 gap-x-20 gap-y-2">
          {[
            { num: "01", label: "Our Mission & Vision" },
            { num: "02", label: "Crisis Management Framework" },
            { num: "03", label: "Public Relations Strategy" },
            { num: "04", label: "Emergency Response Protocol" },
            { num: "05", label: "Case Studies & Results" },
            { num: "06", label: "Team & Leadership" },
            { num: "07", label: "Next Steps & Contact" },
          ].map((item) => (
            <div key={item.num} className="flex items-center gap-8 py-6 border-b border-slide-foreground/8">
              <span className="text-[48px] font-extrabold text-slide-primary/20 w-[100px]">{item.num}</span>
              <span className="text-[32px] font-semibold">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </SlideLayout>
);

// ─── 3. MISSION (WHITE) ───
const MissionWhiteSlide = ({ slideNumber, totalSlides }: { slideNumber: number; totalSlides: number }) => (
  <SlideLayout variant="white" slideNumber={slideNumber} totalSlides={totalSlides}>
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

// ─── 4. MISSION (DARK PHOTO) ───
const MissionDarkSlide = ({ slideNumber, totalSlides }: { slideNumber: number; totalSlides: number }) => (
  <SlideLayout variant="dark" backgroundImage={missionBg} slideNumber={slideNumber} totalSlides={totalSlides}>
    <div className="flex flex-col items-center justify-center h-full text-center p-[80px]">
      <SlidePill label="OUR MISSION" variant="glass" />
      <h2 className="mt-10 text-[68px] font-semibold leading-[1.2] max-w-[1400px]">
        Our mission is to help clients navigate chaos with clarity, and turn high-pressure situations into strategic advantage.
      </h2>
    </div>
  </SlideLayout>
);

// ─── 5. QUOTE SLIDE ───
const QuoteSlide = ({ slideNumber, totalSlides }: { slideNumber: number; totalSlides: number }) => (
  <SlideLayout variant="white" slideNumber={slideNumber} totalSlides={totalSlides}>
    <div className="flex flex-col items-center justify-center h-full text-center p-[120px]">
      <div className="text-[160px] leading-none text-slide-primary/20 font-serif">"</div>
      <blockquote className="text-[52px] font-semibold leading-[1.3] max-w-[1200px] -mt-16">
        In every crisis lies the seed of opportunity. Our job is to find it before anyone else does.
      </blockquote>
      <div className="mt-12">
        <p className="text-[24px] font-bold">Founder & Managing Director</p>
        <p className="text-[20px] text-slide-muted">OmniStrat Group</p>
      </div>
    </div>
  </SlideLayout>
);

// ─── 6. TWO-COLUMN CONTENT ───
const TwoColumnSlide = ({ slideNumber, totalSlides }: { slideNumber: number; totalSlides: number }) => (
  <SlideLayout variant="white" slideNumber={slideNumber} totalSlides={totalSlides}>
    <div className="flex flex-col h-full p-[80px]">
      <div className="flex items-center justify-between mb-16">
        <SlidePill label="OUR APPROACH" variant="light" />
        <OmniStratLogo />
      </div>
      <h2 className="text-[64px] font-extrabold leading-[1.1] tracking-tight mb-16">
        Strategic crisis management in two pillars.
      </h2>
      <div className="flex-1 grid grid-cols-2 gap-16">
        <div>
          <div className="text-[80px] font-extrabold text-slide-primary/15 leading-none mb-4">01</div>
          <h3 className="text-[32px] font-bold mb-4">Proactive Defense</h3>
          <p className="text-[22px] text-slide-muted leading-relaxed">
            We build strategic frameworks before crises hit. Risk assessment, stakeholder mapping, and scenario planning ensure you're never caught off guard.
          </p>
        </div>
        <div>
          <div className="text-[80px] font-extrabold text-slide-primary/15 leading-none mb-4">02</div>
          <h3 className="text-[32px] font-bold mb-4">Reactive Precision</h3>
          <p className="text-[22px] text-slide-muted leading-relaxed">
            When the unexpected happens, we move fast. Real-time strategy, media coordination, and legal alignment to protect your reputation and interests.
          </p>
        </div>
      </div>
    </div>
  </SlideLayout>
);

// ─── 7. EMERGENCY SOLUTION (BLUE) ───
const EmergencySlide = ({ slideNumber, totalSlides }: { slideNumber: number; totalSlides: number }) => (
  <SlideLayout variant="blue" slideNumber={slideNumber} totalSlides={totalSlides}>
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

// ─── 8. SERVICES GRID ───
const ServicesSlide = ({ slideNumber, totalSlides }: { slideNumber: number; totalSlides: number }) => (
  <SlideLayout variant="white" slideNumber={slideNumber} totalSlides={totalSlides}>
    <div className="flex flex-col h-full p-[80px]">
      <div className="flex items-center justify-between mb-12">
        <SlidePill label="OUR SERVICES" variant="light" />
        <OmniStratLogo />
      </div>
      <h2 className="text-[56px] font-extrabold leading-[1.1] tracking-tight mb-16">
        What we do best.
      </h2>
      <div className="flex-1 grid grid-cols-3 gap-6">
        {[
          { icon: "🛡️", title: "Crisis Management", desc: "End-to-end crisis response from detection to resolution" },
          { icon: "📣", title: "Public Relations", desc: "Narrative control, media relations, and reputation management" },
          { icon: "⚖️", title: "Legal Strategy", desc: "Multi-jurisdictional legal coordination and compliance" },
          { icon: "🎯", title: "Government Affairs", desc: "Regulatory navigation and public policy strategy" },
          { icon: "📊", title: "Strategic Intelligence", desc: "OSINT, risk analysis, and competitive intelligence" },
          { icon: "🌐", title: "Digital Strategy", desc: "Online reputation, social media crisis, and digital forensics" },
        ].map((service) => (
          <div key={service.title} className="bg-slide-surface rounded-2xl p-8 flex flex-col">
            <span className="text-[40px] mb-4">{service.icon}</span>
            <h3 className="text-[24px] font-bold mb-3">{service.title}</h3>
            <p className="text-[18px] text-slide-muted leading-relaxed">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </SlideLayout>
);

// ─── 9. PR STATS ───
const PRStatsSlide = ({ slideNumber, totalSlides }: { slideNumber: number; totalSlides: number }) => (
  <SlideLayout variant="white" slideNumber={slideNumber} totalSlides={totalSlides}>
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

// ─── 10. PROCESS / TIMELINE ───
const ProcessSlide = ({ slideNumber, totalSlides }: { slideNumber: number; totalSlides: number }) => (
  <SlideLayout variant="white" slideNumber={slideNumber} totalSlides={totalSlides}>
    <div className="flex flex-col h-full p-[80px]">
      <SlidePill label="OUR PROCESS" variant="light" />
      <h2 className="mt-8 text-[56px] font-extrabold leading-[1.1] tracking-tight mb-16">
        From crisis to clarity in four steps.
      </h2>
      <div className="flex-1 flex items-center">
        <div className="grid grid-cols-4 gap-8 w-full">
          {[
            { step: "01", title: "Assess", desc: "Immediate threat evaluation and stakeholder analysis", color: "bg-slide-primary/5" },
            { step: "02", title: "Strategize", desc: "Multi-channel response plan with legal alignment", color: "bg-slide-primary/10" },
            { step: "03", title: "Execute", desc: "Coordinated deployment across media, legal, and policy", color: "bg-slide-primary/15" },
            { step: "04", title: "Recover", desc: "Reputation repair, monitoring, and resilience building", color: "bg-slide-primary/20" },
          ].map((item) => (
            <div key={item.step} className={`${item.color} rounded-2xl p-8 flex flex-col h-full`}>
              <span className="text-[56px] font-extrabold text-slide-primary">{item.step}</span>
              <h3 className="text-[28px] font-bold mt-4 mb-3">{item.title}</h3>
              <p className="text-[18px] text-slide-muted leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Connecting line */}
      <div className="absolute top-[55%] left-[120px] right-[120px] h-[2px] bg-slide-primary/10 -z-0" />
    </div>
  </SlideLayout>
);

// ─── 11. IMAGE + TEXT (LEFT) ───
const ImageTextLeftSlide = ({ slideNumber, totalSlides }: { slideNumber: number; totalSlides: number }) => (
  <SlideLayout variant="white" slideNumber={slideNumber} totalSlides={totalSlides}>
    <div className="flex h-full">
      <div className="w-[45%] bg-slide-surface">
        <img src={officePhoto} alt="Office" className="w-full h-full object-cover" />
      </div>
      <div className="flex-1 flex flex-col justify-center p-[80px]">
        <SlidePill label="WHY OMNISTRAT" variant="light" />
        <h2 className="mt-8 text-[56px] font-extrabold leading-[1.1] tracking-tight">
          Built for the moments that matter most.
        </h2>
        <p className="mt-8 text-[24px] text-slide-muted leading-relaxed">
          When reputations are on the line and the clock is ticking, organizations turn to OmniStrat. We bring together legal expertise, media intelligence, and strategic thinking under one roof.
        </p>
        <div className="mt-10 flex gap-6">
          <div className="bg-slide-surface rounded-xl px-6 py-4 text-center">
            <div className="text-[36px] font-extrabold text-slide-primary">24/7</div>
            <div className="text-[16px] text-slide-muted">Availability</div>
          </div>
          <div className="bg-slide-surface rounded-xl px-6 py-4 text-center">
            <div className="text-[36px] font-extrabold text-slide-primary">15+</div>
            <div className="text-[16px] text-slide-muted">Countries</div>
          </div>
          <div className="bg-slide-surface rounded-xl px-6 py-4 text-center">
            <div className="text-[36px] font-extrabold text-slide-primary">100%</div>
            <div className="text-[16px] text-slide-muted">Confidential</div>
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);

// ─── 12. COMPARISON SLIDE ───
const ComparisonSlide = ({ slideNumber, totalSlides }: { slideNumber: number; totalSlides: number }) => (
  <SlideLayout variant="white" slideNumber={slideNumber} totalSlides={totalSlides}>
    <div className="flex flex-col h-full p-[80px]">
      <SlidePill label="COMPARISON" variant="light" />
      <h2 className="mt-8 text-[52px] font-extrabold leading-[1.1] tracking-tight mb-12">
        Traditional vs. OmniStrat approach
      </h2>
      <div className="flex-1 grid grid-cols-2 gap-0">
        <div className="bg-slide-surface rounded-l-2xl p-10 flex flex-col gap-6">
          <h3 className="text-[28px] font-bold text-slide-muted mb-2">Traditional</h3>
          {["Reactive response only", "Siloed legal and PR teams", "Slow decision-making", "Limited international scope", "Standard media monitoring"].map((item) => (
            <div key={item} className="flex items-center gap-4 text-[22px] text-slide-muted">
              <span className="w-6 h-6 rounded-full bg-slide-muted/20 flex items-center justify-center text-[14px]">✕</span>
              {item}
            </div>
          ))}
        </div>
        <div className="bg-slide-primary rounded-r-2xl p-10 flex flex-col gap-6 text-white">
          <h3 className="text-[28px] font-bold mb-2">OmniStrat</h3>
          {["Proactive & reactive strategies", "Integrated multidisciplinary teams", "Real-time decision support", "Multi-jurisdictional coverage", "Advanced OSINT & intelligence"].map((item) => (
            <div key={item} className="flex items-center gap-4 text-[22px]">
              <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-[14px]">✓</span>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  </SlideLayout>
);

// ─── 13. TEAM SLIDE ───
const TeamSlide = ({ slideNumber, totalSlides }: { slideNumber: number; totalSlides: number }) => (
  <SlideLayout variant="white" slideNumber={slideNumber} totalSlides={totalSlides}>
    <div className="flex flex-col h-full p-[80px]">
      <div className="flex items-center justify-between mb-12">
        <SlidePill label="LEADERSHIP" variant="light" />
        <OmniStratLogo />
      </div>
      <h2 className="text-[56px] font-extrabold leading-[1.1] tracking-tight mb-16">
        The team behind your strategy.
      </h2>
      <div className="flex-1 grid grid-cols-4 gap-8">
        {[
          { name: "Name Surname", role: "Managing Director", specialty: "Crisis & Strategy" },
          { name: "Name Surname", role: "Head of PR", specialty: "Media Relations" },
          { name: "Name Surname", role: "Legal Director", specialty: "Multi-jurisdictional" },
          { name: "Name Surname", role: "Intelligence Lead", specialty: "OSINT & Analysis" },
        ].map((person, i) => (
          <div key={i} className="flex flex-col">
            <div className="aspect-[3/4] bg-slide-surface rounded-2xl mb-6 overflow-hidden">
              <img src={teamPhoto} alt={person.name} className="w-full h-full object-cover opacity-60" />
            </div>
            <h3 className="text-[24px] font-bold">{person.name}</h3>
            <p className="text-[18px] text-slide-primary font-semibold">{person.role}</p>
            <p className="text-[16px] text-slide-muted mt-1">{person.specialty}</p>
          </div>
        ))}
      </div>
    </div>
  </SlideLayout>
);

// ─── 14. CASE STUDY ───
const CaseStudySlide = ({ slideNumber, totalSlides }: { slideNumber: number; totalSlides: number }) => (
  <SlideLayout variant="dark" backgroundImage={missionBg} slideNumber={slideNumber} totalSlides={totalSlides}>
    <div className="flex flex-col h-full p-[80px]">
      <SlidePill label="CASE STUDY" variant="glass" />
      <div className="flex-1 flex flex-col justify-center max-w-[1000px]">
        <h2 className="text-[64px] font-extrabold leading-[1.1]">
          Multi-jurisdictional crisis resolved in 72 hours.
        </h2>
        <p className="mt-8 text-[24px] text-white/70 leading-relaxed">
          A Fortune 500 client faced simultaneous regulatory investigations across three countries. Our integrated team coordinated legal defense, media strategy, and government relations to contain the crisis before it escalated.
        </p>
        <div className="mt-12 grid grid-cols-3 gap-8">
          {[
            { num: "3", label: "Countries involved" },
            { num: "72h", label: "Resolution time" },
            { num: "0", label: "Reputational damage" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-[52px] font-extrabold text-slide-primary">{stat.num}</div>
              <p className="text-[18px] text-white/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </SlideLayout>
);

// ─── 15. BIG NUMBER / DATA HIGHLIGHT ───
const BigNumberSlide = ({ slideNumber, totalSlides }: { slideNumber: number; totalSlides: number }) => (
  <SlideLayout variant="blue" slideNumber={slideNumber} totalSlides={totalSlides}>
    <div className="flex items-center justify-center h-full p-[80px]">
      <div className="grid grid-cols-3 gap-16 text-center">
        {[
          { num: "98%", label: "Client retention rate", sub: "Over the past 5 years" },
          { num: "500+", label: "Crises resolved", sub: "Across 15 countries" },
          { num: "<2h", label: "Response time", sub: "Average first engagement" },
        ].map((stat) => (
          <div key={stat.label}>
            <div className="text-[100px] font-extrabold leading-none">{stat.num}</div>
            <p className="text-[26px] font-semibold mt-4">{stat.label}</p>
            <p className="text-[18px] text-white/60 mt-2">{stat.sub}</p>
          </div>
        ))}
      </div>
    </div>
  </SlideLayout>
);

// ─── 16. SECTION DIVIDER ───
const SectionDividerSlide = ({ slideNumber, totalSlides }: { slideNumber: number; totalSlides: number }) => (
  <SlideLayout variant="white" slideNumber={slideNumber} totalSlides={totalSlides}>
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

// ─── 17. THANK YOU SLIDE ───
const ThankYouSlide = ({ slideNumber, totalSlides }: { slideNumber: number; totalSlides: number }) => (
  <SlideLayout variant="white" slideNumber={slideNumber} totalSlides={totalSlides} showConfidentiality={false}>
    <div className="flex flex-col items-center justify-center h-full text-center p-[80px]">
      <OmniStratLogo className="mb-16" />
      <h2 className="text-[100px] font-extrabold leading-none tracking-tight text-slide-primary">
        THANK YOU
      </h2>
      <p className="mt-8 text-[28px] text-slide-muted max-w-[700px]">
        We look forward to partnering with you on your next challenge.
      </p>
      <div className="mt-16 flex gap-16 text-[20px] text-slide-muted">
        <span>hello@omnistrat.com</span>
        <span>+30 210 2475500</span>
        <span>www.omnistratgroup.com</span>
      </div>
    </div>
  </SlideLayout>
);

// ─── 18. CONTACT ───
const ContactSlide = ({ slideNumber, totalSlides }: { slideNumber: number; totalSlides: number }) => (
  <SlideLayout variant="white" slideNumber={slideNumber} totalSlides={totalSlides} showConfidentiality={false}>
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
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden opacity-5 pointer-events-none">
        <span className="text-[200px] font-extrabold tracking-tighter text-slide-foreground">OmniStrat</span>
      </div>
    </div>
  </SlideLayout>
);

export const slides: SlideData[] = [
  { id: "title", title: "Title", component: TitleSlide },
  { id: "agenda", title: "Agenda", component: AgendaSlide },
  { id: "mission-white", title: "Our Mission", component: MissionWhiteSlide },
  { id: "mission-dark", title: "Mission (Photo)", component: MissionDarkSlide },
  { id: "quote", title: "Quote", component: QuoteSlide },
  { id: "two-column", title: "Our Approach", component: TwoColumnSlide },
  { id: "services", title: "Services", component: ServicesSlide },
  { id: "emergency", title: "Emergency", component: EmergencySlide },
  { id: "pr-stats", title: "PR Stats", component: PRStatsSlide },
  { id: "process", title: "Process", component: ProcessSlide },
  { id: "image-text", title: "Why OmniStrat", component: ImageTextLeftSlide },
  { id: "comparison", title: "Comparison", component: ComparisonSlide },
  { id: "team", title: "Team", component: TeamSlide },
  { id: "case-study", title: "Case Study", component: CaseStudySlide },
  { id: "big-numbers", title: "Key Numbers", component: BigNumberSlide },
  { id: "section-divider", title: "Section Divider", component: SectionDividerSlide },
  { id: "thank-you", title: "Thank You", component: ThankYouSlide },
  { id: "contact", title: "Contact", component: ContactSlide },
];
