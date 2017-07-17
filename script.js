// Two Sum normal 102ms O(n2)
var twoSum1 = function(nums, target) {    
    for(var i = 0; i < nums.length; i++){
        for(var j = i+1; j < nums.length; j++){
            if(nums[j] == target - nums[i]){
                return new Array(i, j);
            }
        }
    }
};

//Two sun hashmap way
var twoSum = function(nums, target){
	var elemMap = new Object();
	var r = [];
	for(var i = 0; i < nums.length; i++){
		elemMap[""+nums[i]+""] = i;
	}
	for(var i = 0; i < nums.length; i++){
		var complement = target - nums[i];
		if(elemMap[complement] && elemMap[complement] != i){
			r.push(i);
		}
	}
	return r;
}

//Reverse number
var reverse = function(x){
	var result = 0;
	while(x != 0){
		var t = parseInt(x % 10);
		var newResult = result * 10 + t;
		if((newResult - t)/10 != result){
			console.log(0);
		}
		result = newResult
		x = parseInt(x / 10);
	}
	console.log(result);
	return result;
};

var fizzBuzz = function(n) {
    var arr =[];
    for (var i = 1; i <= n; i++){
        if(i%15 === 0){
            arr.push("FizzBuzz");
        }
        else if(i%3 === 0){
            arr.push("Fizz");
        }
        else if(i%5 === 0){
            arr.push("Buzz");
        }
        else{
        	arr.push(i);	
        }
        
    }
    return arr;
};

var reverseString = function(s) {
    //return s.split("").reverse().join();
    var i = s.length;
    var newStr = "";
    while(i > 0){
    	newStr += s.substring(i-1, i);
    	i--;
    }
    return newStr;
};


var findRestaurant = function(list1, list2) {
    var hashMap = {};
    for (var i = 0; i < list1.length; i++) {
    	for (var j = 0; j < list2.length; j++) {
    		if(list1[i] == list2[j]){
    			hashMap[""+(i+j)+""] = list1[i];
    		}	
    	}
    }

    var m = [];
    var min_index_sum;
    for (var key of Object.keys(hashMap)) {
    	m.push(key);	
    }
    min_index_sum = Math.min.apply(null, m);
    var toStr = hashMap[min_index_sum].toString();
    return "["+toStr+"]";
};

var list1 = ["Pizza", "Burger King", "KFC", "Pret Manger"];
var list2 = ["Nandos","KFC", "Tortilla", "McDonalds", "Express", "Burger King"];

//Find min depth of Binary tree
var minDepth = function(root) {
    if(root == null){
        return 0;
    }
    var left = minDepth(root.left);
    var right = minDepth(root.right);
    return (left == 0 || right == 0) ? left + right +1 : Math.min(left, right)+1;
}; 

console.log(findRestaurant(list1, list2));


//window.onload = reverseString('hello');	


