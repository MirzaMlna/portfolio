import { Col, Row } from "react-bootstrap";
import AppSection from "../../../components/AppSection";
import FadeInWrapper from "../../../components/motionWrappers/FadeInWrapper";

const gallery = [
  [
    "assets/gallery/nilai99.webp",
    "Nilai Tertinggi Satu Angkatan",
    "Memimpin kelompok tugas akhir mata kuliah hingga meraih nilai tertinggi.",
  ],
  [
    "assets/gallery/standUpPKKMB.webp",
    "Stand Up PKKMB 2022",
    "Tampil di hadapan ribuan mahasiswa baru pada kegiatan pengenalan kampus.",
  ],
  [
    "assets/gallery/standUpBali.webp",
    "20 Besar Stand Up KMI Expo",
    "Berkompetisi dalam Stand Up Competition tingkat nasional di Bali.",
  ],
  [
    "assets/gallery/kmiAward.webp",
    "Juara 5 KMI Award XIV",
    "Mewakili kampus dan meraih pencapaian nasional kategori Bisnis Digital.",
  ],
];

// Tambahkan postingan Instagram sebagai kartu tersendiri di sini.
const instagramGallery = [
  {
    instagramUrl:
      "https://www.instagram.com/p/Cy0t8s6vzWa/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    instagramUrl:
      "https://www.instagram.com/p/C0lPRbGRS-A/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    instagramUrl:
      "https://www.instagram.com/p/Cz0U413RJKu/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    instagramUrl:
      "https://www.instagram.com/p/DDpEUiUyb3S/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    instagramUrl:
      "https://www.instagram.com/p/C7FCLcsvrBB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    instagramUrl:
      "https://www.instagram.com/reel/DR2BJ6xEyLs/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    instagramUrl: "",
  },
  {
    instagramUrl: "",
  },
  {
    instagramUrl: "",
  },
];

const getInstagramEmbedUrl = (url) => {
  try {
    const parsedUrl = new URL(url);
    const match = parsedUrl.pathname.match(/^\/(p|reel|tv)\/([^/]+)/);

    if (!match || !parsedUrl.hostname.endsWith("instagram.com")) return "";

    return `https://www.instagram.com/${match[1]}/${match[2]}/embed/`;
  } catch {
    return "";
  }
};

const GallerySection = () => (
  <FadeInWrapper>
    <AppSection id="gallery" icon="bi-images" title="Galeri Perjalanan">
      <p
        className="section-copy text-center mx-auto mb-5"
        style={{ maxWidth: "680px" }}
      >
        Potongan momen dari kegiatan akademik, organisasi, kompetisi, dan
        pencapaian pribadi.
      </p>
      <Row className="g-4">
        {gallery.map(([image, title, caption]) => (
          <Col lg={4} md={6} key={title}>
            <article className="portfolio-card">
              <img className="portfolio-image" src={image} alt={title} />
              <div className="portfolio-body">
                <h3>{title}</h3>
                <p>{caption}</p>
              </div>
            </article>
          </Col>
        ))}
      </Row>

      {instagramGallery.length > 0 && (
        <section className="instagram-gallery-section">
          <p className="section-eyebrow mb-2">Konten Instagram</p>
          <h2 className="h3 fw-bold mb-4">Postingan Pilihan</h2>
          <Row className="g-4">
            {instagramGallery.map(({ instagramUrl }) => {
              const embedUrl = getInstagramEmbedUrl(instagramUrl);

              return (
                <Col lg={4} md={6} key={instagramUrl}>
                  <article className="portfolio-card gallery-card">
                    <div className="instagram-embed-crop">
                      {embedUrl && (
                        <iframe
                          className="instagram-preview"
                          src={embedUrl}
                          title="Postingan Instagram"
                          loading="lazy"
                          scrolling="no"
                          allowFullScreen
                        ></iframe>
                      )}
                    </div>
                  </article>
                </Col>
              );
            })}
          </Row>
        </section>
      )}
    </AppSection>
  </FadeInWrapper>
);

export default GallerySection;
