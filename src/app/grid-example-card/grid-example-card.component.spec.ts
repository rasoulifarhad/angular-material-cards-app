import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridExampleCardComponent } from './grid-example-card.component';

describe('GridExampleCardComponent', () => {
  let component: GridExampleCardComponent;
  let fixture: ComponentFixture<GridExampleCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GridExampleCardComponent]
    });
    fixture = TestBed.createComponent(GridExampleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
