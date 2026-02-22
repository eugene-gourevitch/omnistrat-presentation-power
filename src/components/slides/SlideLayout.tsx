import { ReactNode } from "react";

interface SlideLayoutProps {
  children: ReactNode;
  variant?: "white" | "dark" | "blue";
  backgroundImage?: string;
  className?: string;
}

const SlideLayout = ({ children, variant = "white", backgroundImage, className = "" }: SlideLayoutProps) => {
  const baseStyles: Record<string, string> = {
    white: "bg-white text-slide-foreground",
    dark: "bg-slide-foreground text-white",
    blue: "omnistrat-pattern text-white",
  };

  return (
    <div
      className={`relative w-full h-full overflow-hidden ${baseStyles[variant]} ${className}`}
      style={backgroundImage ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      } : undefined}
    >
      {backgroundImage && variant === "dark" && (
        <div className="absolute inset-0 bg-black/60" />
      )}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
};

export default SlideLayout;
