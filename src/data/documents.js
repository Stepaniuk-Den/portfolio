import Cv from "../assets/images/Denys Stepaniuk CV.webp";
import CvPdf from "../assets/images/Denys Stepaniuk CV.pdf";
import Certificate from "../assets/images/certificate.webp";
import CertificatePdf from "../assets/images/certificate.pdf";
import Fs1Pdf from "../assets/images/fullstack_1.pdf";
import Fs2Pdf from "../assets/images/fullstack_2.pdf";
import Fs3Pdf from "../assets/images/fullstack_3.pdf";
import Fullstack1 from "../assets/images/fullstack_1.webp";
import Fullstack2 from "../assets/images/fullstack_2.webp";
import Fullstack3 from "../assets/images/fullstack_3.webp";

export const docs = [
  {
    id: 1,
    docTitle: {
      eng: "Resume",
      ua: "Резюме",
    },
    docImg: Cv,
    path: CvPdf,
  },
  {
    id: 2,
    docTitle: {
      eng: "Full-stack certificate",
      ua: "Full-stack сертифікат",
    },
    docImg: Certificate,
    path: Fs1Pdf,
  },
  {
    id: 3,
    docTitle: {
      eng: "Full-stack part 1",
      ua: "Full-stack частина 1",
    },
    docImg: Fullstack1,
    path: Fs2Pdf,
  },
  {
    id: 4,
    docTitle: {
      eng: "Full-stack part 2",
      ua: "Full-stack частина 2",
    },
    docImg: Fullstack2,
    path: Fs3Pdf,
  },
  {
    id: 5,
    docTitle: {
      eng: "Full-stack part 3",
      ua: "Full-stack частина 3",
    },
    docImg: Fullstack3,
    path: CertificatePdf,
  },
];
