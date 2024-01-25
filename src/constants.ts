import { Hike } from './components/HikeCard/HikeCard';
import gearLessBeltElevator from './assets/images/gearLessBelt.jpg';
import gearLessBeltElevatorWebp from './assets/images/gearLessBelt.jpg';
import gearLessRopeElevator from './assets/images/gearLessRope.jpg';
import gearLessRopeElevatorWebp from './assets/images/gearLessRope.jpg';
import hydraulicLift from './assets/images/hydraulic.jpg';
import mountainsJogaWebp from './assets/images/hydraulic.jpg';
import mobilitySeries from './assets/images/mobilitySeries.jpg';
import mobilitySeriesWebp from './assets/images/mobilitySeries.jpg';
import gearLessLift from './assets/images/gearless.jpg';
// import italyWebp from './assets/images/gearless.jpg';
import energySavingFeature from './assets/images/energySaving.jpg';
// import flightWebp from './assets/images/energySaving.jpg';
import intelligentControlSystems from './assets/images/intelligentControlSystems.jpg';
// import backpackWebp from './assets/images/intelligentControlSystems.jpg';
import intelligentControls from './assets/images/intelligentControls.jpg';
// import mosqueWebp from './assets/images/intelligentControls.jpg';
import tuvCertified from './assets/images/tuv2.png';
// import backpackerWebp from './assets/images/tuv2.png';
import certifiedByTuv from './assets/images/tuvImg.png';
// import fieldMountainWebp from './assets/images/tuvImg.png';
import yearsWarrenty from './assets/images/5yersImg.png';
// import fireWebp from './assets/images/5yersImg.png';
import tuv from './assets/images/tuv22.jpg';
// import yellowCoatWebp from './assets/images/tuv22.jpg';
import { BlogPostCardType } from './components/BlogPostCard/BlogPostCard';
import { GalleryPhotoType } from './components/PhotoGallery/SliderPhotoGallery';
import { NavLinkType } from './components/NavLink/NavLink';
import { ImageType } from './components/Image/Image';
import custimised_elevator_1 from './assets/images/img1.jpg';
import custimised_elevator_2 from './assets/images/img2.jpg';
import custimised_elevator_3 from './assets/images/img3.jpg';
import custimised_elevator_4 from './assets/images/img4.jpg';
import custimised_elevator_5 from './assets/images/img5.jpg';
import custimised_elevator_6 from './assets/images/img7.jpg';
import custimised_elevator_7 from './assets/images/img8.jpg';
import custimised_elevator_8 from './assets/images/img9.jpg';

export const PRODUCTS: any[] = [
    {
        // rating: 0,
        image: gearLessBeltElevator,
        imageWebp: gearLessBeltElevator,
        title: 'GEARLESS BELT',
        // subTitle: 'романтическое приключение',
        description:
            'Elevate your expectations with our cutting-edge Belt technology and rivet-less shaft, setting our elevators apart globally. While competitors struggle to meet current home elevator standards like MD 2006 42 EC and EN 81-41, our elevators not only meet but exceed them. With the ability to easily update and diagnose, we confidently dominate the Home Elevator Industry.',
        // price: '480$',
    },
    {
        // rating: 0,
        image: gearLessRopeElevator,
        imageWebp: gearLessRopeElevator,
        title: 'GEARLESS ROPE',
        // subTitle: 'в компании друзей',
        description:
            'BRIO Gearless unique traction lift solution that complies with lifts Directive 2014/33/EU. Installation can be customized to any architectural need and design, even special and challenging projects. It is an elegant and, above all, truly convenient solution, allowing for perfect fitting within any existing or new building.',
        // price: '500$',
    },
    {
        // rating: 0,
        image: hydraulicLift,
        imageWebp: hydraulicLift,
        title: 'HYDRAULIC LIFT',
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
        image: gearLessBeltElevator,
        imageWebp: gearLessBeltElevator,
        title: 'Озеро возле гор',
        subTitle: 'романтическое приключение',
        description:
            'Прекрасное озеро в окружении каменных великанов. Вы проведёте незабываемое время с теми, кто для вас важен. В эту поездку вы получите заряд сил на долгое время. Горы не оставляют равнодушным никого. Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum, "consectetur"и занялся его поисками в классической латинской литературе.',
        price: '480$'
    },
    {
        rating: 4.9,
        image: gearLessRopeElevator,
        imageWebp: gearLessRopeElevator,
        title: 'Ночь в горах',
        subTitle: 'в компании друзей',
        description:
            'Звёздная ночь в горах в кругу единомышленников. Что может быть лучше? Ночёвка в комфортабельных домиках.',
        price: '500$'
    },
    {
        rating: 4.9,
        image: hydraulicLift,
        imageWebp: hydraulicLift,
        title: 'Йога в горах',
        subTitle: 'для тех, кто забоится о себе',
        description:
            'Для всех кто любит активный отдых и физические упражнения, чтобы улучшать свое здоровье и вести за собой здоровый образ жизни. Йога действует не только тонизирует мышцы и улучшает дыхание, но и позволяет углубить контакт с окружающей средой, с собой и, следовательно, с найди свою гармонию внутреннее и собственное душевное равновесие.',
        price: '270$'
    },
];

