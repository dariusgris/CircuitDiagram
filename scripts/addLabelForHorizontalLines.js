const SVG_LABEL_TOP = d3.select('#top-part-svg-scheme');

SVG_LABEL_TOP.selectAll('.label-for-horizontal-top-line')
.data(HORIZONTAL_BLACK_LINES)
.enter()
.append('text')
.attr('class', 'label-for-horizontal-top-line')
.attr('x', 11 + '%')
.attr('y', d => d.y + '%')
.attr('dy', '0.3em')
.attr('text-anchor', 'middle')
.text(d => d.label);