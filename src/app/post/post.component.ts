import {Component, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-post',
  imports: [CommonModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {
  @Input() post: any = {};

  private maxShowTags = 3;
  public tags: any[] = [];
  private tagsCategory: { [key: string]: string } = {
    social: 'blue',
    health: 'purple',
    technology: 'rose',
    science: 'emerald',
    art: 'orange',
  };

  public nsfw: boolean = false;

  ngOnInit(): void {
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
}
