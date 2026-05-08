import Image from "next/image";

export default function Header() {
  return (
    <header className="header">
      <div className="navbar">
        <a href="#hero" className="brand">
          <Image
            src="/logo.png"
            alt="Cebi Bauunternehmen Logo"
            width={70}
            height={70}
            className="brand-logo"
          />

          
        </a>

        <div className="menu">☰</div>
      </div>
    </header>
  );
}