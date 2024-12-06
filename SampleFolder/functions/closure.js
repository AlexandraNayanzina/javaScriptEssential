function outerFunction(){
    const outerVar = "I am from the outer function";

    function innerFunction(){
        console.log(outerVar);
    }
    return innerFunction;
}

const closure = outerFunction();
closure();