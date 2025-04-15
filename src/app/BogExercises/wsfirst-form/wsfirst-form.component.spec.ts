import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WSFirstFormComponent } from './wsfirst-form.component';

describe('WSFirstFormComponent', () => {
  let component: WSFirstFormComponent;
  let fixture: ComponentFixture<WSFirstFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WSFirstFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WSFirstFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
