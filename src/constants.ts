import { Hike } from './components/HikeCard/HikeCard';
import lakeImage from './assets/images/gearLessBelt.jpg';
import lakeWebp from './assets/images/gearLessBelt.jpg';
import mountainsNight from './assets/images/gearLessRope.jpg';
import mountainsNightWebp from './assets/images/gearLessRope.jpg';
import mountainsJoga from './assets/images/hydraulic.jpg';
import mountainsJogaWebp from './assets/images/hydraulic.jpg';
import mobilitySeries from './assets/images/mobilitySeries.jpg';
import mobilitySeriesWebp from './assets/images/mobilitySeries.jpg';
import italyImg from './assets/images/gearless.jpg';
import italyWebp from './assets/images/gearless.jpg';
import flightImg from './assets/images/energySaving.jpg';
import flightWebp from './assets/images/energySaving.jpg';
import backpackImg from './assets/images/intelligentControlSystems.jpg';
import backpackWebp from './assets/images/intelligentControlSystems.jpg';
import mosqueImg from './assets/images/intelligentControls.jpg';
import mosqueWebp from './assets/images/intelligentControls.jpg';
import homeSeriesImage from './assets/images/homeSeriesImage.jpg';
import homeSeriesImagesWebp from './assets/images/homeSeriesImage.jpg';
import lakeAndMountain from './assets/images/homeseriesImage1.jpg';
import lakeAndMountainWebp from './assets/images/homeseriesImage1.jpg';
import palms from './assets/images/massonarylift.jpg';
import palmsWebp from './assets/images/massonarylift.jpg';
import photosOnMap from './assets/images/eligance4.jpg';
import photosOnMapWebp from './assets/images/eligance4.jpg';
import rainbow from './assets/images/nopitElevatioinImage.jpg';
import rainbowWebp from './assets/images/nopitElevatioinImage.jpg';
import waterfall from './assets/images/eligance2.jpg';
import waterfallWebp from './assets/images/eligance2.jpg';
import backpackerImg from './assets/images/tuv2.jpg';
import backpackerWebp from './assets/images/tuv2.jpg';
import fieldMountainImg from './assets/images/tuvImg.png';
import fieldMountainWebp from './assets/images/tuvImg.png';
import fireImg from './assets/images/5yersImg.png';
import fireWebp from './assets/images/5yersImg.png';
import yellowCoatImg from './assets/images/tuv22.jpg';
import yellowCoatWebp from './assets/images/tuv22.jpg';
import { BlogPostCardType } from './components/BlogPostCard/BlogPostCard';
import { GalleryPhotoType } from './components/PhotoGallery/SliderPhotoGallery';
import { NavLinkType } from './components/NavLink/NavLink';
import { ImageType } from './components/Image/Image';
import img1 from './assets/images/img1.jpg';
import img2 from './assets/images/img2.jpg';
import img3 from './assets/images/img3.jpg';
import img4 from './assets/images/img4.jpg';
import img5 from './assets/images/img5.jpg';
import img6 from './assets/images/img6.jpg';
import img7 from './assets/images/img7.jpg';
import img8 from './assets/images/img8.jpg';
import img9 from './assets/images/img9.jpg';

