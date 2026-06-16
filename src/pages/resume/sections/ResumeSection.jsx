import { Col, Row } from "react-bootstrap";
import AppSection from "../../../components/AppSection";
import FadeInWrapper from "../../../components/motionWrappers/FadeInWrapper";

const experiences = [
  [
    "2026",
    "Fotografer Gubernur Kalimantan Selatan",
    "Biro Administrasi Pimpinan Setda Provinsi Kalimantan Selatan.",
  ],
  [
    "2026",
    "Ketua Pelaksana Seminar Kepemudaan",
    "DPW Partai Amanat Nasional Provinsi Kalimantan Selatan.",
  ],
  ["2025", "Staff Bidang Multimedia", "TP PKK Provinsi Kalimantan Selatan."],
  [
    "2024 - 2025",
    "Ketua Umum UKM KDK Al-Karomah",
    "Memimpin organisasi mahasiswa dan mengoordinasikan program kerja.",
  ],
  [
    "2024",
    "Staff Ahli Bidang IT & Multimedia Tim Pemenangan",
    "Muhidin Hasnur Official Team",
  ],
  ["2023 - 2024", "Kepala Divisi Opini & Media", "UKM KDK Al-Karomah."],
  [
    "2023",
    "Front-End Developer",
    "DPW Partai Amanat Nasional Provinsi Kalimantan Selatan.",
  ],
  [
    "2023",
    "Mobile Front-End Developer Tambalin",
    "P2MW | KMI EXPO XIV Universitas Brawijaya, Bali.",
  ],
  [
    "2022",
    "Tim Forger - GEMASTIK XV",
    "Divisi Pemrograman Perangkat Lunak tingkat nasional di Universitas Brawijaya.",
  ],
];

const cards = [
  {
    icon: "bi-mortarboard",
    title: "Pendidikan",
    lines: [
      "S1 Teknik Informatika, UNISKA MAB (2022 - sekarang)",
      "SMAN 11 Banjarmasin, Matematika & IPA (2019 - 2022)",
    ],
  },
  {
    icon: "bi-trophy",
    title: "Pencapaian",
    lines: [
      "Juara 5 KMI Award XIV kategori Bisnis Digital (2023)",
      "20 Besar Stand Up Competition KMI Expo XIV, Bali (2023)",
    ],
  },
  {
    icon: "bi-tools",
    title: "Keahlian",
    lines: [
      "Fotografer dan videografer",
      "Alat Editing Video: CapCut",
      "Alat Desain: Figma, Canva, dan Adobe Illustrator",
      "HTML, CSS, JavaScript, PHP, React, Laravel, Bootstrap, dan Tailwind",
      "Public Speaking",
    ],
  },
];

const ResumeSection = () => (
  <FadeInWrapper>
    <AppSection
      id="resume"
      icon="bi-person-vcard"
      title="Resume & Pengalaman"
    >
      <Row className="g-5">
        <Col lg={7}>
          <p className="section-eyebrow">Perjalanan Profesional</p>
          <h2 className="h3 fw-bold mb-4">
            Pengalaman kerja, tim, dan organisasi
          </h2>
          <div className="timeline">
            {experiences.map(([year, title, text]) => (
              <div className="timeline-item" key={`${year}-${title}`}>
                <article className="timeline-card">
                  <span className="year">{year}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              </div>
            ))}
          </div>
        </Col>
        <Col lg={5}>
          <Row className="g-4">
            {cards.map((card) => (
              <Col xs={12} key={card.title}>
                <article className="info-card">
                  <div className="info-icon">
                    <i className={`bi ${card.icon}`}></i>
                  </div>
                  <h3>{card.title}</h3>
                  {card.lines.map((line) => (
                    <p className="mb-2" key={line}>
                      {line}
                    </p>
                  ))}
                </article>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </AppSection>
  </FadeInWrapper>
);

export default ResumeSection;
