const PriorityQueue  = require('./PriorityQueue')
let q = new PriorityQueue((a,b)=> a.val-b.val)
q.inqueue({val:1})

q.inqueue({val:5})

q.inqueue({val:3})

q.inqueue({val:11})

q.inqueue({val:6})

q.inqueue({val:7})

q.inqueue({val:0})
let i=10
while(i){
    console.log(q.dequeue())
    i--
}