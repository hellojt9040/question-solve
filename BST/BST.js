class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(val) {
    const newNode = new Node(val);
    if (!this.root) return (this.root = newNode);

    let current = this.root;
    while (true) {
      if (val < current.value) {
        if (current.left) {
          current = current.left;
        } else {
          current.left = newNode;
          return this;
        }
      } else if (val > current.value) {
        if (current.right) {
          current = current.right;
        } else {
          current.right = newNode;
          return this;
        }
      } else {
        return this;
      }
    }
  }
  find(val) {
    let current = this.root;
    while (true) {
      if (current.value === val) {
        return current;
      } else if (val < current.value) {
        if (current.left) {
          current = current.left;
        } else {
          return false;
        }
      } else {
        if (current.right) {
          current = current.right;
        } else {
          return false;
        }
      }
    }
  }
  bfs() {
    const queue = [];
    const visited = [];
    queue.push(this.root);
    while (queue.length !== 0) {
      const visitingNode = queue.shift();
      if (visitingNode.left) queue.push(visitingNode.left);
      if (visitingNode.right) queue.push(visitingNode.right);
      visited.push(visitingNode.value);
    }
    return visited;
  }
  dfs_preOrder() {
    const visited = [];
    const traverse = (node) => {
      visited.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return visited;
  }
  dfs_inOrder() {
    const visited = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      visited.push(node.value);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return visited;
  }
  dfs_postOrder() {
    const visited = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visited.push(node.value);
    };
    traverse(this.root);
    return visited;
  }
}

const bst = new BinarySearchTree();
bst.root = new Node(50);
bst.root.left = new Node(30);
bst.root.left.left = new Node(25);
bst.root.left.right = new Node(35);
bst.root.right = new Node(80);
bst.root.right.left = new Node(70);
bst.root.right.right = new Node(90);
console.log(bst.find(30));
console.log('BFS', bst.bfs());
console.log('DFS_PRE_ORDER', bst.dfs_preOrder());
console.log('DFS_IN_ORDER', bst.dfs_inOrder());
console.log('DFS_POST_ORDER', bst.dfs_postOrder());
console.log(bst);
