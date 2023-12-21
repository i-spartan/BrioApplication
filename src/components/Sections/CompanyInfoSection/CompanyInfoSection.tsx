import * as S from './CompanyInfoSection.Styled';
import * as T from '../../Text/TextStyles';
import Container from '../../Container/Container';

const CompanyInfoSection = () => {
    return (
        <S.StyledCompanyInfoSection>
            <Container paddingRight={0} paddingLeft={0} gap={8}>
                <div className="wrapper">
                    <T.Text3 color="#ffffff">Copyrights ©2023 Brio Elevators.</T.Text3>
                    <T.StyledLink
                        to="./"
                        fontSize={14}
                        weight={600}
                        lineHeight={18}
                        color="#ffffff"
                        underline
                    >
                        All Rights Reserved
                    </T.StyledLink>
                </div>
            </Container>
        </S.StyledCompanyInfoSection>
    );
};

export default CompanyInfoSection;
