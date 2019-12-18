const BinarySearchTree = require('./BinarySearchTree')

function main() {
  let BST = new BinarySearchTree();

  BST.insert(25)
  BST.insert(15)
  BST.insert(50)
  BST.insert(10)
  BST.insert(24)
  BST.insert(35)
  BST.insert(70)
  BST.insert(4)
  BST.insert(12)
  BST.insert(18)
  BST.insert(31)
  BST.insert(44)
  BST.insert(66)
  BST.insert(90)
  BST.insert(22)

  console.log(inOrder(BST));

  function inOrder(tree, array=[]) {
    if(tree.left) {
      inOrder(tree.left, array)
    }
    array.push(tree.key)
    if(tree.right) {

      inOrder(tree.right, array)
    }
    return array;
  }

  
}

main();