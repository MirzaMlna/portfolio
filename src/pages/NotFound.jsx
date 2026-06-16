import { Link } from "react-router-dom";

const NotFound = () => (
  <section className="not-found">
    <div>
      <p className="section-eyebrow">404</p>
      <h1 className="section-heading">Halaman tidak ditemukan</h1>
      <p className="section-copy mb-4">Tautan yang Anda buka tidak tersedia atau sudah dipindahkan.</p>
      <Link className="primary-button" to="/">Kembali ke Beranda</Link>
    </div>
  </section>
);

export default NotFound;
