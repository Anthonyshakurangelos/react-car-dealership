import { Container, Grid, Typography } from '@mui/material';
import CarCard from '../CarCard';

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
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome to Car Dealership
      </Typography>
      <Grid container spacing={4}>
        {cars.map((car, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <CarCard car={car} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Home;
