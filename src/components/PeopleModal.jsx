import * as React from 'react';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';
import {Modal, Box, Typography, Button} from '@mui/material';

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

export default function PeopleModal(prop, {name}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>{prop.name}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography  variant="h1" component="h2">
            {name}
          </Typography>
          <Typography  variant="h6" component="h2">
            {prop.tagline}
          </Typography>
          <Typography  variant="h6" component="h2">
            {prop.title}
          </Typography>
          <img src={prop.imagePath} alt={`photo of ${prop.name}`} style={ {maxWidth: 100}}/>
          {/* fanciest if statement for content */}
          {prop.website &&
          
          <Typography  variant="h6" component="h2">
            Website: <a href={prop.website} target="_blank"> {prop.website}</a>
          </Typography>
        }
        </Box>
      </Modal>
    </div>
  );
}