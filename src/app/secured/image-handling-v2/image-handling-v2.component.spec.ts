import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageHandlingV2Component } from './image-handling-v2.component';

describe('ImageHandlingV2Component', () => {
  let component: ImageHandlingV2Component;
  let fixture: ComponentFixture<ImageHandlingV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImageHandlingV2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageHandlingV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
