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
    if (!this.root) {
      this.root = newNode;
      return this;
    }

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
  min(root) {
    if (root.left) {
      return this.min(root.left);
    } else {
      return root.value;
    }
  }
  max(root) {
    if (root.right) {
      return this.max(root.right);
    } else {
      return root.value;
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
  delete(value) {
    let deletedNode;
    const deleteNode = (root, val) => {
      if (root.value === null) return null;
      if (val < root.value) {
        root.left = deleteNode(root.left, val);
      } else if (val > root.value) {
        root.right = deleteNode(root.right, val);
      } else {
        deletedNode = root;
        if (!root.left && !root.right) {
          return null;
        }
        if (!root.left) return root.right;
        if (!root.right) return root.left;
        root.value = this.min(root.right);
        root.right = deleteNode(root.right, root.value);
      }
      return root;
    };
    this.root = deleteNode(this.root, value);
    return deletedNode;
  }
  findSecondLargest(root) {
    if (root.right.right) {
      return this.findSecondLargest(root.right);
    }
    if (root.right) {
      return root;
    }
  }
  height(root) {
    if (!root) return -1;
    if (!root.left && !root.right) return 0;
    if (!root.left) return 1 + this.height(root.right);
    if (!root.right) return 1 + this.height(root.left);
    return 1 + Math.max(this.height(root.left), this.height(root.right));
  }
  maxDepth(node) {
    if (node == null) return 0;
    else {
      /* compute the depth of each subtree */
      let lDepth = this.maxDepth(node.left);
      let rDepth = this.maxDepth(node.right);

      /* use the larger one */
      if (lDepth > rDepth) return lDepth + 1;
      else return rDepth + 1;
    }
  }
  checkBalanced(root) {
    const helper = (root, depth) => {
      if (!root) return depth;
      const left = helper(root.left, depth + 1);
      const right = helper(root.right, depth + 1);
      if (left === -1 || right === -1 || Math.abs(left - right) > 1) return -1;
      return Math.max(left, right);
    };
    return helper(root, 0) >= 0;
  }
}

const bst = new BinarySearchTree();
// bst
//   .insert(22)
//   .insert(49)
//   .insert(85)
//   .insert(66)
//   .insert(95)
//   .insert(90)
//   .insert(100)
//   .insert(88)
//   .insert(93)
//   .insert(89);

bst.insert(15).insert(20).insert(10).insert(12).insert(5); //.insert(6)//.insert(7);
// .insert(7)
// .insert(88)
// .insert(93)
// .insert(89);
// console.log(bst.find(30));
// console.log('BFS', bst.bfs());
// console.log('DFS_PRE_ORDER', bst.dfs_preOrder());
// console.log('DFS_IN_ORDER', bst.dfs_inOrder());
// console.log('DFS_POST_ORDER', bst.dfs_postOrder());
// console.log('min...', bst.min(bst.root));
// console.log('max...', bst.max(bst.root));
// console.log(bst.delete(85));
// console.log(bst.findSecondLargest(bst.root));
// console.log('height', bst.height(bst.find(15)));
// console.log('maxDepth', bst.maxDepth(bst.root));
// console.log('maxDepth', bst.maxDepth(bst.find(89)));
console.log('balanced', bst.checkBalanced(bst.root));
console.log(bst);
