import Header from '../components/Header/Header';
import AboutSection from '../components/Sections/AboutSection/AboutSection';
import AdvantagesSection from '../components/Sections/AdvantagesSection/AdvantagesSection';
import PopularHikesSection from '../components/Sections/PopularHikesSection/PopularHikesSection';
import BlogSection from '../components/Sections/BlogSection/BlogSection';
import {
    ADVANTAGES_IMAGES,
    PRODUCTS,
    PHOTOS,
    ELIGANCEANDSTYLE,
    TINY_SLIDER_SETTINGS,
    BLOG_TINY_SLIDER_SETTINGS
} from '../constants';
import GallerySection from '../components/Sections/GallerySection/GallerySection';
import FooterSection from '../components/Sections/FooterSection/FooterSection';
import CompanyInfoSection from '../components/Sections/CompanyInfoSection/CompanyInfoSection';
import DialogSection from '../components/Dialog/Dialog';
import React, { useState } from 'react';
import Fab from "@mui/material/Fab";
import UpIcon from "@mui/icons-material/KeyboardArrowUp";
import emailjs from '@emailjs/browser';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { Typography } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import IconButton from '../components/IconButton/IconButton';
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

const HomePage = () => {

    const [openModal, setOpenModal] = useState(true);
    const [error, setError] = useState(false);
    const [open, setOpen] = useState(false);

    const submitForm = (e: any, formData: any) => {
        e.preventDefault(); // prevents the page from reloading when you hit “Send”

        if (formData && formData.from_name && formData.from_contact && formData.from_email && formData.from_city) {
            emailjs.send('brio_elevators', '#defaultTemplate', { ...formData }, 'bMfey0eqUZD2n6ECE')
                .then((result: any) => {
                    // show the user a success message
                    setOpenModal(false);
                    setOpen(true);
                    console.log('SUCCESS!', result.status, result.text);
                }, (error: any) => {
                    // show the user an error
                    setOpenModal(false);
                    console.log('FAILED...', error);
                });
        } else {
            setError(true);
            closeModalFunc();
        }

    }

    const openModalFunc = () => {
        setOpenModal(true);
    }
    const closeModalFunc = () => {
        setOpenModal(false);
    }
    const downloadBroucher = () => {
        const link = document.createElement('a');
        link.download = 'BrioElevatorsBrochure';
        link.href = '../../BrioElevatorsBrochureV.1.pdf';
        link.click();
    }

    const executeScroll = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }

    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
        props,
        ref,
    ) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    const onMenuItemClick = (text: any) => {

        console.log(text);
        if (text == 'Home') {
            executeScroll();
        } else if (text == 'Products') {
            const element = document.getElementById("products");
            element?.scrollIntoView();
            element?.scrollIntoView(false);
            element?.scrollIntoView({ block: "center" });
            element?.scrollIntoView({ behavior: "smooth" });
        }

    }

    return (
        <>
            <div style={{ backgroundColor: 'rgb(163 125 10 / 91%)', 
            display: 'flex',
             justifyContent: 'space-between', 
             height: '30px', 
             alignItems: 'center', 
             paddingLeft: '35px', 
             paddingRight: '35px',
             paddingTop: '2px',
             paddingBottom: '2px' }}>
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
            <Header submitForm={submitForm} openModalFunc={openModalFunc} onMenuItemClick={onMenuItemClick} />
            <AboutSection openModalFunc={openModalFunc} />
            <AdvantagesSection images={ADVANTAGES_IMAGES} downloadBroucher={downloadBroucher} />
            <PopularHikesSection
                hikes={PRODUCTS}
                tinySliderSettings={TINY_SLIDER_SETTINGS}
                knowMore={openModalFunc}
            />
            <BlogSection
                posts={ELIGANCEANDSTYLE}
                tinySliderSettings={BLOG_TINY_SLIDER_SETTINGS}
                knowMore={openModalFunc}
            />
            <GallerySection
                photos={PHOTOS}
                tinySliderSettings={TINY_SLIDER_SETTINGS}
                knowMore={openModalFunc}
                submitForm={submitForm}
                downloadBroucher={downloadBroucher}
            />
            <FooterSection onMenuItemClick={onMenuItemClick} />
            <CompanyInfoSection />

            <DialogSection openModal={openModal} submitForm={submitForm} error={error} />
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    <Typography variant='body1'>Thankyou for showing interest in BRIO ELEVATORS.</Typography> <br />
                    we got your details, We will get back as soon as possible.<br />
                    You can reachout on <br />
                    Phone :  +91-9398113939<br />
                    Email : info@brioelevators.com<br />
                </Alert>
            </Snackbar>
            <Fab
                sx={{
                    position: "fixed",
                    bottom: 40,
                    right: 40,
                    backgroundColor: '#e5b011',
                    height: "3.3rem",
                    width: "2.6rem",
                    border: '1px solid white'
                }}
                onClick={executeScroll}
            >
                <UpIcon fontSize='medium' sx={{ color: "#063245" }} />
                {/* <img src = 'https://icons8.com/icon/Pp4aFcYLLRYp/ringer-volume'/> */}
                {/* <a target="_blank" href="">Ringer Volume</a> */}
            </Fab>

            <Fab
                sx={{
                    position: "fixed",
                    bottom: 130,
                    right: 40,
                    backgroundColor: 'green',
                    height: "3rem",
                    width: "2.7rem",
                    border: '1px solid white'
                }}
                // <a target="_blank" href="https://icons8.com/icon/Pp4aFcYLLRYp/ringer-volume">Ringer Volume</a>
                onClick={() => {
                    const link = document.createElement('a');
                    link.href = 'tel:+91-9398113939';
                    link.click();
                }}
            >
                <CallIcon fontSize='medium' sx={{ color: "white" }} />
            </Fab>
        </>
    );
};

export default HomePage;
