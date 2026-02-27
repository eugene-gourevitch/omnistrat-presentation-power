import { ReactNode } from "react";
import SlideLayout from "./SlideLayout";
import SlidePill from "./SlidePill";
import OmniStratLogo from "./OmniStratLogo";
import hero3d from "@/assets/hero-3d.jpg";
import missionBg from "@/assets/mission-bg.jpg";
import statsPhoto from "@/assets/stats-photo.jpg";
import officePhoto from "@/assets/office-photo.jpg";
import eugenePhoto from "@/assets/team/eugene-gourevitch.png";
import michaelPhoto from "@/assets/team/michael-fox-rabinovitz.png";
import alexandraPhoto from "@/assets/team/alexandra-katrin.jpg";
import zacharyPhoto from "@/assets/team/zachary-intrater.png";
import elchinPhoto from "@/assets/team/elchin-khalilov.jpg";
import keithPhoto from "@/assets/team/keith-silverstein.png";

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
          <h1 className="text-[100px] font-bold leading-[1.05] tracking-tight text-slide-primary">
            THE 24-HOUR<br />SWAT TEAM
          </h1>
          <p className="mt-8 text-[24px] text-slide-muted max-w-[620px] leading-relaxed">
            Integrated crisis response, sanctions navigation, and strategic advisory for elite institutional investors when standard advisors fall short.
          </p>
          <p className="mt-6 text-[16px] text-slide-muted/60 tracking-widest uppercase">
            Confidential · February 2026 · 1701 Pennsylvania Ave NW, Washington DC
          </p>
        </div>
      </div>
      <div className="w-[45%] flex items-center justify-center bg-slide-surface">
        <img src={hero3d} alt="Strategic visual" className="w-[85%] h-auto object-contain" />
      </div>
    </div>
  </SlideLayout>
);

// ─── 2. EXECUTIVE SUMMARY (Two-Column) ───
const ExecSummarySlide = ({ slideNumber, totalSlides }: { slideNumber: number; totalSlides: number }) => (
  <SlideLayout variant="white" slideNumber={slideNumber} totalSlides={totalSlides}>
    <div className="flex flex-col h-full p-[80px]">
      <div className="flex items-center justify-between mb-12">
        <SlidePill label="EXECUTIVE SUMMARY" variant="light" />
        <OmniStratLogo />
      </div>
      <p className="text-[24px] text-slide-muted max-w-[1400px] leading-relaxed mb-12">
        When portfolio companies face multi-front crises, fragmented advisors fail. OmniStrat deploys integrated senior teams within 24 hours.
      </p>
      <div className="flex-1 grid grid-cols-2 gap-16">
        <div>
          <h3 className="text-[32px] font-bold mb-6">The Integrated Alternative</h3>
          <p className="text-[20px] text-slide-muted leading-relaxed">
            96% of mid-market PE deals fail to meet pre-deal expectations. When crises strike across jurisdictions, the conventional model — hiring separate law firms, PR agencies, lobbyists, and investigators — produces conflicting guidance, dangerous delays, and catastrophic gaps.
          </p>
          <p className="text-[20px] text-slide-muted leading-relaxed mt-4">
            OmniStrat Group is the integrated alternative: a single senior team spanning legal coordination, strategic communications, government relations, sanctions compliance, and investigative intelligence — deployed globally within 24 hours.
          </p>
        </div>
        <div className="space-y-10">
          <div className="bg-slide-surface rounded-2xl p-8">
            <h4 className="text-[24px] font-bold text-slide-primary mb-3">The Ask</h4>
            <p className="text-[20px] text-slide-muted leading-relaxed">
              Strategic partnership discussion for rapid-response advisory across your portfolio. Not a sales pitch — an operational alliance.
            </p>
          </div>
          <div className="bg-slide-surface rounded-2xl p-8">
            <h4 className="text-[24px] font-bold text-slide-primary mb-3">Proof of Concept</h4>
            <p className="text-[20px] text-slide-muted leading-relaxed">
              Active multi-jurisdictional engagement — United Cement Group — involving political risk, cross-border legal complexity, and reputation management across 4+ countries simultaneously.
            </p>
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);

// ─── 3. SECTION DIVIDER — The Problem ───
const SectionProblemSlide = ({ slideNumber, totalSlides }: { slideNumber: number; totalSlides: number }) => (
  <SlideLayout variant="white" slideNumber={slideNumber} totalSlides={totalSlides}>
    <div className="flex h-full">
      <div className="flex-1 flex flex-col justify-center p-[80px]">
        <SlidePill label="SECTION ONE" variant="light" />
        <h2 className="mt-10 text-[80px] font-extrabold leading-[1.05] tracking-tight">
          The Problem PE Firms Face
        </h2>
        <p className="mt-8 text-[24px] text-slide-muted max-w-[700px] leading-relaxed">
          Crises destroy portfolio value faster than traditional advisors can mobilize. Each week of delayed response doubles the cost of eventual recovery.
        </p>
      </div>
      <div className="w-[35%] bg-slide-surface" />
    </div>
    <div className="absolute bottom-[80px] left-[80px] text-[120px] font-extrabold text-slide-primary/10">
      /01
    </div>
  </SlideLayout>
);

