import {Component} from '@angular/core';
import {Topbar} from './component/topbar';
import {Sidebar} from './component/sidebar';
import { Footer } from "./component/footer";

@Component({
  selector: 'app-layout',
  imports: [Topbar, Sidebar, Footer],
  template: `
    <div class="antialiased bg-gray-50 dark:bg-gray-900">
      <app-topbar></app-topbar>
      <app-sidebar></app-sidebar>
      <main class="p-4 md:ml-64 h-auto pt-20">

        <div class="grid grid-cols-1 mb-4 border-2 rounded-4xl border-gray-300 dark:border-gray-600 h-32 p-4 items-center">
          <h2 class="">Mi numero</h2>
          <div class="flex gap-4">
            <h1 class="text-3xl">+591</h1>
            <h1 class="font-bold text-3xl">726**854</h1>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-4 mb-4">

          <!--Tarjeta Llamada-->
          <div class="flex flex-col justify-between p-4 border-2 rounded-4xl border-gray-300 dark:border-gray-600 h-48 md:h-72">

            <div class="flex flex-row justify-between items-center">
              <div>Llamada</div>
              <div>
                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"/>
                </svg>
              </div>
            </div>

            <div class="flex flex-row gap-2 items-center">
              <h1 class="font-bold text-3xl">23</h1>
              <h2 class="">minutos</h2>
            </div>

          </div>

          <!--Tarjeta Internet-->
          <div class="flex flex-col justify-between p-4 border-2 rounded-4xl border-gray-300 dark:border-gray-600 h-48 md:h-72">

            <div class="flex flex-row justify-between items-center">
              <div>Internet</div>
              <div>
                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M4.37 7.657c2.063.528 2.396 2.806 3.202 3.87 1.07 1.413 2.075 1.228 3.192 2.644 1.805 2.289 1.312 5.705 1.312 6.705M20 15h-1a4 4 0 0 0-4 4v1M8.587 3.992c0 .822.112 1.886 1.515 2.58 1.402.693 2.918.351 2.918 2.334 0 .276 0 2.008 1.972 2.008 2.026.031 2.026-1.678 2.026-2.008 0-.65.527-.9 1.177-.9H20M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                </svg>
              </div>
            </div>

            <div class="flex flex-row gap-2 items-center">
              <h1 class="font-bold text-3xl">6134</h1>
              <h2 class="">MB</h2>
            </div>

          </div>

          <!--Tarjeta Mensaje SMS-->
          <div class="flex flex-col justify-between p-4 border-2 rounded-4xl border-gray-300 dark:border-gray-600 h-48 md:h-72">

            <div class="flex flex-row justify-between items-center">
              <div>Mensaje</div>
              <div>
                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 10.5h.01m-4.01 0h.01M8 10.5h.01M5 5h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-6.6a1 1 0 0 0-.69.275l-2.866 2.723A.5.5 0 0 1 8 18.635V17a1 1 0 0 0-1-1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"/>
                </svg>
              </div>
            </div>

            <div class="flex flex-row gap-2 items-center">
              <h1 class="font-bold text-3xl">8</h1>
              <h2 class="">SMS</h2>
            </div>

          </div>

          <!--Tarjeta Credito Post-->
          <div class="flex flex-col justify-between p-4 border-2 rounded-4xl border-gray-300 dark:border-gray-600 h-48 md:h-72">

            <div class="flex flex-row justify-between items-center">
              <div>Credito Post</div>
              <div>
                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M6 14h2m3 0h5M3 7v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1Z"/>
                </svg>
              </div>
            </div>

            <div class="flex flex-row gap-2 items-center">
              <h1 class="font-bold text-3xl">150</h1>
              <h2 class="">Bs.</h2>
            </div>

          </div>

          <!--Tarjeta Credito Pre-->
          <div class="flex flex-col justify-between p-4 border-2 rounded-4xl border-gray-300 dark:border-gray-600 h-48 md:h-72">

            <div class="flex flex-row justify-between items-center">
              <div>Credito Pre</div>
              <div>
                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M6 14h2m3 0h5M3 7v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1Z"/>
                </svg>
              </div>
            </div>

            <div class="flex flex-row gap-2 items-center">
              <h1 class="font-bold text-3xl">0</h1>
              <h2 class="">Bs.</h2>
            </div>

          </div>

          <div class="border-2 border-dashed rounded-4xl border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>

        </div>

        <div class="rounded-4xl h-48 mb-4 md:h-72">
          <!--Carrusel-->
          <div id="default-carousel" class="relative w-full z-0" data-carousel="slide">
            <!--Imagenes de carrusel-->
            <div class="relative h-47 overflow-hidden rounded-4xl md:h-71">
              <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img src="/prop-1.png" class="absolute block h-full w-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
              </div>
              <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img src="/prop-2.png" class="absolute block h-full w-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
              </div>
              <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img src="/prop-3.png" class="absolute block h-full w-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
              </div>
            </div>

            <!--Indicadores de carrusel-->
            <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
              <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
              <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
              <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
            </div>

            <!--Botones de adelante/atras de carrusel-->
            <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
              <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                </svg>
                <span class="sr-only">Previous</span>
              </span>
            </button>
            <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
              <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                </svg>
                <span class="sr-only">Next</span>
              </span>
            </button>

          </div>
        </div>

        <div>
          <div class="grid grid-cols-1 mb-4 border-2 rounded-4xl border-gray-300 dark:border-gray-600 p-4 items-center">
            <h2 class="">💰 Compra de megas exitosa!</h2>
            <div class="flex gap-4">
              <h1 class="text-gray-600">Usted hizo la compra de megas diarias a 2Bs por 24 horas, Gracias por la compra!</h1>
            </div>
            <h2 class="text-sm text-gray-500">Hace 5min atras.</h2>
          </div>

          <div class="grid grid-cols-1 mb-4 border-2 rounded-4xl border-gray-300 dark:border-gray-600 p-4 items-center">
            <h2 class="">💰 Recarga de Crédito Exitosa</h2>
            <div class="flex gap-4">
              <h1 class="text-gray-600">Se realizó una recarga de **50 Bs.** a tu cuenta. Saldo actual: 75.50 Bs.</h1>
            </div>
            <h2 class="text-sm text-gray-500">Hace 15 min.</h2>
          </div>

          <div class="grid grid-cols-1 mb-4 border-2 rounded-4xl border-gray-300 dark:border-gray-600 p-4 items-center">
            <h2 class="">📡 Compra de Paquete Mensual</h2>
            <div class="flex gap-4">
              <h1 class="text-gray-600">Adquisición del paquete de **5GB por 30 días** a 50 Bs. ¡Disfruta!</h1>
            </div>
            <h2 class="text-sm text-gray-500">Hace 2 horas.</h2>
          </div>

          <div class="grid grid-cols-1 mb-4 border-2 rounded-4xl border-gray-300 dark:border-gray-600 p-4 items-center">
            <h2 class="">⚠️ Alerta de Consumo</h2>
            <div class="flex gap-4">
              <h1 class="text-gray-600">Has consumido el **80% de tus megas** del paquete diario. ¡Considera una nueva compra!</h1>
            </div>
            <h2 class="text-sm text-gray-500">Ayer a las 18:30.</h2>
          </div>

          <div class="grid grid-cols-1 mb-4 border-2 rounded-4xl border-gray-300 dark:border-gray-600 p-4 items-center">
            <h2 class="">⭐ Bono por Fidelidad</h2>
            <div class="flex gap-4">
              <h1 class="text-gray-600">¡Felicidades! Se te ha otorgado **500MB de regalo** por ser un cliente fiel.</h1>
            </div>
            <h2 class="text-sm text-gray-500">El 25 de octubre.</h2>
          </div>

        </div>



        <div class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-96 mb-4"></div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          <div class="border-2 border-dashed rounded-4xl border-gray-300 dark:border-gray-600 h-32 md:h-64"></div>
          <div class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-32 md:h-64"></div>
          <div class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-32 md:h-64"></div>
          <div class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-32 md:h-64"></div>
        </div>

        <div class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-96 mb-4"></div>

        <div class="grid grid-cols-2 gap-4">
          <div class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
          <div class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
          <div class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
          <div class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
        </div>

      </main>
      <app-footer></app-footer>
    </div>

    @if (isModalInfoActive) {
      <div class="flex justify-center items-center overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-black/50">
        <div class="relative p-4 w-full max-w-md max-h-full">
          <div class="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
            <div class="p-4 md:p-5 text-center">
              <svg class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
              </svg>
              <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                Estas seguro que deseas realizar esta operacion?
              </h3>
              <button data-modal-hide="popup-modal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
                Si, estoy seguro
              </button>
            </div>
          </div>
        </div>
      </div>
    }
    @if (isModalSuccesActive) {
      <div class="flex justify-center items-center overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-black/50">
        <div class="relative p-4 w-full max-w-md max-h-full">
          <div class="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
            <div class="p-4 md:p-5 text-center">
              <svg class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 22">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8.032 12 1.984 1.984 4.96-4.96m4.55 5.272.893-.893a1.984 1.984 0 0 0 0-2.806l-.893-.893a1.984 1.984 0 0 1-.581-1.403V7.04a1.984 1.984 0 0 0-1.984-1.984h-1.262a1.983 1.983 0 0 1-1.403-.581l-.893-.893a1.984 1.984 0 0 0-2.806 0l-.893.893a1.984 1.984 0 0 1-1.403.581H7.04A1.984 1.984 0 0 0 5.055 7.04v1.262c0 .527-.209 1.031-.581 1.403l-.893.893a1.984 1.984 0 0 0 0 2.806l.893.893c.372.372.581.876.581 1.403v1.262a1.984 1.984 0 0 0 1.984 1.984h1.262c.527 0 1.031.209 1.403.581l.893.893a1.984 1.984 0 0 0 2.806 0l.893-.893a1.985 1.985 0 0 1 1.403-.581h1.262a1.984 1.984 0 0 0 1.984-1.984V15.7c0-.527.209-1.031.581-1.403Z"/>
              </svg>
              <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                Felicidades, operacion exitosa!
              </h3>
              <button data-modal-hide="popup-modal" type="button" class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
                Excelente
              </button>
            </div>
          </div>
        </div>
      </div>
    }
    @if (isModalErrorActive) {
      <div class="flex justify-center items-center overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-black/50">
        <div class="relative p-4 w-full max-w-md max-h-full">
          <div class="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
            <div class="p-4 md:p-5 text-center">
              <svg class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 22">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 9-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
              </svg>
              <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                Ups, esta operacion no se pudo completar con exito.
              </h3>
              <button data-modal-hide="popup-modal" type="button" class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
                Cancelar operacion
              </button>
            </div>
          </div>
        </div>
      </div>
    }
  `,
})
export class Layout {
  isModalInfoActive: boolean = false;
  isModalSuccesActive: boolean = false;
  isModalErrorActive: boolean = false;
}
