
import React from 'react'
import styles from './App.module.css'
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
<div className={styles.container}>
      <h3 className={styles.title}>TypeScript</h3>

      <h3>{myString}</h3>
      <h3 className={styles.number}>Number: {myNumber}</h3>
      <h3 className={styles.boolean}>Boolean: {myBoolean.toString()}</h3>
      <h3 className={styles.array}>Array: {myArray.join()}</h3>
      <h3 className={styles.array1}>Array with number and String: {myArray1.join()}</h3>
      <h3>Sum of Numbers: {addNumbers(10, 20)}</h3>
      <div className={styles.personInfo}>
        <h1>Person Information:</h1>
        <h3>Name: {myPerson.name}</h3>
        <h3>Age: {myPerson.age}</h3>
      </div>
    </div>
  );
};


export default MyComponent;
