var myRevealingModule = (function () {
 
    var privateCounter = 0;

    function privateFunction() {
        privateCounter++;
    }

    function publicFunction() {
        publicIncrement();
    }

    function publicIncrement() {
        privateFunction();
    }

    function publicGetCount(){
      return privateCounter;
    }

    // Reveal public pointers to
    // private functions and properties

   return {
        start: publicFunction,
        increment: publicIncrement,
        count: publicGetCount
    };

})();

myRevealingModule.start();

//Advantages
/**
 * - consistent syntax
 * - eases redability between private and public
 */

//Disadvantages
/**
 * - private function referes to a public function
 * - 
 */
