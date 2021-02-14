import { ComicsService } from './../../services/comics.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as Rellax from 'rellax';

@Component({
  selector: 'app-comic.detail',
  templateUrl: './comic.detail.component.html',
  styleUrls: ['./comic.detail.component.css']
})
export class ComicDetailComponent implements OnInit {
  item: any = null
  list: any = { results: [] }

  constructor(activatedRoute: ActivatedRoute,
    private comicsService: ComicsService,
    private router:Router) {
    activatedRoute.queryParams.subscribe(data => {
      console.log(data.item)
      this.item = JSON.parse(data.item)
      this.getDetail()
    })
  }

  ngOnInit() {
    var rellaxHeader = new Rellax('.rellax-header');

    var body = document.getElementsByTagName('body')[0];
    body.classList.add('profile-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');

  }
  ngOnDestroy() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('profile-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

  async getDetail() {
    this.list = await this.comicsService.comicsdetailcharacter(this.item.id)
    console.log(this.list)
  }

  goCharacter(item) {
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

}
