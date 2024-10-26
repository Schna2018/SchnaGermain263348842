import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LazyPage } from './lazy.page';

describe('LazyPage', () => {
  let component: LazyPage;
  let fixture: ComponentFixture<LazyPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
