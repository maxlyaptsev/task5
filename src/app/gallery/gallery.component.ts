import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../gallery.service';
import { Gallery } from '../gallery/gallery'

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  gallery: Gallery[];
  title = 'Photo gallery';
  text = 'This is an example of a little gallery'

  constructor(private galleryService: GalleryService) { }

  getGallery() {
    this.gallery = this.galleryService.getData();
  }

  ngOnInit() {
    this.getGallery();
  }

}
