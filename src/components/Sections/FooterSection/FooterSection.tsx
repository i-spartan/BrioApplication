import * as S from './FooterSection.Styled';
import * as T from '../../Text/TextStyles';
import Container from '../../Container/Container';
import { TelegramIcon } from '../../Icons/TelegramIcon';
import { VkIcon } from '../../Icons/VkIcon';
// import { PinterestIcon } from '../../Icons/PinterestIcon';
// import { SkypeIcon } from '../../Icons/SkypeIcon';
import Navigation from '../../Navigation/Navigation';
import { FOOTER_LINKS1, FOOTER_LINKS2 } from '../../../constants';
import IconButton from '../../IconButton/IconButton';
import PlaceIcon from '@mui/icons-material/Place';
import LogoIcon from '../../Icons/BrioLogoV1.png';
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box } from '@mui/material';

const FooterSection = ({onMenuItemClick}: any) => {
    return (
        <S.StyledFooterSection>
            <Box px={'15px'}>
            <Container>
                <div className="wrapper">
                    <div className="section contacts-wrapper">
                        <T.Title3 color="#F3F5F4" marginBottom={17}>
                            {/* Компания «РумТибет» */}
                            {/* Brio Elevators */}
                            <img
                                src={LogoIcon}
                                alt="BigCo Inc. logo"
                                style={{ width: "35%" }}
                            />
                        </T.Title3>
                        <T.Text2 color="#fff" marginBottom={30}>
                        <PlaceIcon sx={{color: 'rgb(182, 125, 2)'}}/> 6st Floor, Plot Number 17, <br />
                            Road Number 7, Near Jubilee Hills Metro Station<br />
                            Rd no. 5, Hyderabad, Telangana, 500033
                        </T.Text2>
                        <div className="contacts">
                            <T.StyledLink to="./" color="#fff" underline>
                                info@brioelevators.com
                            </T.StyledLink>
                            <T.StyledLink to="./" color="#fff" underline>
                                +91-9398113939
                            </T.StyledLink>
                        </div>
                        <div className="social-networks">
                            <IconButton
                                icon={() => <><LinkedInIcon /></>}
                                onClick={() => window.open('https://www.linkedin.com/company/brioelevators/?viewAsMember=true', "_blank")}
                                ariaLabel="linkedin"
                            />
                            <IconButton
                                icon={() => <><FacebookIcon/></>}
                                onClick={() => window.open('https://www.facebook.com/BRIOElevators?mibextid=ZbWKwL', "_blank")}
                                ariaLabel="facebook"
                            />
                            <IconButton
                                icon={() => <><YouTubeIcon/></>}
                                onClick={() => window.open('https://www.youtube.com/@BrioElevators', "_blank")}
                                ariaLabel="youtube"
                            />
                             <IconButton
                                icon={() => <><InstagramIcon/></>}
                                onClick={() => window.open('https://www.instagram.com/brioelevators/', "_blank")}
                                ariaLabel="instagram"
                            />
                        </div>
                    </div>
                    <div className="section nav-wrapper">
                        <T.Title3 color="#F3F5F4">Operating Cities</T.Title3>
                        <Navigation links={FOOTER_LINKS1} />
                    </div>
                    <div className="section nav-wrapper">
                        <T.Title3 color="#F3F5F4">
                            Important Links
                        </T.Title3>
                        <Navigation links={FOOTER_LINKS2} onMenuItemClick={onMenuItemClick}/>
                    </div>
                </div>
            </Container>
            </Box>
        </S.StyledFooterSection>
    );
};

export default FooterSection;
