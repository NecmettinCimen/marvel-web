import { BaseService } from './base.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComicsService {

  constructor(private baseService: BaseService) { }

  public async comics(page: number, titleStartsWith: string) {
    return await this.baseService.get(`/comics?offset=${page * 20}&titleStartsWith=${(titleStartsWith || "")}`)
  }
  public async comicsdetailcharacter(id: string) {
    return await this.baseService.get(`/comics/${id}/characters`)
  }


}
