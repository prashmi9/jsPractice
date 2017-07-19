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

//pattern / just TP ;-)
var printPattern = function(n){
	var star = [];
	var space, k = 0;
	for(var i=1; i<=n; i++, k=0){
		star = [];
		for(space = 1; space<=n-i; space++){
			star.push(" ");	
		}
		while(k != 2*i-1){
			star.push("*");
			k++;
		}
		console.log(star);
	}
};

//Find power to 2
var powerTwo = function(A){
	var x = 2, i;

	if(A == 1){
		return true;
	}
	for(i=2; (i<33) && (x<=Math.pow(2,16)); i++){
		if(Math.pow(x,i) == A){
			return true;
		}
		if(Math.pow(x,i) >= (Math.pow(2,32))){
			i=1; 
			x++;
		}
	}
	return false;
};

// find max number
var maxNumber = function(nums) {
    var maxA; 
    for(var i=0; i<nums.length; i++){
        maxA = Math.max.apply(null,nums);
    }
    return maxA;
};
//max in alternate place
function altMaxNumber(num, n) {
    var a = 0;
    var b = 0;
    
    for (var i=0; i<n; i++)
    {
        if (i%2==0)
        {
            a = Math.max(a+num[i], b);
        }
        else
        {
            b = Math.max(a, b+num[i]);
        }
    }
    
    return Math.max(a, b);
}
var nums= [20,45,67,78,23,90,12,45];

//Symmetric tree see if it is mirror of itself
var isMirror = function(root){
	if(root == null) return false;
	if(root.left == root.right){
		return isMirror(root.left) && isMirror(root.right);
	}
	return false;
};

//var root = [1,2,2,3,4,4,3]
//isMirror(root);

//reverse only the vowels of a string. a e i o u
/*split string
traverse through to see if any of chars from string of vowels matches
if matches then get the position of matched chars and swap them
*/
var reverseVowels = function(s) {
    var temp;
    var str = s.toLowerCase().split("");
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var position = [];
    for(var i=0; i<str.length; i++){
    	for(var v=0; v<vowels.length; v++){
    		//console.log('sp ',str[i], 'vo = ', vowels[v]);
    		if(str[i].toLowerCase() === vowels[v]){
    			console.log(str[i], i);
    			position.push(i);
    		}
    	}
    }
    //swapping
    temp = str[position[0]];
    str[position[0]] =str[position[1]];
    str[position[1]] = temp; 

    //Slower solutin
    // var str = s.split("");
    // var vowels = "aeiouAEIOU";
    // var start = 0, end = str.length -1;
    // while(start<end){
    // 	while(start < end && vowels.indexOf(str[start]) < 0){
    // 		start++;
    // 	}
    // 	while(start<end && vowels.indexOf(str[end]) < 0){
    // 		end--;
    // 	}
    // 	//swap
    // 	var t = str[start];
    // 	str[start] = str[end];
    // 	str[end] = t;

    // 	start++;
    // 	end--;
    // }
    return str.join("");
};

//remove duplicates from array
var removeDuplicates = function(nums) {
    if(nums.length == 1) return 1;
    
    var j = 0;
    for(var i=1; i<len; i++){
    	if(nums[i] == nums[j]){
    		nums.splice(i, 1);
    		j++;
    	}
    }
    return j;
};

//count 
//calculate the number of 1's in their binary representation and return them as an array
var countBits = function(num) {
    var f = num+1;
    for(var i=1; i<=num;i++) f[i] = f[i/2]+(i % 2 )
    return f;
};
//Print the actual result [1,1,2]
console.log("print ", removeDuplicates([1]));




