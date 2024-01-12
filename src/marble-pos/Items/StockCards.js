import { Grid } from "@mui/material";
import MDBox from "../../components/MDBox";
import ComplexStatisticsCard from "../../examples/Cards/StatisticsCards/ComplexStatisticsCard";

const StockCards = (props) => {
  return (
    <div>
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={6}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon="weekend"
                title="Total Sale"
                count={props.TotalSale}
                percentage={{
                  color: "success",
                  amount: "100%",
                  label: "Sale Of Selected Day's",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="leaderboard"
                title="Total Profit"
                count={props.TotalProfit}
                percentage={{
                  color: "success",
                  amount: (props.TotalProfit / props.TotalSale * 100).toLocaleString(),
                  label: "% profit, you have...",
                }}
              />
            </MDBox>
          </Grid>
          {/* <Grid item xs={12} md={6} lg={6}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="store"
                title="Today Profit"
                count="34k"
                percentage={{
                  color: "success",
                  amount: "+1%",
                  label: "than yesterday",
                }}
              />
            </MDBox>
          </Grid> */}
        </Grid>
      </MDBox>
    </div>
  );
};

export default StockCards;
