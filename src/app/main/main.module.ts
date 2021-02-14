import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';

import { HttpClientModule } from '@angular/common/http';
import { CharactersComponent } from './characters/characters.component';
import { ComicsComponent } from './comics/comics.component';
import { CharacterDetailComponent } from './character.detail/character.detail.component';
import { ComicDetailComponent } from './comic.detail/comic.detail.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        NouisliderModule,
        JwBootstrapSwitchNg2Module,
        HttpClientModule
    ],
    declarations: [
        CharactersComponent,
        ComicsComponent,
        CharacterDetailComponent,
        ComicDetailComponent
    ]
})
export class MainModule { }
