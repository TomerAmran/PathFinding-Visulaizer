class NodesMatrix {
    constructor(m,n){
        this.m = m;
        this.n = n;
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
        let t;
        if (node.n+1 == this.n+1)
            t = 1;
        else t = node.n+1;
        return this.get(node.m,t);
    }
    getLeftNeighborOf = (node) => {
        let t;
        if (node.n-1 == 0)
            t = this.n;
        else t = node.n-1;
        return this.get(node.m,t);
    }
    getUpNeighborOf = (node) => {
        let t =0;
        // console.log(node.m-1);
        if (node.m-1 == 0)
            t = this.m;
        else {
            t = (node.m-1);
        }
        return this.get(t,node.n);
    }
    getDownNeighborOf = (node) => {
        let t;
        if (node.m+1 == this.m+1)
            t = 1;
        else t = node.m+1;
        // console.log(t);
        return this.get(t,node.n);
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

