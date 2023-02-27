import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lodger } from '../models/lodger';

@Injectable({
  providedIn: 'root',
})
export class LodgerService {
  //----------------------------------------------------------------------------------------
  // ATTRIBUTES
  //----------------------------------------------------------------------------------------
  static readonly REST_SERVER_LOCAL = 'http://localhost:3000/lodgers/';
  static readonly REST_PDF_LOCAL = 'http://localhost:3000/pdf/';
  //static readonly REST_SERVER_LOCAL = "https://site-cure-server.onrender.com//lodgers/"
  //static readonly REST_PDF_LOCAL = "https://site-cure-server.onrender.com/pdf/"

  //----------------------------------------------------------------------------------------
  // CONSTRUCTOR
  //----------------------------------------------------------------------------------------
  constructor(private http: HttpClient) {}

  //----------------------------------------------------------------------------------------
  // METHODS
  //----------------------------------------------------------------------------------------
  /**
   * Adds a lodger
   * @param lodger
   * @returns response of mongoDb database?
   */
  addLodger(lodger: Lodger) {
    return this.http.post<Lodger>(LodgerService.REST_SERVER_LOCAL, lodger);
  }

  /**
   * Gets a pdf file
   * @param id
   * @returns One pdf file
   */
  getPdf(id: any) {
    return this.http.get(LodgerService.REST_PDF_LOCAL + id, {
      responseType: 'blob',
    });
  }
}
