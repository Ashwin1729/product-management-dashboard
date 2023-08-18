import React from "react";
import SideBar from "../components/SideBar";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import PaymentsIcon from "@mui/icons-material/Payments";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import styles from "./Home.module.css";
import AccordionModule from "../components/AccordionModule";

const Home = () => {
  return (
    <div className={styles.bgColor}>
      <Box height={70} />
      <Box sx={{ display: "flex" }}>
        <SideBar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Stack spacing={2} direction="row">
                <Card
                  sx={{ minWidth: 49 + "%", height: 152 }}
                  className={styles.titleCard}
                >
                  <CardContent>
                    <div className={styles.titleIcon}>
                      <CreditCardIcon />
                    </div>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{ color: "white" }}
                    >
                      $500.00
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="body2"
                      component="div"
                      sx={{ color: "#ccd1d1" }}
                    >
                      Total Earnings
                    </Typography>
                  </CardContent>
                </Card>
                <Card
                  sx={{ minWidth: 49 + "%", height: 152 }}
                  className={styles.titleCardLight}
                >
                  <CardContent>
                    <div className={styles.titleIcon}>
                      <ShoppingCartIcon />
                    </div>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{ color: "white" }}
                    >
                      $900.00
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="body2"
                      component="div"
                      sx={{ color: "#ccd1d1" }}
                    >
                      Total Orders
                    </Typography>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
            <Grid item xs={4}>
              <Stack spacing={2}>
                <Card sx={{ maxWidth: 500 }}>
                  <Stack spacing={2} direction="row">
                    <div>
                      <div className={styles.icon}>
                        <PaymentsIcon />
                      </div>
                    </div>
                    <div className={styles.income}>
                      <span className={styles.price}>$203K</span>
                      <br />
                      <span className={styles.title}>Total Income</span>
                    </div>
                  </Stack>
                </Card>
                <Card sx={{ maxWidth: 500 }}>
                  <Stack spacing={2} direction="row">
                    <div>
                      <div className={styles.icon}>
                        <PaymentsIcon />
                      </div>
                    </div>
                    <div className={styles.income}>
                      <span className={styles.price}>$203K</span>
                      <br />
                      <span className={styles.title}>Total Income</span>
                    </div>
                  </Stack>
                </Card>
              </Stack>
            </Grid>
          </Grid>

          <Box height={20} />
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Card sx={{ height: 60 + "vh" }}>
                <CardContent></CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ height: 60 + "vh" }}>
                <CardContent>
                  <div className={styles.income}>
                    <span className={styles.price}>Popular Products</span>
                  </div>
                  <AccordionModule />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default Home;
