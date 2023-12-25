import * as S from './SubscriptionForm.Styled';
import * as T from '../Text/TextStyles';
import { Button } from '../Button/Button';
import Input from '../Input/Input';
import Image, { ImageType } from '../Image/Image';
import cotactUS from '../../assets/images/ContactUS.png';
import React, { useRef, useState } from 'react';

const SubscriptionForm = ({submitForm}: any) => {

    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');

    var templateParams = {
        from_name: name,
        from_email: email,
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
        <S.StyledSubscriptionForm>
            <div className="titles">
                <T.Text0 color="#f2be22" marginBottom={8}>
                    Contact US
                </T.Text0>
                <T.Title2 marginBottom={18}>
                    We are here for you <br/> Expect the vist for our expert soon
                </T.Title2>
                <img
                        className="img"
                        // imageWebp={cotactUS}
                        // image={cotactUS}
                        src={cotactUS}
                        // alt={title}
                        
                    />
            </div>
            <div className="form-outer" style={{backgroundColor: 'white'}}>
                <div className="form">
                <Input
                            id='name'
                            // label="Enter Name"
                            placeholder="name *"
                            marginBottom={16}
                            value={name}
                            onChange={onChange}
                            type='text'
                            label='Enter Name'
                        />
                    <Input
                            // label="Enter Phone Number"
                            id='phoneNumber'
                            placeholder="phone umber *"
                            marginBottom={16}
                            value={phoneNumber}
                            onChange={onChange}
                            type="tel"
                            label='Enter Phone Number'
                        />
                     <Input
                            // label="Enter Email Id"
                            id='emailId'
                            placeholder="emailId *"
                            marginBottom={16}
                            value={email}
                            onChange={onChange}
                            type='email'
                            label='Enter your Email'
                        />
                    <Input
                            // label="Enter City"
                            id='city'
                            placeholder="city *"
                            marginBottom={16}
                            value={city}
                            onChange={onChange}
                            type='text'
                            label='Enter City'
                        />
                    <div onClick={(e: any)=> {submitForm(e, templateParams)}}>
                        <Button
                            title="Request Call Back"
                            color="#FDFDFD"
                            backgroundColor="#063245"
                        />
                    </div>
                </div>
                <div className="disclaimer">
                    <T.Text3>
                        Our representative will reach you as soon as possible.
                        {/* <T.StyledLink to="./" underline>
                            условиями обработки персональных данных
                        </T.StyledLink>{' '} */}
                        {/* и{' '} */}
                        {/* <T.StyledLink to="./" underline>
                            правилами рекламных рассылок
                        </T.StyledLink> */}
                    </T.Text3>
                </div>
            </div>
        </S.StyledSubscriptionForm>
    );
};

export default SubscriptionForm;
