import "./contact.css"

const ContactForm = () => {
  return (
    <section className="contact-form">
      <h2>Send Us a Message</h2>
      <p>For reservations, catering inquiries, or general questions — we respond within 2 hours.</p>

      <form>
        <div>
          <div className="wrapper">
            <label htmlFor="name">Full Name *</label>
            <input type="text" id="name" name="name" required placeholder="Tigist Bekele" />
          </div>
          <div className="wrapper">
            <label htmlFor="email">Email Address *</label>
            <input type="email" id="email" name="email" required placeholder="tigist@example.com" />
          </div>
          <div className="wrapper">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" placeholder="+251 91 234 5678" />
          </div>
          <div className="wrapper">
            <label htmlFor="subject">Subject *</label>
            <select id="subject" name="subject" required>
              <option value="">Select a subject</option>
              <option value="reservation">Reservation</option>
              <option value="catering">Catering</option>
              <option value="delivery">Delivery</option>
              <option value="general">General Inquiry</option>
            </select>
          </div>
        </div>


        <div className="wrapper">
          <label htmlFor="message">Message *</label>
          <textarea id="message" name="message" required placeholder="Your message here..."></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>

      <p className="note">We respect your privacy and will never share your information.</p>
    </section>
  )
}

export default ContactForm