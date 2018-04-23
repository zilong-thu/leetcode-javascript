var nums = [0,0,1,1,1,2,2,3,3,4];

var removeDuplicates = function(nums) {
    var i = 0;
    while (nums[i] !== undefined) {
    	if (nums[i] === nums[i+1]) {
    		nums.splice(i+1, 1);
    	} else {
    		i++;
    	}
    }

    return nums.length;
};

var res = removeDuplicates(nums);
console.log(res);
console.log(nums);
