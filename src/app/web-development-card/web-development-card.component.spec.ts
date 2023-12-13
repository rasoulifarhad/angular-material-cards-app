import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebDevelopmentCardComponent } from './web-development-card.component';

describe('WebDevelopmentCardComponent', () => {
  let component: WebDevelopmentCardComponent;
  let fixture: ComponentFixture<WebDevelopmentCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebDevelopmentCardComponent]
    });
    fixture = TestBed.createComponent(WebDevelopmentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
