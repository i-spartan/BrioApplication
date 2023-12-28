import * as S from './Menu.Styled';
import { MENU_LINKS } from '../../constants';
import Navigation from '../Navigation/Navigation';
import PhoneIcon from '@mui/icons-material/Phone';
import * as SL from '../Button/ButtonStyles';
import * as T from '../Text/TextStyles';
// import cellRing from '../../assets/images/ce'

const Menu = ({onMenuItemClick}: any) => {
    return (
        <S.StyledMenu>
            <Navigation links={MENU_LINKS} column={false} showArrow={false} onMenuItemClick={onMenuItemClick}/>
            {/* <Button
                title="Request Call Back"
                color="#FDFDFD"
                backgroundColor="#063245"
            /> */}
            {/* <SL.StyledButton backgroundColor={'#063245'} large={false}> */}
            {/* <T.Text1 color={"#e5b011"} weight={700}> */}
                {/* {<><PhoneIcon sx={{fontSize: 'large', paddingTop: '0.1rem'}}/>{ ' ' } +91-9398113939</>} */}
                {/* <img src={'../../assets/images/cellRing.gif'} alt="loading..." /> */}
            {/* </T.Text1> */}
        {/* </SL.StyledButton> */}
        </S.StyledMenu>
    );
};

export default Menu;
