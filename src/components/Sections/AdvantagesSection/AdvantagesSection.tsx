import * as S from './AdvantagesSection.Styled';
import * as T from '../../Text/TextStyles';
import ColoredSection from '../../Section/ColoredSection';
import { TouristsIcon } from '../../Icons/TouristsIcon';
import { ShieldIcon } from '../../Icons/ShieldIcon';
import { LabelIcon } from '../../Icons/LabelIcon';
import AdvantageIconCard from '../../AdvantageIconCard/AdvantageIconCard';
import { Button } from '../../Button/Button';
import SectionHeader from '../../SectionHeader/SectionHeader';
import Image, { ImageType } from '../../Image/Image';
import { Box } from '@mui/material';

type Props = {
    images: ImageType[];
    downloadBroucher: () => void;
};

const AdvantagesSection = ({ images, downloadBroucher }: Props) => {
    return (
        <ColoredSection backgroundColor="#F3F5F4">
            <Box px={'15px'}>
            <S.StyledAdvantagesSection>
                <div className="article-outer">
                    <article className="article">
                        <SectionHeader
                            description="Home Lifts At Their Best"
                            title="Brio's Next Generation Elevators"
                        />
                        <T.Text1>
                            Providing Lift products right from small home lifts to large lifts for commercial buildings and public utility
                        </T.Text1>
                        <div className="advantages">
                            <AdvantageIconCard color={'#E3E6EE'}>
                                {/* <TouristsIcon /> */}
                                <ShieldIcon />
                            </AdvantageIconCard>
                            <div className="advantage">
                                <T.Title4>No Pit</T.Title4>
                                <T.Text2>
                                    Our Home elevators do not require
                                    a pit of more than 150 to 250mm.
                                </T.Text2>
                            </div>
                            <AdvantageIconCard color={'#E3E6EE'}>
                                <ShieldIcon />
                            </AdvantageIconCard>
                            <div className="advantage">
                                <T.Title4>No Head Room</T.Title4>
                                <T.Text2>
                                    Headroom is meant for commercial
                                    elevators. We require an FFL- Ceiling
                                    of only 2500mm.
                                </T.Text2>
                            </div>
                            <AdvantageIconCard color={'#E3E6EE'}>
                                {/* <LabelIcon /> */}
                                <ShieldIcon />
                            </AdvantageIconCard>
                            <div className="advantage">
                                <T.Title4>No Machine Room</T.Title4>
                                <T.Text2>
                                    As per machine directive code,
                                    Machine room should never be
                                    placed inside the elevator shaft.
                                </T.Text2>
                            </div>
                            <AdvantageIconCard color={'#E3E6EE'}>
                                {/* <LabelIcon /> */}
                                <ShieldIcon />
                            </AdvantageIconCard>
                            <div className="advantage">
                                <T.Title4>No Government License</T.Title4>
                                <T.Text2>
                                    No government license is required
                                    as we consume only single phase.
                                </T.Text2>
                            </div>
                            <AdvantageIconCard color={'#E3E6EE'}>
                                {/* <LabelIcon /> */}
                                <ShieldIcon />
                            </AdvantageIconCard>
                            <div className="advantage">
                                <T.Title4>No AMC</T.Title4>
                                <T.Text2>
                                    Our patented technology allows
                                    our client to feel absolutely safe
                                    without routine maintenance.
                                </T.Text2>
                            </div>
                        </div>
                        <div className="btn-wrapper" onClick={downloadBroucher}>
                            <Button
                                title="Download Broucher"
                                color="#FDFDFD"
                                backgroundColor="#063245"
                            />
                        </div>
                    </article>
                </div>
                <div className="gallery-outer">
                    <div className="gallery">
                        {images.map(({ image, imageWebp, alt }, ind) => {
                            return (
                                <Image
                                    key={ind}
                                    className="image"
                                    image={image}
                                    imageWebp={imageWebp}
                                    alt={alt}
                                />
                            );
                        })}
                    </div>
                </div>
            </S.StyledAdvantagesSection>
            </Box>
        </ColoredSection>
    );
};

export default AdvantagesSection;
