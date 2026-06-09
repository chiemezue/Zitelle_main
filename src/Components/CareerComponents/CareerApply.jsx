const CareerApply = () => {
  return (
    <section className="career-apply">
      {/* TOP */}

      <div className="career-apply__top">
        <h2 className="career-apply__title">Apply Now</h2>

        <p className="career-apply__text">
          We are always looking for talented, hardworking and motivated people
          who want to grow with us. Fill in the form below and we will be in
          touch.
        </p>
      </div>

      {/* FORM */}

      <form className="career-apply__form">
        {/* ROW */}

        <div className="career-apply__grid">
          <div className="career-apply__field">
            <label>Full Name</label>

            <input type="text" placeholder="Your Name.." />
          </div>

          <div className="career-apply__field">
            <label>Email</label>

            <input type="email" placeholder="Your Email..." />
          </div>
        </div>

        {/* ROW */}

        <div className="career-apply__grid">
          <div className="career-apply__field">
            <label>Phone Number</label>

            <input type="text" placeholder="+234 ---------" />
          </div>

          <div className="career-apply__field">
            <label>Location</label>

            <select>
              <option>Select...</option>
              <option>Lagos</option>
              <option>Abuja</option>
              <option>Port Harcourt</option>
              <option>Enugu</option>
            </select>
          </div>
        </div>

        {/* ADDRESS */}

        <div className="career-apply__field">
          <label>Address</label>

          <textarea placeholder="Address, City, Zip Code" />
        </div>

        {/* ROW */}

        <div className="career-apply__grid">
          <div className="career-apply__field">
            <label>Applying For</label>

            <select>
              <option>Select...</option>
              <option>Sales</option>
              <option>Quality Control</option>
              <option>Packaging</option>
              <option>Logistics</option>
            </select>
          </div>

          <div className="career-apply__field">
            <label>Years Of Experience</label>

            <select>
              <option>Select...</option>
              <option>0 - 1 Year</option>
              <option>2 - 4 Years</option>
              <option>5+ Years</option>
            </select>
          </div>
        </div>

        {/* FILE */}

        <div className="career-apply__field">
          <label>Upload CV</label>

          <input type="file" className="career-apply__file" />
        </div>

        {/* BUTTON */}

        <button type="submit" className="career-apply__btn">
          Submit Application
        </button>
      </form>
    </section>
  );
};

export default CareerApply;
