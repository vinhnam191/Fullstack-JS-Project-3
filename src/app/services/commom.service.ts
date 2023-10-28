import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from '../models';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(private readonly httpClient: HttpClient) {}

  getItemList = () => {
    return this.httpClient.get<Item[]>('../../assets/data.json');
  };
}
