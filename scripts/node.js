const svgTopBlock = d3.select('#topPartSvgScheme')
    .attr('height', '50%');
const svgPeople = d3.select('#peoplePartSvgScheme')
    .attr('height', '60%')

    //addVerticalLines(svgTopBlock);

addTopBlackLines(svgTopBlock); //top 4 horizontal black lines
addLoad(svgTopBlock); // block with load
addPeople(svgPeople); // 2 person
addBlockWithElectricalReceiver(svgTopBlock);
function addTopBlackLines(svg) {
    // 6 vertical line
    const lineBlackVerticalData = [
        {y: 10, x: 24},
        {y: 20, x: 25.5},
        {y: 30, x: 27},
        {y: 40, x: 28.5},
        {y: 40, x: 30},

        {y: 10, x: 49},
        {y: 20, x: 50.5},
        {y: 30, x: 52},
        {y: 40, x: 53.5},
        {y: 40, x: 55},

    ];
    svg.selectAll('.vertical-only-black-line')
    .data(lineBlackVerticalData)
    .enter()
    .append('line')
    .attr('class', 'vertical-only-black-line')
    .attr('x1', d => d.x + "%")
    .attr('y1', d => d.y + "%")
    .attr('x2', d => d.x + "%")
    .attr('y2', '50%')
    .attr('stroke', 'black')
    .attr('width', '4');
    // black circle
    svg.selectAll('.vertical-black-line-circle')
    .data(lineBlackVerticalData)
    .enter()
    .append('circle')
    .attr('class', 'vertical-black-line-circle')
    .attr('cx', d => d.x + "%")
    .attr('cy', d => d.y + "%")
    .attr('r', "0.3%")

    // top 4 horizontal black lines object
    const lineData = [
        {y: 10, label: 'L1', letter: 'A'},
        {y: 20, label: 'L2', letter: 'A'},
        {y: 30, label: 'L3', letter: 'A'},
        {y: 40, label: 'PEN', letter: ''},
    ];

    const verticalArrowsLines = [
        {label: 'Rип', x: 15},
        {label: 'Rпов', x: 70}
    ]

    svg.selectAll('.vertical-line')
    .data(verticalArrowsLines)
    .enter()
    .append('line')
    .attr('class', 'vertical-line')
    .attr('x1', d => d.x + "%")
    .attr('y1', '40%')
    .attr('x2', d => d.x + "%")
    .attr('y2', d => '93%')
    .attr('stroke', 'black')
    .attr('width', '4')
    .attr("marker-end","url(#arrow)"); 

    svg.selectAll('.active-vertical-line')
    .data(verticalArrowsLines)
    .enter()
    .append('line')
    .attr('class', 'active-vertical-line')
    .attr('x1', d => d.x + "%")
    .attr('y1', '50%')
    .attr('x2', d => d.x + "%")
    .attr('y2', d => '93%')
    .attr('stroke', 'rgb(10, 75, 216)')
    .attr('width', '4')
    .attr("marker-end","url(#arrow)")
    .on('click', addVertic);
    
    function addVertic(d){
        alert("Click " + d.label)
    }

    // top horizontal black lines
    svg.selectAll('.line')
    .data(lineData)
    .enter()
    .append('line')
    .attr('class', 'line')
    .attr('x1', '15%')
    .attr('y1', d => d.y + '%')
    .attr('x2', '85%')
    .attr('y2', d => d.y + '%');
    // label L1, L2, L3, PEN
    svg.selectAll('.label')
    .data(lineData)
    .enter()
    .append('text')
    .attr('class', 'label')
    .attr('x', '10%')
    .attr('y', d => d.y + '%')
    .attr('dy', '0.3em')
    .attr('text-anchor', 'middle')
    .text(d => d.label);
    // click Resistance on blue line
    svg.selectAll('.resistanceLines')
    .data(lineData)
    .enter()
    .append('line')
    .attr('class', 'resistance-lines')
    .attr('x1', '23%')
    .attr('y1', d => d.y + '%')
    .attr('x2', '77%')
    .attr('y2', d => d.y + '%')
    .on('click', addResistance);

    // circle right
    const powerSupply = svg.selectAll('.power-supply')
    .data(lineData)
    .enter()
    .append('circle')
    .attr('class', 'power-supply')
    .attr('cx', '15%')
    .attr('cy', d => d.y + '%')
    .attr('r', '0.8%')
    .on('click', handlePowerSupply);
    powerSupply.filter(':last-of-type').style('stroke', 'black');
    powerSupply.filter(':last-of-type').style('pointer-events', 'none');
    powerSupply.filter(':last-of-type').on('click', null);
    
    function addResistance(d) {
        alert("Click " + d.label)
    }
    // Click
    function handlePowerSupply(d) {
        alert("Click " + d.label)
    }

    //addActiveLines(svg);
    let copyLineDataWithoutLastLine = lineData.slice(0,3)
    addResistanceLines(svg, copyLineDataWithoutLastLine);

    function addResistanceLines(svg, objLines) {
        svg.selectAll('.circle-A')
        .data(objLines)
        .enter()
        .append('circle')
        .attr('class', 'circle-A')
        .attr('cx', '20%')
        .attr('cy', d => d.y + '%')
        .attr('r', '1.5%')
        
        svg.selectAll('.letter-A')
        .data(objLines)
        .enter()
        .append('text')
        .attr('class', 'letter')
        .attr('x', '20%')
        .attr('y', d => d.y + '%')
        .attr('dy', '0.3em')
        .attr('text-anchor', 'middle')
        .text(d => d.letter);
    }
}
function addLoad(svg){

}
/*
function addActiveLines(svg) {
    // top active horizontal lines object
    const activeLineData = [
        {y: 20, id: "L1"},
        {y: 45, id: "L2"},
        {y: 70, id: "L3"},
    ];

    // draw top horizontal blue lines
    svg.selectAll('.active-line1')
    .data(activeLineData)
    .enter()
    .append('line')
    .attr('class', 'active-line')
    .attr('x1', '15%')
    .attr('y1', d => d.y + '%')
    .attr('x2', '18%')
    .attr('y2', d => d.y + '%');
}
*/

function addPeople(svg) {
    const peopleSvg = [
        {x: 28, y: 60, src: 'assets/new_person.svg', id: 'leftPerson'},
        {x: 55, y: 60, src: 'assets/new_person2.svg', id: 'rightPerson'}
    ]

    svg.selectAll('.people-svg')
    .data(peopleSvg)
    .enter()
    .append('image')
    .attr('href', d => d.src)
    .attr('class', 'people-svg')
    .attr('x', d=> d.x + '%')
    .attr('y', d => d.y + "%")
}

function addVerticalLines(svg) {

}


function addBlockWithElectricalReceiver(svg) {
    const rectElectricalReceiver = [
        { x: 20, y: 50, text: "Электроприемник №1" },
        { x: 45, y: 50, text: "Электроприемник №1" }
    ]

    svg.selectAll('.rectBlockElectrical')
    .data(rectElectricalReceiver)
    .enter()
    .append('rect')
    .attr('class', 'rectBlockElectrical')
    .attr("x", d => d.x + "%")
    .attr("y", d => d.y + "%")
    .attr("width", "12%")
    .attr("height", "18%");

    svg.selectAll('.letter-Elect')
    .data(rectElectricalReceiver)
    .enter()
    .append('text')
    .attr('class', 'letter-Elect')
    .attr("x", d => d.x + "%")
    .attr("y", d => d.y + "%")
    .attr('dy', '0.3em')
    .attr('text-anchor', 'middle')
    .text(d => d.letter);

}

