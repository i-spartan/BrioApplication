import * as S from './GallerySectionStyled';
import ColoredSection from '../../Section/ColoredSection';
import TinySlider from 'tiny-slider-react';
import { Button } from '../../Button/Button';
import SliderPhotoGallery, {
    GalleryPhotoType,
} from '../../PhotoGallery/SliderPhotoGallery';
import SubscriptionForm from '../../NewsSubscriptionForm/SubscriptionForm';
import SectionHeader from '../../SectionHeader/SectionHeader';
import Image from '../../Image/Image';
import { Box } from '@mui/material';

type Props = {
    photos: GalleryPhotoType[];
    tinySliderSettings: any;
    knowMore: () => void;
    submitForm: (prop1: any, prop2: any) => void;
    downloadBroucher: () => void;
};

const GallerySection = ({ photos, tinySliderSettings, knowMore, submitForm, downloadBroucher }: Props) => {
    return (
        <ColoredSection>
        <Box px={'15px'}>
            <S.GallerySectionStyled> 
                <SectionHeader
                    description="Bespoke Cabin Designs"
                    title="Create Your Own Customized Car"
                />
                <div className="gallery">
                    {photos.map(({ image, imageWebp, description }, index) => (
                        <Image
                            key={index}
                            className={`gallery-image grid-item-${index}`}
                            imageWebp={imageWebp}
                            image={image}
                            alt={description}
                        />
                    ))}
                </div>
                <div className="slider">
                    <TinySlider settings={tinySliderSettings}>
                        {photos.map(({ ...props }, index) => (
                            <SliderPhotoGallery key={index} {...props} />
                        ))}
                    </TinySlider>
                </div>
                <div className="button-outer" onClick={downloadBroucher}>
                    <Button
                        title="Download Brochure"
                        color="#FDFDFD"
                        backgroundColor="#063245"
                    />
                </div>
                <SubscriptionForm submitForm={submitForm}/>
            </S.GallerySectionStyled>
            </Box>
        </ColoredSection>
    );
};

export default GallerySection;
