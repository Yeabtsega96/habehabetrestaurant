import "./contact.css";

const ContactForm = () => {
  return (
    <section
      className="contact-form"
      aria-labelledby="contact-form-title"
    >
      <h2 id="contact-form-title">Send Us a Message</h2>

      <p className="contact-description">
        For reservations, catering inquiries, or general questions, we usually
        respond within 2 hours.
      </p>

      <form>
        <div className="contact-grid">
          <div className="wrapper">
            <label htmlFor="name">Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Tigist Bekele"
              autoComplete="name"
              required
            />
          </div>

          <div className="wrapper">
            <label htmlFor="email">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="tigist@example.com"
              autoComplete="email"
              required
            />
          </div>

          <div className="wrapper">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="+251 91 234 5678"
              autoComplete="tel"
            />
          </div>

          <div className="wrapper">
            <label htmlFor="subject">Subject *</label>

            <select
              id="subject"
              name="subject"
              defaultValue=""
              required
            >
              <option value="" disabled>
                Select a subject
              </option>

              <option value="reservation">
                Reservation
              </option>

              <option value="catering">
                Catering
              </option>

              <option value="delivery">
                Delivery
              </option>

              <option value="general">
                General Inquiry
              </option>
            </select>
          </div>
        </div>

        <div className="wrapper">
          <label htmlFor="message">Message *</label>

          <textarea
            id="message"
            name="message"
            rows="6"
            placeholder="Tell us how we can help you..."
            required
          ></textarea>
        </div>

        <button type="submit">
          Send Message
        </button>
      </form>

      <p className="note">
        We respect your privacy and will never share your information.
      </p>
    </section>
  );
};

export default ContactForm;