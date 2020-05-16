class DFS{
    constructor(board){
        this.board = board;
        this.stack =[];
        this.visitOrder=[];
        this.time =0;
    }
    init = () => {
        this.board.evenWeights();
        // this.stack = this.board.nodesMatrix.getALLasArray();
        this.stack.push(this.board.startNode);
        while(this.stack.length > 0){//notempty
            const curr = this.stack.pop();
            if (curr.m) //is Node becuase there is an 'm' field
                this.exploreNode(curr);
            else
                this.exploreVertex(curr);
            
        }

    }

    exploreNode = (curr) => {
        if (!curr.WALL){
            if (curr.discoverd <0) {
                curr.discoverd = ++this.time;
                this.stack.push(curr);
                this.visitOrder.push(curr);
                for (let neigh of curr.neighbors){
                    this.stack.push([curr,neigh]);
                }
            }
            else if (curr.finished<0){
                curr.finished = ++this.time;
                this.visitOrder.push(curr);
            }
        }
    }

    exploreVertex= (pair) => {
        let from = pair[0];
        let to = pair[1];
        if (!to.WALL){
            // this.visitOrder.push(to);
            if (to.discoverd < 0){
                to.PREV = from;
                this.exploreNode(to);
            }
            // else if (from.discoverd < to.discoverd){
            //     to.PREV = from;
            // }
        }
        

    }


    visualize = () => {
        let i;
        for ( i= 0; i < this.visitOrder.length ; i++){
            const node = this.visitOrder[i];
            if (!node.VISITED){
                node.VISITED = true;
                setTimeout(node.setVISITED,i*10);
                setTimeout(node.setPATH, i*10 +5);
                setTimeout(node.setNOTPATH, i*10 +10);   
            }
            else{
                setTimeout(node.setUNVISITED,i*10);
                setTimeout(node.setFINISHED,i*10);
                setTimeout(node.setPATH, i*10 +5);
                setTimeout(node.setNOTPATH, i*10 +10);  
            }
        }
        setTimeout(this.visualizePath ,i*10);
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
            node.setFINISHED();
        }
        this.instantVisualizePath();
    }

    instantVisualizePath = () => {
        let curr = this.board.targetNode;
        while(curr) {
            curr.setPATH();
            curr = curr.PREV;
        }
    }
}
