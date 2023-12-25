import * as S from './HeaderStyles';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import Menu from '../Menu/Menu';
import Container from '../Container/Container';
import LogoIcon from '../Icons/BrioLogoV1.png';
import HikeSearchForm from '../HikeSearchForm/HikeSearchForm';
import { Button } from '../Button/Button';
import { Typography } from '@mui/material';

const Header = ({submitForm, openModalFunc, onMenuItemClick}: any) => {
    return (
        <S.StyledHeader>
            <Container>
                <header className="menu-wrapper">
                    {/* <LogoIcon /> */}
                    <img
                  src={LogoIcon}
                  alt="BigCo Inc. logo"
                  style={{ width: "25%", height: '180%' }}
                />
                    <Menu onMenuItemClick={onMenuItemClick}/>
                    <BurgerMenu onMenuItemClick={onMenuItemClick}/>
                </header>
                <S.H1>
                <Typography sx={{ fontFamily: 'Fredericka the Great', textAlign: 'center', fontSize: { sm: '2rem', md: '3rem', lg: '4rem' }}}>
                  BRIO, ELEVATES YOUR EXPECTATIONS
                </Typography>
                </S.H1>
                <HikeSearchForm className="hike-search-form" submitForm={submitForm}/>
                <div className="hike-search-btn" style={{justifyContent: 'center'}} onClick={openModalFunc}>
                    <Button title="Get Free Site Visit" color="#063245" large />
                </div>
            </Container>
        </S.StyledHeader>
    );
};

export default Header;
