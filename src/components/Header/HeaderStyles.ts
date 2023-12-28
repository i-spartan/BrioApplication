import styled from 'styled-components';
import mountainsJpg from '../../assets/images/mountains.jpg';
import mountainsWebp from '../../assets/images/mountains.jpg';
import { commonTextStyles, TextProps } from '../Text/TextStyles';

export const StyledHeader = styled.section`
    display: flex;
    flex-direction: row;
    background-image: image-set(
        url(${mountainsWebp.replace('\\', '/')}),
        url(${mountainsJpg.replace('\\', '/')})
    );
    background-position: center;
    background-size: cover;
    padding: 20px 0 50px;
    height: 100dvh;

    .menu-wrapper {
        display: flex;
        justify-content: space-between;
        height: 44px;
    }

    .hike-search-form {
        display: none;
    }

    .hike-search-btn {
        display: flex;
    }

    .img {
        width: 18%;
        height: 170%;

            @media (max-width: 600px) {
        height: 125%;
        width: 30%;
    }
    }

    @media (min-width: 1180px) and (min-height: 650px) {
        padding: 16px 0 82px;

        .hike-search-form {
            display: flex;
        }

        .hike-search-btn {
            display: none;
        }
    }
`;

export const H1 = styled.h1<TextProps>`
    ${commonTextStyles};
    color: #fdfdfd;
    font-family: 'Fredericka the Great';
    font-size: 35px;
    font-weight: 700;
    line-height: 42px;
    margin-top: 320px;

    @media (min-width: 1180px) and (max-height: 600px) {
        font-size: 60px;
        font-weight: 700;
        line-height: 75px;
        letter-spacing: 1px;
        margin-top: 320px;
    }

    @media (max-height: 650px) {
        margin-top: 200px;
    }
`;

// export const img = styled.img`
//     @media (min-width: 1180px) and (max-height: 600px) {
//         width: 20px;
//          height: 152px;
//     }

//     @media (max-height: 650px) {
//         height: 10%;
//     }
// `;