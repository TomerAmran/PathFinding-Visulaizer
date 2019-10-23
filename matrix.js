class NodesMatrix {
    constructor(m,n){
        if (m<1 || n<1)
            throw new Error('size should be a positive integer')
        //init matrix 
        this.matrix = Array.from({length: m}, e => Array.from({length: n}))
           
    } 

    put = (node) => {
        if (node.m<1 || node.m>this.m ||node.n<1 || node.n>this.n )
            throw new Error(`index/s out of range. matrixsize: ${this.m}*${this.m}. requested: ${m},${n}`);
        this.matrix[node.m-1][node.n-1] = node;
    }
    get = (m,n) => {
        return this.matrix[m-1][n-1];
    }
    getRightNeighborOf = (node) => {
        return this.get(node.m,node.n+1);
    }
    getLeftNeighborOf = (node) => {
        return this.get(node.m,node.n-1);
    }
    getUpNeighborOf = (node) => {
        return this.get(node.m-1,node.n);
    }
    getDownNeighborOf = (node) => {
        return this.get(node.m+1,node.n);
    }


    creatNeighborsListOfEachNode = () => {
        for (let row of this.matrix)
            for (let node of row) {
                node.createNeighborsList(this);
            }
    }

    getALLasArray = () => {
        return this.matrix.flat();
    }
}


//tests

