import { Component } from '@angular/core';

@Component({
  selector: 'app-tarjeta-recarga',
  imports: [],
  template: `
    <div class="flex flex-col mb-4 border-2 rounded-xl gap-1 p-1 border-gray-300 dark:border-gray-600">

      <div class="flex flex-row gap-7 justify-between">
        <div>
          <h2 class="dark:text-white text-sm">EMPRESA NACIONAL DE </h2>
          <h2 class="dark:text-white text-sm">TELECOMUNICACIONES S.A.</h2>
        </div>
        <div class="flex flex-col justify-center border-2 rounded-xl p-1 border-gray-300 dark:border-gray-600">
          <h2 class="dark:text-white text-sm">NIT:</h2>
          <h2 class="dark:text-white text-sm">NRO.FACTURA</h2>
        </div>
      </div>

      <h2 class="dark:text-white">FACTURA</h2>

      <div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5"></div>
      </div>

      <form class="flex flex-row max-w-sm mx-auto gap-2">
        <input
          type="number"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="ingrese su codigo"
        />

        <button
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-xl text-lg h-11 px-4 w-auto dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          Recargar
        </button>
      </form>

    </div>
  `
})
export class TarjetaRecarga {

}
