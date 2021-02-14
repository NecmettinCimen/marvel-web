import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Character.DetailComponent } from './character.detail.component';

describe('Character.DetailComponent', () => {
  let component: Character.DetailComponent;
  let fixture: ComponentFixture<Character.DetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Character.DetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Character.DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