export const PRODUCTS: any[] = [
    {
        // rating: 0,
        image: lakeImage,
        imageWebp: lakeWebp,
        title: 'GEARLESS BELT',
        // subTitle: 'романтическое приключение',
        description:
            'Elevate your expectations with our cutting-edge Belt technology and rivet-less shaft, setting our elevators apart globally. While competitors struggle to meet current home elevator standards like MD 2006 42 EC and EN 81-41, our elevators not only meet but exceed them. With the ability to easily update and diagnose, we confidently dominate the Home Elevator Industry.',
        // price: '480$',
    },
    {
        // rating: 0,
        image: mountainsNight,
        imageWebp: mountainsNightWebp,
        title: 'GEARLESS ROPE',
        // subTitle: 'в компании друзей',
        description:
            'BRIO Gearless unique traction lift solution that complies with lifts Directive 2014/33/EU. Installation can be customized to any architectural need and design, even special and challenging projects. It is an elegant and, above all, truly convenient solution, allowing for perfect fitting within any existing or new building.',
        // price: '500$',
    },
    {
        // rating: 0,
        image: mountainsJoga,
        imageWebp: mountainsJogaWebp,
        title: 'HYDRAULI LIFT',
        // subTitle: 'для тех, кто забоится о себе',
        description:
            'Indulge in opulence with our Brio Imported Hydraulic Technology, a versatile lift designed for an array of applications. Powered by established and dependable hydraulic technology, this system ensures a seamless and reliable experience.',
        // price: '270$',
    }, 
    {
        // rating: 0,
        image: mobilitySeries,
        imageWebp: mobilitySeriesWebp,
        title: 'MOBILITY SERIES',
        // subTitle: 'для тех, кто забоится о себе',
        description:
            'Our extensive product lineup ensures that we provide an accessibility solution tailored to every home. Just as each unit is uniquely crafted to user specifications, our diverse product range is meticulously designed to cater to the individual needs of every customer.',
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
        price: '480$'
    },
    {
        rating: 4.9,
        image: mountainsNight,
        imageWebp: mountainsNightWebp,
        title: 'Ночь в горах',
        subTitle: 'в компании друзей',
        description:
            'Звёздная ночь в горах в кругу единомышленников. Что может быть лучше? Ночёвка в комфортабельных домиках.',
        price: '500$'
    },
    {
        rating: 4.9,
        image: mountainsJoga,
        imageWebp: mountainsJogaWebp,
        title: 'Йога в горах',
        subTitle: 'для тех, кто забоится о себе',
        description:
            'Для всех кто любит активный отдых и физические упражнения, чтобы улучшать свое здоровье и вести за собой здоровый образ жизни. Йога действует не только тонизирует мышцы и улучшает дыхание, но и позволяет углубить контакт с окружающей средой, с собой и, следовательно, с найди свою гармонию внутреннее и собственное душевное равновесие.',
        price: '270$'
    },
];

export const ADVANTAGES_IMAGES: ImageType[] = [
    {
        image: backpackerImg,
        imageWebp: backpackerWebp,
        alt: 'backpackerImg',
    },
    {
        image: fieldMountainImg,
        imageWebp: fieldMountainWebp,
        alt: 'fieldMountainImg',
    },
    {
        image: fireImg,
        imageWebp: fireWebp,
        alt: 'fireImg',
    },
    {
        image: yellowCoatImg,
        imageWebp: yellowCoatWebp,
        alt: 'yellowCoatImg',
    },
];

