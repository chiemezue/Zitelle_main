import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import api from "../services/api";
import toast from "react-hot-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    enquiryType: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const { data } = await api.post("/enquiries", formData);

      toast.success(data.message);

      setFormData({
        name: "",
        email: "",
        phone: "",
        enquiryType: "",
        message: "",
      });
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to submit enquiry.");
    } finally {
      setLoading(false);
    }
  };
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
                <p>Amansea, By Ebenebe Road, Awka North,Anambra State.</p>{" "}
                <br />
                <p>
                  43 Ladipo Street, Off Chicken George Roundabout, Mushin, Lagos
                </p>
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
          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__field">
              <label>Name</label>

              <input
                type="text"
                name="name"
                placeholder="Jane Smith"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact__field">
              <label>Email</label>

              <input
                type="email"
                name="email"
                placeholder="name@gmail.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact__field">
              <label>Phone Number</label>

              <input
                type="text"
                name="phone"
                placeholder="+234 --- --- ----"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact__field">
              <label>Enquiry Type</label>

              <div className="contact__select-wrap">
                <select
                  className="contact__select"
                  name="enquiryType"
                  value={formData.enquiryType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select an enquiry</option>
                  <option value="General Enquiry">General Enquiry</option>
                  <option value="Business Partnership">
                    Business Partnership
                  </option>
                  <option value="Sales">Sales</option>
                  <option value="Customer Support">Customer Support</option>
                  <option value="Careers">Careers</option>
                  <option value="Media">Media</option>
                  <option value="Other">Other</option>
                </select>

                <span className="contact__select-arrow">▼</span>
              </div>
            </div>
            <div className="contact__field">
              <label>Message</label>

              <textarea
                rows="5"
                name="message"
                placeholder="Type your message..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="contact__btn" disabled={loading}>
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
