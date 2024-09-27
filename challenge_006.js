// NOTE: Variables which are declared within a function, as well as the function parameters, have local scope. That means they are only visible within that function.

function myLocalScope() {
    // Only change code below this line
    let myVar;
    // myVar = 'local variable';

    console.log('inside myLocalScope', myVar);
}
myLocalScope();

// myVar is not defined outside of myLocalScope
//! ReferenceError: myVar is not defined
console.log('outside myLocalScope', myVar);
