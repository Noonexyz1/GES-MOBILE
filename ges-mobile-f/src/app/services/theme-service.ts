import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private renderer: Renderer2;

  // Mantenemos la declaración, pero quitamos la inicialización
  private darkModeSubject!: BehaviorSubject<boolean>;

  // Inicialización de la propiedad isDarkMode$ se moverá al constructor
  public isDarkMode$!: Observable<boolean>;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);

    // 1. Intentar cargar el estado desde localStorage o usar el modo claro por defecto.
    const savedTheme = localStorage.getItem('theme');
    const isDark = savedTheme === 'dark';

    // 2. Primero, inicializamos la fuente (Subject)
    this.darkModeSubject = new BehaviorSubject<boolean>(isDark);

    // 3. ¡CORRECCIÓN! Ahora inicializamos el Observable, después de que el Subject exista.
    this.isDarkMode$ = this.darkModeSubject.asObservable(); // <-- ¡Línea movida!

    this.applyTheme(isDark); // Aplicar el tema inicial al cargar
  }

  // Los métodos applyTheme y toggleTheme se mantienen igual

  /**
   * Aplica la clase 'dark' al <body> del documento.
   * @param isDark - Indica si el modo oscuro está activo.
   */
  private applyTheme(isDark: boolean): void {
    const body = this.renderer.selectRootElement('body', true);
    if (isDark) {
      this.renderer.addClass(body, 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      this.renderer.removeClass(body, 'dark');
      localStorage.setItem('theme', 'light');
    }
    this.darkModeSubject.next(isDark);
  }

  /**
   * Cambia el tema al estado opuesto.
   */
  toggleTheme(): void {
    const newIsDark = !this.darkModeSubject.value;
    this.applyTheme(newIsDark);
  }
}
