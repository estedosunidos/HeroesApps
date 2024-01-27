/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Error404PageComponent } from './Error404Page.component';

describe('Error404PageComponent', () => {
  let component: Error404PageComponent;
  let fixture: ComponentFixture<Error404PageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Error404PageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Error404PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
