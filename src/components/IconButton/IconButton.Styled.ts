import styled from 'styled-components';

type Props = {
    color?: string;
    hoverColor?: string;
};

export const StyledIconButton = styled.button<Props>`
    background: none;
    border: none;
    color: ${({ color }) => color || '#fff'};

    :hover {
        cursor: pointer;
        color: ${({ hoverColor }) => hoverColor || '#e5b011'};
    }
`;