// ─── 4. BIG NUMBERS (Blue, 4-col) ───
const BigNumbersSlide = ({ slideNumber, totalSlides }: { slideNumber: number; totalSlides: number }) => (
  <SlideLayout variant="blue" slideNumber={slideNumber} totalSlides={totalSlides}>
    <div className="flex flex-col h-full p-[80px]">
      <SlidePill label="THE PROBLEM QUANTIFIED" variant="glass" />
      <p className="mt-6 text-[24px] text-white/80 max-w-[1000px]">
        Portfolio companies face crises that destroy value faster than traditional advisors can respond
      </p>
      <div className="flex-1 flex items-center">
        <div className="grid grid-cols-4 gap-12 w-full">
          {[
            { num: "96%", label: "of mid-market PE deals", sub: "fail to meet pre-deal expectations" },
            { num: "10×", label: "PE-owned companies are", sub: "more likely to file for bankruptcy" },
            { num: "20%", label: "of top PE portfolio assets", sub: "are exposed to geopolitical risk" },
            { num: "2×", label: "each week of delayed crisis", sub: "response doubles recovery cost" },
          ].map((stat) => (
            <div key={stat.num} className="text-center">
              <div className="text-[80px] font-extrabold leading-none">{stat.num}</div>
              <p className="text-[20px] font-semibold mt-4">{stat.label}</p>
              <p className="text-[16px] text-white/60 mt-2">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
      <p className="text-[14px] text-white/40">Sources: BCG, Bain Capital Research, PE Industry Reports 2024–2025</p>
    </div>
  </SlideLayout>
);

// ─── 5. QUOTE — The Gap ───
const GapQuoteSlide = ({ slideNumber, totalSlides }: { slideNumber: number; totalSlides: number }) => (
  <SlideLayout variant="white" slideNumber={slideNumber} totalSlides={totalSlides}>
    <div className="flex flex-col h-full p-[80px]">
      <SlidePill label="THE GAP" variant="light" />
      <div className="flex-1 flex flex-col justify-center">
        <div className="text-[140px] leading-none text-slide-primary/20 font-serif">"</div>
        <blockquote className="text-[44px] font-semibold leading-[1.3] max-w-[1200px] -mt-12">
          Like juggling five separate consultants and hoping they sync up. Rarely effective. Each has their own agenda, their own billing clock, their own definition of 'urgent.'
        </blockquote>
        <p className="mt-6 text-[20px] text-slide-muted">— Managing Director, Major PE Firm (Industry Research)</p>
        <div className="mt-12">
          <h4 className="text-[22px] font-bold mb-6 text-slide-primary">THE FRAGMENTED MODEL</h4>
          <div className="grid grid-cols-5 gap-4">
            {[
              { role: "Law Firm", issue: "Focused on legal exposure only" },
              { role: "PR Agency", issue: "Managing narrative in isolation" },
              { role: "GR Firm", issue: "Lobbying without strategic context" },
              { role: "Investigator", issue: "Gathering intelligence nobody synthesizes" },
              { role: "Restructuring", issue: "Arriving after value is destroyed" },
            ].map((item) => (
              <div key={item.role} className="bg-slide-surface rounded-xl p-5">
                <p className="text-[18px] font-bold">{item.role}</p>
                <p className="text-[15px] text-slide-muted mt-1">{item.issue}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);

// ─── 6. SERVICES GRID — Investor Pain Points ───
const PainPointsSlide = ({ slideNumber, totalSlides }: { slideNumber: number; totalSlides: number }) => (
  <SlideLayout variant="white" slideNumber={slideNumber} totalSlides={totalSlides}>
    <div className="flex flex-col h-full p-[80px]">
      <div className="flex items-center justify-between mb-12">
        <SlidePill label="INVESTOR PAIN POINTS" variant="light" />
        <OmniStratLogo />
      </div>
      <h2 className="text-[52px] font-extrabold leading-[1.1] tracking-tight mb-16">
        The challenges keeping CIOs and portfolio leaders awake at night
      </h2>
      <div className="flex-1 grid grid-cols-3 gap-8">
        {[
          {
            icon: "📊",
            title: "Financial / Operational",
            items: ["Covenant breaches and liquidity crises", "Management departures during turnarounds", "Asset value deterioration"],
          },
          {
            icon: "🌐",
            title: "Geopolitical / Regulatory",
            items: ["Sanctions exposure and OFAC scrutiny", "CFIUS and cross-border regulatory blocks", "FCPA investigations and compliance failures"],
          },
          {
            icon: "⚖️",
            title: "Reputational / Legal",
            items: ["Negative media cascading to fund reputation", "Activist campaigns targeting sponsors", "Multi-jurisdictional litigation complexity"],
          },
        ].map((card) => (
          <div key={card.title} className="bg-slide-surface rounded-2xl p-8 flex flex-col">
            <span className="text-[40px] mb-4">{card.icon}</span>
            <h3 className="text-[26px] font-bold mb-4">{card.title}</h3>
            <ul className="space-y-3">
              {card.items.map((item) => (
                <li key={item} className="text-[18px] text-slide-muted leading-relaxed flex items-start gap-3">
                  <span className="text-slide-primary mt-1">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </SlideLayout>
);

// ─── 7. MISSION DARK — Dramatic Statement ───
const DramaticStatementSlide = ({ slideNumber, totalSlides }: { slideNumber: number; totalSlides: number }) => (
  <SlideLayout variant="dark" backgroundImage={missionBg} slideNumber={slideNumber} totalSlides={totalSlides}>
    <div className="flex flex-col items-center justify-center h-full text-center p-[80px]">
      <h2 className="text-[72px] font-semibold leading-[1.2] max-w-[1400px]">
        A single zero can spoil a fund's returns. Every portfolio company is one crisis away from write-down.
      </h2>
    </div>
  </SlideLayout>
);

// ─── 8. SECTION DIVIDER — The Solution ───
const SectionSolutionSlide = ({ slideNumber, totalSlides }: { slideNumber: number; totalSlides: number }) => (
  <SlideLayout variant="white" slideNumber={slideNumber} totalSlides={totalSlides}>
    <div className="flex h-full">
      <div className="flex-1 flex flex-col justify-center p-[80px]">
        <SlidePill label="SECTION TWO" variant="light" />
        <h2 className="mt-10 text-[80px] font-extrabold leading-[1.05] tracking-tight">
          The OmniStrat Solution
        </h2>
        <p className="mt-8 text-[24px] text-slide-muted max-w-[700px] leading-relaxed">
          One senior team. Five integrated capabilities. 24-hour global deployment. We don't just navigate crises — we orchestrate victories.
        </p>
      </div>
      <div className="w-[35%] bg-slide-surface" />
    </div>
    <div className="absolute bottom-[80px] left-[80px] text-[120px] font-extrabold text-slide-primary/10">
      /02
    </div>
  </SlideLayout>
);

// ─── 9. TWO-COLUMN — SWAT Team Model ───
const SwatModelSlide = ({ slideNumber, totalSlides }: { slideNumber: number; totalSlides: number }) => (
  <SlideLayout variant="white" slideNumber={slideNumber} totalSlides={totalSlides}>
    <div className="flex flex-col h-full p-[80px]">
      <div className="flex items-center justify-between mb-12">
        <SlidePill label="THE SWAT TEAM MODEL" variant="light" />
        <OmniStratLogo />
      </div>
      <h2 className="text-[52px] font-extrabold leading-[1.1] tracking-tight mb-16">
        One senior team covering all dimensions in unison — deployed within 24 hours
      </h2>
      <div className="flex-1 grid grid-cols-2 gap-16">
        {[
          {
            num: "01",
            title: "Senior-Only Teams",
            desc: "No junior analysts learning on your emergency. Every team member has 15+ years of relevant experience.",
          },
          {
            num: "02",
            title: "Integrated Operations",
            desc: "Legal, communications, government relations, and intelligence coordinated under a single command structure.",
          },
          {
            num: "03",
            title: "24-Hour Global Deployment",
            desc: "Washington DC, London, Istanbul, Riga. Operational across U.S., EU, UK, Central Asia, and Africa.",
          },
          {
            num: "04",
            title: "Direct C-Suite Access",
            desc: "Direct CEO and Board engagement — never filtered through middle management layers.",
          },
        ].map((item) => (
          <div key={item.num}>
            <div className="text-[72px] font-extrabold text-slide-primary/15 leading-none mb-3">{item.num}</div>
            <h3 className="text-[28px] font-bold mb-3">{item.title}</h3>
            <p className="text-[20px] text-slide-muted leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </SlideLayout>
);

// ─── 10. PROCESS — Five Integrated Capabilities ───
const CapabilitiesSlide = ({ slideNumber, totalSlides }: { slideNumber: number; totalSlides: number }) => (
  <SlideLayout variant="white" slideNumber={slideNumber} totalSlides={totalSlides}>
    <div className="flex flex-col h-full p-[80px]">
      <SlidePill label="FIVE INTEGRATED CAPABILITIES" variant="light" />
      <h2 className="mt-8 text-[44px] font-extrabold leading-[1.1] tracking-tight mb-12">
        Each capability reinforces the others — integration multiplies impact
      </h2>
      <div className="flex-1 flex items-center">
        <div className="grid grid-cols-5 gap-6 w-full">
          {[
            { step: "01", title: "Sanctions Compliance", desc: "OFAC navigation, delisting strategy, corporate restructuring. Guided by the RUSAL/EN+ model.", color: "bg-slide-primary/5" },
            { step: "02", title: "Crisis Management", desc: "Prevention → Response → Recovery. Real-time stakeholder mapping, crisis communication protocols.", color: "bg-slide-primary/10" },
            { step: "03", title: "Government Relations", desc: "Strategic diplomacy — direct engagement with lawmakers across U.S., EU, and UK.", color: "bg-slide-primary/15" },
            { step: "04", title: "Strategic Comms", desc: "Narrative architecture, perception engineering, media outreach, investor communications.", color: "bg-slide-primary/20" },
            { step: "05", title: "Investigative Intel", desc: "Via K2 Integrity — due diligence, asset tracing, compliance verification, financial crimes.", color: "bg-slide-primary/25" },
          ].map((item) => (
            <div key={item.step} className={`${item.color} rounded-2xl p-6 flex flex-col h-full`}>
              <span className="text-[48px] font-extrabold text-slide-primary">{item.step}</span>
              <h3 className="text-[22px] font-bold mt-3 mb-3">{item.title}</h3>
              <p className="text-[15px] text-slide-muted leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </SlideLayout>
);

// ─── 11. MISSION DARK — Philosophy ───
const PhilosophySlide = ({ slideNumber, totalSlides }: { slideNumber: number; totalSlides: number }) => (
  <SlideLayout variant="dark" backgroundImage={missionBg} slideNumber={slideNumber} totalSlides={totalSlides}>
    <div className="flex flex-col h-full p-[80px]">
      <SlidePill label="OUR PHILOSOPHY" variant="glass" />
      <div className="flex-1 flex flex-col justify-center max-w-[1200px]">
        <h2 className="text-[56px] font-semibold leading-[1.2]">
          Crisis management isn't about damage control — it's about strategic transformation. When others see problems, we see the opening moves of victory.
        </h2>
        <div className="mt-16 grid grid-cols-3 gap-8">
          {[
            { title: "Prevention", desc: "Proactive risk identification, stakeholder mapping, scenario planning before crises materialize." },
            { title: "Response", desc: "24-hour deployment, integrated command structure, real-time coordination across legal, media, and government tracks." },
            { title: "Recovery", desc: "Long-term reputation restoration, regulatory positioning, and turning defensive postures into strategic advantages." },
          ].map((item) => (
            <div key={item.title} className="bg-white/10 backdrop-blur rounded-2xl p-8">
              <h3 className="text-[24px] font-bold mb-3">{item.title}</h3>
              <p className="text-[17px] text-white/70 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </SlideLayout>
);

// ─── 12. SECTION DIVIDER — Proof of Capability ───
const SectionProofSlide = ({ slideNumber, totalSlides }: { slideNumber: number; totalSlides: number }) => (
  <SlideLayout variant="white" slideNumber={slideNumber} totalSlides={totalSlides}>
    <div className="flex h-full">
      <div className="flex-1 flex flex-col justify-center p-[80px]">
        <SlidePill label="SECTION THREE" variant="light" />
        <h2 className="mt-10 text-[80px] font-extrabold leading-[1.05] tracking-tight">
          Proof of Capability
        </h2>
        <p className="mt-8 text-[24px] text-slide-muted max-w-[700px] leading-relaxed">
          12+ strategic victories across 3 continents. From African mining standoffs to Central Asian industrial crises — real outcomes, not theoretical frameworks.
        </p>
      </div>
      <div className="w-[35%] bg-slide-surface" />
    </div>
    <div className="absolute bottom-[80px] left-[80px] text-[120px] font-extrabold text-slide-primary/10">
      /03
    </div>
  </SlideLayout>
);

// ─── 13. IMAGE + TEXT — UCG Case Study ───
const UCGOverviewSlide = ({ slideNumber, totalSlides }: { slideNumber: number; totalSlides: number }) => (
  <SlideLayout variant="white" slideNumber={slideNumber} totalSlides={totalSlides}>
    <div className="flex h-full">
      <div className="w-[45%] bg-slide-surface">
        <img src={officePhoto} alt="Case study" className="w-full h-full object-cover" />
      </div>
      <div className="flex-1 flex flex-col justify-center p-[80px]">
        <SlidePill label="CASE STUDY — UCG / SHADMANOV" variant="light" />
        <h2 className="mt-8 text-[44px] font-extrabold leading-[1.1] tracking-tight">
          Defending Industrial Empire from State Seizure
        </h2>
        <p className="mt-6 text-[20px] text-slide-muted leading-relaxed">
          United Cement Group is Central Asia's largest cement producer — controlling approximately 50% of Uzbekistan's cement capacity, with 10 million tons of annual production and 7,000+ employees across three countries.
        </p>
        <p className="mt-4 text-[20px] text-slide-muted leading-relaxed">
          In December 2024, founder Ulugbek Shadmanov was detained by UAE special forces at his Dubai residence. He was held in isolation without legal access, then extradited to Uzbekistan in January 2025.
        </p>
        <div className="mt-10 flex gap-6">
          {[
            { num: "50%", label: "Cement capacity" },
            { num: "7,000+", label: "Employees" },
            { num: "4+", label: "Jurisdictions" },
          ].map((stat) => (
            <div key={stat.label} className="bg-slide-surface rounded-xl px-6 py-4 text-center">
              <div className="text-[32px] font-extrabold text-slide-primary">{stat.num}</div>
              <div className="text-[14px] text-slide-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </SlideLayout>
);

// ─── 14. COMPARISON — Multi-Front Challenge ───
const MultiFrontSlide = ({ slideNumber, totalSlides }: { slideNumber: number; totalSlides: number }) => (
  <SlideLayout variant="white" slideNumber={slideNumber} totalSlides={totalSlides}>
    <div className="flex flex-col h-full p-[80px]">
      <SlidePill label="CASE STUDY — MULTI-FRONT CHALLENGE" variant="light" />
      <h2 className="mt-8 text-[44px] font-extrabold leading-[1.1] tracking-tight mb-12">
        Conventional advisors would fragment — each seeing only their piece of a five-dimensional crisis
      </h2>
      <div className="flex-1 grid grid-cols-5 gap-4">
        {[
          { title: "Political", items: ["Alleged connection to presidential family", "Rival faction allegations", "State seizure of industrial assets"] },
          { title: "Legal", items: ["UAE detention without due process", "Uzbek extradition", "International treaty violations", "Congressional testimony"] },
          { title: "Media", items: ["International press coverage", "Competing narratives", "Strategic media counter-offensive required"] },
          { title: "Regulatory", items: ["U.S. Treasury investigation", "Sanctions allegations", "Cross-border compliance complexity"] },
          { title: "Human Rights", items: ["Alleged torture risk", "Due Process violations", "International treaty violations", "International advocacy"] },
        ].map((col) => (
          <div key={col.title} className="bg-slide-surface rounded-2xl p-6">
            <h3 className="text-[20px] font-bold mb-4 text-slide-primary">{col.title}</h3>
            <ul className="space-y-2">
              {col.items.map((item) => (
                <li key={item} className="text-[14px] text-slide-muted leading-relaxed">• {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="mt-6 text-[18px] font-semibold text-slide-primary">
        OmniStrat's integrated approach: single strategy coordinated across all five dimensions simultaneously
      </p>
    </div>
  </SlideLayout>
);

// ─── 15. CASE STUDY DARK — Integrated Response ───
const IntegratedResponseSlide = ({ slideNumber, totalSlides }: { slideNumber: number; totalSlides: number }) => (
  <SlideLayout variant="dark" backgroundImage={missionBg} slideNumber={slideNumber} totalSlides={totalSlides}>
    <div className="flex flex-col h-full p-[80px]">
      <SlidePill label="CASE STUDY — INTEGRATED RESPONSE" variant="glass" />
      <div className="flex-1 flex flex-col justify-center">
        <h2 className="text-[48px] font-extrabold leading-[1.1] mb-10">
          Single strategy coordinated across legal, communications, government, and investigative tracks
        </h2>
        <div className="grid grid-cols-2 gap-8">
          {[
            { title: "Legal Coordination", desc: "Coordinated with Agnifilo Intrater LLP and Amsterdam & Partners LLP for U.S. criminal defense and international human rights advocacy." },
            { title: "Strategic Communications", desc: "Foley Square press conference — international media strategy, controlled narrative architecture, investor communication management." },
            { title: "Government Engagement", desc: "U.S. Congressional engagement. Multi-government diplomatic pressure across Washington, London, and regional capitals." },
            { title: "Human Rights Track", desc: "Due Process International. Treaty violation documentation. International advocacy campaign orchestration." },
          ].map((track) => (
            <div key={track.title} className="bg-white/10 backdrop-blur rounded-2xl p-8">
              <h3 className="text-[24px] font-bold mb-3">{track.title}</h3>
              <p className="text-[17px] text-white/70 leading-relaxed">{track.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <p className="text-[16px] text-white/50 uppercase tracking-wider mb-3">Coalition Partners</p>
          <p className="text-[18px] text-white/80">Agnifilo Intrater LLP · Amsterdam & Partners LLP · Due Process International</p>
        </div>
      </div>
    </div>
  </SlideLayout>
);

// ─── 16. SERVICES GRID — Track Record ───
const TrackRecordSlide = ({ slideNumber, totalSlides }: { slideNumber: number; totalSlides: number }) => (
  <SlideLayout variant="white" slideNumber={slideNumber} totalSlides={totalSlides}>
    <div className="flex flex-col h-full p-[80px]">
      <div className="flex items-center justify-between mb-12">
        <SlidePill label="TRACK RECORD" variant="light" />
        <OmniStratLogo />
      </div>
      <h2 className="text-[52px] font-extrabold leading-[1.1] tracking-tight mb-16">
        Select engagements demonstrating full-spectrum strategic capability
      </h2>
      <div className="flex-1 grid grid-cols-3 gap-8">
        {[
          {
            icon: "⛏️",
            region: "Africa · 2025",
            title: "Mining License Crisis → Strategic Investment Victory",
            desc: "West African gold mining license under political pressure. Transformed a defensive position into strengthened regional market advantage. $144M in projected cash flow preserved.",
            tag: "Multi-party coordination: Africa, Europe, Americas",
          },
          {
            icon: "🏛️",
            region: "Europe · 2022",
            title: "Political Persecution → Protected Status",
            desc: "Transformed existential political threat into diplomatic leverage and secured protected status for client facing hostile government action across multiple jurisdictions.",
            tag: "Multi-jurisdictional legal + diplomatic strategy",
          },
          {
            icon: "🔍",
            region: "International · 2019",
            title: "INTERPOL Weaponization → Legal Victory",
            desc: "Reversed politically-motivated abuse of INTERPOL Red Notice system. Demonstrated how international law enforcement can be turned from threat to vindication.",
            tag: "Cross-border legal + communications strategy",
          },
        ].map((card) => (
          <div key={card.title} className="bg-slide-surface rounded-2xl p-8 flex flex-col">
            <span className="text-[36px] mb-3">{card.icon}</span>
            <p className="text-[14px] text-slide-primary font-semibold uppercase tracking-wider mb-2">{card.region}</p>
            <h3 className="text-[22px] font-bold mb-3">{card.title}</h3>
            <p className="text-[17px] text-slide-muted leading-relaxed flex-1">{card.desc}</p>
            <p className="text-[14px] text-slide-muted/70 mt-4 pt-4 border-t border-slide-foreground/8">{card.tag}</p>
          </div>
        ))}
      </div>
    </div>
  </SlideLayout>
);

// ─── 17. SECTION DIVIDER — Leadership ───
const SectionLeadershipSlide = ({ slideNumber, totalSlides }: { slideNumber: number; totalSlides: number }) => (
  <SlideLayout variant="white" slideNumber={slideNumber} totalSlides={totalSlides}>
    <div className="flex h-full">
      <div className="flex-1 flex flex-col justify-center p-[80px]">
        <SlidePill label="SECTION FOUR" variant="light" />
        <h2 className="mt-10 text-[80px] font-extrabold leading-[1.05] tracking-tight">
          Leadership & Advisory Board
        </h2>
        <p className="mt-8 text-[24px] text-slide-muted max-w-[700px] leading-relaxed">
          Former strategic advisors, investment bankers, federal prosecutors, and intelligence professionals. 125+ years of combined experience.
        </p>
      </div>
      <div className="w-[35%] bg-slide-surface" />
    </div>
    <div className="absolute bottom-[80px] left-[80px] text-[120px] font-extrabold text-slide-primary/10">
      /04
    </div>
  </SlideLayout>
);

// ─── 18. TEAM — Leadership (3-col with photos + bios) ───
const LeadershipSlide = ({ slideNumber, totalSlides }: { slideNumber: number; totalSlides: number }) => (
  <SlideLayout variant="white" slideNumber={slideNumber} totalSlides={totalSlides}>
    <div className="flex flex-col h-full p-[80px]">
      <div className="flex items-center justify-between mb-8">
        <SlidePill label="LEADERSHIP" variant="light" />
        <OmniStratLogo />
      </div>
      <h2 className="text-[44px] font-extrabold leading-[1.1] tracking-tight mb-10">
        Senior practitioners — not consultants — who have navigated these crises firsthand
      </h2>
      <div className="flex-1 grid grid-cols-3 gap-10">
        {[
          {
            name: "Eugene Gourevitch",
            role: "President & Co-Founder",
            photo: eugenePhoto,
            bio: "Seasoned investment banker, serial entrepreneur, and strategic advisor. Decades of experience at the intersection of global finance, crisis management, and public affairs. Managed and advised on billions in private and public assets.",
          },
          {
            name: "Michael Fox-Rabinovitz",
            role: "VP, Corporate Finance",
            photo: michaelPhoto,
            bio: "25+ years developing investment strategies. Wharton BS Economics, Columbia MBA. CFA, CAIA, FRM designations. Experience across fixed income, structured products, alternatives, energy, and private markets.",
          },
          {
            name: "Alexandra Katrin",
            role: "Chief Financial Officer",
            photo: alexandraPhoto,
            bio: "20+ years leading finance, accounting, and governance across multinational organizations. Corporate Controller, CFO, Finance Director, and Audit Committee Chair experience. US GAAP and IFRS expertise.",
          },
        ].map((person) => (
          <div key={person.name} className="flex flex-col">
            <div className="aspect-[4/3] bg-slide-surface rounded-2xl mb-5 overflow-hidden">
              <img src={person.photo} alt={person.name} className="w-full h-full object-cover" />
            </div>
            <h3 className="text-[24px] font-bold">{person.name}</h3>
            <p className="text-[18px] text-slide-primary font-semibold">{person.role}</p>
            <p className="text-[15px] text-slide-muted mt-2 leading-relaxed">{person.bio}</p>
          </div>
        ))}
      </div>
    </div>
  </SlideLayout>
);

// ─── 19. TEAM — Advisory Board (3-col) ───
const AdvisoryBoardSlide = ({ slideNumber, totalSlides }: { slideNumber: number; totalSlides: number }) => (
  <SlideLayout variant="white" slideNumber={slideNumber} totalSlides={totalSlides}>
    <div className="flex flex-col h-full p-[80px]">
      <div className="flex items-center justify-between mb-8">
        <SlidePill label="ADVISORY BOARD" variant="light" />
        <OmniStratLogo />
      </div>
      <h2 className="text-[44px] font-extrabold leading-[1.1] tracking-tight mb-10">
        Strategic insight from former federal prosecutors, media strategists, and board-level advisors
      </h2>
      <div className="flex-1 grid grid-cols-3 gap-10">
        {[
          {
            name: "Zachary Intrater",
            role: "Advisory Board Member",
            photo: zacharyPhoto,
            bio: "Former Executive AUSA, District of New Jersey. Co-founder, Agnifilo Intrater LLP. UChicago BA, NYU JD. Cravath alum. Deep expertise in white-collar defense, regulatory exposure, and crisis-driven legal strategy.",
          },
          {
            name: "Dr. Elchin Khalilov",
            role: "Advisory Board Member",
            photo: elchinPhoto,
            bio: "Global media and strategic communications expert. 30+ years in international journalism and media strategy. PhD Physics & Mathematics, Moscow State University. Fluent in English, Russian, and Turkish.",
          },
          {
            name: "Keith Silverstein",
            role: "Board of Directors",
            photo: keithPhoto,
            bio: "Board-level governance and strategic oversight. Provides institutional credibility and independent counsel on firm direction, risk management, and client engagement protocols.",
          },
        ].map((person) => (
          <div key={person.name} className="flex flex-col">
            <div className="aspect-[4/3] bg-slide-surface rounded-2xl mb-5 overflow-hidden">
              <img src={person.photo} alt={person.name} className="w-full h-full object-cover" />
            </div>
            <h3 className="text-[24px] font-bold">{person.name}</h3>
            <p className="text-[18px] text-slide-primary font-semibold">{person.role}</p>
            <p className="text-[15px] text-slide-muted mt-2 leading-relaxed">{person.bio}</p>
          </div>
        ))}
      </div>
    </div>
  </SlideLayout>
);

// ─── 20. SECTION DIVIDER — Competitive Positioning ───
const SectionCompetitiveSlide = ({ slideNumber, totalSlides }: { slideNumber: number; totalSlides: number }) => (
  <SlideLayout variant="white" slideNumber={slideNumber} totalSlides={totalSlides}>
    <div className="flex h-full">
      <div className="flex-1 flex flex-col justify-center p-[80px]">
        <SlidePill label="SECTION FIVE" variant="light" />
        <h2 className="mt-10 text-[80px] font-extrabold leading-[1.05] tracking-tight">
          Competitive Positioning
        </h2>
        <p className="mt-8 text-[24px] text-slide-muted max-w-[700px] leading-relaxed">
          How we compare to FTI Consulting, Teneo, Brunswick Group, Kroll, and Control Risks — and why integration at speed is our decisive advantage.
        </p>
      </div>
      <div className="w-[35%] bg-slide-surface" />
    </div>
    <div className="absolute bottom-[80px] left-[80px] text-[120px] font-extrabold text-slide-primary/10">
      /05
    </div>
  </SlideLayout>
);

// ─── 21. COMPARISON TABLE — Competitive Landscape ───
const CompetitiveLandscapeSlide = ({ slideNumber, totalSlides }: { slideNumber: number; totalSlides: number }) => (
  <SlideLayout variant="white" slideNumber={slideNumber} totalSlides={totalSlides}>
    <div className="flex flex-col h-full p-[80px]">
      <SlidePill label="COMPETITIVE LANDSCAPE" variant="light" />
      <h2 className="mt-8 text-[44px] font-extrabold leading-[1.1] tracking-tight mb-10">
        The SWAT team model fills a gap no incumbent fully addresses
      </h2>
      <div className="flex-1 overflow-hidden">
        <div className="w-full">
          <div className="grid grid-cols-[180px_1fr_1fr_120px_1fr] gap-0 text-[15px]">
            {/* Header */}
            <div className="bg-slide-primary text-white p-4 rounded-tl-xl font-bold">Firm</div>
            <div className="bg-slide-primary text-white p-4 font-bold">Strength</div>
            <div className="bg-slide-primary text-white p-4 font-bold">Weakness</div>
            <div className="bg-slide-primary text-white p-4 font-bold">Scale</div>
            <div className="bg-slide-primary text-white p-4 rounded-tr-xl font-bold">OmniStrat Advantage</div>
            {/* Rows */}
            {[
              { firm: "FTI Consulting", strength: "Restructuring heritage. Serves 64 of top 100 PE firms.", weakness: "8,000+ staff creates bureaucracy & siloed practice areas.", scale: "33 countries", advantage: "Speed + integration. No junior staff. Direct C-suite access." },
              { firm: "Teneo", strength: "CEO advisory positioning. WestExec partnership for geopolitics.", weakness: "Limited operational & investigative capability.", scale: "Mid-size", advantage: "Full-spectrum operations including investigative intel and sanctions." },
              { firm: "Brunswick Group", strength: "30+ year track record. 220+ partners. 'One-firm' culture.", weakness: "Primarily communications-focused.", scale: "27 offices", advantage: "Extends beyond comms into legal coordination, GR, and intel." },
              { firm: "Kroll", strength: "Investigative heritage. Financial advisory + compliance.", weakness: "Less crisis comms and government relations integration.", scale: "30+ countries", advantage: "Integrated comms + GR alongside investigative (via K2 partnership)." },
              { firm: "Control Risks", strength: "Security/intel since 1975. Operational in 170+ countries.", weakness: "Less financial advisory and sanctions expertise.", scale: "36 offices", advantage: "Sanctions compliance + financial expertise + senior-only deployment." },
            ].map((row, i) => (
              <>
                <div key={`f-${i}`} className={`p-4 font-bold border-b border-slide-foreground/8 ${i % 2 === 0 ? "bg-slide-surface" : ""}`}>{row.firm}</div>
                <div key={`s-${i}`} className={`p-4 text-slide-muted border-b border-slide-foreground/8 ${i % 2 === 0 ? "bg-slide-surface" : ""}`}>{row.strength}</div>
                <div key={`w-${i}`} className={`p-4 text-slide-muted border-b border-slide-foreground/8 ${i % 2 === 0 ? "bg-slide-surface" : ""}`}>{row.weakness}</div>
                <div key={`sc-${i}`} className={`p-4 text-slide-muted border-b border-slide-foreground/8 ${i % 2 === 0 ? "bg-slide-surface" : ""}`}>{row.scale}</div>
                <div key={`a-${i}`} className={`p-4 font-medium text-slide-primary border-b border-slide-foreground/8 ${i % 2 === 0 ? "bg-slide-surface" : ""}`}>{row.advantage}</div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);

// ─── 22. COMPARISON — SWAT vs Traditional ───
const SwatVsTraditionalSlide = ({ slideNumber, totalSlides }: { slideNumber: number; totalSlides: number }) => (
  <SlideLayout variant="white" slideNumber={slideNumber} totalSlides={totalSlides}>
    <div className="flex flex-col h-full p-[80px]">
      <SlidePill label="THE DIFFERENTIATION" variant="light" />
      <h2 className="mt-8 text-[48px] font-extrabold leading-[1.1] tracking-tight mb-12">
        SWAT team approach versus traditional advisory
      </h2>
      <div className="flex-1 grid grid-cols-2 gap-0">
        <div className="bg-slide-surface rounded-l-2xl p-10 flex flex-col gap-6">
          <h3 className="text-[28px] font-bold text-slide-muted mb-2">Traditional Advisory</h3>
          {[
            "Extended discovery phases — weeks to assemble",
            "Junior analysts learning on your emergency",
            "Siloed practice areas with coordination overhead",
            "Reports through middle management",
            "Process-driven, risk-averse delivery",
            "Large teams increase exposure surface",
          ].map((item) => (
            <div key={item} className="flex items-center gap-4 text-[20px] text-slide-muted">
              <span className="w-6 h-6 rounded-full bg-slide-muted/20 flex items-center justify-center text-[14px]">✕</span>
              {item}
            </div>
          ))}
        </div>
        <div className="bg-slide-primary rounded-r-2xl p-10 flex flex-col gap-6 text-white">
          <h3 className="text-[28px] font-bold mb-2">OmniStrat SWAT Team</h3>
          {[
            "24 hours to full deployment",
            "Senior-only practitioners with 15+ years",
            "Cross-functional integration from day one",
            "Direct CEO / Board engagement",
            "Outcome-focused, designed for high-stakes pressure",
            "Small, vetted team with strict protocols",
          ].map((item) => (
            <div key={item} className="flex items-center gap-4 text-[20px]">
              <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-[14px]">✓</span>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  </SlideLayout>
);

// ─── 23. PR STATS — Portfolio Relevance ───
const PortfolioRelevanceSlide = ({ slideNumber, totalSlides }: { slideNumber: number; totalSlides: number }) => (
  <SlideLayout variant="white" slideNumber={slideNumber} totalSlides={totalSlides}>
    <div className="flex flex-col h-full">
      <div className="p-[80px] pb-0">
        <h2 className="text-[72px] font-extrabold leading-[1.05] tracking-tight max-w-[1100px]">
          Relevance to Your Portfolio
        </h2>
        <div className="absolute top-[80px] right-[80px]">
          <SlidePill label="PORTFOLIO RELEVANCE" variant="light" />
        </div>
      </div>
      <div className="flex flex-1 mt-10 px-[80px] gap-12">
        <div className="w-[45%] rounded-2xl overflow-hidden">
          <img src={statsPhoto} alt="Portfolio analysis" className="w-full h-full object-cover" />
        </div>
        <div className="flex-1 flex flex-col justify-center gap-6">
          <p className="text-[20px] text-slide-muted leading-relaxed mb-4">
            Geopolitical exposure is expanding. ESG scrutiny intensifies — investors' own SEC filings acknowledge that controversy "could adversely impact reputation and business."
          </p>
          {[
            { number: "$8.5B", label: "Pulled by Texas alone from BlackRock over ESG positioning" },
            { number: "13", label: "State attorneys general pursuing antitrust against major asset managers" },
            { number: "87", label: "Countries where Carlyle deploys capital — each a potential crisis jurisdiction" },
          ].map((stat) => (
            <div key={stat.number} className="border-b border-slide-foreground/10 pb-6">
              <div className="text-[44px] font-extrabold">{stat.number}</div>
              <p className="text-[20px] text-slide-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </SlideLayout>
);

// ─── 24. SECTION DIVIDER — Partnership ───
const SectionPartnershipSlide = ({ slideNumber, totalSlides }: { slideNumber: number; totalSlides: number }) => (
  <SlideLayout variant="white" slideNumber={slideNumber} totalSlides={totalSlides}>
    <div className="flex h-full">
      <div className="flex-1 flex flex-col justify-center p-[80px]">
        <SlidePill label="SECTION SIX" variant="light" />
        <h2 className="mt-10 text-[80px] font-extrabold leading-[1.05] tracking-tight">
          The Partnership Proposal
        </h2>
        <p className="mt-8 text-[24px] text-slide-muted max-w-[700px] leading-relaxed">
          Not a vendor relationship. An operational alliance ensuring immediate mobilization when crisis strikes.
        </p>
      </div>
      <div className="w-[35%] bg-slide-surface" />
    </div>
    <div className="absolute bottom-[80px] left-[80px] text-[120px] font-extrabold text-slide-primary/10">
      /06
    </div>
  </SlideLayout>
);

// ─── 25. NEXT STEPS / CONTACT ───
const NextStepsSlide = ({ slideNumber, totalSlides }: { slideNumber: number; totalSlides: number }) => (
  <SlideLayout variant="white" slideNumber={slideNumber} totalSlides={totalSlides} showConfidentiality={false}>
    <div className="flex flex-col h-full p-[80px]">
      <SlidePill label="NEXT STEPS" variant="light" />
      <h2 className="mt-8 text-[52px] font-extrabold leading-[1.1] tracking-tight mb-6">
        We're proposing a strategic partnership discussion — not a sales pitch.
      </h2>
      <div className="flex-1 flex items-center">
        <div className="grid grid-cols-3 gap-8 w-full">
          {[
            { step: "01", title: "Initial Meeting", desc: "Deep dive on your portfolio's risk profile, jurisdictional exposure, and potential vulnerabilities." },
            { step: "02", title: "Pilot Engagement", desc: "Select one situation for demonstration of integrated SWAT team deployment and value creation." },
            { step: "03", title: "Retainer Framework", desc: "Ongoing availability for rapid response across your entire portfolio of companies." },
          ].map((item) => (
            <div key={item.step} className="bg-slide-primary/10 rounded-2xl p-8">
              <span className="text-[56px] font-extrabold text-slide-primary">{item.step}</span>
              <h3 className="text-[28px] font-bold mt-4 mb-3">{item.title}</h3>
              <p className="text-[18px] text-slide-muted leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8 flex items-end justify-between">
        <div>
          <p className="text-[24px] font-bold">Eugene Gourevitch</p>
          <p className="text-[18px] text-slide-primary font-semibold">President & Co-Founder</p>
          <p className="text-[18px] text-slide-muted mt-2">info@omnistratgroup.com · (888) 402-6132</p>
          <p className="text-[16px] text-slide-muted">1701 Pennsylvania Avenue NW, Suite 200, Washington, DC 20006</p>
        </div>
        <OmniStratLogo size={50} />
      </div>
    </div>
  </SlideLayout>
);

export const blackrockCarlyleSlides: SlideData[] = [
  { id: "bc-title", title: "Title", component: TitleSlide },
  { id: "bc-exec-summary", title: "Executive Summary", component: ExecSummarySlide },
  { id: "bc-section-problem", title: "Section: The Problem", component: SectionProblemSlide },
  { id: "bc-big-numbers", title: "The Problem Quantified", component: BigNumbersSlide },
  { id: "bc-gap-quote", title: "The Gap", component: GapQuoteSlide },
  { id: "bc-pain-points", title: "Investor Pain Points", component: PainPointsSlide },
  { id: "bc-dramatic", title: "Dramatic Statement", component: DramaticStatementSlide },
  { id: "bc-section-solution", title: "Section: The Solution", component: SectionSolutionSlide },
  { id: "bc-swat-model", title: "SWAT Team Model", component: SwatModelSlide },
  { id: "bc-capabilities", title: "Five Capabilities", component: CapabilitiesSlide },
  { id: "bc-philosophy", title: "Philosophy", component: PhilosophySlide },
  { id: "bc-section-proof", title: "Section: Proof", component: SectionProofSlide },
  { id: "bc-ucg-overview", title: "UCG Case Study", component: UCGOverviewSlide },
  { id: "bc-multi-front", title: "Multi-Front Challenge", component: MultiFrontSlide },
  { id: "bc-integrated-response", title: "Integrated Response", component: IntegratedResponseSlide },
  { id: "bc-track-record", title: "Track Record", component: TrackRecordSlide },
  { id: "bc-section-leadership", title: "Section: Leadership", component: SectionLeadershipSlide },
  { id: "bc-leadership", title: "Leadership", component: LeadershipSlide },
  { id: "bc-advisory-board", title: "Advisory Board", component: AdvisoryBoardSlide },
  { id: "bc-section-competitive", title: "Section: Competitive", component: SectionCompetitiveSlide },
  { id: "bc-competitive-landscape", title: "Competitive Landscape", component: CompetitiveLandscapeSlide },
  { id: "bc-swat-vs-traditional", title: "SWAT vs Traditional", component: SwatVsTraditionalSlide },
  { id: "bc-portfolio-relevance", title: "Portfolio Relevance", component: PortfolioRelevanceSlide },
  { id: "bc-section-partnership", title: "Section: Partnership", component: SectionPartnershipSlide },
  { id: "bc-next-steps", title: "Next Steps & Contact", component: NextStepsSlide },
];
