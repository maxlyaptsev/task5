import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../gallery.service';
import { Gallery } from '../gallery/gallery'

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  gallery: Gallery[] = [];
  title = 'Photo gallery';
  text = 'This is an example of a little gallery'
  limit = 9
  offset = 0
  pageSize = 9

  constructor(private galleryService: GalleryService) { }

  getGallery() {
    this.galleryService.getData(this.limit, this.offset).subscribe(data => {
      this.gallery = this.gallery.concat(data);
      this.offset = this.offset + this.limit
    });

    console.log('gallery', this.gallery);
  }

  

  ngOnInit() {
    this.getGallery();
  }

}
