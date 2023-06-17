import React, { useState } from "react";


const Test = () => {
  // Принимающий массив
//   let arrayTest = [];



//   if (arrayTest.length < 100) {
//     arrayTest.push(receivingString);
//   }

//   if (arrayTest.length < 100) {
//     arrayTest.push(receivingString);
//   }

  //   arrayTest.push(1);
//   arrayTest.push(receivingString);
//   console.log(arrayTest);

  //   console.log(receivingString); вызываем рандомный ник в консоль
  //

  // Test
//   var arr = []; 

//   for (var i = 0; i < 10; i++) {
//     arr.push(receivingString); /* Сперва добавляем все элементы */
//   }

//   console.log(arr);
  // Test


  // Тестовое состояние для рандомного ника
//   const [test, setTest] = useState(receivingString);
  //

  let arr = [];

  // Скрипт ниже генератор рандомных никнеймов
//   const listOfLetters = "abcdefghijklmnopqrstuvwxyz"; 
//   let receivingString = ""; 
//   while (receivingString.length < 6) {
//     receivingString +=
//       listOfLetters[Math.floor(Math.random() * listOfLetters.length)]; 
//   }
  //
// Цикл который заполняет пустой массив рандомными никами
  while (arr.length < 5) {
    // Скрипт ниже генератор рандомных никнеймов
    const listOfLetters = "abcdefghijklmnopqrstuvwxyz"; 
    let receivingString = ""; 
    while (receivingString.length < 6) {
      receivingString +=
        listOfLetters[Math.floor(Math.random() * listOfLetters.length)]; 
    }
    //
    arr.push(receivingString);
  }
  //

  console.log(arr);


  

  return (
    <>
   {/* {arr.map()} */}
    </>
  );
};

export default Test;