import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMenuOpen = false;    // Controla si el menú está abierto o cerrado
  isDropdownOpen = false; // Controla si el dropdown está abierto o cerrado

  // Método para alternar la visibilidad del menú
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Método para alternar la visibilidad del menú desplegable
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  

}
