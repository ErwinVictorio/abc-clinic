import Image from "next/image";
import { Header, ContactActions } from "@/components/site-navigation";
import { Brand, Icon, Placeholder } from "@/components/visuals";
import { clinic, services, biteSteps, faqs, pricing } from "@/data/clinic";

const serviceIcons = ["syringe", "medical", "shield", "syringe", "shield", "bandage", "message", "heart"];
const stepIcons = ["wash", "ban", "medical", "syringe", "calendar"];
const photoLabels = ["Clinic storefront", "Reception area", "Waiting area", "Treatment area"];
function Heading({ title }: { title: string }) {
  return <h2 className="section-title">{title}</h2>;
}
export default function Home() {
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <Header />
    <main id="main">
      <section className="hero" id="home">
        <div className="hero-photo"><Image src="/images/Hero.png" alt="Doc. Santos Animal Bite Center storefront and clinic signage" fill priority sizes="(max-width: 767px) 100vw, 65vw" /></div>
        <div className="container hero-inner">
          <div className="hero-copy">
            <p className="hero-name">Doc. Santos</p>
            <h1><span>Animal</span> Bite Center</h1>
            <div className="hero-message" lang="fil"><p>NAKAGAT O NAKALMOT?</p><strong>HUWAG BALEWALAIN.</strong><p>MAGPABAKUNA KONTRA RABIES.</p></div>
            <p className="hero-description">Animal bite care and vaccination information.<br />Get assessed promptly after a bite or scratch.</p>
            <ContactActions />
          </div>
          <div className="info-grid">
            <div><Icon name="clock" /><div><strong>{clinic.hoursVerified ? clinic.hours : "Plan your visit"}</strong><p>{clinic.hoursVerified ? "Emergency service" : "Confirm clinic opening hours"}</p></div></div>
            <div><Icon name="users" /><div><strong>Consultation</strong><p>Para sa mga nakagat / nakalmot</p></div></div>
            <div><Icon name="shield" /><div><strong>Anti-Rabies Vaccine</strong><p>Ask about appropriate treatment</p></div></div>
          </div>
        </div>
      </section>

      <section id="services" className="section container">
        <div className="section-top"><Heading title="Our Services" /><a className="text-link" href="#contact">Ask about services <Icon name="arrow" /></a></div>
        <div className="service-grid">{services.map((service, index) => <article className="service-card" key={service.title}><span className="icon-bubble"><Icon name={serviceIcons[index]} /></span><h3>{service.title}</h3><p>{service.description}</p></article>)}</div>
      </section>

      <section id="bite-guide" className="guide-section"><div className="container section">
        <Heading title="What To Do After An Animal Bite" />
        <ol className="steps">{biteSteps.map((step, index) => <li key={step.title}><div className="step-picture"><span className="step-number">{index + 1}</span><Icon name={stepIcons[index]} /></div><h3>{step.title}</h3><p>{step.description}</p></li>)}</ol>
        <p className="guide-note">Seek professional assessment promptly. <a href="https://www.who.int/health-topics/rabies" target="_blank" rel="noopener noreferrer">First-aid guidance: WHO</a></p>
      </div></section>

      <div className="container section two-column">
        <section id="pricing"><Heading title="Pricing" /><article className="price-card"><h3>Anti-Rabies Vaccine</h3><div className="price-options"><div><strong>Regular Price</strong><p className="price-amount">{pricing.verified ? <><sup>₱</sup>{pricing.regular}</> : "To confirm"}</p></div><div className="discount"><strong>Discounted Price</strong><p className="price-amount">{pricing.verified ? <><sup>₱</sup>{pricing.discounted}</> : "To confirm"}</p><span>FOR PWD AND SENIOR CITIZEN</span></div></div><p className="small-note">{pricing.note}</p></article></section>
        <section id="about"><Heading title="Why Choose Us" /><div className="benefit-grid">{[
          ["clock", clinic.hoursVerified ? clinic.hours : "Visit information", clinic.hoursVerified ? "Emergency service any time of the day." : "Confirm opening hours before your visit."],
          ["users", "Medical assessment", "Discuss your exposure and vaccination history."],
          ["pin", "Clinic location", clinic.locationVerified ? clinic.address : "Confirmed directions will be added soon."],
          ["message", "Consultation", "Guidance and a treatment assessment."],
        ].map(([icon, title, description]) => <article key={title}><span className="icon-bubble"><Icon name={icon} /></span><div><h3>{title}</h3><p>{description}</p></div></article>)}</div></section>
      </div>

      <section className="container section gallery-section" id="gallery"><Heading title="Clinic Photos" /><div className="gallery">{photoLabels.map((label, index) => <figure key={label}>{clinic.photos[index] ? <Image src={clinic.photos[index].src} alt={clinic.photos[index].alt} width={600} height={380} /> : <Placeholder label={label} />}</figure>)}</div></section>

      <div id="contact" className="container section location-contact">
        <section><Heading title="Our Location" /><div className="location-card"><div className="location-heading"><span className="icon-bubble"><Icon name="pin" /></span><div><h3>{clinic.locationVerified ? clinic.address : "Clinic location"}</h3><p>{clinic.locationVerified ? "Plan your visit to the clinic." : "Exact address awaiting confirmation."}</p></div>{clinic.locationVerified && clinic.mapsUrl && <a className="button primary" href={clinic.mapsUrl} target="_blank" rel="noopener noreferrer"><Icon name="pin" />Get Directions</a>}</div><iframe title="Clinic location — Baseco Port Area, Manila" src={clinic.mapsEmbedUrl} width="600" height="450" className="clinic-map" allowFullScreen loading="lazy" referrerPolicy="strict-origin-when-cross-origin" /></div></section>
        <section><Heading title="Contact Us" /><div className="contact-card"><div className="contact-row"><Icon name="phone" /><div>{clinic.contactVerified ? clinic.phones.map(phone => <a className="phone" key={phone} href={`tel:+63${phone.replace(/\D/g, "").slice(1)}`}>{phone}</a>) : <><h3>Contact the clinic</h3><p>Verified phone numbers coming soon.</p></>}</div></div><div className="contact-row"><Icon name="clock" /><div><h3>{clinic.hoursVerified ? clinic.hours : "Opening hours"}</h3><p>{clinic.hoursVerified ? "Emergency service" : "Please confirm before visiting."}</p></div></div><div className="payment-box"><h3>Mode of Payment</h3>{clinic.paymentsVerified ? <div className="payment-methods">{clinic.paymentMethods.map(method => <span key={method}>{method}</span>)}</div> : <p>Payment options to be confirmed.</p>}</div></div></section>
      </div>

      <section id="faq" className="container section faq-section"><div><Heading title="Frequently Asked Questions" /><div className="faq-list">{faqs.map(faq => <details key={faq.question}><summary>{faq.question}<span aria-hidden="true">⌄</span></summary><p>{faq.answer}</p></details>)}</div></div><aside className="final-cta"><div><h2 lang="fil">Protektahan ang<br />buong pamilya.</h2><p lang="fil">Nakagat o nakalmot?<br />Huwag balewalain.</p><a className="button primary" href="#bite-guide"><Icon name="shield" />First-aid guide</a></div><Placeholder label="Dog & cat image" className="pet-placeholder" /></aside></section>
    </main>
    <footer><div className="container footer-inner"><a href="#home" aria-label="Doc. Santos Animal Bite Center home"><Brand /></a><nav aria-label="Footer navigation"><a href="#home">Home</a><a href="#services">Services</a><a href="#about">About</a><a href="#faq">FAQ</a><a href="#contact">Contact</a></nav><p>© {new Date().getFullYear()} {clinic.name}.<br />All rights reserved.</p><a href="#home" className="back-top" aria-label="Back to top">↑</a></div></footer>
    <div className="mobile-actions"><ContactActions /></div>
  </>;
}
