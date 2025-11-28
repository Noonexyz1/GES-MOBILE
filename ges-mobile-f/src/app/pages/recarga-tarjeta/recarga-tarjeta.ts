import { Component } from '@angular/core';
import {TarjetaRecarga} from './tarjeta-recarga/tarjeta-recarga';

@Component({
  selector: 'app-recarga-tarjeta',
  imports: [
    TarjetaRecarga
  ],
  template: `
    <div class="grid grid-cols-1">
      <div class="flex flex-col mb-4 border-2 rounded-4xl gap-3 p-4 border-gray-300 dark:border-gray-600">
        <div>
          <h2 class="dark:text-white font-bold">¡DUPLICA TU SALDO PREPAGO!💸</h2>
          <div class="flex flex-col">
            <h1 class="text-gray-600 dark:text-gray-300">
              ⚡ Todas las recargas que hagas se duplicarán hasta <span class="font-bold">medianoche</span>. ¡Es 2x1 en tu saldo!
            </h1>
          </div>
          <h2 class="text-sm text-gray-500 dark:text-gray-400">🗓️ Las promociones no terminan! Disfruta de doble carga cada mes.</h2>
        </div>
        <button
          type="button"
          class="self-center text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-4xl text-sm w-50 h-7 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800">
          Activar Doble Carga!!
        </button>
      </div>

      <div class="flex flex-col mb-4 border-2 rounded-4xl gap-3 p-4 border-gray-300 dark:border-gray-600">
        <div>
          <h2 class="dark:text-white font-bold">🚀¡DOBLE CARGA ACTIVADA!🚀</h2>
          <div class="flex flex-col">
            <h1 class="text-gray-600 dark:text-gray-300">
              <span class="font-bold">¡ACTÚA RÁPIDO!</span> 🚨 Todas las recargas que hagas desde este momento hasta la <span class="font-bold">medianoche</span> se duplicarán. ¡Es 2x1 en tu saldo! ¡No dejes pasar esta carga extra!
            </h1>
          </div>
          <h2 class="text-sm text-gray-500 dark:text-gray-400">🗓️ Las promociones no terminan! Disfruta de doble carga cada mes.</h2>
        </div>
      </div>

      <div class="flex flex-col mb-4 border-2 rounded-4xl gap-3 p-4 border-gray-300 dark:border-gray-600">
        <div>
          <h2 class="dark:text-white font-bold">¡DOBLE CARGA USADA!⏳</h2>
          <div class="flex flex-col">
            <h1 class="text-gray-600 dark:text-gray-300">
              Vuelve el próximo mes.
            </h1>
          </div>
          <h2 class="text-sm text-gray-500 dark:text-gray-400">🗓️ Las promociones no terminan! Disfruta de doble carga cada mes.</h2>
        </div>
      </div>

      <div class="grid grid-cols-1 mb-4 border-2 rounded-4xl border-orange-300 bg-orange-100 p-4 items-center">
        <h2 class="font-bold">⚠️ Advertencia de Seguridad</h2>
        <h1 class="text-gray-600">
          ¡Nunca compartas tu PIN, código de recarga o datos de tu tarjeta! Protégete de fraudes.
        </h1>
      </div>

      <app-tarjeta-recarga></app-tarjeta-recarga>

    </div>
  `
})
export class RecargaTarjeta {

}
