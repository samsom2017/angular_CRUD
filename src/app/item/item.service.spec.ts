import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from './item';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private _httpClient: HttpClient) {}

  getAllItem() {
    return this._httpClient.get<Item[]>("http://localhost:3000/items");
  }

  create(data: Item) {
    return this._httpClient.post("http://localhost:3000/items", data);
  }

  getById(id: Number) { // Corrected string interpolation for URL
    return this._httpClient.get<Item>(`http://localhost:3000/items/${id}`);
  }
}
