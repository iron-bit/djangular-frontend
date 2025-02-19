import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-dock-izq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dock-izq.component.html',
  styleUrl: './dock-izq.component.css',
})
export class DockIzqComponent {
  @Output() tagSeleccionado = new EventEmitter<String>();

  dock_izq = {
    tags: [
      { tag: 'all', icon: 'assets/all2.png' },
      { tag: 'social', icon: 'assets/social.svg' },
      { tag: 'health', icon: 'assets/health.svg' },
      { tag: 'technology', icon: 'assets/technology.svg' },
      { tag: 'art', icon: 'assets/art.svg' },
      { tag: 'science', icon: 'assets/science.svg' },
    ],
  };

  seleccionarTag(tag: String) {
    this.tagSeleccionado.emit(tag);
  }
}
