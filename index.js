// const logItems = function(array) {
//   for (let i = 0; i < array.length; i += 1) {
//     console.log(`${i + 1} - ${array[i]}`);
//   }
//   return
// }

// logItems(['Mango', 'Poly', 'Ajax']);


// const calculateEngravingPrice = function(message, pricePerWord) {
//   const word = message.split(' '); 
//   const totalSpent = word.length * pricePerWord;

//   return totalSpent;
// };

// console.log(calculateEngravingPrice('Привіт, друже! Як твої справи?', 100));

// const findLongestWord = function(string) {
//   const words = string.split(' ');
//   let longestWord ='';

//   for (let word of words) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }
//   return longestWord;
// };


// console.log(findLongestWord('У вісімсот вісімдесят восьмому році відбулося хрещення Київської Русі.'));

// const formatString = function(string) {
//   if (string.length <= 40) {
//     return string;
//   }
//   else{
//     return string.slice(0, 40) + '...';
//     }
// };

// // console.log(formatString('Весна принесла квітучі сади і теплі дні.'));
// console.log(formatString("Сонячний день подарував нам багато радісних та яскравих моментів."));

// const checkForSpam = function(message) {
//   const toLowerCaseMessage = message.toLowerCase(); 

//   if (toLowerCaseMessage.includes('spam') || toLowerCaseMessage.includes('sale')) {
//         return true;
//     }else{
//         return false;
//     }
    
// };

// console.log(checkForSpam('Don`t miss out on our biggest sale of the year!')); 
// console.log(checkForSpam('Be cautious of spam emails that offer unrealistic deals.'));
// console.log(checkForSpam('Today we are planning to go for a walk in the park'));

// let input;
// const numbers = [];
// let total = 0;

// function collectNumbers() {
//     while (true) {
//         input = prompt("Введіть ваше число:");

//         if (input === null) {
//             break;
//         }
     
//         if (isNaN(input)) {
//             alert('Це не число, введіть число');
//         }else{
//             numbers.push(Number(input));
//         }

//     }

//     if (numbers.length > 0) {
//         for (let number of numbers) {
//             total += number;
//         }
//         console.log(`Загальна сума чисел дорівнює ${total}`);
//     }

//     return
// }

// collectNumbers();
