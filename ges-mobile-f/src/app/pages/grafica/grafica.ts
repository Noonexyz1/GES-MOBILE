import {Component, ViewChild} from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexStroke,
  ApexTooltip,
  ApexXAxis,
  ApexYAxis,
  ApexFill,
  ApexGrid,
  ApexLegend,
  NgApexchartsModule
} from 'ng-apexcharts';

// Define la interfaz para las opciones del gráfico (opcional, pero buena práctica)
// Definición de las opciones (Tipado)
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  fill: ApexFill;
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
  grid: ApexGrid;
};

@Component({
  selector: 'app-grafica',
  imports: [NgApexchartsModule],
  templateUrl: './grafica.html'
})
export class Grafica {

  public chartOptions: Partial<ChartOptions>; // Usamos Partial para mayor flexibilidad

  constructor() {
    this.chartOptions = {
      // --- Series y Datos ---
      series: [
        {
          name: "Developer Edition",
          data: [150, 141, 145, 152, 135, 125, 0],
          color: "#db1aa4",
        },
        {
          name: "Designer Edition",
          data: [43, 13, 65, 12, 42, 73, 200],
          color: "#3b97f2",
        },
      ],
      // --- Configuración del Eje X ---
      xaxis: {
        categories: ['01 Feb', '02 Feb', '03 Feb', '04 Feb', '05 Feb', '06 Feb', '07 Feb'],
        labels: {
          show: true,
          style: {
            fontFamily: "Inter, sans-serif",
            cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
          }
        },
        axisBorder: { show: false },
        axisTicks: { show: false },
      },
      // --- Configuración del Eje Y ---
      yaxis: {
        show: true,
        labels: {
          show: true,
          style: {
            fontFamily: "Inter, sans-serif",
            cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
          },
          formatter: function (value) {
            return '$' + value;
          }
        }
      },
      // --- Configuración General del Gráfico ---
      chart: {
        sparkline: { enabled: false },
        height: 250, // Ajusta la altura
        width: "100%",
        type: "area",
        fontFamily: "Inter, sans-serif",
        dropShadow: { enabled: false },
        toolbar: { show: false },
      },
      // --- Otras Opciones ---
      tooltip: { enabled: true, x: { show: false } },
      fill: {
        type: "gradient",
        gradient: {
          opacityFrom: 0.55,
          opacityTo: 0,
          shade: "#1C64F2",
          gradientToColors: ["#1C64F2"],
        },
      },
      dataLabels: { enabled: false },
      stroke: { width: 6 },
      legend: { show: false },
      grid: { show: false },
    };
  }

}
