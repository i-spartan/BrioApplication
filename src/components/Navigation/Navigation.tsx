import NavLink from '../NavLink/NavLink';
import * as S from './Navigation.Styled';

type Props = {
    links: any[];
    column?: boolean;
    showArrow?: boolean;
    onMenuItemClick?: (prop: any) => void;
};

const Navigation = ({ links, column = true, showArrow, onMenuItemClick }: Props) => {
    return (
        <S.StyledNavigation column={column}>
            {links.map(({ text, showLocation }, index) => {
                return (
                    <NavLink key={index} text={text} showLocation = {showLocation} showArrow={showArrow} onMenuItemClick={onMenuItemClick}/>
                );
            })}
        </S.StyledNavigation>
    );
};

export default Navigation;
