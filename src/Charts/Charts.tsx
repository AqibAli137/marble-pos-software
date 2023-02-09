import React, { useEffect, useRef } from "react";
import ApexCharts, { ApexOptions } from "apexcharts";
import { AquaBillChart } from "./AquaBillCharts";
import HeaderChart from "./headerChart";
type Props = {
  className: string;
  chartColor: string;
  strokeColor: string;
  chartHeight: string;
};

function getCSSVariableValue(variableName: string) {
  let hex = getComputedStyle(document.documentElement).getPropertyValue(variableName);
  if (hex && hex.length > 0) {
    hex = hex.trim();
  }

  return hex;
}

const Charts: React.FC<Props> = ({ className, chartColor, chartHeight, strokeColor }) => {
  const chartRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!chartRef.current) {
      return;
    }

    const chart = new ApexCharts(
      chartRef.current,
      chartOptions(chartHeight, chartColor, strokeColor)
    );
    if (chart) {
      chart.render();
    }

    return () => {
      if (chart) {
        chart.destroy();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chartRef]);

  return (
    <div className="col-12">
      <div className={`bg-white rounded shadow-sm mt-5 pb-3`}>
        <div className="card-p position-relative">
          {/* begin::Row */}
          <HeaderChart />
          <div className="d-flex row g-0">
            <div className="col-xxl-4 my-5 col-xl-4 col-md-12 col-sm-12 d-flex justify-content-center align-items-center">
              <h4>One Thing</h4>
            </div>
            <div className="col-xxl-4 my-5 col-xl-4 col-md-12 col-sm-12 d-flex justify-content-center align-items-center">
              <AquaBillChart
                className="card-xl-stretch"
                chartColor="danger"
                chartHeight="200px"
                strokeColor="#cb1e46"
              />
            </div>
            <div className="col-xxl-4 my-5 col-xl-4 col-md-12 col-sm-12 d-flex justify-content-center align-items-center">
             <h3>Third Thing</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const chartOptions = (
  chartHeight: string,
  chartColor: string,
  strokeColor: string
): ApexOptions => {
  const labelColor = getCSSVariableValue("--bs-gray-500");
  const borderColor = getCSSVariableValue("--bs-gray-200");
  const color = getCSSVariableValue("--bs-" + chartColor);

  return {
    series: [
      {
        name: "Net Profit",
        data: [30, 45, 32, 70, 40, 40, 40],
      },
    ],
    chart: {
      fontFamily: "inherit",
      type: "area",
      height: chartHeight,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      sparkline: {
        enabled: true,
      },
      dropShadow: {
        enabled: true,
        enabledOnSeries: undefined,
        top: 5,
        left: 0,
        blur: 3,
        color: strokeColor,
        opacity: 0.5,
      },
    },
    plotOptions: {},
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: "solid",
      opacity: 0,
    },
    stroke: {
      curve: "smooth",
      show: true,
      width: 3,
      colors: [strokeColor],
    },
    xaxis: {
      categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        style: {
          colors: labelColor,
          fontSize: "12px",
        },
      },
      crosshairs: {
        show: false,
        position: "front",
        stroke: {
          color: borderColor,
          width: 1,
          dashArray: 3,
        },
      },
    },
    yaxis: {
      min: 0,
      max: 80,
      labels: {
        show: false,
        style: {
          colors: labelColor,
          fontSize: "12px",
        },
      },
    },
    states: {
      normal: {
        filter: {
          type: "none",
          value: 0,
        },
      },
      hover: {
        filter: {
          type: "none",
          value: 0,
        },
      },
      active: {
        allowMultipleDataPointsSelection: false,
        filter: {
          type: "none",
          value: 0,
        },
      },
    },
    tooltip: {
      style: {
        fontSize: "12px",
      },
      y: {
        formatter: function (val:any) {
          return "$" + val + " thousands";
        },
      },
      marker: {
        show: false,
      },
    },
    colors: ["transparent"],
    markers: {
      colors: [color],
      strokeColors: [strokeColor],
      strokeWidth: 3,
    },
  };
};

export default Charts;
