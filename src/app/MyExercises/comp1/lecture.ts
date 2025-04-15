import {Point} from './point';
import {Like}  from './like';

// Point cases
let point = new Point(1,2);
let a = point.x = 10;
let point1 = new Point(a,2);
point1.draw();

// Like Cases
let like: Like;
like = new Like(5, false);
like.onClick();
console.log(`likesCount : ${like.likesCount}`);


