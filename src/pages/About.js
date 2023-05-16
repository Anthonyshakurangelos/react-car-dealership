import { Box, Typography } from '@mui/material';

function About() {
  return (
    <Box sx={{ bgcolor: 'white', p: 3 }}>
      <Typography variant="h4" gutterBottom>About Us</Typography>
      <Typography variant="body1" gutterBottom>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent auctor blandit ex
        eu elementum. Morbi in semper metus, vitae dictum justo. Donec non tincidunt nunc.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Fusce convallis ex id nunc malesuada, quis dapibus mi faucibus. Morbi bibendum, sem
        et ultricies blandit, justo nisl lacinia nunc, vitae tristique sapien lacus a nibh.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Aliquam erat volutpat. Fusce nec enim vel ex aliquam auctor. Vestibulum ante ipsum
        primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec id risus
        dolor.
      </Typography>
    </Box>
  );
}

export default About;
