function creatEventListeners(board) {
    document.getElementById('clear').addEventListener('click', board.clearHTML);
    document.getElementById('initDijkstra').addEventListener('click', board.initDijkstra);
    document.getElementById('even_weights').addEventListener('click', board.evenWeights);
    document.getElementById('random_weights').addEventListener('click', board.randomWeights);

    
}