class Node {
    constructor(m,n, weight){
        this.m = m;
        this.n = n;
        this.VISITED = false;
        this.START_NODE = false;
        this.TARGET_NODE = false;
        this.POSITION = '';
        this.PREV;
        this.htmlElement;
        this.WALL = false;
        //Dijkstra fields
        this.DISTANCE=Infinity;        
        this.WEIGHT = weight;
        this.neighbors = [];
        //DFS fields
        this.discoverd=-1;
        this.finished=-1;
        this.FINISHED = false;
    }

    createNeighborsList = (nodesMatrix) => {
        switch(this.POSITION){
            case ('TOP_LEFT'):
                this.neighbors.push(nodesMatrix.getDownNeighborOf(this));
                this.neighbors.push(nodesMatrix.getRightNeighborOf(this));
                break;
            case('TOP_RIGHT'):
                this.neighbors.push(nodesMatrix.getLeftNeighborOf(this));
                this.neighbors.push(nodesMatrix.getDownNeighborOf(this));
                break;
            case('BOTTOM_LEFT'):
                this.neighbors.push(nodesMatrix.getRightNeighborOf(this));
                this.neighbors.push(nodesMatrix.getUpNeighborOf(this));
                break;
            case('BOTTOM_RIGHT'):
                this.neighbors.push(nodesMatrix.getLeftNeighborOf(this));
                this.neighbors.push(nodesMatrix.getUpNeighborOf(this));
                break;
            case('LEFT_EDGE'):
                this.neighbors.push(nodesMatrix.getRightNeighborOf(this));
                this.neighbors.push(nodesMatrix.getDownNeighborOf(this));
                this.neighbors.push(nodesMatrix.getUpNeighborOf(this));
                break;
            case('TOP_EDGE'):
                this.neighbors.push(nodesMatrix.getRightNeighborOf(this));
                this.neighbors.push(nodesMatrix.getLeftNeighborOf(this));
                this.neighbors.push(nodesMatrix.getDownNeighborOf(this));
                break;
            case('RIGHT_EDGE'):
                this.neighbors.push(nodesMatrix.getLeftNeighborOf(this));
                this.neighbors.push(nodesMatrix.getDownNeighborOf(this));
                this.neighbors.push(nodesMatrix.getUpNeighborOf(this));
                break;
            case('BOTTOM_EDGE'):
                this.neighbors.push(nodesMatrix.getRightNeighborOf(this));
                this.neighbors.push(nodesMatrix.getLeftNeighborOf(this));
                this.neighbors.push(nodesMatrix.getUpNeighborOf(this));
                break;
            case('INNER'):
                this.neighbors.push(nodesMatrix.getRightNeighborOf(this));
                this.neighbors.push(nodesMatrix.getLeftNeighborOf(this));
                this.neighbors.push(nodesMatrix.getDownNeighborOf(this));
                this.neighbors.push(nodesMatrix.getUpNeighborOf(this));
                break;
            default:
                throw new Error(`POSITION isn't named correctly or not define./n value:${this.POSITION} `)
        }
        // this.neighbors.push(nodesMatrix.getRightNeighborOf(this));
        // this.neighbors.push(nodesMatrix.getLeftNeighborOf(this));
        // this.neighbors.push(nodesMatrix.getDownNeighborOf(this));
        // this.neighbors.push(nodesMatrix.getUpNeighborOf(this));
    }
    evaluate = (sourceNode) => {
        const newDISTANCE = sourceNode.DISTANCE + this.WEIGHT;
         if (this.DISTANCE > newDISTANCE) {
             this.DISTANCE = newDISTANCE;
             this.PREV = sourceNode;
         }

    }
    setVISITED = () => {
        this.VISITED = true;
        this.htmlElement.classList.add('visited');
      
    }
    setUNVISITED = () => {
        this.VISITED = false;
        this.htmlElement.classList.remove('visited');
    }
    setFINISHED = () => {
        console.log('finished');
        this.FINISHED = true;
        this.htmlElement.classList.add('finished');
      
    }
    setUNFINISHED = () => {
        this.FINISHED =false;
        this.htmlElement.classList.remove('finished');
    }
    

    setPATH= () => {
        this.htmlElement.classList.add('path');
    }
    setNOTPATH = () => {
        this.htmlElement.classList.remove('path');
    }
    setTARGET = () => {
        this.TARGET_NODE = true;
        this.htmlElement.classList.add('target');
        this.setTextTransparent();
    }
    removeTARGET = () => {
        this.TARGET_NODE = false;
        this.htmlElement.classList.remove('target');
        this.removeTextTransparent();
    }

    setSTART = () => {
        this.START_NODE = true;
        this.htmlElement.classList.add('start');
        this.setTextTransparent();        
        this.DISTANCE = 0;
    }
    removeSTART = () => {
        this.START_NODE = false;
        this.htmlElement.classList.remove('start');
        this.removeTextTransparent();        
        this.DISTANCE = Infinity;
    }
    setWALL= () => {
        if (!this.WALL) {
            this.WALL = true;
            this.htmlElement.classList.add('wall');
            this.setTextTransparent();
        }
    }
    removeWALL = () => {
        if(this.WALL) {
            this.WALL = false;
            this.htmlElement.classList.remove('wall');
            this.removeTextTransparent();
        }
    }
    toggleWALL = () => {
        (this.WALL) ? this.removeWALL(): this.setWALL();
    }
    setTextTransparent = () => {
        this.htmlElement.childNodes[0].classList.add('transparent');
    }
    removeTextTransparent = () => {
        this.htmlElement.childNodes[0].classList.remove('transparent');
    }
    
    setText = (string) => {
        this.htmlElement.childNodes[0].innerHTML = string;
    }
}


