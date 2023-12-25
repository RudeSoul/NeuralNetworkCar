// class NeuralNetwork{
//     constructor(neuronCounts){
//         this.levels = [];
//         for(let i=0;i<neuronCounts.length-1;i++){
//             this.levels.push(new Level(
//                 neuronCounts[i],neuronCounts[i+1]
//             ));
//         }
//     }
//     static feedForward(givenInputs,network){
//         let outputs = Level.feedForward(
//             givenInputs,network.levels[0]
//         );
//         for(let i=1; i<network.levels.length; i++){
//             outputs = Level.feedForward(
//                 outputs.network.levels[i]
//             );
//         }
//         return outputs;
//     }
//     static feedForward(givenInputs, network) {
//         return Level.feedForward(givenInputs, network.levels);
//     }
// }

class NeuralNetwork {
    constructor(neuronCounts) {
        this.levels = [];
        for (let i = 0; i < neuronCounts.length - 1; i++) {
            this.levels.push(new Level(neuronCounts[i], neuronCounts[i + 1]));
        }
    }

    static mutate(network,amount=1){
        network.levels.forEach(level => {
            for(let i=0;i<level.biases.length;i++){
                level.biases[i]=lerp(
                    level.biases[i],
                    Math.random()*2-1,
                    amount
                )
            }
            for(let i=0;i<level.weights.length;i++){
                for(let j=0;j<level.weights[i].length;j++){
                    level.weights[i][j]=lerp(
                        level.weights[i][j],
                        Math.random()*2-1,
                        amount
                    )
                }
            }
        });
    }

    static feedForward(givenInputs, network) {
        let outputs = givenInputs.slice(); 


        for (let i = 0; i < network.levels.length; i++) {
            outputs = Level.feedForward(outputs, network.levels[i]);
        }

        return outputs;
    }
}


class Level{
    constructor(inputCount,outputCount){
        this.inputs = new Array(inputCount);
        this.outputs = new Array(outputCount);

        this.biases = new Array(outputCount);

        this.weights = [];

        for(let i=0;i<inputCount;i++){
            this.weights[i] = new Array(inputCount).fill(() => Math.random() * 2 - 1);
        }

        Level.#randomize(this);
    }

    // static #randomize(level){
    //     for(let i =0; i<level.inputs.length;i++){
    //         for(let j=0; j<level.outputs.length;j++){
    //             level.weights[i][j] = Math.random()*2-1;
    //         }
    //     }

    //     for(let i=0; i<level.biases.length;i++){
    //         level.biases[i] = Math.random()*2-1;
    //     }
    // }


    static #randomize(level) {
        for (let i = 0; i < level.weights.length; i++) {
            level.weights[i] = new Array(level.outputs.length);
            for (let j = 0; j < level.outputs.length; j++) {
                level.weights[i][j] = Math.random() * 2 - 1;
            }
        }
    
        for (let i = 0; i < level.biases.length; i++) {
            level.biases[i] = Math.random() * 2 - 1;
        }
    }
    

    static feedForward(givenInputs,level){
        for(let i=0; i<level.inputs.length; i++){
            level.inputs[i]=givenInputs[i];
        }
        for(let i=0; i<level.outputs.length; i++){
            let sum = 0;
            for(let j=0;j<level.inputs.length;j++){
                sum+=level.inputs[j]*level.weights[j][i];
            }

            if(sum>level.biases[i]){
                level.outputs[i]=1;
            }else{
                level.outputs[i]=0;
            }
        }

        return level.outputs;
    }
    // static feedForward(givenInputs, level) {
    //     if (!level || !level.inputs || !level.outputs || !level.weights || !level.biases) {
    //         return [];
    //     }

    //     for (let i = 0; i < level.inputs.length; i++) {
    //         level.inputs[i] = givenInputs[i];
    //     }

      
    //     const newOutputs = new Array(level.outputs.length);

       
    //     if (!level.weights.every(row => Array.isArray(row))) {
    //         return [];
    //     }

    //     for (let i = 0; i < level.outputs.length; i++) {
    //         if (!level.weights[i] || level.weights[i].length !== level.inputs.length) {
    //               return [];
    //         }

    //         let sum = 0;
    //         for (let j = 0; j < level.inputs.length; j++) {
    //             sum += level.inputs[j] * level.weights[i][j];
    //         }

    //         if (sum > level.biases[i]) {
    //             newOutputs[i] = 1;
    //         } else {
    //             newOutputs[i] = 0;
    //         }
    //     }

    //     return newOutputs;
    // }
}