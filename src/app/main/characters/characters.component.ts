import { Router } from '@angular/router';
import { CharactersService } from './../../services/characters.service';
import { Component, OnInit } from '@angular/core';
import * as Rellax from 'rellax';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  data: any = []
  page: number = 0;
  nameStartsWith: string = "";
  focus;
  constructor(private charactersService: CharactersService,
    private router: Router) { }

  ngOnInit() {
    var rellaxHeader = new Rellax('.rellax-header');

    var body = document.getElementsByTagName('body')[0];
    body.classList.add('landing-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
    this.getData(0)
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('landing-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
  }

  async getData(page) {
    console.log(page)
    this.data = await this.charactersService.characters(page, this.nameStartsWith)
  }

  async search(event) {
    console.log(event.target.value)
    this.nameStartsWith = event.target.value
    await this.getData(0)
  }

  goDetail(item) {
    this.router.navigate(['characterdetail'], { queryParams: { item:JSON.stringify({
      id:item.id,
      name:item.name,
      description:item.description,
      image:item.thumbnail.path+"/standard_amazing."+item.thumbnail.extension,
      stories:item.stories.available,
      series:item.series.available,
      comics:item.comics.available,
      detailUrl:item.urls.find(f => f.type == 'detail').url,
    }) } })
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
