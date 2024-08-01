import { v4 as uuidv4 } from 'uuid';
import BurgerImg from '../images/burgermaker.jpg';
import CloudManagementImg from '../images/cyber-bg.png';
import NetflixImg from '../images/Netflix.jpg';
import OlympicImg from '../images/Capture.JPG';
import WhatsappImg from '../images/whatsapp-web-crawlers.jpg';
import HousePrice from '../images/House_price.JPG';

const projects = [
  {
    id: uuidv4(),
    name: 'AI Meal Planner & Image Detection',
    // eslint-disable-next-line prettier/prettier
    desc:'Formulated an AI-based meal planner that provides food items recommendations based on the calorie goal set by the user, along with recipes leveraging OpenAI for 30+ dishes. Along with that, a reward is based on a match of the image uploaded by the user with that of the recommended dish.',

    img: CloudManagementImg,
    path: 'https://jatin161-tmdb-movie-recommendation-main-03719j.streamlit.app/',
    target: '_blank',
  },
  {
    id: uuidv4(),
    name: 'Plant Disease Classifier',
    // eslint-disable-next-line prettier/prettier
    desc:
    ' Formulated with a team to enhance the user interface and usability of a web dashboard, ensuring a more user-friendly experience.This dashboard, designed to recognize disease stages in crops, utilized CNN algorithms applied to a dataset of various crop species',
    img: NetflixImg,
    path: 'https://github.com/jatin161/Color_detector.git',
    target: '_blank',
  },
];

export default projects;
