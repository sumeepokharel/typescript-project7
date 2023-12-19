
import React from 'react';

type MyComponentTypes = {
  myString: string;
  myNumber: number;
  myBoolean: boolean;
  myArray: (number|string)[];
  myArray1: number[];
  
};

const MyComponent: React.FC = () => {
  // Declare variables with explicit types
  let myString: MyComponentTypes['myString'] = 'Hi there!';
  let myNumber: MyComponentTypes['myNumber'] = 20;
  let myBoolean: MyComponentTypes['myBoolean'] = false;
  let myArray: MyComponentTypes['myArray'] = [10,20,'sumitra'];
  let myArray1: MyComponentTypes['myArray1'] = [10,30]

  // Function with type annotations
  const addNumbers = (a: MyComponentTypes['myNumber'], b: MyComponentTypes['myNumber']): MyComponentTypes['myNumber'] => {
    return a + b;
  };


  // Defining  an interface called Person
  interface Person {
    name: string;
    age: number;
  }

  // Creating  an object conforming to the Person interface
  const myPerson: Person = {
    name: 'Ayesha',
    age: 25,
  };

  // Function that accepts a Person parameter
  const PersonInfo = (person: Person): void => {
    console.log(`Name: ${person.name}, Age: ${person.age}`);
  };

  PersonInfo(myPerson);
  return (
    <>
    
      <h2> TypeScript</h2>

      <h1>{myString}</h1>
      <h1>Number: {myNumber}</h1>
      <h1>Boolean: {myBoolean.toString()}</h1>
      <h1>Array: {myArray.join()}</h1>
      <h1>Array with number and String: {myArray1.join()}</h1>
      <h1>Sum of Numbers: {addNumbers(10, 20)}</h1>
      <h1>Person Information:</h1>
      <h2>Name: {myPerson.name}</h2>
      <h2>Age: {myPerson.age}</h2>


   
    </>
  );
};


export default MyComponent;
