import { Container, Grid, Typography, Skeleton } from '@mui/material';
import Carousel from 'react-material-ui-carousel';

function Home() {
  const cars = [
    {
      name: 'Toyota Corolla',
      description: 'The best-selling car in the world',
      price: '$20,000',
      image: 'https://source.unsplash.com/2l0CWTpcChI/600x400',
    },
    {
      name: 'Honda Civic',
      description: 'A reliable and efficient car',
      price: '$22,000',
      image: 'https://source.unsplash.com/ftcy1cTHluQ/600x400',
    },
    {
      name: 'Ford Mustang',
      description: 'An American classic',
      price: '$35,000',
      image: 'https://source.unsplash.com/oRs5gEVCfHU/600x400',
    },
  ];


  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: '#2f80ed' }}>
        Welcome to Car Dealership
      </Typography>
      <Carousel
        animation="slide"
        navButtonsAlwaysVisible
        indicatorIconButtonProps={{
          style: {
            color: 'white',
          },
        }}
        activeIndicatorIconButtonProps={{
          style: {
            color: 'white',
          },
        }}
      >
        {cars.map((car, index) => (
          <Grid key={index} item xs={12} sm={6} md={4}>
            <Skeleton
              variant="rectangular"
              width={600}
              height={400}
              animation="wave"
            />
          </Grid>
        ))}
      </Carousel>
      <Grid container spacing={4}>
        {cars.map((car, index) => (
          <Grid key={index} item xs={12} sm={6} md={4}>
            <Skeleton variant="rectangular" width={300} height={200} animation="wave" />
            <Skeleton variant="text" width={200} height={30} animation="wave" />
            <Skeleton variant="text" width={150} height={20} animation="wave" />
            <Skeleton variant="text" width={100} height={20} animation="wave" />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Home;
