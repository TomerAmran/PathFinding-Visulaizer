class Dijkstra {
    constructor(board) {
        this.board = board;
        this.unvisited =[];
        this.visitOrder =[];
    }

    init = () => {
        this.unvisited = this.board.nodesMatrix.getALLasArray();
        this.unvisited.sort((a,b)=> (a.DISTANCE > b.DISTANCE) ? 1: -1);
        while (this.unvisited.length >0) {
            const node = this.unvisited.shift();
            if (!node.WALL){
                // node.VISITED = true;
                this.visitOrder.push(node);
                for (const neigh of node.neighbors) {
                    if (!neigh.WALL)
                        neigh.evaluate(node);
                }
                this.unvisited.sort((a,b)=> (a.DISTANCE > b.DISTANCE) ? 1: -1);
            }
        }
    }

    visualize = () => {
        for (let i = 0; i < this.visitOrder.length ; i++){
            const node = this.visitOrder[i];    
            if (node.TARGET_NODE) {
                setTimeout(() => {
                    node.setVISITED();
                    this.visualizePath();   
                },i*10);
                
                break;
            }
            else if (node.DISTANCE === Infinity){
                this.visualizePath();
                break;   
            }
            else
                setTimeout(node.setVISITED,i*10);
        } 
    }

    visualizePath = () => {
        // this.board.clearHTML();
        let curr = this.board.targetNode;
        let i = 1;
        while(curr) {
            setTimeout(curr.setPATH, 30*i);
            curr = curr.PREV;
            i++;
        }
    }

    instantVisualize = () => {
        for (let i = 0; i < this.visitOrder.length ; i++){
            const node = this.visitOrder[i];    
            if (node.TARGET_NODE) {
                node.setVISITED();
                this.instantVisualizePath();
                break;
            }
            else if (node.DISTANCE === Infinity){
                this.visualizePath();
                break;   
            }
            else  node.setVISITED();
        }
    }

    instantVisualizePath = () => {
        let curr = this.board.targetNode;
        while(curr) {
            curr.setPATH();
            curr = curr.PREV;
        }
    }
}