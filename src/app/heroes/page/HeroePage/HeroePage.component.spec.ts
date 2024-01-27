/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HeroePageComponent } from './HeroePage.component';

describe('HeroePageComponent', () => {
  let component: HeroePageComponent;
  let fixture: ComponentFixture<HeroePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
