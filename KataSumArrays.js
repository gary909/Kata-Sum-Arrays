// Sum Numbers
function sum (numbers) {
    var total = 0;
    if (numbers == []){
        return 0;
    } else {
        for (var i = 0; i < numbers.length; i++){
            total = total + numbers[i];
        }
        return total;     
    }
};

console.log(sum([1, 5.2, 4, 0, -1])); // return 9.2
console.log(sum([])); // return 0