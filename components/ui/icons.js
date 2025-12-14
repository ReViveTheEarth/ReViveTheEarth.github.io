import React from "react";

/**
 * Dependency-free icon set.
 *
 * The original Base44 app uses lucide-style stroke icons. Your Vercel build is
 * failing due to lucide-react packaging issues (missing icon modules).
 *
 * These components mimic lucide's API (size, color, strokeWidth, className)
 * and are safe to use in static export.
 */

function IconBase({
  children,
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {children}
    </svg>
  );
}

// Simple primitives
export function Plus(props) {
  return (
    <IconBase {...props}>
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </IconBase>
  );
}

export function Check(props) {
  return (
    <IconBase {...props}>
      <polyline points="20 6 9 17 4 12" />
    </IconBase>
  );
}

export function X(props) {
  return (
    <IconBase {...props}>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </IconBase>
  );
}

export function Menu(props) {
  return (
    <IconBase {...props}>
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </IconBase>
  );
}

export function ChevronDown(props) {
  return (
    <IconBase {...props}>
      <polyline points="6 9 12 15 18 9" />
    </IconBase>
  );
}

export function ArrowRight(props) {
  return (
    <IconBase {...props}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </IconBase>
  );
}

export function ArrowDown(props) {
  return (
    <IconBase {...props}>
      <line x1="12" y1="5" x2="12" y2="19" />
      <polyline points="19 12 12 19 5 12" />
    </IconBase>
  );
}

export function ArrowUpRight(props) {
  return (
    <IconBase {...props}>
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </IconBase>
  );
}

// Common UI
export function Calendar(props) {
  return (
    <IconBase {...props}>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </IconBase>
  );
}

export function Trash2(props) {
  return (
    <IconBase {...props}>
      <polyline points="3 6 5 6 21 6" />
      <path d="M8 6v-2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
      <line x1="10" y1="11" x2="10" y2="17" />
      <line x1="14" y1="11" x2="14" y2="17" />
    </IconBase>
  );
}

export function Edit(props) {
  return (
    <IconBase {...props}>
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
    </IconBase>
  );
}

export const Pencil = Edit;

export function Search(props) {
  return (
    <IconBase {...props}>
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </IconBase>
  );
}

export function Clock(props) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v6l4 2" />
    </IconBase>
  );
}

export function Navigation(props) {
  return (
    <IconBase {...props}>
      <polygon points="3 11 22 2 13 21 11 13 3 11" />
    </IconBase>
  );
}

export function Loader2({ className = "", ...props }) {
  return (
    <IconBase
      {...props}
      className={`${className} animate-spin`.trim()}
    >
      <path d="M21 12a9 9 0 1 1-9-9" />
    </IconBase>
  );
}

// People
export function User(props) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="7" r="4" />
      <path d="M5.5 21a6.5 6.5 0 0 1 13 0" />
    </IconBase>
  );
}

export function Users(props) {
  return (
    <IconBase {...props}>
      <path d="M17 21v-1a4 4 0 0 0-3-3.87" />
      <path d="M7 21v-1a4 4 0 0 1 3-3.87" />
      <circle cx="12" cy="7" r="4" />
      <path d="M5 8a3 3 0 0 0 0 6" />
      <path d="M19 8a3 3 0 0 1 0 6" />
    </IconBase>
  );
}

export function Mail(props) {
  return (
    <IconBase {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <polyline points="3 7 12 13 21 7" />
    </IconBase>
  );
}

export function Phone(props) {
  return (
    <IconBase {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.09 5.18 2 2 0 0 1 5.11 3h3a2 2 0 0 1 2 1.72c.12.86.3 1.7.54 2.5a2 2 0 0 1-.45 2.11L9 10.09a16 16 0 0 0 4.91 4.91l.76-1.2a2 2 0 0 1 2.11-.45c.8.24 1.64.42 2.5.54A2 2 0 0 1 22 16.92Z" />
    </IconBase>
  );
}

export function MapPin(props) {
  return (
    <IconBase {...props}>
      <path d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2" />
    </IconBase>
  );
}

export function FileText(props) {
  return (
    <IconBase {...props}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="8" y1="13" x2="16" y2="13" />
      <line x1="8" y1="17" x2="16" y2="17" />
    </IconBase>
  );
}

export function Save(props) {
  return (
    <IconBase {...props}>
      <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2Z" />
      <polyline points="17 21 17 13 7 13 7 21" />
      <polyline points="7 3 7 8 15 8" />
    </IconBase>
  );
}

export function Settings(props) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.7 1.7 0 0 0 .33 1.82l.06.06a2 2 0 0 1-1.41 3.41h-.17a1.7 1.7 0 0 0-1.54 1l-.02.05a2 2 0 0 1-3.58 0l-.02-.05a1.7 1.7 0 0 0-1.54-1H9.6a2 2 0 0 1-1.41-3.41l.06-.06A1.7 1.7 0 0 0 8.6 15a1.7 1.7 0 0 0-1.11-1.08l-.08-.03a2 2 0 0 1 0-3.78l.08-.03A1.7 1.7 0 0 0 8.6 9a1.7 1.7 0 0 0-.33-1.82l-.06-.06A2 2 0 0 1 9.6 3.71h.17a1.7 1.7 0 0 0 1.54-1l.02-.05a2 2 0 0 1 3.58 0l.02.05a1.7 1.7 0 0 0 1.54 1h.17a2 2 0 0 1 1.41 3.41l-.06.06A1.7 1.7 0 0 0 19.4 9c.51 0 .99.2 1.35.57" />
    </IconBase>
  );
}

