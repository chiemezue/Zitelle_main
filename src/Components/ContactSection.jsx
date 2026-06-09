import { Mail, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="contact">
      <div className="contact__container">
        {/* LEFT */}

        <div className="contact__info">
          <div className="section-label">
            <span>Get In Touch</span>

            <div className="section-line" />
          </div>

          <h2 className="contact__title">Get In Touch With Us Today</h2>

          <p className="contact__text">
            Reach out to us and we'll get back to you as soon as possible
          </p>

          <div className="contact__details">
            <div className="contact__item">
              <div className="contact__icon">
                <MapPin size={24} />
              </div>

              <div>
                <h4>Address</h4>

                <p>Amansea, By Ebenebe Road, Awka North,Anambra State.</p>
              </div>
            </div>

            <div className="contact__item">
              <div className="contact__icon">
                <Mail size={24} />
              </div>

              <div>
                <h4>Email</h4>

                <p>info@zitellegroup.com</p>
              </div>
            </div>

            <div className="contact__item">
              <div className="contact__icon">
                <Phone size={24} />
              </div>

              <div>
                <h4>Phone</h4>

                <p>
                  +234 907 774 3915 <br /> +234 814 111 9254
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT */}

        <div className="contact__form-wrap">
          <form className="contact__form">
            <div className="contact__field">
              <label>Name</label>

              <input type="text" placeholder="Jane Smith" />
            </div>

            <div className="contact__field">
              <label>Email</label>

              <input type="email" placeholder="name@gmail.com" />
            </div>

            <div className="contact__field">
              <label>Phone Number</label>

              <input type="text" placeholder="+234 --- -- --" />
            </div>

            <div className="contact__field">
              <label>Message</label>

              <textarea rows="5" placeholder="Type Message"></textarea>
            </div>

            <button type="submit" className="contact__btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
