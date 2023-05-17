import { Grid, Box, Typography, Skeleton, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useState, useEffect, useMemo } from 'react';


function Inventory() {
  // Placeholder data for cars
  const initialCars  = useMemo(() => [
    { id: 1, make: 'Toyota', model: 'Corolla', year: 2020, price: '$20,000', miles: '10,000' , image: './images/pexels-sindre-fs-1073031.jpg' },
    { id: 2, make: 'Toyota', model: 'Camery', year: 2019, price: '$18,000', miles: '15,000', image: 'https://example.com/honda-civic.jpg'  },
    { id: 3, make: 'Toyota', model: 'Supra', year: 2022, price: '$35,000', miles: '5,000', image: 'https://example.com/ford-mustang.jpg' },
    { id: 4, make: 'Toyota', model: 'Corolla', year: 2022, price: '$35,000', miles: '3,000', image: 'https://example.com/ford-mustang.jpg' },
    { id: 5, make: 'Honda', model: 'Civic', year: 2022, price: '$25,000', miles: '15,000', image: 'https://example.com/ford-mustang.jpg' },
    { id: 5, make: 'Honda', model: 'Accord', year: 2018, price: '$13,000', miles: '80,000', image: 'https://example.com/ford-mustang.jpg' },
   
    // Add more cars as needed
  ], []);

  const [cars, setCars] = useState(initialCars);
  const [sortBy, setSortBy] = useState('price');
  const [filterBy, setFilterBy] = useState('');

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilterBy(event.target.value);
  };

  useEffect(() => {
    // Simulating API call to fetch car data
    setTimeout(() => {
      setCars(initialCars);
    }, 2000);
  }, [initialCars]);

  const sortedCars = [...cars].sort((a, b) => {
    if (sortBy === 'price') {
      return a.price - b.price;
    } else if (sortBy === 'year') {
      return a.year - b.year;
    } else {
      return 0;
    }
  });

  const filteredCars = sortedCars.filter((car) => {
    if (filterBy === '') {
      return true;
    } else {
      return car.make === filterBy;
    }
  });

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>Inventory</Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
        <FormControl>
          <InputLabel>Sort By</InputLabel>
          <Select value={sortBy} onChange={handleSortChange}>
            <MenuItem value="price">Price</MenuItem>
            <MenuItem value="year">Year</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel>Filter By</InputLabel>
          <Select value={filterBy} onChange={handleFilterChange}>
            <MenuItem value="">All</MenuItem>
            <MenuItem value="Toyota">Toyota</MenuItem>
            <MenuItem value="Honda">Honda</MenuItem>
            <MenuItem value="Ford">Ford</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Grid container spacing={2}>
        {filteredCars.map((car) => (
          <Grid item xs={12} sm={6} md={4} key={car.id}>
            <Box sx={{ p: 2, border: '1px solid #ccc', borderRadius: '4px' }}>
              <Skeleton variant="rectangular" width="100%" height={200} animation="wave" />
              <Typography variant="h6">{car.make} {car.model}</Typography>
              <Typography variant="subtitle1">Year: {car.year}</Typography>
              <Typography variant="subtitle1">Price: ${car.price}</Typography>
              <Typography variant="subtitle1">Miles: {car.miles}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Inventory;
