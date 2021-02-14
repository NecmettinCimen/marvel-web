import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(private httpClient: HttpClient) { }

  public async get(url: string) {
    try {
      var fullUrl = `${environment.baseUrl}${url}`
      console.log(fullUrl)
      var req = await this.httpClient.get(fullUrl).toPromise<any>()
      return req.data
    } catch (error) {
      console.log(error)
      return { results: [], error: true }
    }
    // sample reslt
    // "code": 200,
    // "status": "Ok",
    // "copyright": "© 2021 MARVEL",
    // "attributionText": "Data provided by Marvel. © 2021 MARVEL",
    // "attributionHTML": "<a href=\"http://marvel.com\">Data provided by Marvel. © 2021 MARVEL</a>",
    // "etag": "286cd21ce2807e744dd9339578ba1f66367d6514",
    // "data": ...
  }

}
