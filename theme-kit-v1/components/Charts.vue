<template>
  <section id="charts" class="mf-charts wrapper">

    <div class="inner-wrapper">
      <h2>Charts</h2>

      <div class="charts-container">
        <div class="linechart-box">
          <canvas id="lineChart"></canvas>
        </div>

        <div class="barchart-box">
          <canvas id="barChart"></canvas>
        </div>
      </div>

    </div>
  </section>



</template>
<script>
import Chart from 'chart.js/auto';

export default {
  name: 'Charts',

  data() {
    return {
      primaryColor: '#E6007E',
      secondaryColor: '#088B99'
    }
  },

  mounted() {
    const linectx = document.getElementById('lineChart');
    const barctx = document.getElementById('barChart');

    const lineChart = new Chart(linectx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: 'Dataset 1',
          data: [],
          // data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          data: [5, 4, 8, 3, 5, 2, 3, 4, 1, 6, 7, 9],
          borderWidth: 1,
          fill: false,
          borderColor: this.primaryColor,
          backgroundColor: this.primaryColor,
          tension: 0.4,
        },
        {
          label: 'Dataset 2',
          data: [],
          data: [7, 5, 3, 3, 1, 2, 6, 4, 3, 5, 4, 2],
          borderWidth: 1,
          fill: false,
          borderColor: this.secondaryColor,
          backgroundColor: this.secondaryColor,
          tension: 0.4,
        }]
      },
      options: {
        // maintainAspectRatio: false,
        elements: {
          point: {
            pointstyle: 'circle',
          }
        },
        plugins: {
          legend: {
            labels: {
              boxWidth: 10,
              boxHeight: 10,
              useBorderRadius: true,
              borderRadius: 10,
              usePointStyle: true,
              // pointStyleWidth: 12,
            }
          }
        },
        scales: {
          x: {
            border: {
              display: false
            },
            grid: {
              display: false,
              // drawTicks: false
            }
          },
          y: {
            beginAtZero: true,
            min: 0,
            max: 10,
            grid: {
              // drawTicks: false
            },
            ticks: {
              stepSize: 1,
            }
          }
        }
      }
    });

    const barChart = new Chart(barctx, {
      type: 'bar',
      data: {
        labels: ['Bar Chart'],
        datasets: [{
          label: 'Dataset 1',
          data: [5],
          borderWidth: 1,
          fill: false,
          borderColor: this.primaryColor,
          backgroundColor: this.primaryColor,
          barThickness: 20,
          maxBarThickness: 10,
          borderRadius: 10
        },
        {
          label: 'Dataset 2',
          data: [7],
          borderWidth: 1,
          fill: false,
          borderColor: this.secondaryColor,
          backgroundColor: this.secondaryColor,
          tension: 0.4,
          barThickness: 20,
          maxBarThickness: 10,
          borderRadius: 10
        }]
      },
      options: {
        elements: {
          point: {
            pointstyle: 'circle',
          }
        },
        plugins: {
          legend: {
            labels: {
              boxWidth: 10,
              boxHeight: 10,
              useBorderRadius: true,
              borderRadius: 10,
              usePointStyle: true,
              // pointStyleWidth: 12,
            }
          }
        },
        // indexAxis: 'y',
        indexAxis: 'x',
        scales: {
          x: {
            // min: 0,
            // max: 10,
            border: {
              // display: false
            },
            grid: {
              // drawTicks: false
            }
          },
          y: {
            min: 0,
            max: 10,
            beginAtZero: true,
            grid: {
              display: true,
              // drawTicks: false
            },
            ticks: {
              stepSize: 1,
            }
          }
        }
      }
    });

    lineChart;
    barChart;
  }
}
</script>
<style lang="scss" scoped>
.charts-container {
  display: grid;
  gap: 20px;

  @media (min-width: 768px) {
    grid-auto-flow: column;
    grid-template-columns: repeat(2, 1fr);
  }

  .linechart-box,
  .barchart-box {
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.16);
    padding: 10px;
    border-radius: 5px;
  }
}

.btn {
  background-color: var(--mid-grey);
  border-radius: var(--border-radius-small);
  border: none;
  padding: 1rem 2rem;
  font-size: 1rem;
  color: var(--dark-grey);
  outline: none;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    box-shadow: 0 0 10px var(--button-box-shadow-color);
  }
}

.btn-primary {
  background-color: var(--primary-color);
  color: var(--white);

  &:hover {
    background-color: var(--primary-color-hover);
  }
}
</style>

