const SVG_BLUE_LINE = d3.select('#top-part-svg-scheme');

// 4 horizontal lines
const X1_HORIZONTAL_BLUE_LINE = 22;
const X2_HORIZONTAL_BLUE_LINE = 78;
SVG_BLUE_LINE.selectAll('.blue-svg-horizontal-line')
    .data(HORIZONTAL_BLACK_LINES)
    .enter()
    .append('line')
    .attr('class', 'blue-svg-horizontal-line')
    .attr('x1', X1_HORIZONTAL_BLUE_LINE + "%")
    .attr('y1', d => d.y + "%")
    .attr('x2', X2_HORIZONTAL_BLUE_LINE + "%")
    .attr('y2', d => d.y + "%")
    .on('click', d => handleBlueHorizontalLineClick(d));

// 3 start blue line
const WIDTH_START_BLUE_HORIZONTAL_LINE = 2;
const COPY_HORIZONTAL_BLACK_LINES_WITHOUT_LAST_OBJ = HORIZONTAL_BLACK_LINES.slice(0,-1);
const START_BLUE_LINES = SVG_BLUE_LINE.selectAll('.blue-svg-start-horizontal-line')
    .data(COPY_HORIZONTAL_BLACK_LINES_WITHOUT_LAST_OBJ)
    .enter()
    .append('line')
    .attr('class', 'blue-svg-start-horizontal-line')
    .attr('x1', X1_HORIZONTAL_LINE + "%")
    .attr('y1', d => d.y + "%")
    .attr('x2', (X1_HORIZONTAL_LINE + WIDTH_START_BLUE_HORIZONTAL_LINE) + "%")
    .attr('y2', d => d.y + "%")
//.on('click', d => handleBlueHorizontalLineClick(d));

// vertical line 
SVG_BLUE_LINE.selectAll('.blue-svg-R-vertical-line')
    .data(R_VERTICAL_BLACK_LINES)
    .enter()
    .append('line')
    .attr('class', 'blue-svg-R-vertical-line')
    .attr('x1', d => d.x + "%")
    .attr('y1', Y1_VERTICAL_R_LINE + 10 + "%")
    .attr('x2', d => d.x + "%")
    .attr('y2', Y2_VERTICAL_R_LINE + "%")
    .on('click', d => handleBlueHorizontalLineClick(d));
