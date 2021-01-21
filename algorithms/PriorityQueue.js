class PriorityQueue{
    constructor(comperator){
        this.comperator = comperator;
        this.arr = []
    }
    inqueue = (e) =>{
        this.arr.push(e)
        this.heapifyUp(this.arr.length-1)
    }
    peak = () =>{
        return this.arr[0]
    }
    dequeue = () => {
        if (this.arr.length === 0)
            return null
        else if (this.arr.length === 1){
            return this.arr.pop()
        }
        else {
            let ans  = this.arr[0]
            this.arr[0]  = this.arr.pop()
            this.heapifyDown(0)
            return ans
        }
    }
    heapifyUp(curr_index){
        if (curr_index === 0)
            return
        
        let parent_index = this.parentIndex(curr_index)

        if (this.comperator(this.arr[curr_index], this.arr[parent_index])>0){
            this.swap(curr_index,parent_index)
            this.heapifyUp(parent_index)
        } 
    }
    heapifyDown(curr_index){
        let curr_node = this.arr[curr_index]
        let l_child = this.leftChild(curr_index)
        let r_child = this.rightChild(curr_index)
        if (l_child && ! r_child){
            if (this.comperator(l_child, curr_node) > 0) // if curr_node < l_child
                this.swap(curr_index, this.leftChildIndex(curr_index))
                this.heapifyDown(this.leftChildIndex(curr_index))
        }
        if (!l_child && r_child){
            if (this.comperator(r_child, curr_node) > 0) // if curr_node < l_child
                this.swap(curr_index, this.rightChildIndex(curr_index))
                this.heapifyDown(this.rightChildIndex(curr_index))
        }
        if (l_child && r_child){
            let max  = this.max(curr_node,l_child,r_child)
            if (max === l_child){
                this.swap(curr_index, this.leftChildIndex(curr_index))
                this.heapifyDown(this.leftChildIndex(curr_index))
            }
            if (max === r_child){
                this.swap(curr_index, this.rightChildIndex(curr_index))
                this.heapifyDown(this.rightChildIndex(curr_index))
            }
        }

    }
    isEmpty = () => {
        return (this.arr.length === 0)
    }
    parentIndex(childIndex){
        if (childIndex === 0){
            throw 'root dosent have parent'
        } 
        if (childIndex % 2 === 1)
            return (childIndex-1)/2
        else 
            return (childIndex-2)/2
    }
    leftChildIndex(parentIndex){
        let ans = parentIndex*2+1
        if (ans >= this.arr.length)
            return null
        else return ans
    }
    rightChildIndex(parentIndex){
        let ans = parentIndex*2+2
        if (ans >= this.arr.length)
            return null
        else return ans
    }
    leftChild(parentIndex){
        let childIndex = this.leftChildIndex(parentIndex)
        if (childIndex !==null)
            return this.arr[childIndex]
        else 
            return null
    }
    rightChild(parentIndex){
        let childIndex = this.rightChildIndex(parentIndex)
        if (childIndex !==null)
            return this.arr[childIndex]
        else  
            return null
    }
    parent(childIndex){
        let parent_index = this.parentIndex
    }
    swap(i,j){
        [this.arr[i], this.arr[j]]= [this.arr[j], this.arr[i]]
    }
    max(e1,e2,e3){
        if (this.comperator(e1,e2)>=0){
            if (this.comperator(e1,e3)>=0)
                return e1
            else 
            return e3
        }
        else {
            if (this.comperator(e2,e3)>=0)
                return e2
            else 
            return e3
        }
    }
}
// module.exports = PriorityQueue