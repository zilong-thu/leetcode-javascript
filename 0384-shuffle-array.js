/**
 * 384. Shuffle an Array
 */

/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
  this.value = nums;
  this.shuffledArray = [];
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
  return this.value;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
  let arr = this.value.map(item => item);
  let res = [];

  while (arr.length) {
    const index = Math.floor(Math.random() * arr.length);
    const ele   = arr.splice(index, 1)[0];
    res.push(ele);
  }

  return res;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = Object.create(Solution).createNew(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
