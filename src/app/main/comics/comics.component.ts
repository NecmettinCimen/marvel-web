import { Router } from '@angular/router';
import { ComicsService } from './../../services/comics.service';
import { Component, OnInit } from '@angular/core';
import * as Rellax from 'rellax';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {
  data: any = []
  page: number = 0;
  nameStartsWith: string = "";
  focus;
  constructor(private comicsService: ComicsService,
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
    this.data = await this.comicsService.comics(page, this.nameStartsWith)
  }

  async search(event) {
    console.log(event.target.value)
    this.nameStartsWith = event.target.value
    await this.getData(0)
  }

  goDetail(item) {
    this.router.navigate(['comicdetail'], { queryParams: { item:JSON.stringify({
      id:item.id,
      title:item.title,
      description:item.description,
      image:item.thumbnail.path+"/standard_amazing."+item.thumbnail.extension,
      pageCount:item.pageCount,
      detailUrl:item.urls.find(f => f.type == 'detail').url,
      creators:item.creators.items
    }) } })
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
