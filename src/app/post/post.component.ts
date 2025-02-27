import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ApiService} from '../services/api.service';

@Component({
  selector: 'app-post',
  imports: [CommonModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {
  @Input() post: any = {};
  @Output() auraUpdated = new EventEmitter<number>(); // Para enviar el cambio de aura al post-view que es el que hace refresh de los datos

  private maxShowTags = 3;
  public tags: any[] = [];
  private tagsCategory: { [key: string]: string } = {
    social: 'blue',
    health: 'purple',
    tech: 'rose',
    science: 'emerald',
    art: 'orange',
  };

  public nsfw: boolean = false;

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    console.log('POST ID de prueba', this.post.id)
    this.nsfw = this.post.is_adult === true;
    this.tags = this.post.tags ? this.post.tags.slice(0, this.maxShowTags) : [];
  }

  public getLabelColor(tagObject: { tag: string }) {
    const label = tagObject.tag.toLowerCase();
    const color = this.tagsCategory[label];
    return `${color}-label`;
  }

  public disableNSFW() {
    this.nsfw = false;
  }

  // de aqui para abajo
  getTimeDifference(): string | null {
    if (!this.post.creation_date) return null;

    const now = new Date();
    const created = new Date(this.post.creation_date);
    const diffMs = now.getTime() - created.getTime();
    const diffHours = diffMs / (1000 * 60 * 60);

    if (diffHours < 24) {
      const diffMinutes = Math.floor(diffMs / (1000 * 60));
      if (diffHours >= 1) {
        return `${Math.floor(diffHours)} hour${Math.floor(diffHours) !== 1 ? 's' : ''} ago`;
      } else {
        return `${diffMinutes} minute${diffMinutes !== 1 ? 's' : ''} ago`;
      }
    }
    return null;
  }


  //Actualiza el aura con la api para que luego el otro metodo updateAura lo carge en el front
  updateAura(action: string): void {
    if (action === 'sumar') {
      this.apiService.updateAura(this.post.id, 'sumar').subscribe(
        (response) => {
          if (response && response.post && typeof response.post.aura === 'number') {
            this.post.aura = response.post.aura;
            this.auraUpdated.emit(response.post.aura);
          }
        },
      );
    } else if (action === 'restar') {
      this.apiService.updateAura(this.post.id, 'restar').subscribe(
        (response) => {
          console.log('Response:', response);
          if (response && response.post && typeof response.post.aura === 'number') {
            this.post.aura = response.post.aura;
            this.auraUpdated.emit(response.post.aura);
          }
        }
      );
    }
  }



  toggleFollow(): void {
    this.post.on_community = this.post.on_community === "true" ? "false" : "true";
  }

}
