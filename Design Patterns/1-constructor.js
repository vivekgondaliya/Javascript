/*
    -preparing the object for use 
    -accepting arguments which a constructor
    -used to set the values of member properties and methods when the object is first created.
*/

//CREATE a new object
// Each of the following options will create a new empty object:
var newObject = {};
 
// or
var newObject = Object.create( Object.prototype );
 
// or
var newObject = new Object();


//ASSIGN VALUES to new object
/** 
 * ECMA3
 *  -dot notation
*   -sqaure bracket

    ECMA5
    -Object.defineProperty
    -Object.defineProperties
*/

//Object.defineProperty
//set properties
var defineProp = function ( obj, key, value ){
    var config = {
      value: value,
      writable: true,
      enumerable: true,
      configurable: true
    };
    Object.defineProperty( obj, key, config );
  };

// To use, we then create a new empty "person" object
var person = Object.create( Object.prototype );

// Populate the object with properties
defineProp( person, "car", "Delorean" );
defineProp( person, "dateOfBirth", "1981" );
defineProp( person, "hasBeard", false );


//Object.defineProperties
// Set properties
Object.defineProperties( newObject, {
 
    "someKey": {
      value: "Hello World",
      writable: true
    },
   
    "anotherKey": {
      value: "Foo bar",
      writable: false
    }
   
  });