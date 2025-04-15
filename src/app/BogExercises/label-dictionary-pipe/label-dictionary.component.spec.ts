import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelDictionaryComponent } from './label-dictionary.component';

describe('LabelDictionaryPipeComponent', () => {
  let component: LabelDictionaryComponent;
  let fixture: ComponentFixture<LabelDictionaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabelDictionaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabelDictionaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
