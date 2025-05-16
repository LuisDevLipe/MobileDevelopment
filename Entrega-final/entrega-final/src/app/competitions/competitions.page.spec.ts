import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompetitionsPage } from './competitions.page';

describe('CompetitionsPage', () => {
  let component: CompetitionsPage;
  let fixture: ComponentFixture<CompetitionsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
