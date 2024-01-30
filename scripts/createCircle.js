
const SVG_CIRCLES = d3.select('#top-part-svg-scheme');

// 10 black circles for vertical lines
const R_CIRCLES_FOR_VERTICAL_LINES = 0.25;
SVG_CIRCLES.selectAll('.black-svg-circle')
    .data(VERTICAL_BLACK_LINES) // createBlackLines.js
    .enter()
    .append('circle')
    .attr('class', 'black-svg-circle')
    .attr('cx', d => d.x + "%")
    .attr('cy', d => d.y + "%")
    .attr('r', R_CIRCLES_FOR_VERTICAL_LINES + "%");

// 3 blue active circles and 1 black circle
const R_CIRCLES_FOR_HORIZONTAL = 0.5;
const CX_CIRCLES_FOR_HORIZONTAL = 15;

const ACTIVE_BLUE_CIRCLES = SVG_CIRCLES.selectAll('.blue-active-svg-circle')
    .data(HORIZONTAL_BLACK_LINES) // createBlackLines.js
    .enter()
    .append('circle')
    .attr('class', 'blue-active-svg-circle')
    .attr('cx', d => CX_CIRCLES_FOR_HORIZONTAL + "%")
    .attr('cy', d => d.y + "%")
    .attr('r', R_CIRCLES_FOR_HORIZONTAL + "%")
    .on('click', d => handleBlueCircleClick(d));

ACTIVE_BLUE_CIRCLES.filter(':last-of-type').attr('class', 'black-not-active-svg-circle');

// 2 black description circle
const BLACK_CIRCLE_POINTER = [
    {x: 30, y: 10, r: 3},
    {x: 61.5, y: 29, r: 3}
]
/*
SVG_DOWN_PART_SCHEME.selectAll('.black-pointer-svg-circle')
.data(BLACK_CIRCLE_POINTER) // createBlackLines.js
.enter()
.append('circle')
.attr('class', 'black-pointer-svg-circle')
.attr('cx', d => CX_CIRCLES_FOR_HORIZONTAL + "%")
.attr('cy', d => d.y + "%")
.attr('r', R_CIRCLES_FOR_HORIZONTAL + "%")
.on('click', d => handleBlueCircleClick(d));
*/