"use client";

import { useEffect, useRef, useState } from "react";
import { clinic } from "@/data/clinic";
import { Brand, Icon } from "@/components/visuals";

const links = [["Home", "home"], ["Services", "services"], ["About", "about"], ["FAQ", "faq"], ["Contact", "contact"]];
const phoneHref = `tel:+63${clinic.phones[0].replace(/\D/g, "").slice(1)}`;

export function ContactActions() {
  return <div className="contact-actions">
    <a className="button primary" href={clinic.contactVerified ? phoneHref : "#contact"}><Icon name="phone" />{clinic.contactVerified ? "Call Now" : "Contact Us"}</a>
    <a className="button secondary" href={clinic.locationVerified && clinic.mapsUrl ? clinic.mapsUrl : "#contact"} {...(clinic.locationVerified && clinic.mapsUrl ? { target: "_blank", rel: "noopener noreferrer" } : {})}><Icon name="pin" />{clinic.locationVerified && clinic.mapsUrl ? "Get Directions" : "Location Details"}</a>
  </div>;
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
    }, { rootMargin: "-15% 0px -65% 0px" });
    links.forEach(([, id]) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []); 
  

  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(false); toggle.current?.focus(); }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);

  return <header className="site-header"><div className="container nav-inner">
    <a href="#home" onClick={() => setOpen(false)} aria-label="Doc. Santos Animal Bite Center home"><Brand /></a>
    <button className="menu-toggle" ref={toggle} aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>{open ? "Close ×" : "Menu ☰"}</button>
    <nav id="main-navigation" aria-label="Main navigation" className={open ? "navigation is-open" : "navigation"}>
      {links.map(([label, id]) => <a key={id} href={`#${id}`} aria-current={active === id ? "location" : undefined} onClick={() => setOpen(false)}>{label}</a>)}
      <a className="button primary nav-cta" href={clinic.contactVerified ? phoneHref : "#contact"} onClick={() => setOpen(false)}><Icon name="phone" />{clinic.contactVerified ? "Call Now" : "Contact Us"}</a>
    </nav>
  </div></header>;
}
