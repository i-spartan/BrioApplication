import { Hike } from './components/HikeCard/HikeCard';
import lakeImage from './assets/images/lake_in_mountains.jpg';
import lakeWebp from './assets/images/lake_in_mountains.webp';
import mountainsNight from './assets/images/nignt_in_mountains.jpg';
import mountainsNightWebp from './assets/images/nignt_in_mountains.webp';
import mountainsJoga from './assets/images/joga_in_mountains.jpg';
import mountainsJogaWebp from './assets/images/joga_in_mountains.webp';
import italyImg from './assets/images/italy_post.jpg';
import italyWebp from './assets/images/italy_post.webp';
import flightImg from './assets/images/flight_post.png';
import flightWebp from './assets/images/flight_post.webp';
import backpackImg from './assets/images/backpack_post.png';
import backpackWebp from './assets/images/backpack_post.webp';
import mosqueImg from './assets/images/mosque_post.png';
import mosqueWebp from './assets/images/mosque_post.webp';
import balloons from './assets/images/balloons.jpg';
import balloonsWebp from './assets/images/balloons.webp';
import lakeAndMountain from './assets/images/lake_and_mountain.jpg';
import lakeAndMountainWebp from './assets/images/lake_and_mountain.webp';
import palms from './assets/images/palms.jpg';
import palmsWebp from './assets/images/palms.webp';
import photosOnMap from './assets/images/photos_and_map.jpg';
import photosOnMapWebp from './assets/images/photos_and_map.webp';
import rainbow from './assets/images/rainbow.jpg';
import rainbowWebp from './assets/images/rainbow.webp';
import waterfall from './assets/images/waterfall.jpg';
import waterfallWebp from './assets/images/waterfall.webp';
import backpackerImg from './assets/images/advantages_backpacker_lake.jpg';
import backpackerWebp from './assets/images/advantages_backpacker_lake.webp';
import fieldMountainImg from './assets/images/advantages_field_mountain.jpg';
import fieldMountainWebp from './assets/images/advantages_field_mountain.webp';
import fireImg from './assets/images/advantages_fire.jpg';
import fireWebp from './assets/images/advantages_fire.webp';
import yellowCoatImg from './assets/images/advantages_yellow_coat.jpg';
import yellowCoatWebp from './assets/images/advantages_yellow_coat.webp';
import { BlogPostCardType } from './components/BlogPostCard/BlogPostCard';
import { GalleryPhotoType } from './components/PhotoGallery/SliderPhotoGallery';
import { NavLinkType } from './components/NavLink/NavLink';
import { ImageType } from './components/Image/Image';


export const PRODUCTS: any[] = [
    {
        // rating: 0,
        image: lakeImage,
        imageWebp: lakeWebp,
        title: 'BRIO GEARLESS BELT',
        // subTitle: 'романтическое приключение',
        description:
            'Прекрасное озеро в окружении каменных великанов. Вы проведёте незабываемое время с теми, кто для вас важен. В эту поездку вы получите заряд сил на долгое время. Горы не оставляют равнодушным никого. Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum, "consectetur"и занялся его поисками в классической латинской литературе.',
        // price: '480$',
    },
    {
        // rating: 0,
        image: mountainsNight,
        imageWebp: mountainsNightWebp,
        title: 'BRIO GEARLESS ROPE',
        // subTitle: 'в компании друзей',
        description:
            'Звёздная ночь в горах в кругу единомышленников. Что может быть лучше? Ночёвка в комфортабельных домиках.',
        // price: '500$',
    },
    {
        // rating: 0,
        image: mountainsJoga,
        imageWebp: mountainsJogaWebp,
        title: 'BRIO HYDRAULI',
        // subTitle: 'для тех, кто забоится о себе',
        description:
            'Для всех кто любит активный отдых и физические упражнения, чтобы улучшать свое здоровье и вести за собой здоровый образ жизни. Йога действует не только тонизирует мышцы и улучшает дыхание, но и позволяет углубить контакт с окружающей средой, с собой и, следовательно, с найди свою гармонию внутреннее и собственное душевное равновесие.',
        // price: '270$',
    }, 
    {
        // rating: 0,
        image: mountainsJoga,
        imageWebp: mountainsJogaWebp,
        title: 'BRIO MOBILITY SERIES',
        // subTitle: 'для тех, кто забоится о себе',
        description:
            'Для всех кто любит активный отдых и физические упражнения, чтобы улучшать свое здоровье и вести за собой здоровый образ жизни. Йога действует не только тонизирует мышцы и улучшает дыхание, но и позволяет углубить контакт с окружающей средой, с собой и, следовательно, с найди свою гармонию внутреннее и собственное душевное равновесие.',
        // price: '270$',
    },
];

