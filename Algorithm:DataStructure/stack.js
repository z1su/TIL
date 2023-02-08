class Node {
    constructor(data,next=null){
        this.data=data;
        this.next=next;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.size = 0;
    }

    push(data){
        let newNode = new Node(data,null);
        if(this.isEmpty()) {
            this.top = newNode;
            this.size++;

            return;
        }
        // 새로 들어온 노드는 탑을 가리키고
        newNode.next = this.top;
        // top은 newnode를 가리킨다.
        this.top = newNode;

        this.size++;

    }

    pop(){
        if(this.isEmpty()){
            return;
        }

        let cur = this.top;
        this.top = this.top.next;

        this.size--;
        console.log(cur.data);
    }

    print(){
        let cur = this.top;
        console.log('크기 :: ${this.getSize()}');
        while (cur != null){
            console.log(cur.data);
            cur = cur.next;
        }
    }

    getSize(){
        return this.size;
    }

    isEmpty(){
        return !this.size;
    }
}

const stack = new Stack();
stack.push(5);
stack.push(4);
stack.push(3);
stack.push(2);
stack.print();

stack.pop();
stack.print();