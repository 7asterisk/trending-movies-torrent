import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingDownloadPageComponent } from './trending-download-page.component';

describe('TrendingDownloadPageComponent', () => {
  let component: TrendingDownloadPageComponent;
  let fixture: ComponentFixture<TrendingDownloadPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrendingDownloadPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingDownloadPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
