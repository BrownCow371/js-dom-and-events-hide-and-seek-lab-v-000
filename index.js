function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const list =  document.querySelectorAll(".ranked-list li");
  for (let i = 0; i<list.length; i++){
    list[i].innerHTML = parseInt(list[i].innerHTML)+n;
  }
}

function deepestChild() {
  // const parent = document.querySelector("div#grand-node").querySelectorAll("div");
  let answer;
  for (let parent = document.querySelector("div#grand-node").querySelector("div"); parent; parent = parent.querySelector("div")) {
    if (!parent.querySelector("div")) {answer = parent};
  }
  return answer;
}

// function deepestChild() {
//   let node = document.getElementById('grand-node')
//   let nextNode = node.children[0]
//
//   while (nextNode) {
//     node = nextNode
//     nextNode = node.children[0]
//   }
//
//   return node
// }
