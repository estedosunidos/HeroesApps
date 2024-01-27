/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LyaoutsComponent } from './Lyaouts.component';

describe('LyaoutsComponent', () => {
  let component: LyaoutsComponent;
  let fixture: ComponentFixture<LyaoutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LyaoutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LyaoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
