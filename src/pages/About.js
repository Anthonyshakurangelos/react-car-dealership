import { Box, Typography, Button, Grid, Card, CardActions, CardContent } from '@mui/material';



function About() {
  // const financeOptions = [
  //   {
  //     title: 'Low APR Financing',
  //     description: 'Get competitive financing rates with low APR for your car purchase.',
  //     buttonLabel: 'Apply Now',
  //     buttonColor: 'primary',
  //     buttonVariant: 'contained',
  //   },
  //   {
  //     title: 'Lease Options',
  //     description: 'Explore our leasing options for flexible and affordable car ownership.',
  //     buttonLabel: 'Learn More',
  //     buttonColor: 'secondary',
  //     buttonVariant: 'outlined',
  //   },
  //   {
  //     title: 'Trade-In Value',
  //     description: 'Trade in your current vehicle and apply its value towards your new car purchase.',
  //     buttonLabel: 'Get an Estimate',
  //     buttonColor: 'primary',
  //     buttonVariant: 'outlined',
  //   },
  // ];

  

  return (
    <section>
   <Typography variant="h4">FINANCING MADE EASY</Typography>

<Box sx={{ display: 'flex', alignItems: 'center', mt: 3 }}>
  <Box sx={{ flex: 1 }}>
    <Typography variant="h5" sx={{ mb: 1 }}>
      Your Monthly Payment
    </Typography>
    <Typography variant="h2" sx={{ fontWeight: 'bold', color: '#2f80ed' }}>
      $412
    </Typography>
    <Typography variant="body2" sx={{ mt: 2 }}>
      $500 down, 2% APR, 72 mo
    </Typography>
  </Box>
  <Box>
    <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
      "Get pre-qualified in minutes with no hidden fees and no hit to your credit score."
    </Typography>
  </Box>
</Box>

<Box sx={{ mt: 4 }}>
  <Typography variant="h5" sx={{ mb: 2 }}>
    Why choose Car Dealership?
  </Typography>
  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
    {/* <img src={QualityIcon} alt="Quality Icon" sx={{ width: 32, height: 32, mr: 1 }} /> */}
    <Typography variant="body2" sx={{ flex: 1 }}>
      <strong>Quality Vehicles:</strong> All our cars are inspected and reconditioned by quality technicians. Still don't love it? Check out our 7-Day Money Back Guarantee.
    </Typography>
  </Box>
  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
    {/* <img src={PickupIcon} alt="Pickup Icon" sx={{ width: 32, height: 32, mr: 1 }} /> */}
    <Typography variant="body2" sx={{ flex: 1 }}>
      <strong>Convenient Pickup:</strong> Never set foot in a dealership again. Pick up your next ride at one of our  Car dealership Vending Machines nationwide.
    </Typography>
  </Box>
  <Box sx={{ display: 'flex', alignItems: 'center' }}>
    {/* <img src={DeliveryIcon} alt="Delivery Icon" sx={{ width: 32, height: 32, mr: 1 }} /> */}
    <Typography variant="body2" sx={{ flex: 1 }}>
      <strong>Touchless Delivery:</strong> Who says you have to leave your house? We'll deliver your car directly to you in as soon as 3 days.
    </Typography>
  </Box>
</Box>

<Box sx={{ mt: 4 }}>
  <Typography variant="h5" sx={{ mb: 2 }}>
    Reduce your payments by trading in your car
  </Typography>
  <Box sx={{ display: 'flex', alignItems: 'center' }}>
    {/* <img src={TradeInIcon} alt="Trade-In Icon" sx={{ width: 32, height: 32, mr: 1 }} /> */}
    <Typography variant="body2
">
We're committed to helping you get the most out of your trade-in. Find out what your vehicle is worth in minutes and learn how you can apply your trade-in value to lower monthly payments.
</Typography>
</Box>
</Box>

php
Copy code
<Box sx={{ mt: 4 }}>
<Typography variant="h5" sx={{ mb: 2 }}>
Custom financing = Confident shopping
</Typography>
<Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
{/* <img src={FinancingIcon} alt="Financing Icon" sx={{ width: 32, height: 32, mr: 1 }} /> */}
<Typography variant="body2">
  Get pre-approved in minutes so you can shop for your next car with peace of mind.
  <br />
  Don't worry! This won't affect your credit score.
</Typography>
</Box>
</Box>

<Box sx={{ mt: 4 }}>
<Typography variant="h5" sx={{ mb: 2 }}>
Skip the dealership and buy with confidence
</Typography>
<Typography variant="body2" sx={{ mb: 2 }}>
Your experience doesn't end when you get the keys. At Car Dealership, we give you peace of mind every step of the way.
</Typography>
<Typography variant="body2" sx={{ fontStyle: 'italic' }}>
"No dealer fees, Pick up your car or have it delivered, Save $1,400 on average, 7-Day Money-Back Guarantee, Wide range of affordable vehicles, 100 Day / 4,189 Mile Limited Warranty"
</Typography>
</Box>

<Box sx={{ mt: 4 }}>
<Typography variant="h5" sx={{ mb: 2 }}>
Customer Reviews
</Typography>
{/* Add customer reviews component or content here */}
</Box>

<Box sx={{ mt: 4 }}>
<Typography variant="h5" sx={{ mb: 2 }}>
FAQs
</Typography>
{/* Add FAQs component or content here */}
</Box>
</section>

  );
}

export default About;
