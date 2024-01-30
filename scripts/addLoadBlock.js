const SVG_LOAD = d3.select('#top-part-svg-scheme');

const LOAD_BLOCK = [
    { x: 85, y: 6, src: 'assets/loadBlock.svg', id: "load" },
];

const WIDTH_SVG_LOAD = 5;
const HEIGHT_SVG_LOAD = 37;

SVG_LOAD.selectAll('.svg-load')
    .data(LOAD_BLOCK)
    .enter()
    .append('image')
    .attr('class', 'svg-load')
    .attr('href', d => d.src)
    .attr('x', d => d.x + '%')
    .attr('y', d => d.y + "%")
    .attr("width", WIDTH_SVG_LOAD + "%")
    .attr("height", HEIGHT_SVG_LOAD + "%");