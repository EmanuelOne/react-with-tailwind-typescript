import React from 'react';
import { Chart as ChartJS, registerables } from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(...registerables);
const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'First dataset',
      data: [33, 53, 85, 41, 44, 65],
      fill: true,
      lineTension: 0.2,
      radius: 2,

      backgroundColor: 'rgba(75,192,192,0.2)',
      borderColor: 'rgba(75,192,192,1)',
    },
  ],
};

export default function App() {
  const [gradient, setGradient] = React.useState<CanvasGradient | string>(
    'rgba(75,192,192,0.2)'
  );
  setTimeout(() => {
    let canvas = document.getElementById('chart') as HTMLCanvasElement;
    // const canvas: HTMLCanvasElement = document.getElementById('myChart');
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    // console.log(canvas.height);
    // setGradient(() => {
    //   let gradient = ctx.createLinearGradient(0, 0, 0, canvas.height - 200);
    //   gradient.addColorStop(0, 'rgba(75,192,192,0.2)');
    //   gradient.addColorStop(0.5, 'rgba(75,192,192,0.2)');
    //   gradient.addColorStop(1, 'rgba(75,192,192,0.05)');
    //   return gradient;
    // });
  }, 0);

  return (
    <div>
      <Line
        data={{
          labels: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
          ],
          datasets: [
            {
              data: [33, 53, 85, 41, 44, 65, 34, 21, 90, 56, 78, 90],
              fill: true,
              tension: 0.6,

              backgroundColor: gradient,
              borderColor: 'rgba(75,192,192,1)',
            },
          ],
        }}
        options={{
          layout: {},
          plugins: {
            legend: {
              display: false,
            },
          },
        }}
        id="chart"
      />
    </div>
  );
}
