import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private readonly api = 'http://localhost:3333/search';
  constructor(private HttpClient: HttpClient) { }

  public get (query: string) {
    return this.HttpClient.get(this.api, { params: { query } });
  }
}
