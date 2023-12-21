import * as S from './PopularHikesSection.Styled';
import ColoredSection from '../../Section/ColoredSection';
import HikeCard, { Hike } from '../../HikeCard/HikeCard';
import { Button } from '../../Button/Button';
import TinySlider from 'tiny-slider-react';
import 'tiny-slider/dist/tiny-slider.css';
import SectionHeader from '../../SectionHeader/SectionHeader';

type Props = {
    hikes: Hike[];
    tinySliderSettings: any;
};

const PopularHikesSection = ({ hikes, tinySliderSettings }: Props) => {
    return (
        <ColoredSection>
            <S.PopularHikesSectionStyled>
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
                            />
                        ),
                    )}
                </TinySlider>
                <div className="button-outer">
                    <Button
                        title="Know More..."
                        color="#FDFDFD"
                        backgroundColor="#1A3E3E"
                    />
                </div>
            </S.PopularHikesSectionStyled>
        </ColoredSection>
    );
};

export default PopularHikesSection;
