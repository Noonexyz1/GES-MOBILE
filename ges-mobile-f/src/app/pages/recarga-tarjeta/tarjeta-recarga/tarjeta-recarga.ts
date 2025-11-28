import { Component } from '@angular/core';

@Component({
  selector: 'app-tarjeta-recarga',
  imports: [],
  template: `
    <div class="flex flex-col mb-4 bg-linear-to-t/decreasing from-indigo-300 to-cyan-400 rounded-xl gap-1 p-1">
      <div class="flex flex-row gap-7 justify-between">
        <div>
          <h2 class="font-bold text-white text-[12px]">EMPRESA NACIONAL DE </h2>
          <h2 class="font-bold text-white text-[12px]">TELECOMUNICACIONES S.A.</h2>
        </div>
        <div class="flex flex-col justify-center border-2 rounded-xl p-1 border-gray-200">
          <h2 class="text-white text-[10px]">NIT:</h2>
          <h2 class="text-white text-[10px]">NRO.FACTURA</h2>
        </div>
      </div>

      <h2 class="self-center font-bold text-white">FACTURA</h2>



      <div class="flex justify-between">
        <div>
          <div class="h-2 bg-gray-200 rounded-full w-[100px] mb-2.5"></div>
          <div class="h-2 bg-gray-200 rounded-full w-[150px] mb-2.5"></div>
          <div class="h-2 bg-gray-200 rounded-full w-[150px] mb-2.5"></div>
        </div>
        <div class="w-13 mx-8">
          <img src="logo-favicon.png" alt="empresa Logo"/>
        </div>
      </div>

      <form class="flex flex-row max-w-sm mx-auto gap-2">
        <input
          type="number"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"
          placeholder="ingrese su codigo"
        />

        <button
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-xl text-lg h-11 px-4 w-auto focus:outline-none">
          Recargar
        </button>
      </form>

    </div>
  `
})
export class TarjetaRecarga {

}
