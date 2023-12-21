import Header from '../components/Header/Header';
import AboutSection from '../components/Sections/AboutSection/AboutSection';
import AdvantagesSection from '../components/Sections/AdvantagesSection/AdvantagesSection';
import PopularHikesSection from '../components/Sections/PopularHikesSection/PopularHikesSection';
import BlogSection from '../components/Sections/BlogSection/BlogSection';
import {
    ADVANTAGES_IMAGES,
    PRODUCTS,
    HIKES,
    PHOTOS,
    ELIGANCEANDSTYLE,
    POSTS,
    TINY_SLIDER_SETTINGS,
} from '../constants';
import GallerySection from '../components/Sections/GallerySection/GallerySection';
import FooterSection from '../components/Sections/FooterSection/FooterSection';
import CompanyInfoSection from '../components/Sections/CompanyInfoSection/CompanyInfoSection';

const HomePage = () => {
    return (
        <>
            <Header />
            <AboutSection />
            <AdvantagesSection images={ADVANTAGES_IMAGES} />
            <PopularHikesSection
                hikes={PRODUCTS}
                tinySliderSettings={TINY_SLIDER_SETTINGS}
            />
            <BlogSection
                posts={ELIGANCEANDSTYLE}
                tinySliderSettings={TINY_SLIDER_SETTINGS}
            />
            <GallerySection
                photos={PHOTOS}
                tinySliderSettings={TINY_SLIDER_SETTINGS}
            />
            <FooterSection />
            <CompanyInfoSection />
        </>
    );
};

export default HomePage;
