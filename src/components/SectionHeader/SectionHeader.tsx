import * as S from './SectionHeader.Styled';
import * as T from '../Text/TextStyles';

type Props = {
    description: string;
    title: string;
    marginBottom?: number;
};

const SectionHeader = ({ description, title, marginBottom }: Props) => {
    return (
        <S.SectionHeaderStyled marginBottom={marginBottom}>
            <T.Text0 color="#f2be22">{description}</T.Text0>
            <T.Title2>{title}</T.Title2>
        </S.SectionHeaderStyled>
    );
};

export default SectionHeader;
