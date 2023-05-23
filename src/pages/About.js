import { Box, Typography } from '@mui/material';

function About() {
  return (
    <section>
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box sx={{ flex: 1 }}>
          <Typography variant="h4" sx={{ fontFamily: 'Arial', fontWeight: 'bold', mb: 3 }}>
            FINANCING MADE EASY
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <Typography variant="h5" sx={{ fontFamily: 'Arial', mr: 2 }}>
              Your Monthly Payment
            </Typography>
            <Typography variant="h2" sx={{ fontFamily: 'Arial', fontWeight: 'bold', color: '#2f80ed' }}>
              $412
            </Typography>
          </Box>
          <Typography variant="body2" sx={{ fontFamily: 'Arial', fontStyle: 'italic' }}>
            "Get pre-qualified in minutes with no hidden fees and no hit to your credit score."
          </Typography>
        </Box>
        <Box sx={{ flex: 1, ml: 4 }}>
          <img src="carvana-advertising-image.png" alt="Car Advertising" sx={{ maxWidth: '100%' }} />
        </Box>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" sx={{ fontFamily: 'Arial', fontWeight: 'bold', mb: 2 }}>
          Why choose Car Dealership?
        </Typography>
        <Typography variant="body2" sx={{ fontFamily: 'Arial', mb: 2 }}>
          <strong>Quality Vehicles:</strong> All our cars are inspected and reconditioned by quality technicians.
          Still don't love it? Check out our 7-Day Money Back Guarantee.
        </Typography>
        <Typography variant="body2" sx={{ fontFamily: 'Arial', mb: 2 }}>
          <strong>Convenient Pickup:</strong> Never set foot in a dealership again.
          Pick up your next ride at one of our Car Dealership Vending Machines nationwide.
        </Typography>
        <Typography variant="body2" sx={{ fontFamily: 'Arial' }}>
          <strong>Touchless Delivery:</strong> Who says you have to leave your house?
          We'll deliver your car directly to you in as soon as 3 days.
        </Typography>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" sx={{ fontFamily: 'Arial', fontWeight: 'bold', mb: 2 }}>
          Reduce your payments by trading in your car
        </Typography>
        <Typography variant="body2" sx={{ fontFamily: 'Arial' }}>
          We're committed to helping you get the most out of your trade-in.
          Find out what your vehicle is worth in minutes and learn how you can apply your trade-in value to lower monthly payments.
        </Typography>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" sx={{ fontFamily: 'Arial', fontWeight: 'bold', mb: 2 }}>
          Custom financing = Confident shopping
        </Typography>
        <Typography variant="body2" sx={{ fontFamily: 'Arial', mb: 2 }}>
          Get pre-approved in minutes so you can shop for your next car with peace of mind.
          <br />
          Don't worry! This won't affect your credit score.
        </Typography>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" sx={{ fontFamily: 'Arial', fontWeight: 'bold', mb: 2 }}>
          Skip the dealership and buy with confidence
        </Typography>
        <Typography variant="body2" sx={{ fontFamily: 'Arial', mb: 2 }}>
          Your experience doesn't end when you get the keys.
          At Car Dealership, we give you peace of mind every step of the way.
        </Typography>
        <Typography variant="body2" sx={{ fontFamily: 'Arial', fontStyle: 'italic' }}>
          "No dealer fees, Pick up your car or have it delivered, Save $1,400 on average,
          7-Day Money-Back Guarantee, Wide range of affordable vehicles, 100 Day / 4,189 Mile Limited Warranty"
        </Typography>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" sx={{ fontFamily: 'Arial', fontWeight: 'bold', mb: 2 }}>
          Customer Reviews
        </Typography>
        {/* Add customer reviews component or content here */}
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" sx={{ fontFamily: 'Arial', fontWeight: 'bold', mb: 2 }}>
          FAQs
        </Typography>
        {/* Add FAQs component or content here */}
      </Box>
    </section>
  );
}

export default About;
