function dotProduct(vector1, vector2){
    let result = 0;
    for(let i = 0; i < vector1.length; i++){
        result += vector1[i] * vector2[i]
      }
    return result;
  }
  
  const ortoVector = (vectors) => {
    let orth = [];
    for (let i = 0; i < vectors.length; i++) {
      for (let j = i + 1; j < vectors.length; j++) {
        if (dotProduct(vectors[i], vectors[j]) === 0) {
          orth.push([vectors[i], vectors[j]]);
        }
      }
      return orth;
    }
  };