import { CharactersComponent } from './main/characters/characters.component';
import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComicsComponent } from './main/comics/comics.component';
import { CharacterDetailComponent } from './main/character.detail/character.detail.component';
import { ComicDetailComponent } from './main/comic.detail/comic.detail.component';

const routes: Routes =[
    { path: '', redirectTo: 'characters', pathMatch: 'full' },
    { path: 'characters',     component: CharactersComponent },
    { path: 'comics',     component: ComicsComponent },
    { path: 'characterdetail',     component: CharacterDetailComponent },
    { path: 'comicdetail',     component: ComicDetailComponent }
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
    ],
})
export class AppRoutingModule { }
