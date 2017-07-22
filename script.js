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
    var x=2;
    var i;
    if(A==1) return true;
    for(i=2;(i<33)&&(x<=Math.pow(2,16));i++)
    {   
        if(Math.pow(x,i)==A) return true;
        if(Math.pow(x,i) >= (Math.pow(2,32))) {i=1;x++;}
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
    var f = [];

    for(var i=0; i<=num;i++){
        f[i] = (i >>> 2).toString(2);
       //f[i] = (i & 1);
    } 
    return f;
};

//Mask, complementry number
var findComplement = function(num) {
    var mask = ~0;
    while(num & mask)
        mask <<= 1;
    return ~mask & ~num;
    
};

var isMatch = function(s, p) {
	var pat = new RegExp( "/" +p+ "/g"	);
	var r = pat.test(s);
	console.log('test', r);
	
	//  /a.*/.test("a.") single character
	// /a*/.test("aaa")

    //return s.test(/'^firstLetter'/);


    /*
isMatch("aa","a") ? false
isMatch("aa","aa") ? true
isMatch("aaa","aa") ? false
isMatch("aa", "a*") ? true
isMatch("aa", ".*") ? true
isMatch("ab", ".*") ? true
isMatch("aab", "c*a*b") ? true
    */
};

var coverPoints = function(A, B){
    var numSteps = 0;
    var x, y;
        for(var i = 0; i<A.length-1; i++){
            x = Math.abs(A[i+1] - A[i]);
            y = Math.abs(B[i+1] - B[i])
            numSteps += Math.max(x,y);
        }
        return numSteps;
};
coverPoints([ 4, 8, -7, -5, -13, 9, -7, 8 ], [ 4, -15, -10, -3, -13, 12, 8, -8])

//what is output
function performOps(A){
    B = new Array(2 * A.length)

    for (var i = 0; i < A.length; i++) {
        B[i] = A[i];
        B[i + A.length] = A[(A.length - i) % A.length];
    }
    return B;
}
B = performOps([5, 10, 2, 1])
for (var i = 0; i < B.length; i++) {
//    console.log(B[i]+" ");
}

//diagonal array
/*
1 2 3
4 5 6
7 8 9
*/
var A = [1,2,3,4,5,6,7,8,9];
var diagonal = function(A){
    for (var i = 0; i < A.length; i++) {
        for(var j = 0; j<A.length; j++){
            console.log(A[j]); 
            if(j){

            }
        }
        //A[i]
    }
};

//prime function
	var isPrime = function(A){
		if(A < 2) return 0;
		var upperlimit = Math.sqrt(A);
		for (var i = 0; i <= upperlimit; i++) {
			if(A%i == 0){
				return 0;
			}
		}
		return 1;
	}
//GCD
var gcd = function (a, b) {
	if(a == 0)
		return b;
	return gcd(a % b, a)
}

//find oddman 
var oddman = function(a){
	var ones = 0;
	var twos = 0;
	var index=1;

for (var i = 1; i < a.length; i++) {
	        
	        if (A[i] != A[i - 1]) {
	            var temp = A[index];
	            A[index] = A[i]; //A.set(index, A.get(i));
	            index++;
	        }
	    }
	    return index;
	// while(i <= a.length){
	// 	for (var j = i+1; j < a.length-1; j++) {
	// 		if(a[i] == a[j]){
	// 			//temp = a[j];
	// 			break;
	// 		}
	// 		else{
	// 			temp = a[j];
	// 		}
	// 	}
	// 	i++;
	// }

	// var ones = 0 ; //At any point of time, this variable holds XOR of all the elements which have appeared "only" once.
 //    var twos = 0 ; //At any point of time, this variable holds XOR of all the elements which have appeared "only" twice.
 //    var not_threes ;

 //    for( var x in a )
 //    {
 //        twos |= ones & x ; //add it to twos if it exists in ones
 //        ones ^= x ; //if it exists in ones, remove it, otherwise, add it

 //        // Next 3 lines of code just converts the common 1's between "ones" and "twos" to zero.

 //        not_threes = ~(ones & twos) ;//if x is in ones and twos, dont add it to Threes.
 //        ones &= not_threes ;//remove x from ones
 //        twos &= not_threes ;//remove x from twos
 //    } 
	// return ones;
};

// ====== FB phone interview question =========
/* Given an arrray of integers move non zero element to right of array without using any new space;
where "?" can be any number. Code should have good complexity and minimize the number of writes to the array
*/
//==============================================
var moveRight = function(Arr){
  var temp = 0;
  for(var i = 0; i < Arr.length; i++){
    if(Arr[i] == 0){
      for(var j = i; j < Arr.length; j++ ){
        if(Arr[j] != 0){
          temp = Arr[i];
          Arr[i] = Arr[j];
          Arr[j] = temp;
        }
      }
    }
    
  }
  return Arr;
};
var Arr = [1, 0, 2, 0, 0, 3, 4];
//Print the actual result [1,1,2]
console.log("print ", moveRight(Arr));




