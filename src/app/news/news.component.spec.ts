import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsNextWebComponent } from './news.component';

describe('NewsComponent', () => {
  let component: NewsNextWebComponent;
  let fixture: ComponentFixture<NewsNextWebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsNextWebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsNextWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
