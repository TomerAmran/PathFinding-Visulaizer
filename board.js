class Board {
    constructor() {
        this.nodesMatrix;
        this.boardElement = document.getElementById('board');
        this.width;
        this.height;
        this.mSize; //matrix notation
        this.nSize; //matrix notation
        this.startNode;
        this.targetNode;  
    }

    createBoard = () => {
        const board = this.boardElement;
         //set board dementions
        this.width = window.innerWidth;
        this.height = window.innerHeight * 0.8;
        board.style.width = this.width;
        board.style.height = this.height;
        this.mSize = Math.floor(this.height/30);
        this.nSize = Math.floor(this.width/30);
        //creat HTML boardwoth 'table' element (tr,td)
        for (let i=1 ; i<=this.mSize; i++) {
            const row = document.createElement('tr');
            row.id = `row ${i}`;
            for (let j=1 ; j<=this.nSize; j++){
                const node = document.createElement('td');
                node.id = `node_${i}_${j}`;
                node.className += 'node';
                const text = document.createElement('div');
                text.className += 'text_in_node';
                node.appendChild(text);
                row.appendChild(node);
            }
            board.appendChild(row);
        }
        //creat nodes (for the algorithem)
        this.nodesMatrix = new NodesMatrix(this.mSize,this.nSize);
        for (let i=1 ; i<=this.mSize; i++) {
            for (let j=1 ; j<=this.nSize; j++){
                const node = new Node(i,j,1);
                node.htmlElement = document.getElementById(`node_${i}_${j}`);
                this.setTypeOfNode(node,this.mSize,this.nSize);
                this.nodesMatrix.put(node);
            }
        }
        //add a function to move
        this.setStartNode(Math.floor(this.mSize/2),Math.floor(this.nSize/4));
        this.setTargetNode(Math.floor(this.mSize/2),Math.floor(this.nSize*3/4));
        
        this.nodesMatrix.creatNeighborsListOfEachNode();
        creatEventListeners(this);
    }



    //Sets type of node by location in the grid
    setTypeOfNode = (node, mSize,nSize) => {
        const m = node.m;
        const n = node.n;
        if (m===1){
            if(n===1)
                node.POSITION = 'TOP_LEFT';
            else if(n===nSize)
                node.POSITION = 'TOP_RIGHT';
            else
                node.POSITION = 'TOP_EDGE';}
        else if (m===mSize){
            if(n===1)
                node.POSITION = 'BOTTOM_LEFT';
            else if(n===nSize)
                node.POSITION = 'BOTTOM_RIGHT';
            else
                node.POSITION = 'BOTTOM_EDGE';}
        else{
            if(n===1)
                node.POSITION = 'LEFT_EDGE';
            else if(n===nSize)
                node.POSITION = 'RIGHT_EDGE';
            else
            node.POSITION = 'INNER';
        }
         //maybe i should use switch insted of if's   
    }

    setStartNode = (m,n) => {
        const node = this.nodesMatrix.get(m,n);
        node.setSTART();
        this.startNode = node;
    }
    
    setTargetNode = (m,n) => {
        const node = this.nodesMatrix.get(m,n);
        node.setTARGET();
        this.targetNode = node;
    }
    clearHTML = () => {
        const allNodes = this.nodesMatrix.getALLasArray();
        for (const node of allNodes) {
            node.setUNVISITED();
            node.setNOTPATH();
        }
    }
    
    evenWeights = () => {
        const allNodes = this.nodesMatrix.getALLasArray();
        for (const node of allNodes){
            node.WEIGHT =1;
            node.htmlElement.childNodes[0].innerHTML = ``;
        }
    }
    
    randomWeights = () => {
        const allNodes = this.nodesMatrix.getALLasArray();
        for (const node of allNodes){
            const random = Math.floor(Math.random()*10+1);
            node.WEIGHT = random;
            node.htmlElement.childNodes[0].innerHTML = `${random}`;
        }
    }

    initDijkstra = () => {
        this.clearHTML();
        const dijkstra = new Dijkstra(this);
        dijkstra.init();
        dijkstra.visualize();
    }
    
}

const newBoard = new Board();
newBoard.createBoard();
newBoard.randomWeights();
