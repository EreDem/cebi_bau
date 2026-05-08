const projects = [
  "https://picsum.photos/600/400?random=1",
  "https://picsum.photos/600/400?random=2",
  "https://picsum.photos/600/400?random=3",
  "https://picsum.photos/600/400?random=4",
];

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-header">
          <div>
            <p className="eyebrow">Projekte</p>
            <h2>Ein Blick auf unsere Arbeiten</h2>
          </div>

          <a href="#projects" className="btn btn-outline">
            Alle Projekte ansehen →
          </a>
        </div>

        <div className="projects-grid">
          {projects.map((image, index) => (
            <div className="project-card" key={image}>
              <img src={image} alt={`Projekt ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}