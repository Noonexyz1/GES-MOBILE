import { Component } from '@angular/core';

@Component({
  selector: 'app-paque-internet',
  imports: [],
  template: `
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">

      <div class="border-2 border-gray-300 rounded-4xl dark:border-gray-600 relative">
        <div class="flex flex-row gap-1 ml-8 absolute top-0 left-0">
          <h2 class="px-2 bg-green-500 text-white inline-block text-sm font-semibold rounded-b-lg">Nuevo!</h2>
        </div>

        <div class="flex pt-4 px-4 justify-between gap-1 items-center">
          <div class="flex flex-col gap-2">
            <h2 class="font-bold dark:text-white">1GB + WhatsApp</h2>
            <div class="flex flex-col">

              <div class="flex flex-row gap-2">
                <h2 class="text-sm text-gray-500 dark:text-gray-300 font-bold">Duracion:</h2>
                <h2 class="text-sm text-gray-500 dark:text-gray-300">5</h2>
                <h2 class="text-sm text-gray-500 dark:text-gray-300">Dias</h2>
              </div>
            </div>

          </div>

          <div class="flex flex-col">
            <div class="flex justify-between">
              <h2 class="text-sm text-gray-500 font-bold dark:text-gray-300">Precio:</h2>
              <div class="flex justify-end gap-1">
                <h2 class="text-sm text-gray-500 line-through dark:text-gray-300">10</h2>
                <h2 class="text-sm text-gray-500 line-through dark:text-gray-300">Bs.</h2>
              </div>
            </div>
            <div class="flex gap-1 justify-center">
              <div class="flex items-end">
                <h2 class="text-5xl text-gray-500 dark:text-gray-300">12</h2>
                <h2 class="text-sm text-gray-500 mb-2 dark:text-gray-300">Bs.</h2>
              </div>
            </div>
            <button type="button" class="self-end text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-4xl text-sm w-25 h-7 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              Comprar
            </button>
          </div>
        </div>

        <div class="flex flex-row gap-2 justify-center">
          <h2 class="text-xs text-gray-500 dark:text-gray-300">___</h2>
        </div>
      </div>

      <div class="border-2 border-gray-300 rounded-4xl dark:border-gray-600 relative">
        <div class="flex flex-row gap-1 ml-8 absolute top-0 left-0">
        </div>

        <div class="flex pt-4 px-4 justify-between gap-1 items-center">
          <div class="flex flex-col gap-2">
            <h2 class="font-bold dark:text-white">2GB + 10min Llamadas</h2>
            <div class="flex flex-col">
              <div class="flex flex-row gap-2">
                <h2 class="text-sm text-gray-500 dark:text-gray-300 font-bold">Duracion:</h2>
                <h2 class="text-sm text-gray-500 dark:text-gray-300">7</h2>
                <h2 class="text-sm text-gray-500 dark:text-gray-300">Dias</h2>
              </div>
            </div>
          </div>

          <div class="flex flex-col">
            <div class="flex justify-between">
              <h2 class="text-sm text-gray-500 font-bold dark:text-gray-300">Precio:</h2>
              <div class="flex justify-end gap-1">
                <h2 class="text-sm text-gray-500 line-through dark:text-gray-300">10</h2>
                <h2 class="text-sm text-gray-500 line-through dark:text-gray-300">Bs.</h2>
              </div>
            </div>
            <div class="flex gap-1 justify-center">
              <div class="flex items-end">
                <h2 class="text-5xl text-gray-500 dark:text-gray-300">18</h2>
                <h2 class="text-sm text-gray-500 mb-2 dark:text-gray-300">Bs.</h2>
              </div>
            </div>
            <button type="button" class="self-end text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-4xl text-sm w-25 h-7 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              Comprar
            </button>
          </div>
        </div>

        <div class="flex flex-row gap-2 justify-center">
          <h2 class="text-xs text-gray-500">___</h2>
        </div>
      </div>

      <div class="border-2 border-gray-300 rounded-4xl dark:border-gray-600 relative">
        <div class="flex flex-row gap-1 ml-8 absolute top-0 left-0">
        </div>

        <div class="flex pt-4 px-4 justify-between gap-1 items-center">
          <div class="flex flex-col gap-2">
            <h2 class="font-bold dark:text-white">3GB (Sin Límite)</h2>
            <div class="flex flex-col">
              <div class="flex flex-row gap-2">
                <h2 class="text-sm text-gray-500 dark:text-gray-300 font-bold">Duracion:</h2>
                <h2 class="text-sm text-gray-500 dark:text-gray-300">10</h2>
                <h2 class="text-sm text-gray-500 dark:text-gray-300">Dias</h2>
              </div>
            </div>
          </div>

          <div class="flex flex-col">
            <div class="flex justify-end gap-1">
            </div>
            <div class="flex gap-1 justify-center">
              <div class="flex items-end">
                <h2 class="text-5xl text-gray-500 dark:text-gray-300">25</h2>
                <h2 class="text-sm text-gray-500 mb-2 dark:text-gray-300">Bs.</h2>
              </div>
            </div>
            <button type="button" class="self-end text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-4xl text-sm w-25 h-7 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              Comprar
            </button>
          </div>
        </div>

        <div class="flex flex-row gap-2 justify-center">
          <h2 class="text-xs text-gray-500">___</h2>
        </div>
      </div>

      <div class="border-2 border-gray-300 rounded-4xl dark:border-gray-600 relative">
        <div class="flex flex-row gap-1 ml-8 absolute top-0 left-0">
          <h2 class="px-1 bg-green-500 text-white rounded-b-lg inline-block text-sm">Nuevo!</h2>
        </div>

        <div class="flex pt-4 px-4 justify-between gap-1 items-center">
          <div class="flex flex-col gap-2">
            <h2 class="font-bold dark:text-white">500MB + Redes Sociales</h2>
            <div class="flex flex-col">
              <div class="flex flex-row gap-2">
                <h2 class="text-sm text-gray-500 dark:text-gray-300 font-bold">Duracion:</h2>
                <h2 class="text-sm text-gray-500 dark:text-gray-300">1</h2>
                <h2 class="text-sm text-gray-500 dark:text-gray-300">Dia</h2>
              </div>
            </div>
          </div>

          <div class="flex flex-col">
            <div class="flex justify-between">
              <h2 class="text-sm text-gray-500 font-bold dark:text-gray-300">Precio:</h2>
              <div class="flex justify-end gap-1">
                <h2 class="text-sm text-gray-500 line-through dark:text-gray-300">10</h2>
                <h2 class="text-sm text-gray-500 line-through dark:text-gray-300">Bs.</h2>
              </div>
            </div>
            <div class="flex gap-1 justify-center">
              <div class="flex items-end">
                <h2 class="text-5xl text-gray-500 dark:text-gray-300">5</h2>
                <h2 class="text-sm text-gray-500 mb-2 dark:text-gray-300">Bs.</h2>
              </div>
            </div>
            <button type="button" class="self-end text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-4xl text-sm w-25 h-7 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              Comprar
            </button>
          </div>
        </div>

        <div class="flex flex-row gap-2 justify-center">
          <h2 class="text-xs text-gray-500">___</h2>
        </div>
      </div>

      <div class="border-2 border-gray-300 rounded-4xl dark:border-gray-600 relative">
        <div class="flex flex-row gap-1 ml-8 absolute top-0 left-0">
          <h2 class="px-1 bg-green-500 text-white rounded-b-lg inline-block text-sm">Nuevo</h2>
        </div>

        <div class="flex pt-4 px-4 justify-between gap-1 items-center">
          <div class="flex flex-col gap-2">
            <h2 class="font-bold dark:text-white">10GB Mensuales</h2>
            <div class="flex flex-col">
              <div class="flex flex-row gap-2">
                <h2 class="text-sm text-gray-500 dark:text-gray-300 font-bold">Duracion:</h2>
                <h2 class="text-sm text-gray-500 dark:text-gray-300">30</h2>
                <h2 class="text-sm text-gray-500 dark:text-gray-300">Dias</h2>
              </div>
            </div>
          </div>

          <div class="flex flex-col">
            <div class="flex justify-between">
              <h2 class="text-sm text-gray-500 font-bold dark:text-gray-300">Precio:</h2>
              <div class="flex justify-end gap-1">
                <h2 class="text-sm text-gray-500 line-through dark:text-gray-300">10</h2>
                <h2 class="text-sm text-gray-500 line-through dark:text-gray-300">Bs.</h2>
              </div>
            </div>
            <div class="flex gap-1 justify-center">
              <div class="flex items-end">
                <h2 class="text-5xl text-gray-500 dark:text-gray-300">99</h2>
                <h2 class="text-sm text-gray-500 mb-2 dark:text-gray-300">Bs.</h2>
              </div>
            </div>
            <button type="button" class="self-end text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-4xl text-sm w-25 h-7 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              Comprar
            </button>
          </div>
        </div>

        <div class="flex flex-row gap-2 justify-center">
          <h2 class="text-xs text-gray-500">___</h2>
        </div>
      </div>

      <div class="border-2 border-gray-300 rounded-4xl dark:border-gray-600 relative">
        <div class="flex flex-row gap-1 ml-8 absolute top-0 left-0">
        </div>

        <div class="flex pt-4 px-4 justify-between gap-1 items-center">
          <div class="flex flex-col gap-2">
            <h2 class="font-bold dark:text-white">1.5GB + 5 min Llamadas</h2>
            <div class="flex flex-col">
              <div class="flex flex-row gap-2">
                <h2 class="text-sm text-gray-500 dark:text-gray-300 font-bold">Duracion:</h2>
                <h2 class="text-sm text-gray-50 dark:text-gray-3000">3</h2>
                <h2 class="text-sm text-gray-500 dark:text-gray-300">Dias</h2>
              </div>
            </div>
          </div>

          <div class="flex flex-col">
            <div class="flex justify-between">
              <h2 class="text-sm text-gray-500 font-bold dark:text-gray-300">Precio:</h2>
              <div class="flex justify-end gap-1">
                <h2 class="text-sm text-gray-500 line-through dark:text-gray-300"></h2>
                <h2 class="text-sm text-gray-500 line-through dark:text-gray-300"></h2>
              </div>
            </div>
            <div class="flex gap-1 justify-center">
              <div class="flex items-end">
                <h2 class="text-5xl text-gray-500 dark:text-gray-300">10</h2>
                <h2 class="text-sm text-gray-500 mb-2 dark:text-gray-300">Bs.</h2>
              </div>
            </div>
            <button type="button" class="self-end text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-4xl text-sm w-25 h-7 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              Comprar
            </button>
          </div>
        </div>

        <div class="flex flex-row gap-2 justify-center">
          <h2 class="text-xs text-gray-500">___</h2>
        </div>
      </div>

    </div>
  `
})
export class PaqueInternet {

}
