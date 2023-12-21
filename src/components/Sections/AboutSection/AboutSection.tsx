import * as S from './AboutSectionStyles';
import * as T from '../../Text/TextStyles';
import ColoredSection from '../../Section/ColoredSection';
import { Button } from '../../Button/Button';
import houseVideoPreview from '../../../assets/images/house-video-preview.jpg';
import houseVideoPreviewWebp from '../../../assets/images/house-video-preview.webp';
import SectionHeader from '../../SectionHeader/SectionHeader';
import Image from '../../Image/Image';

const AboutSection = () => {
    return (
        <ColoredSection>
            <S.StyledAboutSection>
                <div className="article-outer">
                    <article className="article">
                        <SectionHeader
                            description="About Us"
                            title="The First Indo-Italian Elevator Company"
                        />
                        <T.Text1>
                            Welcome to <b>Brio Elevators</b>, where innovation meets tradition to redefine the vertical transportation experience.
                            With a remarkable six years of expertise in Elevator Component Sales, we have proudly established ourselves as a
                            pioneering force in the industry. As The <b>first Indo-Italian elevator company</b>, Brio Elevators seamlessly integrates
                            the rich heritage of Italian craftsmanship with the dynamic spirit of innovation from India.

                        </T.Text1>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            <Button
                                title="Know More..."
                                color="#FDFDFD"
                                backgroundColor="#1A3E3E"
                            />
                        </div>
                    </article>
                </div>
                <div className="image-outer">
                    <div className="image-wrapper">
                        <Image
                            className="image"
                            imageWebp={houseVideoPreviewWebp}
                            image={houseVideoPreview}
                            alt="Video preview"
                        />
                    </div>
                </div>
            </S.StyledAboutSection>
        </ColoredSection>
    );
};

export default AboutSection;
