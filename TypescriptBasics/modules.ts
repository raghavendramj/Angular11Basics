import { LikeComponent } from "./like.component";
import { Point } from "./point";

let point = new Point(10, 20);
point.draw();


let component = new LikeComponent(10, true);
component.onClick();
console.log(`likes-count: ${component.likesCount}, isSelected: ${component.isSelected}`);