import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListExampleCardComponent } from './list-example-card.component';

describe('ListExampleCardComponent', () => {
  let component: ListExampleCardComponent;
  let fixture: ComponentFixture<ListExampleCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListExampleCardComponent]
    });
    fixture = TestBed.createComponent(ListExampleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
