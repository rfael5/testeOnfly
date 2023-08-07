import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesHotelComponent } from './detalhes-hotel.component';

describe('DetalhesHotelComponent', () => {
  let component: DetalhesHotelComponent;
  let fixture: ComponentFixture<DetalhesHotelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalhesHotelComponent]
    });
    fixture = TestBed.createComponent(DetalhesHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
