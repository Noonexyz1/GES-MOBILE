import { Component } from '@angular/core';

@Component({
  selector: 'app-promocion',
  imports: [],
  template: `
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">

      <div class="border-2 border-gray-300 rounded-4xl dark:border-gray-600">
        <div class="flex flex-row gap-1 ml-8">
          <h2 class="px-1 bg-green-500 text-white rounded-b-lg inline-block text-sm">Nuevo!</h2>
          <h2 class="px-1 bg-yellow-500 text-white rounded-b-lg inline-block text-sm">Popular</h2>
          <h2 class="px-1 bg-sky-500 text-white rounded-b-lg inline-block text-sm">Sugerencia</h2>
        </div>

        <div class="flex pt-4 px-4 justify-between gap-1">
          <div class="flex flex-col gap-2">
            <h2 class="font-bold">12Min de llamada + 100MB</h2>
            <div class="flex flex-col">

              <div class="flex flex-row gap-2">
                <h2 class="text-sm text-gray-500 font-bold">Duracion:</h2>
                <h2 class="text-sm text-gray-500">5</h2>
                <h2 class="text-sm text-gray-500">Dias</h2>
              </div>
            </div>

          </div>

          <div class="flex flex-col">
            <div class="flex justify-end gap-1">
              <h2 class="text-sm text-gray-500 font-bold">Precio:</h2>
              <h2 class="text-sm text-gray-500 line-through">15</h2>
              <h2 class="text-sm text-gray-500 line-through">Bs.</h2>
            </div>
            <div class="flex gap-1 justify-center">
              <div class="flex items-end">
                <h2 class="text-5xl text-gray-500">5</h2>
                <h2 class="text-sm text-gray-500 mb-2">Bs.</h2>
              </div>
            </div>
            <button type="button" class="self-end text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-4xl text-sm w-25 h-7 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              Comprar
            </button>
          </div>
        </div>

        <div class="flex flex-row gap-2 justify-center">
          <h2 class="text-sm text-gray-500">Esta promo vence en:</h2>
          <h2 class="text-sm text-gray-500">4 Dias</h2>
        </div>
      </div>

    </div>
  `
})
export class Promocion {

}
