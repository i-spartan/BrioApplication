import CallIcon from '@mui/icons-material/Call';
import IconButton from '../IconButton/IconButton';
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import * as S from './TopHeaderStyles';

const TopHeader = () => {

    return (
        <S.StyledTopHeader>
        <div className="top-header">
                <div style={{display: 'flex', columnGap: '10px'}}>
                    <IconButton
                        icon={() => <><LinkedInIcon /></>}
                        onClick={() => window.open('https://www.linkedin.com/company/brioelevators/?viewAsMember=true', "_blank")}
                        ariaLabel="linkedin"
                    />
                    <IconButton
                        icon={() => <><FacebookIcon /></>}
                        onClick={() => window.open('https://www.facebook.com/BRIOElevators?mibextid=ZbWKwL', "_blank")}
                        ariaLabel="facebook"
                    />
                    <IconButton
                        icon={() => <><YouTubeIcon /></>}
                        onClick={() => window.open('https://www.youtube.com/@BrioElevators', "_blank")}
                        ariaLabel="youtube"
                    />
                    <IconButton
                        icon={() => <><InstagramIcon /></>}
                        onClick={() => window.open('https://www.instagram.com/brioelevators/', "_blank")}
                        ariaLabel="instagram"
                    />
                </div>
                <div style={{color: 'white', display: 'flex', columnGap: '15px'}}>
                    Info: info@brioelevators.com
                    <><CallIcon fontSize='small' sx={{ color: "white" }} /> +91-9398113939</>
                </div>
            </div>
            </S.StyledTopHeader>
    );
};

export default TopHeader;
