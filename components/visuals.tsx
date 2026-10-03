import type { CSSProperties } from "react";

const paths: Record<string, string> = {
  phone: "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z",
  pin: "M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0ZM15 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0",
  clock: "M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0M12 6v6l4 2",
  shield: "m12 2 9 4v6c0 5-9 10-9 10S3 17 3 12V6l9-4Zm-4 10 3 3 5-6",
  syringe: "m18 2 4 4m-5-3 4 4m-5-1 2 2-9 9H5v-4l9-9 2 2ZM3 21l3-3m4-9 5 5",
  users: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2m20 0v-2a4 4 0 0 0-3-3.9M13 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0m4-3.9a4 4 0 0 1 0 7.8",
  message: "M21 11.5a8.5 8.5 0 0 1-8.5 8.5 9 9 0 0 1-4-.9L3 21l1.9-5.5a9 9 0 0 1-.9-4A8.5 8.5 0 0 1 12.5 3h.5a8.5 8.5 0 0 1 8 8v.5ZM8 11h.01M12 11h.01M16 11h.01",
  heart: "M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z",
  medical: "M5 22V4h14v18M2 22h20M9 8h6m-3-3v6M9 22v-6h6v6",
  bandage: "m3 15 12-12a4.2 4.2 0 0 1 6 6L9 21a4.2 4.2 0 0 1-6-6Zm5-5 6 6m-4-8 6 6m-5-3h.01m2 2h.01",
  wash: "M12 2s-4 5-4 7a4 4 0 0 0 8 0c0-2-4-7-4-7ZM2 18l4-3h6a2 2 0 0 1 0 4H8m6-1 5-3a2 2 0 0 1 3 2l-7 5H6l-4-2",
  ban: "M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0M5 5l14 14",
  calendar: "M4 4h16v18H4V4Zm0 6h16M8 2v4m8-4v4M8 14h2m4 0h2m-8 4h2m4 0h2",
  image: "M3 3h18v18H3V3Zm0 14 6-6 5 5 3-3 4 4M16 7h.01",
  arrow: "M5 12h14m-5-5 5 5-5 5",
  paw: "M8 15c-3 3-2 7 1 6l3-1 3 1c3 1 4-3 1-6l-4-3-4 3ZM7 6a2 3 0 1 1-4 0 2 3 0 0 1 4 0m6-2a2 3 0 1 1-4 0 2 3 0 0 1 4 0m6 2a2 3 0 1 1-4 0 2 3 0 0 1 4 0m4 5a2 3 0 1 1-4 0 2 3 0 0 1 4 0",
};
export function Icon({ name, style }: { name: string; style?: CSSProperties }) {
  return <svg style={style} className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={paths[name] || paths.shield} /></svg>;
}
export function Brand() {
  return <span className="brand"><span className="brand-seal"><Icon name="paw" /></span><span className="brand-type"><small>Doc. Santos</small><span className="brand-line"><b>ABC</b><span><em>Animal</em><br />Center</span></span></span></span>;
}
export function Placeholder({ label, className = "" }: { label: string; className?: string }) {
  return <div className={`image-placeholder ${className}`} role="img" aria-label={`${label} placeholder`}><Icon name={className === "pet-placeholder" ? "paw" : "image"} /><span>{label}</span></div>;
}
