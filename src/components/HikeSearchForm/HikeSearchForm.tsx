import * as S from './HikeSearchForm.Styled';
import Select from '../Select/Select';
import { Button } from '../Button/Button';
import { CalendarIcon } from '../Icons/CalendarIcon';
import Input from '../IconedInput/DateInput';
import React, { useRef, useState } from 'react';

type Props = {
    className?: string;
    submitForm? : (prop1: any, prop2: any) => void;
};

const HikeSearchForm = ({ className, submitForm }: Props) => {

    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');

    var templateParams = {
        from_name: name,
        from_email: 'email not given',
        from_contact: phoneNumber,
        from_city: city
    };

    const onChange = (e: any) => {
        if (e.target.id == 'name') {
            setName(e.target.value);
        } else if (e.target.id == 'phoneNumber') {
            setPhoneNumber(e.target.value);
        } else if (e.target.id == 'emailId') {
            setEmail(e.target.value);
        } else if (e.target.id == 'city') {
            setCity(e.target.value);
        }
    }

    return (
        <S.HikeSearchFormStyled className={className}>
            {/* <Select title="Локации для тура" description="выберите из списка" /> */}
            <Input
            id='name'
                title="your name"
                description="Enter Name"
                icon={<CalendarIcon />}
                value={name}
                onChange={onChange}
            />
            <Input
            id='phoneNumber'
                title="+91 - "
                description="Enter Phone Number"
                icon={<CalendarIcon />}
                value={phoneNumber}
                onChange={onChange}
            />
            {/* <Select title="Участники" description="минимум 4 человека" /> */}
            <Input
            id='city'
                title="your city "
                description="Enter Your City"
                icon={<CalendarIcon />}
                value={city}
                onChange={onChange}
            />
            <div onClick={(e: any) => {submitForm && submitForm(e, templateParams)}}>
                <Button title="Get Free Site Visit" color="white" backgroundColor='#063245' large />
            </div>
        </S.HikeSearchFormStyled>
    );
};

export default HikeSearchForm;
