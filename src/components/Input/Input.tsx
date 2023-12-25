import * as S from './Input.Styled';

type Props = {
    id?: string;
    label?: string;
    placeholder?: string;
    value? : string;
    type?: string;
    width?: number;
    marginTop?: number;
    marginBottom?: number;
    onChange?: (e: any) => void;
};

const Input = ({
    id,
    label,
    placeholder,
    value,
    type,
    width,
    onChange,
    ...rest
}: Props) => {
    return (
        <S.StyledInput {...rest}>
            {label ? <S.Label width={width}>{label}</S.Label> : null}
            <input id={id} className="input" type={type} placeholder={placeholder} value={value} onChange={onChange}/>
        </S.StyledInput>
    );
};

export default Input;
