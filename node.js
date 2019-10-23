class Node {
    constructor(m,n, weight){
        this.m = m;
        this.n = n;
        this.DISTANCE=Infinity;        
        this.WEIGHT = weight;
        this.neighbors = [];
        this.VISITED = false;
        this.START_NODE = false;
        this.TARGET_NODE = false;
        this.POSITION = '';
        this.PREV;
        this.htmlElement;
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
    }
    evaluate = (sourceNode) => {
        const newDISTANCE = sourceNode.DISTANCE + this.WEIGHT;
         if (this.DISTANCE > newDISTANCE) {
             this.DISTANCE = newDISTANCE;
             this.PREV = sourceNode;
         }

    }
    setVISITED = () => {
        this.VISITED =true;
        this.htmlElement.classList.add('visited');
      
    }
    setUNVISITED = () => {
        this.VISITED =false;
        this.htmlElement.classList.remove('visited');
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
        this.htmlElement.childNodes[0].classList.add('transparent');
    }
    removeTARGET = () => {
        this.TARGET_NODE = false;
        this.htmlElement.classList.add('target');
        this.htmlElement.childNodes[0].classList.remove('transparent');
    }

    setSTART = () => {
        this.START_NODE = true;
        this.htmlElement.classList.add('start');
        console.log(this.htmlElement);
        
        this.htmlElement.childNodes[0].classList.add('transparent');
        this.DISTANCE = 0;
    }
    removeSTART = () => {
        this.START_NODE = false;
        this.htmlElement.classList.remove('start');
        this.htmlElement.childNodes[0].classList.remove('transparent');
        this.DISTANCE = Infinity;
    }
}


