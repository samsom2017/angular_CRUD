


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from './item';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private baseUrl = 'http://localhost:3000/items';

  constructor(private _httpClient: HttpClient) {}

  getAllItem(): Observable<Item[]> {
    return this._httpClient.get<Item[]>(`${this.baseUrl}`);
  }

  create(data: Item): Observable<Item> {
    return this._httpClient.post<Item>(`${this.baseUrl}`, data);
  }

  getById(id: Number): Observable<Item> {
    return this._httpClient.get<Item>(`${this.baseUrl}/${id}`);
  }

  update(item: Item): Observable<Item> {
    return this._httpClient.put<Item>(`${this.baseUrl}/${item.id}`, item);
  }
  delete(id: Number): Observable<Item> {
    return this._httpClient.delete<Item>(`${this.baseUrl}/${id}`);
  }
  
}









/* import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  
  constructor(private _httpClient: HttpClient) {}

  getAllItem() {
    return this._httpClient.get<Item[]>("http://localhost:3000/items");
  }

  create(data: Item) {
    return this._httpClient.post("http://localhost:3000/items",data);
  }

  getById(id:Number) {
    return this._httpClient.get<Item>('http://localhost:3000/items/${id}');
  }
  update(data:Item) {
    return this._httpClient.put<Item>("http://localhost:3000/items/${data.id}",data);
  }

}
 */
