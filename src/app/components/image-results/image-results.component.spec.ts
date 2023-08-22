import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageResultsComponent } from './image-results.component';

describe('ImageResultsComponent', () => {
  let component: ImageResultsComponent;
  let fixture: ComponentFixture<ImageResultsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageResultsComponent]
    });
    fixture = TestBed.createComponent(ImageResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
