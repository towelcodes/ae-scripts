/* EXPRESSION : should be applied to the Output Height of a Motion Tile */

/* automatically creates horizontal borders for any clip based on its position
so you don't have to do it manually */
// TODO it should use trig to calcualte it properly but i just did the lowest or highest y value instead because i'm lazy
// TODO also it's not good at some 3d transforms but i'm not sure why
let lyr = thisComp.layer("LAYER HERE");
let s = lyr.sourceRectAtTime(time, false);
let rect = [
	lyr.toComp([s.left, s.top]),
	lyr.toComp([s.left + s.width, s.top]),
	lyr.toComp([s.left + s.width, s.top + s.height]),
	lyr.toComp([s.left, s.top + s.height])
];
let view_rect = [
	[0, 0],
	[thisComp.width, 0],
	[0, thisComp.height],
	[thisComp.width, thisComp.height]
];
let mx = 0;
for (let i = 0 ; i < 4 ; i++) {
	let diff = 0;
	if (i < 2) {
		diff = rect[i][1] - view_rect[i][1];
	} else {
		diff = view_rect[i][1] - rect[i][1];
	}
	if (diff > mx) {
		mx = diff;
	}
}
((thisComp.height - mx ) / thisComp.height) * 100
