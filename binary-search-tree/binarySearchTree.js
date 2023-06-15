
class Node {
    #value = null;
    #left = null;
    #right = null;
    constructor(value) {
        this.#value = value;
    }

    get value() {
        return this.#value;
    }

    get left() {
        return this.#left;
    }

    get right() {
        return this.#right;
    }

    set left(l) {
        this.#left = l;
    }

    set right(r) {
        this.#right = r;
    }

    print() {
        console.log(`(${value})`)
    }
}

class BinaryTree {
    #root = null;
    constructor() {}

    insert(value) {
        if (!this.#root) {
            this.#root = new Node(value);
            return;
        }
        this.#insertNode(value, this.#root);
    }
    #insertNode(value, node) {
        if (value > node.value) {
            if (!node.right) {
                node.right = new Node(value);
                return;
            }
            this.#insertNode(value, node.right);
        } else if (value < node.value) {
            if (!node.left) {
                node.left = new Node(value);
                return;
            }
            this.#insertNode(value, node.left);
        } else {
            console.log("Value already exist");
        }
    }

    delete(value) {}

    search(value) {
        if (!this.#root) {
            return false;
        }
        return this.#search(value, this.#root);
    }
    #search(value, node) {
        if (!node) return false;
        if (node.value === value) {
            return true;
        }
        if (value > node.value) return this.#search(value, node.right);
        return this.#search(value, node.left);
    }

    max() {}
    min() {}

    depth() {
        return this.#depth(this.#root);
    }
    #depth(node) {
        if (node === null) return 0;
        const leftDepth = this.#depth(node.left);
        const rightDepth = this.#depth(node.right);
        return Math.max(leftDepth, rightDepth) + 1;
    }

    print() {
        if (!this.#root) {
            console.log("empty tree");
            return;
        }
        this.#print(this.#root, 0);
    }
    #print(node, level) {
        console.log(`Level: ${level}, Value: ${node.value}`);
        if (node.left) {
            this.#print(node.left, level + 1);
        }
        if (node.right) {
            this.#print(node.right, level + 1);
        }
    }

    asJson() {
        if (!this.#root) return {};
        return {
            root: this.#asJson(this.#root)
        };
    }
    #asJson(node) {
        if (!node) return null;
        return {
            value: node.value,
            left: this.#asJson(node.left),
            right: this.#asJson(node.right)
        };
    }
}

const binaryTree = new BinaryTree();
console.log("================================== BEGIN ==================================");
binaryTree.insert(5);
binaryTree.insert(6);
binaryTree.insert(3);
binaryTree.insert(1);
binaryTree.insert(10);
console.log(binaryTree.depth());
const asJson = binaryTree.asJson();
console.log(JSON.stringify(asJson));
binaryTree.print();
console.log(`Search 99: ${binaryTree.search(99)}`);
console.log(`Search 10: ${binaryTree.search(10)}`);
console.log("================================== END ==================================");
