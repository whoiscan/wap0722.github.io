class Node {
    constructor(element) {
        this.element = element;
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(element) {
        let node = new Node(element);
        let current;

        if (this.head != null) {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        } else {
            this.head = node;
        }
        this.size++;
    }

    remove(element) {
        let current = this.head;
        let prev = null;

        while (current != null) {
            if (current.element === element) {
                if (prev != null) {
                    prev.next = current.next;
                } else {
                    this.head = current.next;
                }
                this.size--;
                return current.element;
            }
            prev = current;
            current = current.next;
        }
        return -1;
    }

    print() {
        let curr = this.head;
        let str = "LinkedList{";
        while (curr) {
            str += curr.element;
            if (curr.next != null)
                str += ", ";
            curr = curr.next;
        }
        console.log(str + "}");
    }
}

let linkedList = new LinkedList();
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.print();
linkedList.remove(3);
linkedList.print();