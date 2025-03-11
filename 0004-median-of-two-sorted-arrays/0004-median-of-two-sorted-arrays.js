/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let result = nums1.concat(nums2);
    result.sort( (a, b) => a-b );

    let len = result.length

    if(len % 2 === 0) return (result[len/2] + result[len/2-1])/2
    else return result[Math.floor(len/2)]
};