import {Component, Input, input} from '@angular/core';

@Component({
  selector: 'tweetlike',
  imports: [],
  templateUrl: './tweetlike.component.html',
  styleUrl: './tweetlike.component.css'
})
export class TweetlikeComponent {

  @Input('likesCount') likesCount: number | undefined;
  @Input('isActive') isActive: boolean | undefined;

  onClick(): void {

    // @ts-ignore
    this.likesCount += (this.isActive ? -1 : 1);
    this.isActive = !this.isActive;
  }

}
