const WORK_IN_CIRCLE = d3.select('#top-part-svg-scheme');

// 3 blue active circles and 1 black circle
const R_CIRCLES_FOR_HORIZONTAL_A = 1;
const CX_CIRCLES_FOR_HORIZONTAL_A = 19.5;
const HORIZONTAL_BLACK_LINES_WITHOUT_LAST = HORIZONTAL_BLACK_LINES.slice(0,-1);
const BLACK_WORK_CIRCLES = WORK_IN_CIRCLE.selectAll('.black-work-svg-circle')
    .data(HORIZONTAL_BLACK_LINES_WITHOUT_LAST) // createBlackLines.js
    .enter()
    .append('circle')
    .attr('class', 'black-work-svg-circle')
    .attr('cx', CX_CIRCLES_FOR_HORIZONTAL_A + "%")
    .attr('cy', d => d.y + "%")
    .attr('r', R_CIRCLES_FOR_HORIZONTAL_A + "%")
    .on('click', d => handleBlueCircleClick(d));

WORK_IN_CIRCLE.selectAll('.letter-A-in-circle')
.data(HORIZONTAL_BLACK_LINES_WITHOUT_LAST)
.enter()
.append('text')
.attr('class', 'letter-A-in-circle')
.attr('x', CX_CIRCLES_FOR_HORIZONTAL_A + '%')
.attr('y', d => d.y + '%')
.attr('dy', '0.3em')
.attr('text-anchor', 'middle')
.text(d => 'A');