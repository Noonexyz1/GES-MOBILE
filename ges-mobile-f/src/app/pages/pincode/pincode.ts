import { Component } from '@angular/core';

@Component({
  selector: 'app-pincode',
  imports: [],
  template: `
    <form class="flex flex-col items-center p-4 max-w-sm mx-auto mt-10">

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

      <p id="helper-text-explanation" class="text-center mt-2 mb-2 text-sm text-gray-500 dark:text-gray-400">
        Porfavor, ingrese su codigo PIN de seguridad.
      </p>

      <button type="button" class="w-full max-w-[200px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
        Ingresar
      </button>

      <a href="#" class="mt-2 text-sm text-gray-500 dark:text-gray-400 text-center underline hover:text-primary-600">
        Olvide mi PIN
      </a>

    </form>
  `
})
export class Pincode {

}
