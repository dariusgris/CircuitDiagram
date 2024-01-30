const SVG_PEOPLE = d3.select('#people-svg-part')
    .attr('height', '60%');

const PEOPLE_OBJ = [
    { x: 31, y: 60, src: 'assets/left_person.svg', id: 'leftPerson' },
    { x: 56.5, y: 60, src: 'assets/right_person.svg', id: 'rightPerson' }
]

const WIDTH_SVG_PEOPLE = 8;
const HEIGHT_SVG_PEOPLE = 30;
SVG_PEOPLE.selectAll('.svg-people')
    .data(PEOPLE_OBJ)
    .enter()
    .append('image')
    .attr('class', 'svg-people')
    .attr('href', d => d.src)
    .attr('x', d => d.x + '%')
    .attr('y', d => d.y + "%")
    .attr("width", WIDTH_SVG_PEOPLE + "%")
    .attr("height", HEIGHT_SVG_PEOPLE + "%");