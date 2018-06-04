import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gallery } from './gallery/gallery';



@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  private galleryUrl = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private http: HttpClient) { }

  getData(limit: number, offset: number) {
    const url = `${this.galleryUrl}/?_start=${offset}&_limit=${limit}`;
    return this.http.get<Gallery[]>(url)
  }
}
