import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  ArcElement,
  PointElement
} from 'chart.js';
import './Placement.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  ArcElement,
  PointElement // Register PointElement for Line chart
);

function Placement() {
  // Data for graphs
  const lastFiveYears = ['2019', '2020', '2021', '2022', '2023'];

  const placementData = {
    labels: lastFiveYears,
    datasets: [
      {
        label: 'Placed',
        data: [180, 200, 240, 260, 300],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
      {
        label: 'Not Placed',
        data: [20, 30, 25, 15, 10],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
      {
        label: 'Further Studies',
        data: [50, 60, 40, 55, 45],
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
      },
    ],
  };

  const companyPackageData = {
    labels: lastFiveYears,
    datasets: [
      {
        label: 'Companies Visited',
        data: [20, 25, 30, 35, 40],
        backgroundColor: 'rgba(255, 206, 86, 0.6)',
      },
      {
        label: 'Highest Package (LPA)',
        data: [12, 14, 18, 20, 22],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
      {
        label: 'Average Package (LPA)',
        data: [6, 7, 8, 9, 10],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
      {
        label: 'Median Package (LPA)',
        data: [5, 6, 7, 8, 9],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
    ],
  };

  const departmentWisePlacementData = {
    labels: ['Computer', 'IT', 'AI & DS', 'ETC', 'Electronics'],
    datasets: [
      {
        label: 'Total Placed',
        data: [100, 80, 90, 60, 50],
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(255, 99, 132, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
        ],
      },
    ],
  };

  const yearlyPackageComparisonData = {
    labels: lastFiveYears,
    datasets: [
      {
        label: 'Highest Package (LPA)',
        data: [12, 14, 18, 20, 22],
        borderColor: 'rgba(255, 99, 132, 0.6)',
        fill: false,
      },
      {
        label: 'Average Package (LPA)',
        data: [6, 7, 8, 9, 10],
        borderColor: 'rgba(54, 162, 235, 0.6)',
        fill: false,
      },
      {
        label: 'Median Package (LPA)',
        data: [5, 6, 7, 8, 9],
        borderColor: 'rgba(75, 192, 192, 0.6)',
        fill: false,
      },
    ],
  };

  const packageDistributionPieData = {
    labels: ['0-5 LPA', '5-10 LPA', '10-15 LPA', '15+ LPA'],
    datasets: [
      {
        label: 'Package Distribution',
        data: [200, 150, 50, 30],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(255, 206, 86, 0.6)',
        ],
      },
    ],
  };

  // Current year data
  const currentYear = {
    totalCompaniesVisited: 40,
    totalPlaced: 300,
    highestPackage: 22, // in LPA
  };

  return (
    <div className="placement-page">
      <h2>Placement Statistics</h2>

      {/* Top Boxes for Current Year */}
      <div className="placement-summary">
        <div className="placement-box">
          <h3>Total Companies Visited</h3>
          <p>{currentYear.totalCompaniesVisited}</p>
        </div>
        <div className="placement-box">
          <h3>Total Students Placed</h3>
          <p>{currentYear.totalPlaced}</p>
        </div>
        <div className="placement-box">
          <h3>Highest Package</h3>
          <p>{currentYear.highestPackage} LPA</p>
        </div>
      </div>

      {/* Graphs */}
      <div className="graphs">
        {/* No. of Students Placed vs Not Placed vs Further Studies */}
        <div className="graph">
          <h3>Placement Distribution (Last 5 Years)</h3>
          <Bar data={placementData} />
        </div>

        {/* No. of Companies Visited & Packages */}
        <div className="graph">
          <h3>Companies Visited & Package Statistics</h3>
          <Bar data={companyPackageData} />
        </div>

        {/* Department-wise Placements */}
        <div className="graph">
          <h3>Department-wise Placement</h3>
          <Bar data={departmentWisePlacementData} />
        </div>

        {/* Yearly Package Comparison */}
        <div className="graph">
          <h3>Yearly Package Comparison</h3>
          <Line data={yearlyPackageComparisonData} />
        </div>

        {/* Package Distribution */}
        <div className="graph">
          <h3>Package Distribution</h3>
          <Pie data={packageDistributionPieData} />
        </div>
      </div>
    </div>
  );
}

export default Placement;
