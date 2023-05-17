import { Box, Typography, Grid, Link } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';


function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#004080",
        padding: "2rem",
        marginTop: "10rem",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <Typography variant="h6" gutterBottom>
            FINANCE
          </Typography>
          <Link href="#" color="inherit" underline="hover">
            Why Finance with Car Dealership
          </Link>
          <Link href="#" color="inherit" underline="hover">
            Get Pre-Qualified
          </Link>
          <Link href="#" color="inherit" underline="hover">
            Auto Loan Calculator
          </Link>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography variant="h6" gutterBottom>
            SELL/TRADE
          </Typography>
          <Link href="#" color="inherit" underline="hover">
            Get an Offer
          </Link>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography variant="h6" gutterBottom>
            HOW IT WORKS
          </Typography>
          <Link href="#" color="inherit" underline="hover">
            Buying From Car Dealership
          </Link>
          <Link href="#" color="inherit" underline="hover">
            Selling or Trading In
          </Link>
          <Link href="#" color="inherit" underline="hover">
            Our Protection Plans
          </Link>
          <Link href="#" color="inherit" underline="hover">
            Repairs with Car Dealership
          </Link>
          <Link href="#" color="inherit" underline="hover">
            Certified Cars
          </Link>
          <Link href="#" color="inherit" underline="hover">
            Car Dealership Insurance
          </Link>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography variant="h6" gutterBottom>
            ABOUT Car Dealership
          </Typography>
          <Link href="#" color="inherit" underline="hover">
            About Us
          </Link>
          <Link href="#" color="inherit" underline="hover">
            Logistics Hubs
          </Link>
          <Link href="#" color="inherit" underline="hover">
            Customer Reviews
          </Link>
          <Link href="#" color="inherit" underline="hover">
            Careers
          </Link>
        </Grid>
      </Grid>
      <Box
        sx={{
          borderTop: "1px solid #d0d0d0",
          paddingTop: "1rem",
          marginTop: "10rem",
          //   display: 'flex',
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Link href="#" color="inherit" underline="hover">
            SEARCH CARS
          </Link>
          <span style={{ margin: "0 0.5rem" }}>|</span>
          <Link href="#" color="inherit" underline="hover">
            SITEMAP
          </Link>
          <span style={{ margin: "0 0.5rem" }}>|</span>
          <Link href="#" color="inherit" underline="hover">
            INVESTORS
          </Link>
          <span style={{ margin: "0 0.5rem" }}>|</span>
          <Link href="#" color="inherit" underline="hover">
            BLOG
          </Link>
          <span style={{ margin: "0 0.5rem" }}>|</span>
          <Link href="#" color="inherit" underline="hover">
            PATENTS
          </Link>
        </Box>
        <Box>
          <FacebookIcon style={{ marginRight: "0.5rem" }} />
          <TwitterIcon style={{ marginRight: "0.5rem" }} />
          <LinkedInIcon style={{ marginRight: "0.5rem" }} />
          <PinterestIcon style={{ marginRight: "0.5rem" }} />
          <InstagramIcon />

          <Typography variant="body2" color="textSecondary" align="center">
            © {new Date().getFullYear()} Car Dealership. All Rights Reserved.
          </Typography>
          <Typography variant="body2" color="textSecondary" align="center">
            User Agreement and Privacy Policy | Financial Privacy Policy | Do
            Not Sell My Info | Code of Conduct | Responsible Disclosure |
            Accessibility
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
