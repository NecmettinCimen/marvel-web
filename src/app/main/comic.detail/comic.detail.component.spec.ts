import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comic.DetailComponent } from './comic.detail.component';

describe('Comic.DetailComponent', () => {
  let component: Comic.DetailComponent;
  let fixture: ComponentFixture<Comic.DetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Comic.DetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Comic.DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
