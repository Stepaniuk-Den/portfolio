import Cv from "../assets/images/Denys Stepaniuk CV.webp";
// import CV from "../assets/images/Denys Stepaniuk CV.pdf";
import Certificate from "../assets/images/certificate.webp";
// import CertificatePDF from "./docs/Full-Stack certificate.pdf";
import Fullstack1 from "../assets/images/fullstack_1.webp";
import Fullstack2 from "../assets/images/fullstack_2.webp";
import Fullstack3 from "../assets/images/fullstack_3.webp";
// import FScoursePDF from "./docs/Full-Stack course.pdf";

export const docs = [
  {
    id: 1,
    docTitle: {
      eng: "Resume",
      ua: "Резюме",
    },
    docImg: Cv,
    // path: CV,
  },
  {
    id: 2,
    docTitle: {
      eng: "Full-stack certificate",
      ua: "Full-stack сертифікат",
    },
    docImg: Certificate,
    // path: FSCertificatePDF,
  },
  {
    id: 3,
    docTitle: {
      eng: "Full-stack part 1",
      ua: "Full-stack частина 1",
    },
    docImg: Fullstack1,
    // docImgArr: [FScourseImg1, FScourseImg2, FScourseImg3],
    // path: FScoursePDF,
  },
  {
    id: 4,
    docTitle: {
      eng: "Full-stack part 2",
      ua: "Full-stack частина 2",
    },
    docImg: Fullstack2,
    // docImgArr: [FScourseImg1, FScourseImg2, FScourseImg3],
    // path: FScoursePDF,
  },
  {
    id: 5,
    docTitle: {
      eng: "Full-stack part 3",
      ua: "Full-stack частина 3",
    },
    docImg: Fullstack3,
    // docImgArr: [FScourseImg1, FScourseImg2, FScourseImg3],
    // path: FScoursePDF,
  },
];
