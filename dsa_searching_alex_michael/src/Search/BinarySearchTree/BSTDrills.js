const BinarySearchTree = require('./BinarySearchTree')
const Queue = require('./Queue')


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

  // console.log(inOrder(BST));
  // console.log(preOrder(BST));
  // console.log(postOrder(BST));

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

  function preOrder(tree, array=[]) {
    array.push(tree.key)
    if(tree.left) {
      preOrder(tree.left, array)
    }
    if(tree.right) {
      preOrder(tree.right, array)
    }
    return array;
  }

  function postOrder(tree, array=[]) {
    if(tree.left) {
      postOrder(tree.left, array)
    }
    if(tree.right) {
      postOrder(tree.right, array)
    }
    array.push(tree.key)
    return array;
  }

  let enterprise = new BinarySearchTree();
  enterprise.insert(10, 'Captain Picard');
  enterprise.insert(8, 'Commander Riker');
  enterprise.insert(9, 'Lt. Cmdr. LaForge');
  enterprise.insert(7, 'Let. Cmdr. Worf');
  enterprise.insert(1, 'Lt. Red Shirt');
  enterprise.insert(15, 'Commander Data');
  enterprise.insert(17, 'Lt. Cmdr. Crusher');
  enterprise.insert(16, 'Lieutenant Selar');

  function bfs(tree, values = []) {
    const queue = new Queue();
    let currNode = tree;

    while(currNode !== null) {
      
      values.push(currNode.value);
      if(currNode.left) {
        queue.enqueue(currNode.left);
      }

      if(currNode.right) {
        queue.enqueue(currNode.right);
      } 
      currNode = queue.dequeue();
    }
    return values;
  }
  // console.log(bfs(enterprise));

  function maxProfitMax(array) {
    let start = 0;
    let end = 0;
    let maxProfit = 0;
    for(let i=0; i < array.length; i++) {
      if ((i === 0 || array[i] < array [i-1]) && array[i] < array[i+1]) {
        start = i;
      }  
      if ((i > 0 && array[i-1] < array[i]) && (i + 1 === array.length || array[i + 1] < array[i])) {
        end = i;
      }
      if(end < start) {
        end = start;
      } 
      let profit = array[end] - array[start];
      if(maxProfit < profit) {
        console.log('start: ' + start)
        console.log('end: ' + end)
        console.log('maxProfit ' + profit)
        maxProfit = profit;
        start = end;
      }
    }
    return maxProfit;
  }

  // console.log(maxProfitMax([128, 97, 121, 123, 96, 98, 97, 125, 105]));
  
  let counter = 0;

  function drop(floor) {
    counter++;
    // console.log(floor)
    //returns true if egg does break
    return floor > 100;
  }


  function eggDrop(tower = 100) {
    //smallest bigSteps such that 1 + 2 + ... + bigSteps >= tower
    let bigSteps = Math.ceil(1/2 * Math.sqrt(8*tower + 1) - 1)
    let floor = 0;
    while (bigSteps > 0 && floor <= tower) {
      floor = floor + bigSteps;
      bigSteps--;
      if(drop(floor)) break;  
    }
    floor -= bigSteps;
    while(floor <= tower) {
      if(drop(floor)) break;
      floor++;  
    }
    console.log(counter);
    return --floor;
  }
  console.log(eggDrop());
}

main();