// Approve each group with the business owner before enabling its verification flag.
export const clinic = {
  name: "Doc. Santos Animal Bite Center",
  contactVerified: false,
  phones: ["0963-0487572", "0950-0041420", "0967-8941438"],
  locationVerified: true,
  address: "Baseco Port Area, Manila",
  mapsUrl: "https://www.google.com/maps?cid=9652595728984599784",
  mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.1209952677473!2d120.95355637590413!3d14.592180577281136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397cb0034d25501%3A0x85f4e8ac82946ce8!2sBaseco%20port%20area%20manila!5e0!3m2!1sen!2sph!4v1791025843107!5m2!1sen!2sph",
  hoursVerified: false,
  hours: "Open 24/7",
  paymentsVerified: false,
  paymentMethods: ["Cash", "GCash", "Bank Transfer"],
  photos: [] as { src: string; alt: string }[],
};
export const pricing = {
  verified: false,
  regular: 600,
  discounted: 480,
  discountTerms: "Eligibility and documentation must be confirmed with the clinic.",
  note: "Costs may vary depending on the treatment or service required. Please confirm current prices with the clinic.",
};
export const services = [
  { title: "Anti-rabies vaccination", symbol: "✚", description: "Vaccination is one part of rabies prevention. A clinician will assess your needs." },
  { title: "Post-exposure care", symbol: "↗", description: "Assessment after an animal bite, scratch, or other possible rabies exposure." },
  { title: "Pre-exposure vaccination", symbol: "◇", description: "Discuss preventive vaccination with a clinician if you may be at increased risk." },
  { title: "Booster assessment", symbol: "↻", description: "Bring your vaccination records to discuss whether further doses are needed." },
  { title: "ERIG assessment", symbol: "+", description: "A clinician determines whether equine rabies immunoglobulin is appropriate." },
  { title: "Tetanus assessment", symbol: "✧", description: "Review your wound and immunization history with a healthcare professional." },
  { title: "Consultation", symbol: "◌", description: "Discuss your exposure, ask questions, and understand your recommended next steps." },
  { title: "Wound assessment", symbol: "≋", description: "Professional evaluation of the affected area and guidance on wound care." },
];
export const biteSteps = [
  { title: "Wash immediately", description: "Thoroughly wash the wound with soap and running water for at least 15 minutes." },
  { title: "Avoid home remedies", description: "Do not apply unverified substances to the wound." },
  { title: "Seek prompt care", description: "Visit an animal bite center or medical facility for assessment." },
  { title: "Discuss treatment", description: "A healthcare professional will determine the appropriate care." },
  { title: "Follow your schedule", description: "Follow the vaccination and follow-up plan your clinician provides." },
];
export const faqs = [
  { question: "Kailangan bang magpatingin kahit maliit ang kagat?", answer: "Yes. Seek prompt professional assessment after a possible rabies exposure, even if the wound looks small. A clinician will assess the exposure and recommend care." },
  { question: "Paano kung kalmot lang?", answer: "Scratches can also require assessment. Wash the affected area and seek medical advice about your exposure." },
  { question: "Ilang vaccine doses ang kailangan?", answer: "Your schedule depends on your exposure, previous vaccination, and clinical assessment. Bring your records and follow the schedule given by your healthcare professional." },
  { question: "Kailan kailangan ng booster?", answer: "A clinician will review your previous vaccination and current exposure to determine whether additional doses are needed." },
  { question: "Ano ang ERIG?", answer: "ERIG stands for equine rabies immunoglobulin. It may be part of treatment for certain exposures. A healthcare professional determines whether it is appropriate for you." },
  { question: "Open ba kayo 24/7? Pwede ang walk-in?", answer: "Opening hours, emergency availability, and walk-in arrangements are awaiting clinic confirmation. For an urgent concern, seek care at an available medical facility without delay." },
  { question: "Anong payment methods ang available?", answer: "Please confirm accepted payment methods and current rates directly with the clinic before your visit." },
  { question: "Paano pumunta sa clinic?", answer: "Find us in Baseco Port Area, Manila. View the map in the Our Location section or select Get Directions to open Google Maps." },
];
