class DFS{
    constructor(board){
        this.board = board;
        this.stack = [];
        this.visitOrder=[];
    }
    init = () => {
        this.board.evenWeights();
        this.stack.push(this.board.startNode);
        while(this.stack.length > 0){//notempty
            const curr = this.stack.pop();
            if (!curr.WALL){
                this.visitOrder.push(curr);
                for (let neigh of curr.neighbors){
                    if(!neigh.WALL && !this.visitOrder.includes(neigh)){
                        this.stack.push(neigh)
                        neigh.PREV = curr;
                    }
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