export const ADVANTAGES_IMAGES: ImageType[] = [
    {
        image: tuvCertified,
        imageWebp: tuvCertified,
        alt: '100% imported from germany',
    },
    {
        image: certifiedByTuv,
        imageWebp: certifiedByTuv,
        alt: '100% imported from italy',
    },
    {
        image: yearsWarrenty,
        imageWebp: yearsWarrenty,
        alt: '5 years warrenty',
    },
    {
        image: tuv,
        imageWebp: tuv,
        alt: '100% certified',
    },
];

export const ELIGANCEANDSTYLE: any[] = [
    {
        image: gearLessLift,
        imageWebp: gearLessLift,
        alt: 'Expertise in Gearless',
        title: 'Expertise in Gearless',
        text: 'Through our expertise in engineering. We have developed a high-quality gearless home elevator. The result is a high-performance addition to your home that you can hardly hear, even when you put your ear near elevator.',
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
        image: energySavingFeature,
        imageWebp: energySavingFeature,
        alt: 'Magnetic Controls with Advanced Landing (PMSM)',
        title: 'Magnetic Controls with Advanced Landing (PMSM)',
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
        image: intelligentControlSystems,
        imageWebp: intelligentControlSystems,
        alt: 'Enhanced Fault Detection and Reporting System',
        title: 'Enhanced Fault Detection and Reporting System',
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
        image: intelligentControls,
        imageWebp: intelligentControls,
        alt: 'Multi Layered Safety feature',
        title: 'Multi Layered Safety',
        text: 'Highlighting elevator operation risks, our multi-layered safety approach for private homes includes primary and secondary batteries, a mechanical button for descent, a manual emergency key on each floor, and a trap door for top-of-cabin accessibility. These layers ensure reliable performance during power disruptions, offer alternative descent options, and facilitate safe passenger rescue, demonstrating our commitment to elevated safety measures in home elevators.',
        // date: '03/06/2023',
    },
];

export const POSTS: BlogPostCardType[] = [
    {
        image: gearLessLift,
        imageWebp: gearLessLift,
        alt: 'italyImg',
        title: 'italyImg',
        text: 'italyImg',
        date: '01/04/2023',
    },
    {
        image: energySavingFeature,
        imageWebp: energySavingFeature,
        alt: 'flightImg',
        title: 'flightImg',
        text: 'flightImg',
        date: '01/04/2023',
    },
    {
        image: intelligentControlSystems,
        imageWebp: intelligentControlSystems,
        alt: 'backpackImg',
        title: 'backpackImg',
        text: 'backpackImg',
        date: '02/05/2023',
    },
    {
        image: intelligentControls,
        imageWebp: intelligentControls,
        alt: 'mosqueImg',
        title: 'mosqueImg',
        text: 'mosqueImg.',
        date: '03/06/2023',
    },
];

export const PHOTOS: GalleryPhotoType[] = [
    {
        image: custimised_elevator_1,
        imageWebp: custimised_elevator_1,
        description: 'custimized cabins'
    },
    {
        image: custimised_elevator_1,
        imageWebp: custimised_elevator_2,
        description: 'custimized glass cabins'
    },
    {   image: custimised_elevator_3, 
        imageWebp: custimised_elevator_3, 
        description: 'eligance cabins'
    },
    {
        image: custimised_elevator_4,
        imageWebp: custimised_elevator_4,
        description: 'custimized cabins of your needes'
    },
    {   image: custimised_elevator_5, 
        imageWebp: custimised_elevator_5, 
        description: 'custimized'
    },
    // {
    //     image: img6,
    //     imageWebp: img6,
    //     description: 'img6'
    // },
    {   image: custimised_elevator_6, 
        imageWebp: custimised_elevator_6, 
        description: 'custimized lifts'
    },
    {   image: custimised_elevator_7, 
        imageWebp: custimised_elevator_7, 
        description: 'custimized elevators'
    },
    {   image: custimised_elevator_8, 
        imageWebp: custimised_elevator_8, 
        description: 'custimized car'
    }
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

export const BLOG_TINY_SLIDER_SETTINGS = {
    lazyload: false,
    nav: false,
    mouseDrag: true,
    controls: false,
    gutter: 10,
    // fixedWidth: 380,
    autoWidth: true,
    center: true
};


export const TINY_SLIDER_SETTINGS = {
    lazyload: false,
    nav: false,
    mouseDrag: true,
    controls: false,
    gutter: 10,
    // fixedWidth: 380,
    autoWidth: true,
    center: true,
    autoplay: true,
    autoplayButton: false,
    animateDelay: 1,
    autoplayTimeout: 2000,
    autoplayButtonOutput: false,
    autoplayHoverPause: true,
};
