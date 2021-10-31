const { number } = require("yargs");

//write a function that returns the string "something" joined with a space "" and the given argument    
function join(str) {
    return "something" + " " + str;
}

//Create a function that takes a number (step) as an argument and returns the number of matchsticks 
function matchHouses(step) {
    return step * 5;
}

//create a function that takes an integer minutes and converts it to seconds
function convert(minutes) {
    return minutes * 60;

}

//write a function that converts hours into seconds
function howManySeconds(hours){
    return hours * 3600;
}

//Create a function which returns the number of true values there are in an array.
function countTrue(arr){
    return arr.filter(Boolean).length;
}
//Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers.
function nextEdge(a,b,c){
    return Math.max(a,b,c) - Math.min(a,b,c);
}

function getFirstValue(arr){
    return arr[0];
}
function findPerimeter(length,width){
    return 2 * (length + width);
}

function remainder (x,y){
    return x % y;
}
function circuitPower(voltage, current){
    return voltage * current;
}
// create a function that takes the age in years and returns the age in days        
function calcAge(age){
    return age * 365;
}
//Create a function that takes a number as an argument, increments the number by +1 and returns the result.
function addition(num){
    return num + 1;
}
//Create a function that takes a "base number" as an argument. This function should return another function which takes a new argument, and returns the sum of the "base number" and the new argument.
function makePlusFunction(baseNum){
    return function(num){
        return baseNum + num;
    }
}
//A student learning JavaScript was trying to make a function. His code should concatenate a passed string name with string "Edabit" and store it in a variable called result. He needs your help to fix this code.
function nameString(name){  //name is a string
    return name + "Edabit";

}
//Create a function that concatenates n input arrays, where n is variable.  
function concat(...args){
    return args.reduce((acc, cur) => acc.concat(cur), []);
}
//Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length
function arrayOfmultiples(num, length){
    return Array(length).fill(0).map((_, i) => num * (i + 1));
}
// Write a function that converts an object into an array of keys and values.
function objectToArray(obj){
    return Object.entries(obj);
}
//Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.
function sortColors(nums){
    nums.sort((a,b) => a - b);
}
//Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
function findMedianSortedArrays(nums1, nums2){
    let combined = nums1.concat(nums2);
    combined.sort((a,b) => a - b);
    if(combined.length % 2 === 0){
        return (combined[(combined.length / 2) - 1] + combined[combined.length / 2]) / 2;
    }
    else{
        return combined[Math.floor(combined.length / 2)];
    }
}


//You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

function addTwoNumbers (l1, l2) {
    let carry = 0;
    let result = new ListNode(0);
    let current = result;
    while (l1 || l2 || carry) {
        let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
        l1 = l1 ? l1.next : l1;
        l2 = l2 ? l2.next : l2;
    }
    return result.next;
}
//Given a string s, find the length of the longest substring without repeating characters.
function lengthOfLongestSubstring(s) {
    let max = 0;
    let start = 0;
    let seen = {};
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (seen[char]) {
            start = Math.max(start, seen[char]);
        }
        // index - beginning of substring + 1 (to include current in count)
        max = Math.max(max, i - start + 1);
        seen[char] = i + 1;
    }
    return max;
}
//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target
function twoSum(nums, target) {
    let seen = {};
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (seen[num]) {
            return [seen[num], i];
        }
        seen[target - num] = i;
    }
}
//write a function that is expected to return a integer .the function parameters are: STRING_ARRAY codeList, STRING shoppingCart
function foo(codeList, shoppingCart) {
    let codeListSet = new Set(codeList);
    let shoppingCartSet = new Set(shoppingCart);
    let result = [];
    for (let item of shoppingCartSet) {
        if (codeListSet.has(item)) {
            result.push(item);
        }
    }
    return result.length;
}

