import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpEventType,
  HttpParams,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { config } from '../config';
import { map } from 'rxjs/internal/operators/map';

export interface RequestFileCustom {
  body?: any;
  headers?: HttpHeaders | { [header: string]: string | Array<string> };
  observe?: any;
  params?: HttpParams | { [param: string]: string | Array<string> };
  reportProgress?: boolean;
  responseType?: any;
  withCredentials?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class NetworkService {
  private headers: any;
  /**
   * Constructor
   * @param HttpClient
   */
  constructor(private HttpClient: HttpClient) {
    this.headers = {
      headers: new HttpHeaders({
        Authorization: `Client-ID ${config.API_KEY}`,
      }),
      observe: 'response',
    };
  }

  /**
   * HTTP Request GET petition
   * @param endpoint {string} EP url
   * @returns Observable
   */
  get(endpoint: string): Observable<any> {
    return this.HttpClient.get(config.URL + endpoint, this.headers);
  }

  /**
   * HTTP Request POST petition
   * @param endpoint {string} EP url
   * @param data {any} request body
   * @returns
   */
  post(endpoint: string, data?: any): Observable<any> {
    return this.HttpClient.post(config.URL + endpoint, data, this.headers);
  }

  /**
   * HTTP Request PUT petition
   * @param endpoint {string} EP url
   * @param data {any} request body
   * @returns
   */
  put(endpoint: string, data?: any): Observable<any> {
    return this.HttpClient.put(config.URL + endpoint, data, this.headers);
  }

  /**
   * HTTP Request PATCH petition
   * @param endpoint {string} EP url
   * @param data {any} request body
   * @returns
   */
  patch(endpoint: string, data?: any): Observable<any> {
    return this.HttpClient.patch(config.URL + endpoint, data, this.headers);
  }

  /**
   * HTTP Request DELETE petition
   * @param endpoint {string} EP url
   * @returns
   */
  delete(endpoint: string): Observable<any> {
    return this.HttpClient.delete(config.URL + endpoint, this.headers);
  }

  /**
   * HTTP Request POST petition for FormData
   * @param endpoint {string} EP url
   * @param formdata {FormData} request body
   * @returns
   */
  file(endpoint: string, formdata: FormData): Observable<any> {
    const headers: RequestFileCustom = {
      headers: new HttpHeaders({
        Authorization: `Client-ID ${config.API_KEY}`,
      }),
      withCredentials: true,
      reportProgress: true,
      observe: 'events',
    };

    return this.HttpClient.post(
      config.URL + endpoint,
      formdata,
      this.headers
    ).pipe(
      map((event: any) => {
        switch (event.type) {
          case HttpEventType.UploadProgress:
            const progress = Math.round((100 * event.loaded) / event.total);
            return { status: 'progress', message: progress };

          case HttpEventType.Response:
            return event.body;

          default:
            return `Unhandled event: ${event.type}`;
        }
      })
    );
  }

  /**
   * HTTP Request GET petition for Blob files
   * @param endpoint {string} EP url
   * @returns Observable
   */
  getFile(endpoint: string): Observable<any> {
    const headers: RequestFileCustom = {
      headers: new HttpHeaders({
        Authorization: `Client-ID ${config.API_KEY}`,
      }),
      withCredentials: true,
      responseType: 'blob',
    };

    return this.HttpClient.get(config.URL + endpoint, this.headers);
  }

  /**
   * HTTP Request POST petition for FormData
   * @param endpoint {string} EP url
   * @param data {FormData} request body
   * @returns
   */
  postForm(endpoint: string, data?: any): Observable<any> {
    const headers = {
      headers: new HttpHeaders({
        // 'Content-Type': 'multipart/form-data',
        Authorization: `Client-ID ${config.API_KEY}`,
      }),
      withCredentials: true,
    };
    return this.HttpClient.post(config.URL + endpoint, data, this.headers);
  }

  /**
   * HTTP Request PUT petition for FormData
   * @param endpoint {string} EP url
   * @param data {FormData} request body
   * @returns
   */
  putForm(endpoint: string, data?: any): Observable<any> {
    const headers = {
      headers: new HttpHeaders({
        // 'Content-Type': 'multipart/form-data',
        Authorization: `Client-ID ${config.API_KEY}`,
      }),
      withCredentials: true,
    };

    return this.HttpClient.put(config.URL + endpoint, data, this.headers);
  }

  postAndGetBlob(endpoint: string, data?: any): Observable<any> {
    const headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Client-ID ${config.API_KEY}`,
      }),
      withCredentials: true,
      responseType: 'blob' as any,
    };

    return this.HttpClient.post(config.URL + endpoint, data, this.headers);
  }
}
