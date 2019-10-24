function creatEventListeners(board) {
    document.getElementById('clear').addEventListener('click', board.clearButton);
    document.getElementById('initDijkstra').addEventListener('click', board.initDijkstra);
    document.getElementById('even_weights').addEventListener('click', board.evenWeights);
    document.getElementById('random_weights').addEventListener('click', board.randomWeights);

    for (const node of board.nodesMatrix.getALLasArray()){
        const element = node.htmlElement;
        element.onmousedown = (e) => {
            e.preventDefault();
            if (node.START_NODE){
                board.eventSTATUS = 'movingSTART';
                element.classList.add('hoverSTART');
            }
            else if (node.TARGET_NODE){
                board.eventSTATUS = 'movingTARGET'
                element.classList.add('hoverTARGET');
            }
            else  {
                board.eventSTATUS = 'toggleWALLs';
                node.toggleWALL();
            }
        }
        element.onmouseenter = (e) => {
            console.log('enter', board.eventSTATUS);
            if (board.eventSTATUS === 'movingSTART' & !node.WALL & !node.TARGET_NODE) {
                element.classList.add('hoverSTART');
                board.setStartNode(node);
                if (board.postAlgo) board.redoDijkstra();
            }
            if (board.eventSTATUS === 'movingTARGET' & !node.WALL & !node.START_NODE) {
                element.classList.add('hoverTARGET');
                board.setTargetNode(node);
                if (board.postAlgo) board.redoDijkstra();
            }
            if (board.eventSTATUS === 'toggleWALLs' & !node.START_NODE & !node.TARGET_NODE)  {
                node.toggleWALL();
            }
        }
        element.onmouseleave = (e) => {
            if (board.eventSTATUS === 'movingSTART' & !node.WALL & !node.TARGET_NODE) {
                element.classList.remove('hoverSTART');
                if (node.START_NODE) board.removeStartNode(node);
            }
            else if (board.eventSTATUS === 'movingTARGET' & !node.WALL & !node.START_NODE) {
                element.classList.remove('hoverTARGET');
                if (node.TARGET_NODE) board.removeTargetNode(node);
            }
        }
        element.onmouseup = (e) => {
            if (board.eventSTATUS === 'movingSTART' ) {
                if (!node.WALL & !node.TARGET_NODE){ 
                    // board.setStartNode(node);
                    element.classList.remove('hoverSTART');
                }
                else board.setDefualtStart();
            }
            if (board.eventSTATUS === 'movingTARGET') {
                if (!node.WALL & !node.START_NODE){
                    // board.setTargetNode(node);
                    element.classList.remove('hoverTARGET');
                }
                else board.setDefualtTarget();
            }            
            board.eventSTATUS = undefined;
        }
    }
}