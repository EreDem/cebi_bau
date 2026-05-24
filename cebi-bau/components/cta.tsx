import { Mail, Phone } from "lucide-react";
import { InstagramIcon, WhatsappIcon } from "./svgs";

export default function CTA() {
  return (
    <section id="cta" className="container">
      <div className="cta">
        <div className="cta-left">
          <div className="cta-icon">☏</div>
          <div>
            <p>Haben Sie ein Projekt?</p>
            <h2>Lassen Sie uns gemeinsam Ihre Ideen verwirklichen.</h2>
          </div>
        </div>

        <a href="tel:01622312911" className="btn btn-light gap-10">
          <Phone className="" />
          Jetzt Anrufen
        </a>
        <a href="https://wa.me/491622312911" className="btn btn-light">
          <WhatsappIcon />
          Whatsapp
        </a>
        <a href="mailto:info@cebi.de" className="btn btn-light">
          <Mail className="" />
          E-Mail
        </a>
        <a href="https://www.instagram.com/cebi.bau?igsh=MWFnenR1aTk5NHJ5cA==/" className="btn btn-light">
          <InstagramIcon />
          Instagram 
        </a>
      </div>
    </section>
  );
}