//write a function that takes a skill, teamSize, maxDiff as parameters and returns an integer.
function countMaximumTeams(skill, teamSize, maxDiff) {
    let max = 0;
    let count = 0;
    for (let i = 0; i < skill.length; i++) {
        for (let j = i + 1; j < skill.length; j++) {
            if (skill[i] + skill[j] <= maxDiff) {
                count++;
            }
        }
        max = Math.max(max, skill[i]);
    }
    return Math.floor(count / teamSize);
}
//write a function that takes an array as a parameter and returns an integer.
function minMoves(arr){
    return arr.reduce((acc, cur) => acc + cur);
}
// Given an integer x, return true if x is palindrome integer.
function isPalindrome(x) {
    return x.toString() === x.toString().split('').reverse().join('');
}
//Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
function reverse(x) {
    let result = 0;
    let sign = x < 0 ? -1 : 1;
    x = Math.abs(x);
    while (x) {
        result = result * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    return result * sign;
}
//Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.
function maxArea(height) {
    let max = 0;
    let left = 0;
    let right = height.length - 1;
    while (left < right) {
        max = Math.max(max, Math.min(height[left], height[right]) * (right - left));
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return max;
}
//Given an integer, convert it to a roman numeral.
function intToRoman(num) {
    let result = '';
    let values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let symbols = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    for (let i = 0; i < values.length; i++) {
        while (num >= values[i]) {
            result += symbols[i];
            num -= values[i];
        }
    }
    return result;
}
//Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.
function longestCommonSubsequence(text1, text2) {
    let matrix = [];
    for (let i = 0; i <= text1.length; i++) {
        matrix[i] = [];
        for (let j = 0; j <= text2.length; j++) {
            if (i === 0 || j === 0) {
                matrix[i][j] = 0;
            } else if (text1[i - 1] === text2[j - 1]) {
                matrix[i][j] = matrix[i - 1][j - 1] + 1;
            } else {
                matrix[i][j] = Math.max(matrix[i - 1][j], matrix[i][j - 1]);
            }
        }
    }
    return matrix[text1.length][text2.length];
}
//Given two strings text1 and text2, return the length of their longest common subsequence.
function longestCommonSubsequence(text1, text2) {
    let matrix = [];
    for (let i = 0; i <= text1.length; i++) {
        matrix[i] = [];
        for (let j = 0; j <= text2.length; j++) {
            if (i === 0 || j === 0) {
                matrix[i][j] = 0;
            } else if (text1[i - 1] === text2[j - 1]) {
                matrix[i][j] = matrix[i - 1][j - 1] + 1;
            } else {
                matrix[i][j] = Math.max(matrix[i - 1][j], matrix[i][j - 1]);
            }
        }
    }
    return matrix[text1.length][text2.length];
}
//Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
function threeSum(nums) {
    let result = [];
    let seen = {};
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (seen[num]) {
            continue;
        }
        seen[num] = true;
        let target = -num;
        let seen2 = {};
        for (let j = i + 1; j < nums.length; j++) {
            let num2 = nums[j];
            if (seen2[num2]) {
                continue;
            }
            seen2[num2] = true;
            if (seen[target - num2]) {
                result.push([num, num2, target - num2]);
            }
        }
    }
    return result;
}

//Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.
function mergeTwoLists(l1, l2) {
    let result = new ListNode(0);
    let head = result;
    while (l1 && l2) {
        if (l1.val < l2.val) {
            result.next = l1;
            l1 = l1.next;
        } else {
            result.next = l2;
            l2 = l2.next;
        }
        result = result.next;
    }
    result.next = l1 || l2;
    return head.next;
}
//Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.
function letterCombinations(digits) {
    let result = [];
    let map = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz'
    };
    let helper = (str, index) => {
        if (index === digits.length) {
            result.push(str);
            return;
        }
        let letters = map[digits[index]];
        for (let i = 0; i < letters.length; i++) {
            helper(str + letters[i], index + 1);
        }
    };
    helper('', 0);
    return result;
}
