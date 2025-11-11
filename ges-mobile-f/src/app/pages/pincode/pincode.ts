import { Component } from '@angular/core';

@Component({
  selector: 'app-pincode',
  imports: [],
  template: `
    <div class="antialiased bg-gray-50 dark:bg-gray-900 h-screen">
      <div class="flex flex-col items-center mx-auto pt-10">

        <!--Logo empresa-->
        <div class="mb-4">
          <div class="flex justify-center mb-1">
            <img
              src="logo-favicon.png"
              class="h-12 w-12"
              alt="empresa Logo"
            />
          </div>
          <div class="flex items-center">
            <span class="text-sky-500 text-3xl sm:text-2xl font-semibold whitespace-nowrap">entel</span>
            <span class="text-orange-400 text-3xl sm:text-2xl font-extrabold whitespace-nowrap">Mobile</span>
          </div>
        </div>

        <p id="helper-text-explanation" class="text-center mt-2 mb-2 text-sm text-gray-500 dark:text-gray-400">
          Ingrese su codigo PIN de seguridad.
        </p>

        <!--Caja de numeros-->
        <div class="flex space-x-2">
          <div>
            <label for="code-1" class="sr-only">First code</label>
            <input type="text" maxlength="1" data-focus-input-init data-focus-input-next="code-2" id="code-1" class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required />
          </div>
          <div>
            <label for="code-2" class="sr-only">Second code</label>
            <input type="text" maxlength="1" data-focus-input-init data-focus-input-prev="code-1" data-focus-input-next="code-3" id="code-2" class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required />
          </div>
          <div>
            <label for="code-3" class="sr-only">Third code</label>
            <input type="text" maxlength="1" data-focus-input-init data-focus-input-prev="code-2" data-focus-input-next="code-4" id="code-3" class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required />
          </div>
          <div>
            <label for="code-4" class="sr-only">Fourth code</label>
            <input type="text" maxlength="1" data-focus-input-init data-focus-input-prev="code-3" data-focus-input-next="code-5" id="code-4" class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required />
          </div>
        </div>

        <!--Teclas de numeros-->
        <div id="virtual-keypad" class="grid grid-cols-3 gap-3 w-64">
          <button data-key="1" class="key-button text-3xl font-bold p-4 text-gray-500 dark:text-gray-400">1</button>
          <button data-key="2" class="key-button text-3xl font-bold p-4 text-gray-500 dark:text-gray-400">2</button>
          <button data-key="3" class="key-button text-3xl font-bold p-4 text-gray-500 dark:text-gray-400">3</button>
          <button data-key="4" class="key-button text-3xl font-bold p-4 text-gray-500 dark:text-gray-400">4</button>
          <button data-key="5" class="key-button text-3xl font-bold p-4 text-gray-500 dark:text-gray-400">5</button>
          <button data-key="6" class="key-button text-3xl font-bold p-4 text-gray-500 dark:text-gray-400">6</button>
          <button data-key="7" class="key-button text-3xl font-bold p-4 text-gray-500 dark:text-gray-400">7</button>
          <button data-key="8" class="key-button text-3xl font-bold p-4 text-gray-500 dark:text-gray-400">8</button>
          <button data-key="9" class="key-button text-3xl font-bold p-4 text-gray-500 dark:text-gray-400">9</button>

          <button data-key="clear" class="key-button text-3xl font-bold p-4"></button>
          <button data-key="0" class="key-button text-3xl font-bold p-4 text-gray-500 dark:text-gray-400">0</button>
          <button data-key="delete" class="key-button text-3xl font-bold p-4 text-gray-500 dark:text-gray-400">⌫</button>
        </div>

        <a href="#" class="mt-8 text-sm text-blue-500 dark:text-gray-400 text-center underline hover:text-primary-600">
          Olvide mi PIN
        </a>

      </div>
    </div>
  `
})
export class Pincode {

}
