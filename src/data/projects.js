import { technologies } from "./technologies";
import MKtest1 from "../assets/images/MK-Test_1.webp";
import Dashboard1 from "../assets/images/Dashboard_1.webp";
import ImageFinder from "../assets/images/ImageFinder.webp";
import RentalCar from "../assets/images/RentalCar.webp";
import BankHotel from "../assets/images/BankHotel.webp";
import Envent from "../assets/images/Envent.webp";

export const projects = [
  {
    id: 5,
    name: "Dashboard",
    technologies: [
      technologies[3],
      technologies[4],
      technologies[22],
      technologies[23],
    ], //React, JS, Firebase, SASS...
    img: Dashboard1,
    descEn:
      "This application is a test task that simulates a page with information panels. Registration and login using firebase works here. Validation using Yup, the password must contain min of 6 characters and required for a correct must contain 1 lowercase, 1 uppercase letter and 1 number.",
    descUa:
      "Цей додаток є тестовим завданням, яке імітує сторінку з інформаційними панелями. Тут працює реєстрація та вхід за допомогою firebase. Перевірка за допомогою Yup, пароль має містити щонайменше 6 символів і має містити 1 малу, 1 велику літеру та 1 цифру.",
    roleEn: "Role: Devepoler",
    roleUa: "Роль: Розробник",
    web: "https://stden-dashboard-test.netlify.app/",
    gitHub: "https://github.com/Stepaniuk-Den/react-dashboard-test",
  },
  {
    id: 2,
    name: "MK test",
    technologies: [
      technologies[3],
      technologies[4],
      technologies[5],
      technologies[13],
    ], //React, JS, Redux, Styled-Components
    img: MKtest1,
    descEn:
      "This application is a test task that simulates three screens from the popular computer game Mortal Kombat 3.",
    descUa:
      "Даний додаток - це тестове завдання, яке імітує три екрани з популярної комп'ютерної гри Mortal Kombat 3.",
    roleEn: "Role: Devepoler",
    roleUa: "Роль: Розробник",
    web: "https://stepaniuk-den.github.io/mk-test/",
    gitHub: "https://github.com/Stepaniuk-Den/mk-test",
  },
  {
    id: 3,
    name: "Image Finder",
    technologies: [
      technologies[4],
      technologies[3],
      technologies[16],
      technologies[13],
    ], //...
    img: ImageFinder,
    descEn:
      "This is a simple application for searching pictures on the free online service https://pixabay.com. Enter a word in the search term and get the result",
    descUa:
      "Це простий додаток для пошуку картинок на безкоштовному онлайн-сервісі https://pixabay.com. Введіть слово у строку пошуку і отримайте результат",
    roleEn: "Role: Devepoler",
    roleUa: "Роль: Розробник",
    web: "https://stepaniuk-den.github.io/ImageFinder/",
    gitHub: "https://github.com/Stepaniuk-Den/ImageFinder",
  },
  {
    id: 4,
    name: "Rental Car",
    technologies: [
      technologies[3],
      technologies[4],
      technologies[16],
      technologies[5],
    ], //...
    img: RentalCar,
    descEn:
      "This is an application for finding and renting cars, with convenient navigation and a selection of different car options.",
    descUa:
      "Це додаток для пошуку та оренди автомобілів, зі зручною навігацією та вибором різних варіантів авто.",
    roleEn: "Role: Devepoler",
    roleUa: "Роль: Розробник",
    web: "https://stepaniuk-den.github.io/RentalCar",
    gitHub: "https://github.com/Stepaniuk-Den/RentalCar",
  },
  {
    id: 6,
    name: "Bank Hotel",
    technologies: [
      technologies[3],
      technologies[4],
      technologies[13],
      technologies[5],
      technologies[22],
    ], //React, JS, Redux, Styled-Components
    img: BankHotel,
    descEn:
      "BankHotel is a project designed to showcase the luxurious and modern facilities of a high-end hotel. The website features a clean and elegant design, providing potential guests with all the information they need to choose BankHotel for their stay.",
    descUa:
      "BankHotel – це проект, розроблений для демонстрації розкішних і сучасних зручностей готелю високого класу. Веб-сайт має чистий та елегантний дизайн, надаючи потенційним гостям всю необхідну інформацію, щоб вибрати BankHotel для свого перебування.",
    roleEn: "Role: Devepoler",
    roleUa: "Роль: Розробник",
    web: "https://bank-hotel-eight.vercel.app/#home",
    gitHub: "https://github.com/Elonka5/bank-hotel",
  },
  {
    id: 1,
    name: "Envent",
    technologies: [
      technologies[8],
      technologies[4],
      technologies[5],
      technologies[23],
    ], //NextJS, React, JS, SCSS
    img: Envent,
    descEn:
      "Envent is a project developed for Energoventilatsia LLC, which is a multi-page site where the user can find all the necessary information about the company and the services it provides.",
    descUa:
      "Envent – це проект, розроблений для ТОВ Енерговентиляція, який представляє собою багатосторінковий сайт, на якому користувач може знайти всю необхідну інформацію про фірму та надаваємі нею послуги.",
    roleEn: "Role: Devepoler",
    roleUa: "Роль: Розробник",
    web: "https://envent.vercel.app/en",
    gitHub: "https://github.com/Stepaniuk-Den/envent",
  },
];
