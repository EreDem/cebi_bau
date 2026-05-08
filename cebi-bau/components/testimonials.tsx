const testimonials = [
  {
    text: "Sehr professionelle Arbeit und ein tolles Team. Unser Umbau wurde termingerecht und sauber umgesetzt. Klare Empfehlung!",
    name: "Familie K.",
  },
  {
    text: "Von der Planung bis zur Fertigstellung hat alles perfekt geklappt. Wir sind mehr als zufrieden!",
    name: "M. Schmitz",
  },
  {
    text: "Zuverlässig, freundlich und kompetent. So wünscht man sich eine Zusammenarbeit.",
    name: "T. Özdemir",
  },
];

export default function Testimonials() {
  return (
    <section className="section testimonials-section">
      <div className="container testimonials-grid">
        <div>
          <p className="eyebrow">Kundenstimmen</p>
          <h2>Das sagen unsere Kunden</h2>
          <div className="small-line"></div>
        </div>

        <div className="testimonial-cards">
          {testimonials.map((item) => (
            <article className="testimonial-card" key={item.name}>
              <div className="quote">“</div>
              <p>{item.text}</p>
              <span>– {item.name}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}