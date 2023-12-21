import * as S from './HeaderStyles';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import Menu from '../Menu/Menu';
import Container from '../Container/Container';
import LogoIcon from '../Icons/BrioLogoV1.png';
import HikeSearchForm from '../HikeSearchForm/HikeSearchForm';
import { Button } from '../Button/Button';

const Header = () => {
    return (
        <S.StyledHeader>
            <Container>
                <header className="menu-wrapper">
                    {/* <LogoIcon /> */}
                    <img
                  src={LogoIcon}
                  alt="BigCo Inc. logo"
                  style={{ width: "25%", height: '120%' }}
                />
                    <Menu />
                    <BurgerMenu />
                </header>
                <S.H1>
                    Brio Elevates Your Expectations
                </S.H1>
                <HikeSearchForm className="hike-search-form" />
                <div className="hike-search-btn">
                    <Button title="Найти программу" color="#1A3E3E" large />
                </div>
            </Container>
        </S.StyledHeader>
    );
};

export default Header;
