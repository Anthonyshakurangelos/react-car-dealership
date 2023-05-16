import { Card, CardContent, CardMedia, Typography } from "@mui/material";

function CarCard({ car }) {
  const cars = [
    {
      name: "Toyota Corolla",
      description: "The best-selling car in the world",
      price: "$20,000",
      image: "https://source.unsplash.com/2l0CWTpcChI/600x400",
    },
    {
      name: "Honda Civic",
      description: "A reliable and efficient car",
      price: "$22,000",
      image: "https://source.unsplash.com/ftcy1cTHluQ/600x400",
    },
    {
      name: "Ford Mustang",
      description: "An American classic",
      price: "$35,000",
      image: "https://source.unsplash.com/oRs5gEVCfHU/600x400",
    },
  ];

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={car.image}
        alt={car.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {car.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {car.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: {car.price}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CarCard;
