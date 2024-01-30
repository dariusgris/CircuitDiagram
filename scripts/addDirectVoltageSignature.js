const SVG_DIRECT_VOLTAGE = d3.select('#top-part-svg-scheme');

const DIRECT_VOLTAGE = [
    { x1: 31.45, x2: 46, y1: 55, y2: 55 },
    { x1: 31.45, x2: 31.45, y1: 50, y2: 60 },
    { x1: 46.05, x2: 46.05, y1: 50, y2: 60 },

    { x1: 55, x2: 64.5, y1: 60.1, y2: 60.1 },
    { x1: 64, x2: 64, y1: 60.1, y2: 93 },
];

const DIRECT_VOLTAGE_TITLE = [
    {x: 38.725, y: 52, label: 'Uпр1' },
    {x: 66, y: 76.5, label: 'Uпр2' },
]

SVG_DIRECT_VOLTAGE.selectAll('.direct-voltage')
    .data(DIRECT_VOLTAGE)
    .enter()
    .append('line')
    .attr('class', 'direct-voltage')
    .attr('x1', d => d.x1 + "%")
    .attr('y1', d => d.y1 + "%")
    .attr('x2', d => d.x2 + "%")
    .attr('y2', d => d.y2 + "%");


SVG_DIRECT_VOLTAGE.selectAll('.direct-voltage-title')
    .data(DIRECT_VOLTAGE_TITLE)
    .enter()
    .append('text')
    .attr('class', '.direct-voltage-title')
    .attr("x", d => d.x + "%")
    .attr("y", d => d.y + "%")
    .attr('dy', '0.3em')
    .attr('text-anchor', 'middle')
    .text(d => d.label);





/// triamgle coord
const TR = [
    { c: '0,5 10,0 10,10' },
    { c: '0,0 10,5 0,10' },
    { c: '0,10 5,0 10,10' },
    { c: '0,0 10,0 5,10' },
]///
const TRIANFLE_DIRECT_VOLTAGE = [
    { x: 31.45, y: 55, src: 'assets/blackLeftTriangle.svg' },
    { x: 46, y: 55, src: 'assets/blackRightTriangle.svg' },
    { x: 64, y: 60, src: 'assets/blackUpTriangle.svg' },
    { x: 64, y: 93, src: 'assets/blackDownTriangle.svg' }
];
///////////////////////////

//    .attr('marker-end', 'url(#triangle-black-marker)');

const element = document.getElementById('top-part-svg-scheme');

const pp = element.getBoundingClientRect();

SVG_DIRECT_VOLTAGE.selectAll('.triangle-direct-voltage')
    .data(TRIANFLE_DIRECT_VOLTAGE)
    .enter()
    .append('image')
    .attr('class', 'triangle-direct-voltage')
    .attr('href', d => d.src)
    .attr('x', d => toP(d.x, pp.width))
    .attr('y', d => d.y + '%')

function toP(per, pix) {
    return (per/100)*pix;
}
///////////////////////////
/////////////////////////
// .attr("width", WIDTH_SVG_PEOPLE + "%")
//.attr("height", HEIGHT_SVG_PEOPLE + "%");


/*
SVG_DIRECT_VOLTAGE.selectAll('.direct-voltage')
    .data(DIRECT_VOLTAGE)
    .enter()
    .append('line')
    .attr('class', 'direct-voltage')
    .attr('x1', d => d.x1 + "%")
    .attr('y1', d => d.y1 + "%")
    .attr('x2', d => d.x2 + "%")
    .attr('y2', d => d.y2 + "%")
    .attr('marker-end', 'url(#triangle-black-marker)');

SVG_DIRECT_VOLTAGE.append('defs')
    .append('marker')
    .attr('id', 'triangle-black-marker')
    .attr('markerWidth', 10)
    .attr('markerHeight', 10)
    .attr('refX', 10)
    .attr('refY', 3)
    //.attr('orient', 'auto')
    .selectAll('polygon')
    .data(TR)
    .enter()
    .append('polygon')
    .attr('points', d => d.c)
*/
/*
.selectAll('.triangle-black-marker')
.data(TRIANFLE_DIRECT_VOLTAGE)
.enter()
.attr('href', d => d.src)
.attr('width', 10)
.attr('height', 10)
.attr('fill', 'rgba(0,0,0,0.5)')
*/
/*
const BLACK_TRIANGLE_SRC = 'assets/blackTriangle.svg'
SVG_DIRECT_VOLTAGE.selectAll('.triangle-direct-voltage')
    .data(TRIANFLE_DIRECT_VOLTAGE)
    .enter()
    .append('image')
    .attr('class', 'triangle-direct-voltage')
    .attr('href', d => d.src)
    .attr('x', d => d.x + '%')
    .attr('y', d => d.y + "%")





    //const TRIANGLE_DIRECT_VOLTAGE_SIZE = 1;
const TRIANFLE_DIRECT_VOLTAGE = [
    { x: 31.5, y: 54, src: 'assets/blackLeftTriangle.svg' },
    { x: 45, y: 55, src: 'assets/blackRightTriangle.svg' },
    { x: 64, y: 60, src: 'assets/blackUpTriangle.svg' },
    { x: 64, y: 91, src: 'assets/blackDownTriangle.svg' }
];
*/