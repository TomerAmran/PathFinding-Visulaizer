class Dijkstra {
    constructor(board) {
        this.board = board;
        this.unvisited =[];
        this.visitOrder =[];
    }

    init = () => {
        let q = new PriorityQueue((node1,node2)=>node2.DISTANCE-node1.DISTANCE)
        let visited = new Set()
        q.inqueue(this.board.startNode)
        visited.add(this.board.startNode)
        while (!q.isEmpty()){
            let curr_node = q.dequeue()
            this.visitOrder.push(curr_node)
            for (let neigh of curr_node.neighbors){
                if (!neigh.WALL & ! visited.has(neigh)){
                    neigh.DISTANCE = curr_node.DISTANCE + neigh.WEIGHT
                    neigh.PREV = curr_node
                    visited.add(neigh)
                    q.inqueue(neigh)
                }
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