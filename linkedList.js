// Node
function Node(element) {
    this.element = element;
    this.next = null;
}

// Linked list
function LinkedList() {
    this.head = new Node("head");
    this.find = find;
    this.append = append;
    this.insert = insert;
    this.remove = remove;
    this.toString = toString;
    this.findPrevious = findPrevious;
}

// look for Node
function find(item) {
    var currNode = this.head;
    while (currNode.element != item) {
        currNode = currNode.next;
    }
    return currNode;
}

// look for previous Node
function findPrevious(item) {
    var currNode = this.head;
    while(currNode.next != null && currNode.next.element != item) {
        currNode = currNode.next;
    }
    return currNode;
}

// append Node
function append(newElement) {
    var newNode = new Node(newElement);
    var current = this.head;
    while (current.next != null) {
        current = current.next;
    }
    current.next = newNode;
}

// insert Node
function insert(newElement, item) {
    var newNode = new Node(newElement);
    var current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
}

// remove Node
function remove(item) {
    var preNode = this.findPrevious(item);
    preNode.next = preNode.next.next;
}

// display linked list
function toString() {
    var str = '[';
    var currNode = this.head;
    while(currNode.next != null) {
        str += currNode.next.element+ ' ';
        currNode = currNode.next;
    }
    return str+']';
}

var linkedList = new LinkedList();
linkedList.insert("A", "head");
linkedList.insert("B", "A");
linkedList.insert("C", "B");
linkedList.remove("B");
linkedList.append("D");
linkedList.append("E");
console.log(linkedList.toString());