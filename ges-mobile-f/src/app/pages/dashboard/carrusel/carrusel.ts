import { Component } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  imports: [],
  template: `
    <!--Carrusel-->
    <div class="relative w-full z-0 overflow-hidden rounded-4xl">

      <div class="relative h-47 rounded-4xl md:h-71">

        <div class="flex duration-700 ease-in-out transition-transform h-full"
             [style.width.%]="slides.length * 100"
             [style.transform]="'translateX(-' + (currentIndex * (100 / slides.length)) + '%)'">

          @for (slide of slides; track slide.src; let i = $index) {
            <div [style.width.%]="100 / slides.length" class="h-full flex-shrink-0">
              <img [src]="slide.src" [alt]="slide.alt"
                   class="block h-full w-full object-cover"
              >
            </div>
          }
        </div>

      </div>

      <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        @for (slide of slides; track slide.src; let i = $index) {
          <button (click)="goToSlide(i)"
                  type="button"
                  [class.bg-blue-600]="i === currentIndex"
                  [class.bg-gray-400]="i !== currentIndex"
                  class="w-3 h-3 rounded-full"
                  [attr.aria-current]="i === currentIndex ? 'true' : 'false'"
                  [attr.aria-label]="'Slide ' + (i + 1)">
          </button>
        }
      </div>

      <button type="button"
              (click)="prevSlide()"
              class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
        <span
          class="inline-flex items-center justify-center w-10 h-10 rounded-full
                   bg-gray-800/60 dark:bg-gray-800/60 group-hover:bg-gray-900/80 dark:group-hover:bg-gray-700/80
                   group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-white rtl:rotate-180" aria-hidden="true"
                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M5 1 1 5l4 4"/>
            </svg>
            <span class="sr-only">Previous</span>
        </span>
      </button>
      <button type="button"
              (click)="nextSlide()"
              class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
        <span
          class="inline-flex items-center justify-center w-10 h-10 rounded-full
                   bg-gray-800/60 dark:bg-gray-800/60 group-hover:bg-gray-900/80 dark:group-hover:bg-gray-700/80
                   group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-white rtl:rotate-180" aria-hidden="true"
                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m1 9 4-4-4-4"/>
            </svg>
            <span class="sr-only">Next</span>
        </span>
      </button>

    </div>
  `
})
export class Carrusel {
  slides = [
    { src: '/carrusel/prop-1.png', alt: 'Propaganda 1' },
    { src: '/carrusel/prop-2.png', alt: 'Propaganda 2' },
    { src: '/carrusel/prop-3.png', alt: 'Propaganda 3' }
  ];

  currentIndex: number = 0;
  private intervalId: any;
  private readonly INTERVAL_TIME = 5000; // 5 segundos

  ngOnInit(): void {
    // 1. Iniciar la transición automática al cargar el componente
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    // 2. Limpiar el temporizador al destruir el componente para evitar fugas de memoria
    this.stopAutoSlide();
  }

  startAutoSlide(): void {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, this.INTERVAL_TIME);
  }

  stopAutoSlide(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  prevSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
    // Opcional: Reiniciar el temporizador al cambiar manualmente
    this.stopAutoSlide();
    this.startAutoSlide();
  }
}
