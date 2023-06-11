import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CryptologicServiceService {
  private isDarkMode = false;

  constructor() { }

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      this.enableDarkMode();
    } else {
      this.disableDarkMode();
    }
  }

  private enableDarkMode(): void {
    // Dodaj kod, który włączy tryb ciemny
    // Na przykład, można dodać odpowiednie klasy do elementu body:
    document.body.classList.add('dark-mode');
  }

  private disableDarkMode(): void {
    // Dodaj kod, który wyłączy tryb ciemny
    // Na przykład, można usunąć odpowiednie klasy z elementu body:
    document.body.classList.remove('dark-mode');
  }
}
