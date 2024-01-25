import { memo } from 'react';
import * as S from './HikeCard.Styled';
import * as T from './../Text/TextStyles';
import Rating from '../Rating/Rating';
import Image, { ImageType } from '../Image/Image';
import { Button } from '../Button/Button';

export type Hike = {
    rating: number;
    title: string;
    subTitle: string;
    description: string;
    price: string;
    knowMore?: () => void;
} & ImageType;

const HikeCard = memo(
    ({
        rating,
        image,
        imageWebp,
        title,
        subTitle,
        description,
        price,
        knowMore
    }: Hike) => {
        return (
            <S.StyledHikeCard>
                <div className="card">
                    {/* <div className="rating">
                        <Rating
                            rating={rating}
                            top={36.8}
                            right={0}
                            zIndex={10}
                        />
                    </div> */}
                    <Image
                        className="img"
                        imageWebp={imageWebp}
                        image={image}
                        alt={title}
                    />
                    <div className="content">
                        <div className="content-header">
                            <div className="titles">
                                <S.CardTitle color="#063245">
                                    {title}
                                </S.CardTitle>
                                {/* <T.Text3
                                    className="subtitle"
                                    color="#FDFDFD"
                                    weight={400}
                                >
                                    {subTitle}
                                </T.Text3> */}
                            </div>
                            {/* <div className="price">
                                <S.CardPrice color="#FDFDFD">
                                    {price}
                                </S.CardPrice>
                            </div> */}
                        </div>
                        {/* <div className="description-wrapper"> */}
                            <T.Text1
                                className="description"
                                color="#e5b011"
                                lineHeight={24}
                            >
                                {description}
                            </T.Text1>
                        {/* </div> */}
                        <div className="button-wrapper" onClick={knowMore}>
                            <Button
                                title="Know More..."
                                color="#FDFDFD"
                                backgroundColor="#063245"
                            />
                        </div>
                    </div>
                </div>
            </S.StyledHikeCard>
        );
    },
);

export default HikeCard;
