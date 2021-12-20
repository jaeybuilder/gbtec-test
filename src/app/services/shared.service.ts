import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NetworkService } from './network-service.service';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  /**
   * Constructor
   * @param networkService
   */
  constructor(private networkService: NetworkService) {}

  /**
   * Get list of images by page and a search query
   * @param currentPage
   * @param searchParam
   * @returns
   */
  getPhotosByParam(currentPage: number, searchParam: string): Observable<any> {
    return this.networkService.get(
      `search/photos?page=${currentPage}&query=${searchParam}`
    );
  }
}
