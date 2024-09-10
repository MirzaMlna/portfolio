const FooterSection = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-4">
            <h5>About Me</h5>
            <p>
              I am an ambitious student who has some historic achievements and
              good experiences
            </p>
          </div>
          <div className="col-md-4">
            <h5>Contact Me</h5>
            <ul className="list-unstyled">
              <li>
                <a href="mailto:mirzamaulana713.com" className="text-light">
                  mirzamaulana713.com
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Follow Me</h5>
            <a
              href="https://www.instagram.com/mirza_mlna/"
              className="text-light me-2"
            >
              <i className="bi bi-instagram"></i>
            </a>
            <a href="#" className="text-light me-2">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="https://github.com/MirzaMlna" className="text-light me-2">
              <i className="bi bi-github"></i>
            </a>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12 text-center">
            <p className="mb-0">
              &copy; 2024 Muhammad Mirza Maulana. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
