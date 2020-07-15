class Graph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);
  }

  removeVertex(vertex) {
    this.adjacencyList[vertex].forEach(adjacentVertex => this.removeEdge(vertex, adjacentVertex));
    delete this.adjacencyList[vertex];
  }

  depthFirstRecursive(start) {
    const visited = {};
    const results = [];
    const adjacencyList = this.adjacencyList;

    function helper(vertex) {
      if (!vertex) {
        return null;
      }
      visited[vertex] = true;
      results.push(vertex);
      adjacencyList[vertex].forEach(neighbor => {
        if ((!visited[neighbor])) {
          return helper(neighbor);
        }
      });
    }

    helper(start);
    return results;
  }
}