export default class MatrixMultiplication {

    numOfRowsMatrixA = 0;
    numOfColumnsMatrixA = 0;
    numOfRowsMatrixB = 0;
    numOfColumnsMatrixB = 0;

    #message = {
        notAnArray: 'Matrix must be an Array',
        emptyMatrix: 'Matrix must contain values',
        notMultiplicative: 'Number of columns of matrix A is not equal number of rows of matrix B',
    };

    constructor(matrixA, matrixB) {
        this.matrixA = matrixA;
        this.matrixB = matrixB;
    }

    #validateMatrix() {
        /***
         * Check if given matrices are array
         */
        if (!Array.isArray(this.matrixA) || (!Array.isArray(this.matrixB))) {
            throw new Error(this.#message.notAnArray);
        }

        /***
         * Check if given matrices are not empty
         */
        this.numOfRowsMatrixA = this.matrixA.length;
        this.numOfRowsMatrixB = this.matrixB.length;

        if (this.numOfRowsMatrixA === 0 || this.numOfRowsMatrixB === 0) {
            throw new Error(this.#message.emptyMatrix);
        }

        /***
         * Check matrix multiplication rule
         * Number of columns of first matrix should be equal to number of rows of second matrix
         */
        this.numOfColumnsMatrixA = this.matrixA[0].length;
        this.numOfColumnsMatrixB = this.matrixB[0].length;

        if (!(this.matrixA.every(x=> x.length === this.numOfColumnsMatrixA)) || !(this.matrixB.every(x=> x.length === this.numOfRowsMatrixB))) {
            throw new Error(this.#message.notMultiplicative);
        }

        /***
         * Check each matrix row must have equal number of columns
         */
        // if (!(this.matrixA.every(x=> x.length === this.numOfColumnsMatrixA)) || !(this.matrixB.every(x=> x.length === this.numOfRowsMatrixB))) {
        //     throw new Error('Hello');
        // }
    }

    multiply(prettify = false) {
        try {
            /***
             * Validating matrices before multiplying
             */
            this.#validateMatrix();
            /***
             * Resulting Matrix rows should be equal to rows of matrix A
             */
            let resultingMatrix = new Array(this.numOfRowsMatrixA);

            for (let i = 0; i < resultingMatrix.length; i++) {
                /***
                 * Resulting Matrix columns should be equal to columns of matrix B
                 */
                resultingMatrix[i] = new Array(this.numOfColumnsMatrixB);

                for (let j = 0; j < this.numOfColumnsMatrixB; j++) {
                    /***
                     * Default value added
                     */
                    resultingMatrix[i][j] = 0;

                    for (let k = 0; k < this.numOfColumnsMatrixA; k++) {

                        resultingMatrix[i][j] += Number.parseInt(this.matrixA[i][k]) * Number.parseInt(this.matrixB[k][j]);
                    }
                }
            }

            return (prettify ? this.displayAsAMatrix(resultingMatrix) : resultingMatrix) ;
        } catch (error) {
            console.error(error);
        }
    }

    displayAsAMatrix(matrix) {

        let prettyMatrix = '';

        for (let row of matrix) {
            for (let column of row) {
                prettyMatrix += (column + '\t')
            }
            prettyMatrix += '\n';
        }

        return prettyMatrix;
    }
}
