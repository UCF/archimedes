import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-image-results',
  templateUrl: './image-results.component.html',
  styleUrls: ['./image-results.component.scss']
})
export class ImageResultsComponent implements OnInit, OnChanges {
  @Input() query!: string;

  imageItems?: any[]

  constructor(
    private imageService: ImagesService
  ) {}

  ngOnInit(): void {
      this.getImages();
  }

  ngOnChanges(changes: SimpleChanges): void {
      this.getImages();
  }

  getImages(): void {
    this.imageService.getImages(this.query).subscribe((results) => {
      this.imageItems = results.assets;
    });
  }
}
