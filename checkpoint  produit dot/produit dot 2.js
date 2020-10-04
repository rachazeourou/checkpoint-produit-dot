let result = 0;

function dotProduct(vector1, vector2){
    for(let i = 0; i < vector1.length; i++){
        result += vector1[i] * vector2[i]
    }