class Dijkstra {
    constructor(board) {
        this.board = board;
        this.unvisited = board.nodesMatrix.matrix.flat();
        this.unvisited.sort((a,b)=> (a.DISTANCE > b.DISTANCE) ? 1: -1);
        this.visitOrder =[];
    }

    init = () => {
        while (this.unvisited.length >0) {
            const curr = this.unvisited.shift();
            this.visitOrder.push(curr);
            for (const neigh of curr.neighbors) {
                neigh.evaluate(curr);
            }
            this.unvisited.sort((a,b)=> (a.DISTANCE > b.DISTANCE) ? 1: -1);
        }
        console.log(this.board.nodesMatrix.matrix);
        console.log(this.visitOrder);
    }

    visualize = () => {
        for (let i = 0; i < this.visitOrder.length ; i++){
            const node = this.visitOrder[i];
            
            if (node.TARGET_NODE) {
                setTimeout(() => {
                    node.setVISITED;
                    this.visualizePath();   
                },i*20);
                
                break;
            }
            else
                setTimeout(node.setVISITED,i*20);
        } 
    }

    visualizePath = () => {
        this.board.clearHTML();
        let curr = this.board.targetNode;
        let i = 1;
        while(curr) {
            setTimeout(curr.setPATH, 30*i);
            curr = curr.PREV;
            i++;
        }
    }

    
}