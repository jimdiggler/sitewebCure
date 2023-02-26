import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flat } from '../models/flat';

@Injectable({
  providedIn: 'root',
})
export class FlatService {
  //----------------------------------------------------------------------------------------
  // ATTRIBUTES
  //----------------------------------------------------------------------------------------
  static readonly REST_SERVER_LOCAL = 'http://localhost:3000/flats/';
  //static readonly REST_SERVER_LOCAL = "https://site-cure-server.herokuapp.com/flats/"

  //----------------------------------------------------------------------------------------
  // CONSTRUCTOR
  //----------------------------------------------------------------------------------------
  constructor(private http: HttpClient) {}

  //----------------------------------------------------------------------------------------
  // METHODS
  //----------------------------------------------------------------------------------------
  /**
   * Gets all flats
   * @returns List of flat
   */
  getFlats(): Observable<Flat[]> {
    return this.http.get<Flat[]>(FlatService.REST_SERVER_LOCAL);
  }

  /**
   * Gets a flat by id
   * @param id
   * @returns One flat
   */
  getFlat(id: string | number) {
    return this.http.get<Flat>(FlatService.REST_SERVER_LOCAL + id);
  }
}
