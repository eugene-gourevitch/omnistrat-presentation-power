const OmniStratLogo = ({ className = "", variant = "dark" }: { className?: string; variant?: "dark" | "light" }) => {
  const color = variant === "dark" ? "#141414" : "#ffffff";
  
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Icon mark - angular brackets forming an abstract shape */}
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 8L16 20L4 32" stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 8L32 20L20 32" stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span style={{ color, fontSize: "24px", fontWeight: 600, letterSpacing: "-0.02em", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        OmniStrat
      </span>
    </div>
  );
};

export default OmniStratLogo;
