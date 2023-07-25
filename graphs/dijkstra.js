const adjacencyMatrix = {
    'a': { 'b': 2, 'd': 8 },
    'b': { 'a': 2, 'd': 5, 'e': 6 },
    'c': { 'e': 9, 'f': 3 },
    'd': { 'a': 8, 'b': 5, 'e': 3, 'f': 2 },
    'e': { 'b': 6, 'c': 9, 'd': 3, 'f': 1 },
    'f': { 'c': 3, 'd': 2, 'e': 1 },
}


class Vertex {
    constructor(name){
        this.name = name;
        this.neighborsDistances = [];
        this.neighborsNames = [];

        // Dijkstra specific
        this.minDistanceFromSource = Infinity;
        this.previousVertex = null;
        this.done = false;
    }

    addNeighbor(vertexName, distance) {
        this.neighborsNames.push(vertexName);
        this.neighborsDistances.push(distance);
    }
}

class Graph {
    constructor(graph) {
       this.vertexes = new Map();
       this.init(graph);
    }

    /**
     * Initializes the graph according to given adjacency matrix
     * 
     * @param {adjacencyMatrix} adjacencyMatrix 
     */
    init(adjacencyMatrix) {
        for (let vertexName in adjacencyMatrix) {
            this.vertexes.set(vertexName, new Vertex(vertexName));
        }

        for (let vertexName in adjacencyMatrix) {
            const vertex = this.vertexes.get(vertexName);
            const vertexNeighbors = adjacencyMatrix[vertexName];
            for (let neighbor in vertexNeighbors) {
                const distance = vertexNeighbors[neighbor];
                vertex.addNeighbor(neighbor, distance);
            }
        }
    }

   /**
    * Returns the vertex with the minimum distance from source
    */
    getMinDistanceVertex(vertexes) {
        let minDistanceVertex = null;
        for (let i = 0; i < vertexes.length; i++) {
            if (!vertexes[i].done) {
                if (!minDistanceVertex) {
                    minDistanceVertex = vertexes[i];
                } else if (vertexes[i].minDistanceFromSource < minDistanceVertex.minDistanceFromSource) {
                    minDistanceVertex = vertexes[i];
                }
            }
        }
        return minDistanceVertex;
    }

    /**
     * Runs Dijkstra's algorithm on the graph.
     * Updates each vertex with its minimum distance from source and its previous vertex
     */
    runDijkstra(source) {
        // Start from source (distance=0)
        const startNode = this.vertexes.get(source);
        startNode.minDistanceFromSource = 0;
        startNode.done = true;

        let currentNode = startNode;
        while (currentNode) {

            // get current node's neighbors and distances
            const neighbors = currentNode.neighborsNames.map((neighborName) => this.vertexes.get(neighborName));
            const distances = currentNode.neighborsDistances;
            for (let i = 0; i < neighbors.length; i++) {
                const neighbor = neighbors[i];
                const distance = distances[i];
                if (!neighbor.done) {
                    const minDistanceFromSource = Math.min(currentNode.minDistanceFromSource + distance, neighbor.minDistanceFromSource);
                    if (minDistanceFromSource < neighbor.minDistanceFromSource) {
                        //shorter path found
                        neighbor.minDistanceFromSource = minDistanceFromSource;
                        neighbor.previousVertex = currentNode;
                    }
                }
            }
            currentNode.done = true; // we've finished with this node
            currentNode = this.getMinDistanceVertex(neighbors);
        }
    }

    getShortestPath(sourceName, destinationName) {
        const source = this.vertexes.get(sourceName);
        const destination = this.vertexes.get(destinationName);
        let currentNode = destination;
        const result = [];
        result.push(currentNode.name);
        while (currentNode != source) {
            currentNode = currentNode.previousVertex;
            result.push(currentNode.name);
        }
        return result.reverse();
    }
}

// Create the graph with the adjacency matrix
const graph = new Graph(adjacencyMatrix);

// Run Dijkstra algorithm on the graph where source node = 'a'
graph.runDijkstra('a');

// Print shortest path from node 'a' to 'c'
console.log(graph.getShortestPath('a', 'c'));

