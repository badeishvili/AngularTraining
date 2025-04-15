import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetlikeComponent } from './tweetlike.component';

describe('TweetlikeComponent', () => {
  let component: TweetlikeComponent;
  let fixture: ComponentFixture<TweetlikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TweetlikeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TweetlikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