export const HIKES: Hike[] = [
    {
        rating: 4.8,
        image: lakeImage,
        imageWebp: lakeWebp,
        title: 'Озеро возле гор',
        subTitle: 'романтическое приключение',
        description:
            'Прекрасное озеро в окружении каменных великанов. Вы проведёте незабываемое время с теми, кто для вас важен. В эту поездку вы получите заряд сил на долгое время. Горы не оставляют равнодушным никого. Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum, "consectetur"и занялся его поисками в классической латинской литературе.',
        price: '480$',
    },
    {
        rating: 4.9,
        image: mountainsNight,
        imageWebp: mountainsNightWebp,
        title: 'Ночь в горах',
        subTitle: 'в компании друзей',
        description:
            'Звёздная ночь в горах в кругу единомышленников. Что может быть лучше? Ночёвка в комфортабельных домиках.',
        price: '500$',
    },
    {
        rating: 4.9,
        image: mountainsJoga,
        imageWebp: mountainsJogaWebp,
        title: 'Йога в горах',
        subTitle: 'для тех, кто забоится о себе',
        description:
            'Для всех кто любит активный отдых и физические упражнения, чтобы улучшать свое здоровье и вести за собой здоровый образ жизни. Йога действует не только тонизирует мышцы и улучшает дыхание, но и позволяет углубить контакт с окружающей средой, с собой и, следовательно, с найди свою гармонию внутреннее и собственное душевное равновесие.',
        price: '270$',
    },
];

export const ADVANTAGES_IMAGES: ImageType[] = [
    {
        image: backpackerImg,
        imageWebp: backpackerWebp,
        alt: 'Путешественник на берегу озера',
    },
    {
        image: fieldMountainImg,
        imageWebp: fieldMountainWebp,
        alt: 'Поле перед горой',
    },
    {
        image: fireImg,
        imageWebp: fireWebp,
        alt: 'Ночной костёр',
    },
    {
        image: yellowCoatImg,
        imageWebp: yellowCoatWebp,
        alt: 'Девушка в жёлтой куртке',
    },
];

export const ELIGANCEANDSTYLE: any[] = [
    {
        image: italyImg,
        imageWebp: italyWebp,
        // alt: 'Вид Италии',
        title: 'Classic',
        // text: 'Италия - одна из самых красивых стран в мире. Здесь есть что посмотреть - и древняя архитектура, и музеи, и захватывающие дух береговые линии, и потрясающие пейзажи.',
        // date: '01/04/2023',
    },
    {
        image: flightImg,
        imageWebp: flightWebp,
        // alt: 'Полёт самолёта в облаках',
        title: 'Pro-Cabin',
        // text: 'Отправляясь в путешествие, вы никогда не знаете какие открытия и судьбоносные встречи вас ожидают.',
        // date: '01/04/2023',
    },
    {
        image: backpackImg,
        imageWebp: backpackWebp,
        // alt: 'Путешественник',
        title: 'Elite Cabin',
        // text: 'Благодаря путешествиям вы сможете посмотреть на жизнь по новому. Вы обретёте свободу и возможность видеть страны так, ка вы этого хотите.',
        // date: '02/05/2023',
    },
    {
        image: mosqueImg,
        imageWebp: mosqueWebp,
        // alt: 'Вид на мечеть',
        title: 'Elegance',
        // text: 'Одна из тех стран, которая никого не оставляет равнодушным. Индия имеет долгую и богатую историю.',
        // date: '03/06/2023',
    },
];

