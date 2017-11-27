var names = ["Dory", "Gill", "Bruce", "Nemo", "Darla", "Marlin", "Jacques"];

// 1 - Different Between Imperative, Declarative and Functional Style of Programming
		
	//Example : Count the number of names which are 4 letters in length

	// 1.1 - Imperative Style : Tell What && How
	
		let count = 0;
	
		for(const name of names){
			if(name.length == 4){
				count++;
			}
		}
	
		print("Imperative Count : "+count);
	
	// 1.2 - Declarative Style : Tell what & let Library do the job
		print(
			"Declatrative Count : " + 
			
			names.filter(e => e.length == 4).length
		);
		
	// Example : => JavaScript document (Imperative) VS JQuery (Imperative with less details) VS Angular (Declarative)
		
		
		function ListNode(val) {
		      this.val = val;
		      this.next = null;
	 	};
		
		function arrayValueFromLinkedList(n){
   	
		    var arr = [n.val + ""];
    
		    if(n.next !== null){
				var cn = arrayValueFromLinkedList(n.next);
				print(cn);
		        arr.push(cn);
		    }
    
		    return arr;
		};


		function addDecimalBase(a, b, r){
			print("addDecimalBase(" + a + ", " + b + ", " + r + " )")
		    var S = eval(a) + eval(b) + r;
			print(S);
		    return [S%10, parseInt(S/10)];
		};
		
		function addTwoNumbers(l1, l2) {
			
		    var R = "0";
		    var OL1 = arrayValueFromLinkedList(l1);
		    var OL2 = arrayValueFromLinkedList(l2);
			print(OL2.length); print(OL2.length);
		    OL1.reverse();
		    OL2.reverse();
			
			print(OL1); print(OL2);
			
		    var RESULT = null;
    
		    OL1.forEach(function(elt, index, arr){
        
		        var Sum = addDecimalBase(elt, OL2[index], R);
		        R = Sum[1];
		        var P = new ListNode(parseInt(Sum[0]))
		        P.next = RESULT;
		        RESULT = P;
				
				//print(Sum);
				//print("Sum " + Sum[0] + arrayValueFromLinkedList(RESULT));
		    });
    
		    if(R != "0"){
		        var tmp = new ListNode(parseInt(R));
		        tmp.next = RESULT;
		        RESULT = tmp;
		    }
    
		    return RESULT;
		};
		
		var node = new ListNode(2);
		node.next = new ListNode(3);
		node.next.next = new ListNode(4);
		
		var node2 = new ListNode(2);
		node2.next = new ListNode(3);
		node2.next.next = new ListNode(4);
		
		print(arrayValueFromLinkedList(addTwoNumbers(node, node2)));
		
		