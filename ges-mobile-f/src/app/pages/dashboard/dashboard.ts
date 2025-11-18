import { Component } from '@angular/core';
import {Carrusel} from './carrusel/carrusel';

@Component({
  selector: 'app-dashboard',
  imports: [
    Carrusel
  ],
  template: `
    <div class="grid grid-cols-1 mb-4 border-2 rounded-4xl border-gray-300 dark:border-gray-600 h-32 p-4 items-center">
      <h2 class="dark:dark:text-white">Mi numero</h2>
      <div class="flex gap-4">
        <h1 class="text-3xl dark:dark:text-white">+591</h1>
        <h1 class="font-bold text-3xl dark:dark:text-white">726**854</h1>
      </div>
    </div>

    <div class="rounded-4xl h-48 mb-4 md:h-72">
      <app-carrusel></app-carrusel>
    </div>

    @if (isMessageSystemAlert) {
      <div class="grid grid-cols-1 mb-4 border-2 rounded-4xl border-orange-300 bg-orange-100 p-4 items-center">
        <h2 class="font-bold">⚠️ Alerta de Mantenimiento</h2>
        <h1 class="text-gray-600">
          El servicio de Transferencia de credito a un amigo queda en mantenimiento, este servicio se reanudara tan pronto como sea posible. Gracias por su comprension.
        </h1>
      </div>
    }

    <div class="grid grid-cols-2 gap-4 mb-4">

      <!--Tarjeta Llamada-->
      <div class="flex flex-col justify-between p-4 border-2 rounded-4xl border-gray-300 dark:border-gray-600 h-48 md:h-72">

        <div class="flex flex-row justify-between items-center">
          <div class="dark:dark:text-white">Llamada</div>
          <div>
            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"/>
            </svg>
          </div>
        </div>

        <div class="flex flex-row gap-2 items-center">
          <h1 class="font-bold text-3xl dark:dark:text-white">23</h1>
          <h2 class="dark:dark:text-white">minutos</h2>
        </div>

      </div>

      <!--Tarjeta Internet-->
      <div class="flex flex-col justify-between p-4 border-2 rounded-4xl border-gray-300 dark:border-gray-600 h-48 md:h-72">

        <div class="flex flex-row justify-between items-center">
          <div class="dark:text-white">Internet</div>
          <div>
            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M4.37 7.657c2.063.528 2.396 2.806 3.202 3.87 1.07 1.413 2.075 1.228 3.192 2.644 1.805 2.289 1.312 5.705 1.312 6.705M20 15h-1a4 4 0 0 0-4 4v1M8.587 3.992c0 .822.112 1.886 1.515 2.58 1.402.693 2.918.351 2.918 2.334 0 .276 0 2.008 1.972 2.008 2.026.031 2.026-1.678 2.026-2.008 0-.65.527-.9 1.177-.9H20M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
            </svg>
          </div>
        </div>

        <div class="flex flex-row gap-2 items-center">
          <h1 class="font-bold text-3xl dark:dark:text-white">6134</h1>
          <h2 class="dark:dark:text-white">MB</h2>
        </div>

      </div>

      <!--Tarjeta Mensaje SMS-->
      <div class="flex flex-col justify-between p-4 border-2 rounded-4xl border-gray-300 dark:border-gray-600 h-48 md:h-72">

        <div class="flex flex-row justify-between items-center">
          <div class="dark:dark:text-white">Mensaje</div>
          <div>
            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 10.5h.01m-4.01 0h.01M8 10.5h.01M5 5h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-6.6a1 1 0 0 0-.69.275l-2.866 2.723A.5.5 0 0 1 8 18.635V17a1 1 0 0 0-1-1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"/>
            </svg>
          </div>
        </div>

        <div class="flex flex-row gap-2 items-center">
          <h1 class="font-bold text-3xl dark:dark:text-white">8</h1>
          <h2 class="dark:dark:text-white">SMS</h2>
        </div>

      </div>

      <!--Tarjeta Credito Post-->
      <div class="flex flex-col justify-between p-4 border-2 rounded-4xl border-gray-300 dark:border-gray-600 h-48 md:h-72">

        <div class="flex flex-row justify-between items-center">
          <div class="dark:dark:text-white">Credito Post</div>
          <div>
            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M6 14h2m3 0h5M3 7v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1Z"/>
            </svg>
          </div>
        </div>

        <div class="flex flex-row gap-2 items-center">
          <h1 class="font-bold text-3xl dark:dark:text-white">150</h1>
          <h2 class="dark:dark:text-white">Bs.</h2>
        </div>

      </div>

      <!--Tarjeta Credito Pre-->
      <div class="flex flex-col justify-between p-4 border-2 rounded-4xl border-gray-300 dark:border-gray-600 h-48 md:h-72">

        <div class="flex flex-row justify-between items-center">
          <div class="dark:dark:text-white">Credito Pre</div>
          <div>
            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M6 14h2m3 0h5M3 7v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1Z"/>
            </svg>
          </div>
        </div>

        <div class="flex flex-row gap-2 items-center">
          <h1 class="font-bold text-3xl dark:dark:text-white">0</h1>
          <h2 class="dark:dark:text-white">Bs.</h2>
        </div>

      </div>

      <div class="border-2 border-dashed rounded-4xl border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>

    </div>



    <div>
      <div class="grid grid-cols-1 mb-4 border-2 rounded-4xl border-gray-300 dark:border-gray-600 p-4 items-center">
        <h2 class="dark:dark:text-white">💰 Compra de megas exitosa!</h2>
        <div class="flex gap-4">
          <h1 class="text-gray-600 dark:text-gray-300">Usted hizo la compra de megas diarias a 2Bs por 24 horas, Gracias por la compra!</h1>
        </div>
        <h2 class="text-sm text-gray-500 dark:text-gray-400">Hace 5min atras.</h2>
      </div>

      <div class="grid grid-cols-1 mb-4 border-2 rounded-4xl border-gray-300 dark:border-gray-600 p-4 items-center">
        <h2 class="dark:dark:text-white">💰 Recarga de Crédito Exitosa</h2>
        <div class="flex gap-4">
          <h1 class="text-gray-600 dark:text-gray-300">Se realizó una recarga de **50 Bs.** a tu cuenta. Saldo actual: 75.50 Bs.</h1>
        </div>
        <h2 class="text-sm text-gray-500 dark:text-gray-400">Hace 15 min.</h2>
      </div>

      <div class="grid grid-cols-1 mb-4 border-2 rounded-4xl border-gray-300 dark:border-gray-600 p-4 items-center">
        <h2 class="dark:dark:text-white">📡 Compra de Paquete Mensual</h2>
        <div class="flex gap-4">
          <h1 class="text-gray-600 dark:text-gray-300">Adquisición del paquete de **5GB por 30 días** a 50 Bs. ¡Disfruta!</h1>
        </div>
        <h2 class="text-sm text-gray-500 dark:text-gray-400">Hace 2 horas.</h2>
      </div>

      <div class="grid grid-cols-1 mb-4 border-2 rounded-4xl border-gray-300 dark:border-gray-600 p-4 items-center">
        <h2 class="dark:dark:text-white">⚠️ Alerta de Consumo</h2>
        <div class="flex gap-4">
          <h1 class="text-gray-600 dark:text-gray-300">Has consumido el **80% de tus megas** del paquete diario. ¡Considera una nueva compra!</h1>
        </div>
        <h2 class="text-sm text-gray-500 dark:text-gray-400">Ayer a las 18:30.</h2>
      </div>

      <div class="grid grid-cols-1 mb-4 border-2 rounded-4xl border-gray-300 dark:border-gray-600 p-4 items-center">
        <h2 class="dark:dark:text-white">⭐ Bono por Fidelidad</h2>
        <div class="flex gap-4">
          <h1 class="text-gray-600 dark:text-gray-300">¡Felicidades! Se te ha otorgado **500MB de regalo** por ser un cliente fiel.</h1>
        </div>
        <h2 class="text-sm text-gray-500 dark:text-gray-400">El 25 de octubre.</h2>
      </div>

    </div>
  `
})
export class Dashboard {
  isMessageSystemAlert: boolean = true;
}
