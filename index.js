import MatrixMultiplication from "./my-package/MatrixMultiplication.js";

let matrixA = [[0,5,1], [5,5,2], [2,3,5], [12,2,3], [2,3,5]];
let matrixB = [[3,4,1], [3,-2,1], [4,-2,2]];

let matrixMultiplicationInstance = new MatrixMultiplication(matrixA,matrixB);
let outputMatrix = matrixMultiplicationInstance.multiply(true);

console.log(outputMatrix);
