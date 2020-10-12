/*
  Let's try to develop a program which calculate measure of central tendency of a
  sample(mean, median, mode) and measure of variability(range, variance, standard
  deviation).
  
  In addition to those measures find the min, max, count, percentile, and frequency
  distribution of the sample. You can create a class called Statistics and create
  all the functions which do statistical calculations as method for the Statistics
  class.
*/


class Statistics {
  constructor(arr){
    this.arr = arr;
  }

  count(){
    return this.arr.length;
  }

  sum(){
    return this.arr.reduce((a, c) => a + c);
  }

  min(){
    return Math.min.apply(null, this.arr);
  }

  max(){
    return Math.max.apply(null, this.arr);
  }

  range(){
    return this.max() - this.min();
  }
  mean(){
    //mean, which means average
    return Math.round(this.sum() / this.count());
  }
  median(){
    // median, which is the middle number when listed in order from least to greatest
    let arrSorted = this.arr.sort();
    let mid = Math.ceil(this.count() / 2);
    let median;

    if(this.count() % 2 == 0){
      median = (arrSorted[mid] + arrSorted[mid - 1]) / 2;
    } else
      median = arrSorted[mid - 1];

    return median;
  }

  mode(){
    let tempArr = [...this.arr];
    let count;
    let mode;

    mode = tempArr.sort((a,b) =>
      tempArr.filter(v => v === a).length - tempArr.filter(v => v===b).length
    ).pop();

    count = tempArr.filter(v => v === mode).length + 1;

    return {mode, count}
  }

  var(){
    //The average of the squared differences from the Mean.
    let squares = this.arr.map(n => (n - this.mean()) ** 2);
    let sumSquares = squares.reduce((a, c) => a + c);
    
    return (sumSquares / squares.length).toFixed(1);
  }
  std(){
    //it is the square root of the Variance.
    return Math.sqrt(this.var()).toFixed(1);
  }

  freqDist(){
    let distinct = [];
    let freq = [];
    let count;
    distinct = [...new Set(this.arr)];
    distinct.forEach((n) => {
      count = this.arr.filter(v => v === n).length;
      count = ((count * 100)/(this.arr.length + 1));
      count = Math.round(count);
      
      freq.push(`${count}%, ${n}`);
    });
    return freq;
  }
}

let ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27,
            27, 24, 32, 33, 27, 25, 26, 38, 37, 31,
            34, 24, 33, 29, 26];
let statistics = new Statistics(ages);

console.log('Count:', statistics.count());
console.log('Sum: ', statistics.sum());
console.log('Min: ', statistics.min());
console.log('Max: ', statistics.max());
console.log('Range: ', statistics.range());
console.log('Mean: ', statistics.mean());
console.log('Median: ',statistics.median());
console.log('Mode: ', statistics.mode());
console.log('Variance: ',statistics.var());
console.log('Standard Deviation: ', statistics.std());
console.log('Frequency Distribution: ',statistics.freqDist());