export const POSTS: BlogPostCardType[] = [
    {
        image: italyImg,
        imageWebp: italyWebp,
        alt: 'Вид Италии',
        title: 'Красивая Италия, какая она в реальности?',
        text: 'Италия - одна из самых красивых стран в мире. Здесь есть что посмотреть - и древняя архитектура, и музеи, и захватывающие дух береговые линии, и потрясающие пейзажи.',
        date: '01/04/2023',
    },
    {
        image: flightImg,
        imageWebp: flightWebp,
        alt: 'Полёт самолёта в облаках',
        title: 'Долой сомнения! Весь мир открыт для вас!',
        text: 'Отправляясь в путешествие, вы никогда не знаете какие открытия и судьбоносные встречи вас ожидают.',
        date: '01/04/2023',
    },
    {
        image: backpackImg,
        imageWebp: backpackWebp,
        alt: 'Путешественник',
        title: 'Как подготовиться к путешествию в одиночку?',
        text: 'Благодаря путешествиям вы сможете посмотреть на жизнь по новому. Вы обретёте свободу и возможность видеть страны так, ка вы этого хотите.',
        date: '02/05/2023',
    },
    {
        image: mosqueImg,
        imageWebp: mosqueWebp,
        alt: 'Вид на мечеть',
        title: 'Индия ... летим?',
        text: 'Одна из тех стран, которая никого не оставляет равнодушным. Индия имеет долгую и богатую историю.',
        date: '03/06/2023',
    },
];

export const PHOTOS: GalleryPhotoType[] = [
    {
        image: balloons,
        imageWebp: balloonsWebp,
        description: 'Фестиваль воздушных шаров',
    },
    {
        image: lakeAndMountain,
        imageWebp: lakeAndMountainWebp,
        description: 'Озеро в горах',
    },
    { image: palms, imageWebp: palmsWebp, description: 'Райский пляж' },
    {
        image: photosOnMap,
        imageWebp: photosOnMapWebp,
        description: 'Прошлые и будущие путешествия',
    },
    { image: rainbow, imageWebp: rainbowWebp, description: 'Радуга' },
    {
        image: waterfall,
        imageWebp: waterfallWebp,
        description: 'Фантастический водопад',
    },
];

export const MENU_LINKS: NavLinkType[] = [
    // { text: 'Главная' },
    // { text: 'Про гида' },
    // { text: 'Программа тура' },
    // { text: 'Стоимость' },
    // { text: 'Блог' },
    // { text: 'Контакты' },
    { text: 'Home', showArrow: false },
    { text: 'Products', showArrow: false },
    { text: 'Blogs', showArrow: false },
    { text: 'Contact', showArrow: false }
];

export const FOOTER_LINKS1: NavLinkType[] = [
    { text: 'Hyderabad', showArrow: false },
    { text: 'Kochi', showArrow: false },
    { text: 'Chennai', showArrow: false },
    { text: 'Vijayawada', showArrow: false },
    { text: 'Bangalore', showArrow: false },
    // { text: 'Поездка в Африку' },
];

export const FOOTER_LINKS2: NavLinkType[] = [
    { text: 'Home', showArrow: true },
    { text: 'Products', showArrow: true },
    { text: 'Blog', showArrow: true },
    { text: 'Careers', showArrow: true },
];

export const TINY_SLIDER_SETTINGS = {
    lazyload: false,
    nav: false,
    mouseDrag: true,
    controls: false,
    gutter: 10,
    // fixedWidth: 380,
    autoWidth: true,
    center: true,
};
