import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelDictionaryPipeComponent } from './label-dictionary.component';

describe('LabelDictionaryPipeComponent', () => {
  let component: LabelDictionaryPipeComponent;
  let fixture: ComponentFixture<LabelDictionaryPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabelDictionaryPipeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabelDictionaryPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
