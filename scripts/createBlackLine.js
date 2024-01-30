const SVG_BLACK_LINES = d3.select('#top-part-svg-scheme')
    .attr('height', '50%');

///////////////
// OBJECT LINES

// 4 horizontal lines: L1, l2, L3, PEN
const HORIZONTAL_BLACK_LINES = [
    {y: 10, id: "L1_circle", label: 'L1'},
    {y: 20, id: "L2_circle", label: 'L2'},
    {y: 30, id: "L3_circle", label: 'L3'},
    {y: 40, id: "L4_circle", label: 'PEN'},
]

// 10 vertical lines
const VERTICAL_BLACK_LINES = [
    // left part
    {y: 10, x: 24},
    {y: 20, x: 25.5},
    {y: 30, x: 27},
    {y: 40, x: 28.5},
    {y: 40, x: 30},
    // right part
    {y: 10, x: 49},
    {y: 20, x: 50.5},
    {y: 30, x: 52},
    {y: 40, x: 53.5},
    {y: 40, x: 55},

]

// 2 vertical R lines: Rип, Rпов
const R_VERTICAL_BLACK_LINES = [
    {x: 15, label: 'Rип'},
    {x: 70, label: 'Rпов'}
]

///////////////
// CREATE LINES

// 10 vertical lines
const VERTICAL_LINE_LENGTH = 60;
SVG_BLACK_LINES.selectAll('.black-svg-vertical-line')
    .data(VERTICAL_BLACK_LINES)
    .enter()
    .append('line')
    .attr('class', 'black-svg-vertical-line')
    .attr('x1', d => d.x + "%")
    .attr('y1', d => d.y + "%")
    .attr('x2', d => d.x + "%")
    .attr('y2', VERTICAL_LINE_LENGTH + "%");

// 4 horizontal lines
const X1_HORIZONTAL_LINE = 15;
const X2_HORIZONTAL_LINE = 85;
SVG_BLACK_LINES.selectAll('.black-svg-horizontal-line')
    .data(HORIZONTAL_BLACK_LINES)
    .enter()
    .append('line')
    .attr('class', 'black-svg-horizontal-line')
    .attr('x1', X1_HORIZONTAL_LINE + "%")
    .attr('y1', d => d.y + "%")
    .attr('x2', X2_HORIZONTAL_LINE + "%")
    .attr('y2', d => d.y + "%");

// 2 vertical R lines
const Y1_VERTICAL_R_LINE = 39.8;
const Y2_VERTICAL_R_LINE = 90;
SVG_BLACK_LINES.selectAll('.black-svg-R-vertical-line')
    .data(R_VERTICAL_BLACK_LINES)
    .enter()
    .append('line')
    .attr('class', 'black-svg-R-vertical-line')
    .attr('x1', d => d.x + "%")
    .attr('y1', Y1_VERTICAL_R_LINE + "%")
    .attr('x2', d => d.x + "%")
    .attr('y2', Y2_VERTICAL_R_LINE + "%");
