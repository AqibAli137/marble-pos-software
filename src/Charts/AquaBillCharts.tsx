import React, { useState, useRef } from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { updateAquaBillDrawertable, updateAuqaBillDrower } from "../@features/AquaBill/AquaBillSlice";
import AquaBillDrawer from "./BillingDrawer/AquaBillDrawer";

type Props = {
  className: string;
  chartColor: string;
  strokeColor: string;
  chartHeight: string;
};

const AquaBillChart: React.FC<Props> = ({ className, chartColor, chartHeight, strokeColor }) => {
  const dispatch = useDispatch<AppDispatch>();
  let aquaBillState = useSelector((store: RootState) => store.aquaBill);
  const [drawerActive, setDrawerActive] = useState(false);

  const apexOptions: ApexOptions = {
    labels: ["Total", "Unpaid", "Paid"],
    theme: {
      monochrome: {
        enabled: true,
      },
    },
    plotOptions: {
      pie: {
        dataLabels: {
          offset: -3,
        },
      },
    },
    responsive: [
      {
        breakpoint: 1400,
        options: {
          chart: {
            width: 300,
          },
          legend: {
            position: "bottom",
            fontSize: "10px",
          },
        },
      },
      {
        breakpoint: 1199,
        options: {
          chart: {
            width: 400,
          },

          legend: {
            position: "bottom",
            fontSize: "13px",
            style: {
              fontWeight: "Bolder",
              color: "#263238",
            },
          },
        },
      },
    ],
    chart: {
      events: {
        dataPointSelection(e: any, chart?: any, options?: any) {
          dispatch(
            updateAquaBillDrawertable(chart.annotations.w.config.labels[options.dataPointIndex])
          );
          dispatch(updateAuqaBillDrower(true));
          setDrawerActive(true);
          console.log(chart.annotations.w.config.labels[options.dataPointIndex]);
        },
      },
    },

    title: {
      text: "Bills Record",
      align: "center",
      style: {
        fontWeight: "Bold",
        color: "#263238",
      },
    },

    legend: {
      formatter: function (val, opts) {
        return names[opts.seriesIndex] + " - " + opts.w.globals.series[opts.seriesIndex];
      },
      show: true,
      position: "bottom",
    },
    series: [100, 20, 60],
  };

  const [names, setNames] = useState(["Total", "Unpaid", "Paid"]);
  const [pieProps, setpieProps] = useState({
    series: [100, 20, 80],
    options: apexOptions,
  });
  const chartRef = useRef(null);
  function handleClick() {
    console.log(chartRef.current);
  }

  return (
    <>
      <div ref={chartRef} onClick={handleClick}>
        <div id="chart">
          <ReactApexChart
            options={pieProps.options}
            series={pieProps.series}
            type="pie"
            width={350}
          />
        </div>
        {drawerActive && (
          <div className="">
            <AquaBillDrawer />
          </div>
        )}
      </div>
    </>
  );
};

export { AquaBillChart };
