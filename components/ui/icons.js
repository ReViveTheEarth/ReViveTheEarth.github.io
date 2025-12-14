import React from "react";

// Lightweight icon stubs.
//
// Why: Some deployments have had issues with the published lucide-react package
// resolving icon modules at build time. To keep this project self-contained and
// reliable, we provide local icon components that mimic the lucide API.
//
// NOTE: These are intentionally simple. Replace with real SVGs if desired.

function SvgIcon({ className = "", size = 20, title = "", children, ...props }) {
  const s = Number(size) || 20;
  return (
    <svg
      width={s}
      height={s}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden={title ? undefined : true}
      role={title ? "img" : "presentation"}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      {/* outer ring */}
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" opacity="0.75" />
      {/* inner tick */}
      <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {children}
    </svg>
  );
}

// Helper to define many named icons with the same base glyph.
const make = (name) => {
  const C = (props) => <SvgIcon title={name} {...props} />;
  C.displayName = name;
  return C;
};

// Page / section icons
export const Target = make("Target");
export const Eye = make("Eye");
export const Heart = make("Heart");
export const Users = make("Users");
export const Globe2 = make("Globe2");
export const Leaf = make("Leaf");
export const TrendingUp = make("TrendingUp");
export const Droplets = make("Droplets");
export const Wind = make("Wind");
export const TreePine = make("TreePine");
export const Factory = make("Factory");
export const Trophy = make("Trophy");
export const MessageSquare = make("MessageSquare");
export const Star = make("Star");
export const Award = make("Award");
export const ArrowDown = make("ArrowDown");
export const MapPin = make("MapPin");
export const Search = make("Search");
export const Clock = make("Clock");
export const Phone = make("Phone");
export const Navigation = make("Navigation");
export const Mail = make("Mail");
export const ArrowUpRight = make("ArrowUpRight");

// Common UI actions
export const Plus = make("Plus");
export const Minus = make("Minus");
export const Trash2 = make("Trash2");
export const Edit = make("Edit");
export const Pencil = make("Pencil");
export const Calendar = make("Calendar");
export const Check = make("Check");
export const XCircle = make("XCircle");

// Auth / profile
export const User = make("User");
export const GraduationCap = make("GraduationCap");
export const Building2 = make("Building2");
export const ArrowRight = make("ArrowRight");
export const Loader2 = make("Loader2");
export const FileText = make("FileText");
export const Save = make("Save");

// Navbar/menu
export const Menu = make("Menu");
export const X = make("X");
export const LayoutDashboard = make("LayoutDashboard");
export const Settings = make("Settings");
export const LogOut = make("LogOut");
export const ChevronDown = make("ChevronDown");

// Extra icon names referenced by lucide imports in older code
export const Globe = make("Globe");
export const Earth = make("Earth");
export const LoaderCircle = make("LoaderCircle");
