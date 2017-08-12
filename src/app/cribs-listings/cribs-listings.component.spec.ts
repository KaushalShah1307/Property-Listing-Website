/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CribsListingsComponent } from './cribs-listings.component';

describe('CribsListingsComponent', () => {
  let component: CribsListingsComponent;
  let fixture: ComponentFixture<CribsListingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CribsListingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CribsListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
