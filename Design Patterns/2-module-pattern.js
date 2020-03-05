//Several MODULE PATTERNS
/**
 * - Module pattern
 * - Object literal notation
 * 
 * MODERN MODULE PATTERNS
 * - AMD Modules
 * - CommonJS modules
 * - ECMAScript Harmony modules
 * 
 */

//  WHY? Using object literals can assist in encapsulating and organizing your code

/**
 * Module Patterns
 * 
 * - originally for to provide private and public encapsulation for classes
*      - results in is a reduction in the likelihood           of our function names conflicting with other          functions defined in additional scripts on            the page.

    - expose interface we wish other parts of application to use

    - utilizes immediately invoked function
 * 
 * 
 */

var myNamespace = (function () {
 
    var myPrivateVar, myPrivateMethod;
   
    // A private counter variable
    myPrivateVar = 0;
   
    // A private function which logs any arguments
    myPrivateMethod = function( foo ) {
        console.log( foo );
    };
   
    return {
   
      // A public variable
      myPublicVar: "foo",
   
      // A public function utilizing privates
      myPublicFunction: function( bar ) {
   
        // Increment our private counter
        myPrivateVar++;
   
        // Call our private method using bar
        myPrivateMethod( bar );
   
      }
    };
   
  })();


  //IMPORT MIXINS - jQuery, Underscore
  // Global module
var myModule = (function ( jQ, _ ) {
 
    function privateMethod1(){
        jQ(".container").html("test");
    }
 
    function privateMethod2(){
      console.log( _.min([10, 5, 100, 2, 1000]) );
    }
 
    return{
        publicMethod: function(){
            privateMethod1();
        }
    };
 
// Pull in jQuery and Underscore
})( jQuery, _ );
 
myModule.publicMethod();


//EXPORT
// Global module
var myModule = (function () {
 
    // Module object
    var module = {},
      privateVariable = "Hello World";
   
    function privateMethod() {
      // ...
    }
   
    module.publicProperty = "Foobar";
    module.publicMethod = function () {
      console.log( privateVariable );
    };
   
    return module;
   
  })();

  //Dojo - dojo,setObject();
  //ExtJs - Ext.namespace("myNameSpace"); myNameSpace.app = function(){ return ;}();

  //Advantages
  /*
    - OO from JS perspective
    - Public code touches class's Private parts (no laughing!)
  */

  //Disadvantages
  /**
   * - access both public and private differently
   * - we will have to make changes in two places
   * - 
   */