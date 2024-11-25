import { useState, useEffect } from "react";
import getData from "../../utils/getData.js";
import { Accordion } from '@mantine/core';
// import classes from './Minors.module.css';
import { Modal, Box, Typography, Button } from '@mui/material';

export default function Minors() {

    const [minorsObj, setMinorsObj] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [openItem, setOpenItem] = useState(null); 

    const handleOpen = (itemName) => setOpenItem(itemName); 
    const handleClose = () => setOpenItem(null); 

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    useEffect(() => {
        getData("minors/").then((json) => {
            setMinorsObj(json);      
            setLoaded(true);
        });
    }, []);

    // Display loading message while data is fetched
    if (!loaded)
        return (
            <>
                <div className="full-screen-width">LOADING...</div>
            </>
        );

    // Map over minors and create Accordion items
    const minorsItems = minorsObj.UgMinors.map((item) => (
        <Accordion.Item key={item.name} value={item.title}>
            <Accordion.Control>{item.title}</Accordion.Control>
            <Accordion.Panel>
                <p>{item.description}</p>
                <div>
                    <Button onClick={() => handleOpen(item.name)}>See Courses</Button>
                    <Modal
                        open={openItem === item.name} 
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Typography variant="h1" component="h1">
                                Courses
                            </Typography>
                            <Typography variant="body1" component="h2">
                                {item.courses && (
                                    <ul>
                                        {item.courses.map((course, index) => (
                                            <li key={index}>{course}</li>
                                        ))}
                                    </ul>
                                )}
                            </Typography>
                        </Box>
                    </Modal>
                </div>
            </Accordion.Panel>
        </Accordion.Item>
    ));

    return (
        <>
            <div className="full-screen-width">
                <Accordion maw={1000} defaultValue="Minor">
                    {minorsItems}
                </Accordion>
            </div>
        </>
    );
}
