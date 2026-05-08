const features = [
  {
    icon: "⌂",
    title: "Regional",
    text: "In Düren und Umgebung",
  },
  {
    icon: "☆",
    title: "Qualität",
    text: "Hochwertige Materialien",
  },
  {
    icon: "♢",
    title: "Verlässlich",
    text: "Termintreu & transparent",
  },
  {
    icon: "♧",
    title: "Nachhaltig",
    text: "Für eine bessere Zukunft",
  },
];

export default function FeatureBar() {
  return (
    <section className="container">
      <div className="feature-bar">
        {features.map((item) => (
          <div className="feature-item" key={item.title}>
            <div className="feature-icon">{item.icon}</div>
            <div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}