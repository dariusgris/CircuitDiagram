function handleBlueCircleClick(e) {
    console.log("Click " + e.id)
}

function handleBlueHorizontalLineClick(e) {
    console.log("Click " + e)
}

function changeState(data) {
    const indexFindObject = PROTECTIVE_MEASURE_BLOCK.findIndex(item => item.id === data.id);
    console.log(indexFindObject)
    console.log(PROTECTIVE_MEASURE_BLOCK);
    console.log(PROTECTIVE_MEASURE_BLOCK[indexFindObject])
    if(indexFindObject !== -1) {
        console.log("me tut")
        PROTECTIVE_MEASURE_BLOCK[indexFindObject] = {
            ...PROTECTIVE_MEASURE_BLOCK[indexFindObject],
            state: data.state ==='Off' ? 'On' : 'Off',
            src: data.state ==='Off' ? data.src.replace('Off', 'On') : data.src.replace('On', 'Off')
        }
        SVG_DOWN_PART_SCHEME.selectAll('.image-block-down-part')
        .data(PROTECTIVE_MEASURE_BLOCK)
        .attr('href', d => d.src);
    }; 
}