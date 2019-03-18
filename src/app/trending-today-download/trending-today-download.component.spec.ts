import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingTodayDownloadComponent } from './trending-today-download.component';

describe('TrendingTodayDownloadComponent', () => {
  let component: TrendingTodayDownloadComponent;
  let fixture: ComponentFixture<TrendingTodayDownloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrendingTodayDownloadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingTodayDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
