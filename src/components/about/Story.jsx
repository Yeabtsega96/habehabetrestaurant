import HabeshabetImg from "../../assets/images/habehabet-bg-img.avif";
import "./Story.css";

const Story = () => {
  return (
    <section className="story-section" aria-labelledby="story-title">
      <div className="story">
        <h2 id="story-title">
          A Family Table, Open to All
        </h2>

        <p>
          Habeshabet—which means "Ethiopian Home" in Amharic—was founded in
          2012 by the Bekele family with a simple dream: to recreate the
          communal experience of an Ethiopian home kitchen for every guest who
          walks through our doors.
        </p>

        <p>
          We use recipes passed down through three generations. Our berbere
          spice blend is ground fresh every morning. Our injera is fermented
          for 72 hours to achieve its signature sour, spongy texture. We never
          cut corners because we respect the tradition.
        </p>

        <p>
          Today, we serve more than 500 guests every week, cater private events
          across Addis Ababa, and have been featured in the Ethiopian Tourism
          Guide for three consecutive years.
        </p>
      </div>

      <img
        src={HabeshabetImg}
        alt="Traditional Ethiopian food served at Habeshabet Restaurant"
        loading="lazy"
        decoding="async"
      />
    </section>
  );
};

export default Story;