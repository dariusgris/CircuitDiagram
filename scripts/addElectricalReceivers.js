const SVG_RECEIVERS = d3.select('#top-part-svg-scheme');

const ELECTRICAL_RECEIVERS = [
    { x: 20.5, y: 60, src: 'assets/electricalReceiver1.svg', id: "firstElectricalReceiver" },
    { x: 46, y: 60, src: 'assets/electricalReceiver2.svg', id: "secondElectricalReceiver" }
];

const WIDTH_EL_RECEIVER = 11;
const HEIGHT_EL_RECEIVER = 18;

SVG_RECEIVERS.selectAll('.electrical-receivers-block')
    .data(ELECTRICAL_RECEIVERS)
    .enter()
    .append('image')
    .attr('class', 'electrical-receivers-block')
    .attr('href', d => d.src)
    .attr("x", d => d.x + "%")
    .attr("y", d => d.y + "%")
    .attr("width", WIDTH_EL_RECEIVER + "%")
    .attr("height", HEIGHT_EL_RECEIVER + "%");