const SVG_DOWN_PART_SCHEME = d3.select('#down-part-svg-scheme')
    .attr('height', '40%');

const down_el = document.getElementById('down-part-svg-scheme')
const el = element.getBoundingClientRect();

const PROTECTIVE_MEASURE_BLOCK = [
    { x: 31.25, y: 23, src: 'assets/groundingOff.svg', id: 'grounding', state: 'Off'},
    { x: 36.25, y: 23, src: 'assets/PElogoOn.svg', id: 'PElogo', state: 'On' },
    { x: 55.25, y: 23, src: 'assets/phaseOn.svg', id: 'phase', state: 'On' },
    { x: 60.25, y: 23, src: 'assets/PENOff.svg', id: 'PEN', state: 'Off' },
    { x: 65.25, y: 23, src: 'assets/phaseEarthOff.svg', id: 'phaseEarth', state: 'Off' },
    { x: 70.25, y: 23, src: 'assets/LOff.svg', id: 'L', state: 'Off' }
];

const RECT_WIDTH_DOWN_PART = 25;
const RECT_HEIGHT_DOWN_PART = 35;
const RECT_BLOCK_DOWN_PART = [
    { x: 23.5, y: 15, label: "ИСПОЛЬЗУЕМЫЕ ЗАЩИТНЫЕ МЕРЫ" }, 
    { x: 52.5, y: 15, label: "ВОЗМОЖНЫЕ ПОВРЕЖДЕНИЯ"}];

SVG_DOWN_PART_SCHEME.selectAll('.rect-block-down-part')
    .data(RECT_BLOCK_DOWN_PART)
    .enter()
    .append('rect')
    .attr('class', 'rect-block-down-part')
    .attr('x', d => d.x + '%')
    .attr('y', d => d.y + '%')
    .attr('width', RECT_WIDTH_DOWN_PART + '%')
    .attr('height', RECT_HEIGHT_DOWN_PART + '%')
    .attr('rx', 10);

SVG_DOWN_PART_SCHEME.selectAll('.rect-label-down-part')
    .data(RECT_BLOCK_DOWN_PART)
    .enter()
    .append('text')
    .attr('class', '.direct-voltage-title')
    .attr("x", d => d.x + RECT_WIDTH_DOWN_PART/2 + '%')
    .attr("y", d => d.y + RECT_HEIGHT_DOWN_PART/9 + '%')
    .attr('dy', '0.3em')
    .attr('text-anchor', 'middle')
    .text(d => d.label);

SVG_DOWN_PART_SCHEME.selectAll('.image-block-down-part')
    .data(PROTECTIVE_MEASURE_BLOCK)
    .enter()
    .append('image')
    .attr('class', 'image-block-down-part')
    .attr('href', d => d.src)
    .attr('x', d => d.x + '%')
    .attr('y', d => d.y + '%')
    .attr('width', 4.5 + '%')
    .on('click', d => changeState(d));

    console.log(el.height, el.width, el.width/el.height)
/*
SVG_DOWN_PART_SCHEME.selectAll('.image-block-down-part')
    .data(PROTECTIVE_MEASURE_BLOCK)
    .enter()
    .append('image')
    .attr('class', 'image-block-down-part')
    .attr('href', d => d.src)
    .attr('x', d => d.x + '%')
    .attr('y', d => d.y + '%')
    .attr('width', 5 + '%');



*/
