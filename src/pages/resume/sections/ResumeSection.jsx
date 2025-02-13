import { Button, Row, Col } from "react-bootstrap"; // Import React Bootstrap
import { useNavigate } from "react-router-dom";

import AppSection from "../../../components/AppSection";
import HoverScaleWrapper from "../../../components/motionWrappers/HoverScaleWrapper";
import FadeInWrapper from "../../../components/motionWrappers/FadeInWrapper";

const ResumeSection = () => {
  const navigate = useNavigate();

  return (
    <FadeInWrapper>
      <AppSection id="ResumeSection" icon="bi-caret-right" title="Resume">
        <Row className="mb-4">
          <Col md={5} className="mb-4">
            <h3>
              <i className="bi bi-caret-right text-mirza-primary"> </i>
              Pengalaman Tim & Organisasi
            </h3>
            <ul>
              <li className="fw-bold">
                Kepala Divisi Opini & Media (2023 - 2024)
              </li>
              <p>Kajian Dakwah Kampus Al-Karomah UNISKA.</p>
              <li className="fw-bold">
                Tim Forger - GEMASTIK XV. Divisi Pemrograman Perangkat Lunak
                (2022)
              </li>
              <p>Universitas Brawijaya</p>
              <li className="fw-bold">
                Tambalin - Sebagai Mobile Front End Developer (2023)
              </li>
              <p>
                Direktorat Jenderal Pendidikan Tinggi, Riset dan Teknologi
                Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi
                Republik Indonesia (Kemendikbudristek RI).
              </p>
              <li className="fw-bold">Tim Pemenangan Provinsi (2024)</li>
              <p>Muhidin Hasnur</p>
              <li className="fw-bold">
                Ketua Umum UKM KDK Al-Karomah UNISKA (2024/2025)
              </li>
              <p>Kajian Dakwah Kampus Al-Karomah UNISKA.</p>
            </ul>
          </Col>

          <Col md={4} className="mb-4">
            <h3>
              <i className="bi bi-caret-right text-mirza-primary"> </i>
              Pengalaman Kerja
            </h3>
            <ul>
              <li className="fw-bold">Partai Amanat Nasional (2023)</li>
              <p>
                Sebagai Tim Ahli Bidang IT, Khususnya Front End Developer
                Aplikasi Quick Count Partai PAN Menggunakan Laravel.
              </p>
              <li className="fw-bold">
                Tim Pemenangan Provinsi Muhidin Hasnur (2024)
              </li>
              <p>Sebagai Tim Ahli Bidang IT.</p>
              <li className="fw-bold">
                TP PKK Provinsi Kalimantan Selatan (2025)
              </li>
              <p>Sebagai Staff bidang IT.</p>
            </ul>
          </Col>

          <Col md={3} className="mb-4">
            <h3>
              <i className="bi bi-caret-right text-mirza-primary"> </i>
              Pengalaman Pribadi
            </h3>
            <ul>
              <li className="fw-bold">
                Stand Up Comedy di Depan 4000 Mata Saat Menjadi Mahasiswa Baru
                Dalam Pengenalan Kehidupan Kampus bagi Mahasiswa Baru (2022)
              </li>
              <p>Pengenalan Kehidupan Kampus Mahasiswa Baru (PKKMB) 2022</p>
              <li className="fw-bold">
                Freelancer Projek Aplikasi & Tugas (2022 - Present)
              </li>
              <p>Mirza Project And Assignment</p>
            </ul>
          </Col>
        </Row>

        <Row>
          <Col md={4} className="mb-4">
            <h3>
              <i className="bi bi-caret-right text-mirza-primary"> </i>Keahlian
            </h3>
            <ul>
              <li>Public Speaking</li>
              <li>HTML/CSS</li>
              <li>PHP, JavaScript, Dart</li>
              <li>Bootstrap, Tailwind</li>
              <li>Laravel, Flutter</li>
            </ul>
          </Col>

          <Col md={4} className="mb-4">
            <h3>
              <i className="bi bi-caret-right text-mirza-primary"> </i>
              Pencapaian
            </h3>
            <ul>
              <li className="fw-bold">20 Besar Stand Up Competition (2023)</li>
              <p>KMI EXPO XIV - Bali.</p>
              <li className="fw-bold">
                Meraih juara ke-5 dari 273 kampus Indonesia dalam ajang
                &raquo;KMI AWARD&laquo; kategori Bisnis Digital tingkat
                nasional, sekaligus mengukir sejarah UNISKA untuk pertama
                kalinya menjuarai ajang ini. (2023)
              </li>
              <p>KMI EXPO XIV - Bali.</p>
            </ul>
          </Col>

          <Col md={4} className="mb-4">
            <h3>
              <i className="bi bi-caret-right text-mirza-primary"> </i>
              Perguruan Tinggi
            </h3>
            <ul>
              <li className="fw-bold">Sekolah Menengah Atas (2019 - 2022)</li>
              <p>SMAN 11 Banjarmasin (Matematika & IPA)</p>
              <li className="fw-bold">Universitas (2022 - Present)</li>
              <p>
                Universitas Islam Kalimantan Muhammad Arsyad Al-Banjari (Sarjana
                (S1) Teknik Informatika)
              </p>
            </ul>
          </Col>
        </Row>

        <Row className="my-3">
          <Col className="d-flex justify-content-start">
            <HoverScaleWrapper>
              <Button variant="dark" size="lg" onClick={() => navigate("/")}>
                &larr; Kembali
              </Button>
            </HoverScaleWrapper>
          </Col>

          <Col className="d-flex justify-content-end">
            <HoverScaleWrapper>
              <Button
                variant="dark"
                size="lg"
                onClick={() => navigate("/certificates")}
              >
                Lanjut &rarr;
              </Button>
            </HoverScaleWrapper>
          </Col>
        </Row>
      </AppSection>
    </FadeInWrapper>
  );
};

export default ResumeSection;
