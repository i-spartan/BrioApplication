import React, { useRef, useState } from 'react';

import Input from '../Input/Input';
import { Button } from '../Button/Button';
// import * as S from '../NewsSubscriptionForm/SubscriptionForm.Styled';
import * as T from '../Text/TextStyles';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { Box, Divider, Typography } from '@mui/material';
import emailjs from '@emailjs/browser';

const DialogSection = ({ openModal, submitForm, error }: any) => {
    // const form = useRef();

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
        <Dialog open={openModal} disableScrollLock={ true } onClose={(e: any) => {submitForm(e, templateParams)}}>
            <Box p='2rem' sx={{ backgroundColor: '#063245ad' }}>
                {/* <DialogTitle></DialogTitle> */}
                <Typography variant='h6' color={'white'}> Submit Details</Typography>
                {/* <Divider sx={{height: '0.1rem', border: '1px solid balck'}}/> */}
                <Divider sx={{ marginBottom: '25px', marginTop: '10px', borderColor: '#ffffff3b', borderWidth: '1px' }} />
                <div className="form-outer">
                    <div className="form">
                        <Input
                            id='name'
                            // label="Enter Name"
                            placeholder="Enter Name *"
                            marginBottom={16}
                            value={name}
                            onChange={onChange}
                            type='text'
                        />
                        <Input
                            // label="Enter Phone Number"
                            id='phoneNumber'
                            placeholder="Enter Phone Number *"
                            marginBottom={16}
                            value={phoneNumber}
                            onChange={onChange}
                            type="tel"
                        />
                        <Input
                            // label="Enter Email Id"
                            id='emailId'
                            placeholder="Enter Email Id *"
                            marginBottom={16}
                            value={email}
                            onChange={onChange}
                            type='email'
                        />
                        <Input
                            // label="Enter City"
                            id='city'
                            placeholder="Enter City *"
                            marginBottom={16}
                            value={city}
                            onChange={onChange}
                            type='text'
                        />
                        <div onClick={(e: any) => {submitForm(e, templateParams)}}>
                            <Button
                                title="Submit"
                                color="#FDFDFD"
                                backgroundColor="#063245"
                            />
                        </div>
                        {
                            error && <T.Text3>
                                <span style={{ color: 'red', fontStyle: 'italic' }}>
                                    please complete the form to proceed.<br />
                                    <>(*) {' '} please fill the mandatory fields to SUBMIT.</>
                                </span>
                            </T.Text3>
                        }

                    </div>
                    <div className="disclaimer" style={{ paddingTop: '1rem' }}>
                        <T.Text3>
                            Our technical expert will reach you as soon as possible.
                        </T.Text3>
                    </div>
                </div>
            </Box>
        </Dialog>
    );

}


export default DialogSection;