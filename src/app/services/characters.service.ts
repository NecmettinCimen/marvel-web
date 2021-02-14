import { BaseService } from './base.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private baseService: BaseService) { }

  public async characters(page: number, nameStartsWith: string) {
    return await this.baseService.get(`/characters?offset=${page * 20}&nameStartsWith=${(nameStartsWith || "")}`)
  }
  public async characterdetailcomics(id: number) {
    return await this.baseService.get(`/characters/${id}/comics`)
  }
}
