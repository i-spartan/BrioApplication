import * as S from './NavLink.Styled';
import { RightArrowIcon } from '../Icons/RightArrowIcon';
import { useState } from 'react';
import PlaceIcon from '@mui/icons-material/Place';

export type NavLinkType = {
    text: string;
    showArrow?: boolean;
    showLocation? : boolean;
    onMenuItemClick?: (prop: any) => void;
};

const NavLink = ({ text, showArrow = true, showLocation, onMenuItemClick }: NavLinkType) => {
    const [hovered, setHovered] = useState<boolean>(false);

    const color = hovered ? '#e5b011' : '#FDFDFD';

    if(showLocation && showLocation == true){
        return (
            <S.StyledNavLink
                to="./"
                // onMouseEnter={mouseEnterHandler}
                // onMouseLeave={mouseLeaveHandler}
                color={color}
                fontSize={14}
                weight={400}
                lineHeight={18}
                // underline={hovered}
                onClick={() => {onMenuItemClick && onMenuItemClick(text)}}
            >
                {showLocation ? <PlaceIcon sx={{color: 'rgb(182, 125, 2)'}}/> : null}
                {text}
            </S.StyledNavLink>
        );
    } else {
        return (
            <S.StyledNavLink
                to="./"
                // onMouseEnter={mouseEnterHandler}
                // onMouseLeave={mouseLeaveHandler}
                color={color}
                fontSize={14}
                weight={400}
                lineHeight={18}
                // underline={hovered}
                onClick={() => {onMenuItemClick && onMenuItemClick(text)}}
            >
                {showArrow ? <RightArrowIcon color={color} /> : null}
                {text}
            </S.StyledNavLink>
        );
    }
    
};

export default NavLink;
