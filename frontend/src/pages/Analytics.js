import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SideBar from "../components/SideBar";
import styles from "./Analytics.module.css";
import GeoChart from "../charts/GeoChart";
import PieChart from "../charts/PieChart";
import HorizontalBarChart from "../charts/HorizontalBarChart";

const Analytics = () => {
  return (
    <div className={styles.bgColor}>
      <Box height={70} />
      <Box sx={{ display: "flex" }}>
        <SideBar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={5}>
              <Stack spacing={2} direction="row">
                <Box sx={{ width: "50%" }}>
                  <Card
                    sx={{ minWidth: 19 + "%" }}
                    className={styles.titleCard}
                  >
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="p"
                        component="div"
                        sx={{ color: "white" }}
                      >
                        Visitors
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ color: "#ccd1d1" }}
                      >
                        24,630
                      </Typography>
                      <Typography
                        variant="body2"
                        component="div"
                        sx={{ color: "#ccd1d1" }}
                      >
                        since last week
                      </Typography>
                    </CardContent>
                  </Card>
                  <Box height={16} />
                  <Card
                    sx={{ minWidth: 19 + "%" }}
                    className={styles.titleCard}
                  >
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="p"
                        component="div"
                        sx={{ color: "white" }}
                      >
                        Visitors
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ color: "#ccd1d1" }}
                      >
                        24,630
                      </Typography>
                      <Typography
                        variant="body2"
                        component="div"
                        sx={{ color: "#ccd1d1" }}
                      >
                        since last week
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
                <Box sx={{ width: "50%" }}>
                  <Card
                    sx={{ minWidth: 19 + "%" }}
                    className={styles.titleCardLight}
                  >
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="p"
                        component="div"
                        sx={{ color: "white" }}
                      >
                        Visitors
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ color: "#ccd1d1" }}
                      >
                        24,630
                      </Typography>
                      <Typography
                        variant="body2"
                        component="div"
                        sx={{ color: "#ccd1d1" }}
                      >
                        since last week
                      </Typography>
                    </CardContent>
                  </Card>
                  <Box height={16} />
                  <Card
                    sx={{ minWidth: 19 + "%" }}
                    className={styles.titleCardLight}
                  >
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="p"
                        component="div"
                        sx={{ color: "white" }}
                      >
                        Visitors
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ color: "#ccd1d1" }}
                      >
                        24,630
                      </Typography>
                      <Typography
                        variant="body2"
                        component="div"
                        sx={{ color: "#ccd1d1" }}
                      >
                        since last week
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={7}>
              <Card sx={{ height: 40 + "vh" }}>
                <CardContent>
                  <HorizontalBarChart />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Box height={16} />
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Card sx={{ height: 40 + "vh" }}>
                <CardContent>
                  <GeoChart />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ height: 40 + "vh" }}>
                <CardContent>
                  <PieChart />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default Analytics;
