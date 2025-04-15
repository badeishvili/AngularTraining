import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WsJobDescComponent } from './ws-job-desc.component';

describe('WsJobDescComponent', () => {
  let component: WsJobDescComponent;
  let fixture: ComponentFixture<WsJobDescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WsJobDescComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WsJobDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