export const ELIGANCEANDSTYLE: any[] = [
    {
        image: italyImg,
        imageWebp: italyWebp,
        // alt: 'Вид Италии',
        title: 'Expertise In GearLess',
        text: 'Through our expertise in engineering. We have developed a high-quality gearless home elevator. The result is a high-performance addition to your home that you can hardly hear, even when you put your ear elevator.',
        // date: '01/04/2023',
    },
    // {
    //     image: flightImg,
    //     imageWebp: flightWebp,
    //     // alt: 'Полёт самолёта в облаках',
    //     title: 'Energy Efficient',
    //     text: ' In todays world, energy efficiency is paramount, and Brio Elevators stands at the forefront of Evolutionizing vertical Transportation by prioritizing sustainability. Our Elevators are Engineered to not only elevate people but also Elevate energy efficiency to new heights',
    //     // date: '01/04/2023',
    // },
    {
        image: flightImg,
        imageWebp: flightWebp,
        // alt: 'Полёт самолёта в облаках',
        title: 'Magnetic controls with advanced landing (PMSM)',
        text: 'Enhancing elevator safety, our Magnetic Controls, inspired by Japanese train technology, revolutionize door systems. Unlike conventional key switches prone to wear, our patented electronic components ensure reliability, preventing abrupt closures and potential accidents. With a commitment to innovation, our cutting-edge solution elevates user safety by minimizing wear and tear and ensuring door system durability.',
        // date: '01/04/2023',
    },
    // {
    //     image: backpackImg,
    //     imageWebp: backpackWebp,
    //     // alt: 'Путешественник',
    //     title: 'Reliable solutions',
    //     text: 'In case of a power failure, our home elevators will continue to work from a battery, allowing the user to reach the ground floor safely. It is also possible to connect a Fire Alarm System to the main Electronic Board.',
    //     // date: '02/05/2023',
    // },
    {
        image: backpackImg,
        imageWebp: backpackWebp,
        // alt: 'Путешественник',
        title: 'Enhanced fault detection and reporting system',
        text: 'Addressing elevator breakdown concerns, our proactive monitoring system revolutionizes safety, especially in private homes. Unlike traditional methods, our patented Error Notification System, inspired by German Super Cars, alerts users before issues arise, enabling timely intervention and minimizing downtime. With advanced warnings and immediate action, it ensures the well-being of loved ones and prevents potential malfunctions, elevating the overall safety of elevator systems.',
        // date: '02/05/2023',
    },
    // {
    //     image: mosqueImg,
    //     imageWebp: mosqueWebp,
    //     // alt: 'Вид на мечеть',
    //     title: 'Intelligent control systems',
    //     text: 'Our Elevators are equipped with Intelligent Control Systems that adapt to usage patterns. They optimize elevator operation by predicting passenger demand, reducing unnecessary stops, and minimizing idle time, all while conserving energy.',
    //     // date: '03/06/2023',
    // },
    {
        image: mosqueImg,
        imageWebp: mosqueWebp,
        // alt: 'Вид на мечеть',
        title: 'Multi layred safety',
        text: 'Highlighting elevator operation risks, our multi-layered safety approach for private homes includes primary and secondary batteries, a mechanical button for descent, a manual emergency key on each floor, and a trap door for top-of-cabin accessibility. These layers ensure reliable performance during power disruptions, offer alternative descent options, and facilitate safe passenger rescue, demonstrating our commitment to elevated safety measures in home elevators.',
        // date: '03/06/2023',
    },
];

export const POSTS: BlogPostCardType[] = [
    {
        image: italyImg,
        imageWebp: italyWebp,
        alt: 'italyImg',
        title: 'italyImg',
        text: 'italyImg',
        date: '01/04/2023',
    },
    {
        image: flightImg,
        imageWebp: flightWebp,
        alt: 'flightImg',
        title: 'flightImg',
        text: 'flightImg',
        date: '01/04/2023',
    },
    {
        image: backpackImg,
        imageWebp: backpackWebp,
        alt: 'backpackImg',
        title: 'backpackImg',
        text: 'backpackImg',
        date: '02/05/2023',
    },
    {
        image: mosqueImg,
        imageWebp: mosqueWebp,
        alt: 'mosqueImg',
        title: 'mosqueImg',
        text: 'mosqueImg.',
        date: '03/06/2023',
    },
];

export const PHOTOS: GalleryPhotoType[] = [
    {
        image: img1,
        imageWebp: img1,
        description: 'img1'
    },
    {
        image: img2,
        imageWebp: img2,
        description: 'img2'
    },
    {   image: img3, 
        imageWebp: img3, 
        description: 'img3'
    },
    {
        image: img4,
        imageWebp: img4,
        description: 'img4'
    },
    {   image: img5, 
        imageWebp: img5, 
        description: 'img5'
    },
    {
        image: img6,
        imageWebp: img6,
        description: 'img6'
    },
    {   image: img7, 
        imageWebp: img7, 
        description: 'img7'
    },
    {   image: img8, 
        imageWebp: img8, 
        description: 'img8'
    },
    {   image: img9, 
        imageWebp: img9, 
        description: 'img9'
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
    { text: 'Blog', showArrow: false },
    // { text: 'Contact', showArrow: false }
];

export const FOOTER_LINKS1: any[] = [
    { text: 'Hyderabad', showArrow: false, showLocation: true },
    { text: 'Kochi', showArrow: false, showLocation: true },
    { text: 'Chennai', showArrow: false, showLocation: true },
    { text: 'Vijayawada', showArrow: false, showLocation: true },
    { text: 'Bangalore', showArrow: false, showLocation: true },
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
