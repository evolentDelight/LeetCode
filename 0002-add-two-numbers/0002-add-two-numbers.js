
//Definition for singly-linked list.
 function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let result = new ListNode();

    let temp = new ListNode();

    let carryOver = 0;
    let add = 0;
    let l1Value = 0, l2Value = 0;

    while(l1 !== null || l2 !== null || carryOver){
        if(l1 !== null){
            l1Value = l1.val;
            l1 = l1.next;
        }
        if(l2 !== null){
            l2Value = l2.val;
            l2 = l2.next;
        }

        add = l1Value + l2Value + carryOver;

        l1Value = 0;
        l2Value = 0;

        if(add >= 10){
            carryOver = 1;
            add -= 10;
        }else{
            carryOver = 0;
        }

        if(result.next === null){//If at starting node
            result.val = add;

            if(l1 !== null || l2 !== null || carryOver){
                result.next = new ListNode();

                temp = result.next;
            }
        }
        else if(l1 !== null || l2 !== null || carryOver){
            temp.val = add;
            temp.next = new ListNode();

            temp = temp.next;
        }else{
            temp.val = add;
        }

    }

    return result;
};