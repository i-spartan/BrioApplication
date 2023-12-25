import * as S from './PopularHikesSection.Styled';
import ColoredSection from '../../Section/ColoredSection';
import HikeCard, { Hike } from '../../HikeCard/HikeCard';
import { Button } from '../../Button/Button';
import TinySlider from 'tiny-slider-react';
import 'tiny-slider/dist/tiny-slider.css';
import SectionHeader from '../../SectionHeader/SectionHeader';
import { Box } from '@mui/material';
type Props = {
    hikes: Hike[];
    tinySliderSettings: any;
    knowMore: () => void;
};

const PopularHikesSection = ({ hikes, tinySliderSettings, knowMore }: Props) => {
    return (
        <ColoredSection>
        <Box px ={'15px'}>
            <S.PopularHikesSectionStyled>
                <Box id='products'/>
                <SectionHeader
                    description="Our Products"
                    title="Know More About Our Products"
                />
                <TinySlider settings={tinySliderSettings}>
            
                {hikes.map(
                        (
                            {
                                rating,
                                image,
                                imageWebp,
                                title,
                                subTitle,
                                description,
                                price,
                            },
                            index,
                        ) => (
                            <HikeCard
                                key={index}
                                rating={rating}
                                image={image}
                                imageWebp={imageWebp}
                                title={title}
                                subTitle={subTitle}
                                description={description}
                                price={price}
                                knowMore={knowMore}
                            />
                        ),
                    )}

                </TinySlider>
                <div className="button-outer" onClick={knowMore}>
                    <Button
                        title="Know More..."
                        color="#FDFDFD"
                        backgroundColor="#063245"
                    />
                </div>
            </S.PopularHikesSectionStyled>
            </Box>
        </ColoredSection>
    );
};

export default PopularHikesSection;
