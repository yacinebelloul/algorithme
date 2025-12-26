function arrays(x) {
    for (var i = 0; i < x.length; i++) {
        console.log(x[i]);
    } 
    
    let min = x[0];
    for (let k = 1; k < x.length; k++) {
        if (x[k] < min) {
            min = x[k];
        } }  return min;
}

let tab = [5, 3, 8, 1, 4];
console.log(arrays(tab));