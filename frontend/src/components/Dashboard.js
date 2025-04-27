import { Pie, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale, Title } from 'chart.js';

// Register required chart elements
ChartJS.register(ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale, Title);

function Dashboard({ expenses }) {
  if (!expenses || expenses.length === 0) {
    return (
      <div className=" bg-gray-900 p-4 rounded shadow">
        <h2 className="text-2xl font-bold  text-white mb-4">No Expenses to Show</h2>
      </div>
    );
  }

  const categoryData = expenses.reduce((acc, curr) => {
    if (curr.title && curr.amount) {
      acc[curr.title] = (acc[curr.title] || 0) + curr.amount;
    }
    return acc;
  }, {});

  const deepColors = [
    '#1f1c2c', '#6a11cb', '#2575fc', '#0f2027', '#2c3e50',
    '#7b4397', '#ff4b2b', '#ff416c', '#0052d4', '#283c86',
  ];

  const colorGenerator = (index) => deepColors[index % deepColors.length];

  const pieData = {
    labels: Object.keys(categoryData),
    datasets: [
      {
        label: 'Expenses by Title',
        data: Object.values(categoryData),
        backgroundColor: Object.keys(categoryData).map((_, index) => colorGenerator(index)),
        borderColor: '#ffffff',
        borderWidth: 3,
      },
    ],
  };

  const barData = {
    labels: Object.keys(categoryData),
    datasets: [
      {
        label: 'Expenses by Title',
        data: Object.values(categoryData),
        backgroundColor: Object.keys(categoryData).map((_, index) => colorGenerator(index)),
        borderColor: '#ffffff',
        borderWidth: 3,
      },
    ],
  };

  const commonOptions = {
    plugins: {
      legend: {
        labels: {
          color: 'white',
        },
      },
      title: {
        display: true,
        text: 'Expenses by Title',
        color: 'white',
        font: {
          size: 20,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: 'white',
        },
        grid: {
          color: 'white', 
        },
      },
      y: {
        ticks: {
          color: 'white',
        },
        grid: {
          color: 'white', 
        },
      },
    },
  };

  const pieOptions = {
    plugins: {
      legend: {
        labels: {
          color: 'white',
        },
      },
      title: {
        display: true,
        text: 'Expenses by Title',
        color: 'white',
        font: {
          size: 20,
        },
      },
    },
  };

  return (
    <div className="flex flex-col md:flex-row space-y-8 md:space-x-8 bg-gray-900 p-6 rounded-2xl shadow-lg">
      <div className="w-full md:w-1/2">
        <h2 className="text-2xl font-bold mb-6 text-white">Expenses Pie Chart</h2>
        <Pie data={pieData} options={pieOptions} />
      </div>
      <div className="w-full md:w-1/2">
        <h2 className="text-2xl font-bold mb-6 text-white">Expenses Bar Chart</h2>
        <Bar data={barData} options={commonOptions} />
      </div>
    </div>
  );
}

export default Dashboard;