export function LogOut(props) {
  return (
    <IconBase {...props}>
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" y1="12" x2="9" y2="12" />
    </IconBase>
  );
}

export function LayoutDashboard(props) {
  return (
    <IconBase {...props}>
      <rect x="3" y="3" width="7" height="9" rx="1" />
      <rect x="14" y="3" width="7" height="5" rx="1" />
      <rect x="14" y="10" width="7" height="11" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
    </IconBase>
  );
}

// Nature / mission
export function Leaf(props) {
  return (
    <IconBase {...props}>
      <path d="M11 20c6 0 10-4 10-10C15 10 11 4 3 4c0 10 4 16 8 16Z" />
      <path d="M3 14c5 0 9-4 12-7" />
    </IconBase>
  );
}

export function Globe2(props) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15 15 0 0 1 0 20" />
      <path d="M12 2a15 15 0 0 0 0 20" />
    </IconBase>
  );
}

export function Target(props) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3" />
    </IconBase>
  );
}

export function Eye(props) {
  return (
    <IconBase {...props}>
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
      <circle cx="12" cy="12" r="3" />
    </IconBase>
  );
}

export function Heart(props) {
  return (
    <IconBase {...props}>
      <path d="M12 21s-7-4.4-9.5-8.5C.6 9.2 2.1 6.5 5 6.1c1.7-.2 3.1.7 4 2 1-1.3 2.3-2.2 4-2 2.9.4 4.4 3.1 2.5 6.4C19 16.6 12 21 12 21Z" />
    </IconBase>
  );
}

// Impact
export function TrendingUp(props) {
  return (
    <IconBase {...props}>
      <polyline points="3 17 9 11 13 15 21 7" />
      <polyline points="14 7 21 7 21 14" />
    </IconBase>
  );
}

export function Droplets(props) {
  return (
    <IconBase {...props}>
      <path d="M12 2s5 6 5 10a5 5 0 0 1-10 0c0-4 5-10 5-10Z" />
    </IconBase>
  );
}

export function Wind(props) {
  return (
    <IconBase {...props}>
      <path d="M3 12h11a3 3 0 1 0-3-3" />
      <path d="M3 18h15a3 3 0 1 1-3 3" />
      <path d="M3 6h7a3 3 0 1 1-3 3" />
    </IconBase>
  );
}

export function TreePine(props) {
  return (
    <IconBase {...props}>
      <path d="M12 2l5 8H7l5-8Z" />
      <path d="M12 10l6 10H6l6-10Z" />
      <path d="M12 20v2" />
    </IconBase>
  );
}

export function Factory(props) {
  return (
    <IconBase {...props}>
      <path d="M2 20h20" />
      <path d="M4 20V9l6 3V9l6 3V7l4 2v11" />
      <path d="M8 20v-4" />
      <path d="M12 20v-6" />
      <path d="M16 20v-3" />
    </IconBase>
  );
}

// Community
export function Trophy(props) {
  return (
    <IconBase {...props}>
      <path d="M8 4h8v3a4 4 0 0 1-8 0V4Z" />
      <path d="M6 4H4v2a4 4 0 0 0 4 4" />
      <path d="M18 4h2v2a4 4 0 0 1-4 4" />
      <path d="M12 11v4" />
      <path d="M8 19h8" />
      <path d="M9 15h6" />
    </IconBase>
  );
}

export function MessageSquare(props) {
  return (
    <IconBase {...props}>
      <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z" />
    </IconBase>
  );
}

export function Star(props) {
  return (
    <IconBase {...props}>
      <polygon points="12 2 15 9 22 9 16.5 13.5 18.5 21 12 16.8 5.5 21 7.5 13.5 2 9 9 9 12 2" />
    </IconBase>
  );
}

export function Award(props) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="8" r="4" />
      <path d="M8 12l-2 9 6-3 6 3-2-9" />
    </IconBase>
  );
}

// School / org
export function GraduationCap(props) {
  return (
    <IconBase {...props}>
      <path d="M22 10L12 5 2 10l10 5 10-5Z" />
      <path d="M6 12v5c0 1 3 3 6 3s6-2 6-3v-5" />
      <path d="M2 10v6" />
    </IconBase>
  );
}

export function Building2(props) {
  return (
    <IconBase {...props}>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M8 7h2" />
      <path d="M14 7h2" />
      <path d="M8 11h2" />
      <path d="M14 11h2" />
      <path d="M8 15h2" />
      <path d="M14 15h2" />
    </IconBase>
  );
}

// Aliases used elsewhere
export const Earth = Globe2;
export const LoaderCircle = Loader2;
