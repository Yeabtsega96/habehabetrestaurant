import "./team.css";
import DorowetImg from "../../assets/images/dorowet-img.avif";

const teamMembers = [
  {
    name: "Tigist Bekele",
    role: "Head Chef & Founder",
    image: DorowetImg,
  },
  {
    name: "Dawit Haile",
    role: "Sous Chef",
    image: DorowetImg,
  },
  {
    name: "Selam Tesfaye",
    role: "Coffee Master",
    image: DorowetImg,
  },
];

const Team = () => {
  return (
    <section
      className="team-section"
      aria-labelledby="team-title"
    >
      <p className="team-subtitle">Meet the Team</p>

      <h2 id="team-title">
        The Hands Behind the Food
      </h2>

      <div className="team-cards">
        {teamMembers.map((member) => (
          <article className="team-card" key={member.name}>
            <img
              src={member.image}
              alt={`${member.name}, ${member.role}`}
              loading="lazy"
              decoding="async"
            />

            <h3>{member.name}</h3>

            <p>{member.role}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Team;