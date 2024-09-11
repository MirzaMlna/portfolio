const FooterSection = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-4">
            <h5>Tentang Saya</h5>
            <p>
              Saya adalah seorang pelajar ambisius yang memiliki beberapa
              prestasi bersejarah dan pengalaman baik
            </p>
          </div>
          <div className="col-md-4">
            <h5>Hubungi Saya</h5>
            <ul className="list-unstyled">
              <li>
                <a href="mailto:mirzamaulana713.com" className="text-light">
                  mirzamaulana713.com
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Mari Berteman</h5>
            <a
              href="https://www.instagram.com/mirza_mlna/"
              className="text-light me-2"
            >
              <i className="bi bi-instagram"></i>
            </a>
            <a
              href="https://www.tiktok.com/@maulana.mirza"
              className="text-light me-2"
            >
              <i className="bi bi-tiktok"></i>
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
