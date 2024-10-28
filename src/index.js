//Напишите программу, которая выводит через console.log все числа от 1 до 100, с двумя исключениями. 
//Для чисел, нацело делящихся на 3, она должна выводить ‘Fizz’, а для чисел, 
//делящихся на 5 (но не на 3) – ‘Buzz’. Когда сумеете – 
//исправьте её так, чтобы она выводила «FizzBuzz» для всех чисел, которые делятся и на 3 и на 5.

function fizBuz() {
    for (let i = 1; i <= 30; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizBuz')
        }
        if (i % 3 === 0) {
            console.log('fiz')
        } else if (i % 5 === 0) {
            console.log("buz")
        } else (console.log(i))
    }
}

// console.log(fizBuz())

function fizzBuzz() {
    for (let i = 1; i <= 30; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            console.log('FizBuz')
        } else (console.log(i))
    }
}

// console.log(fizzBuzz())

function f1() {
    for (let i = '#'; i.length < 8; i += '#') {
        console.log(i)
    }
}
// f1()

//Напишите функцию min, принимающую два аргумента, и возвращающую минимальный из них.

function min(a, b) {
    if (a < b) {
        console.log(a)
    }
    if (b < a) {
        console.log(b)
    }
}
// min(8, 11)

function min(a, b) {
    return a < b ? a : b;
}
//   console.log(min(5,8))

//Напишите функцию countBs, которая принимает строку в качестве аргумента и возвращает количество 
//символов “B”, содержащихся в строке. Затем напишите функцию countChar, которая работает примерно 
//как countBs, только принимает второй параметр — символ, который мы будем искать в строке 
//(вместо того, чтобы просто считать количество символов “B”). Для этого переделайте функцию countBs.

function countBs(str, elem) {
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == elem) {
            counter++
        }
    }
    return counter
}
// console.log(countBs('elenkaaaa'))



//Напишите функцию range, принимающую два аргумента, начало и конец диапазона, и возвращающую массив, 
//который содержит все числа из него,  включая начальное и конечное.Затем напишите функцию sum, 
//принимающую массив чисел и возвращающую их сумму. 
//Запустите указанную выше инструкцию и убедитесь, что она возвращает 55.
//В качестве бонуса дополните функцию range, чтобы она могла принимать необязательный третий аргумент
// – шаг для построения массива. Если он не задан, шаг равен единице. Вызов функции range(1, 10, 2) 
//должен будет вернуть [1, 3, 5, 7, 9]. Убедитесь, 
//что она работает с отрицательным шагом так, что вызов range(5, 2, -1) возвращает [5, 4, 3, 2].

function sumArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    return sum;
}
// console.log(sumArray([1, 2, 3, 4, 5]));

function sum(array) {
    return array.reduce((a, b) => a + b)
}
// console.log(sum([1, 2, 3, 4, 5]));

function range(x, y) {
    var listRangeNumber = [];
    while (x <= y) {
        listRangeNumber.push(x);
        x++
    }

    return listRangeNumber;
}
//   console.log(range(1, 5))
//   console.log(sum(range(1, 5)))


function range(x, y, z) {
    var listRangeNumber = [];
    while (x <= y) {
        listRangeNumber.push(x);
        if (z > 0) {
            x += z
        } else {
            x++
        }
    }
    return listRangeNumber;
}

// console.log(range(1, 5, 2)); 

//НЕ ПОЛУЧИЛОСЬ
//Убедитесь, что она работает с отрицательным шагом так, что вызов range(5, 2, -1) возвращает [5, 4, 3, 2].



//Напишите две функции, reverseArray и reverseArrayInPlace. Первая получает массив как аргумент и 
//выдаёт новый массив, с обратным порядком элементов. 
//Вторая работает как оригинальный метод reverse – она меняет порядок элементов на обратный в том 
//массиве, который был ей передан в качестве аргумента. 
//Не используйте стандартный метод reverse. 
function reverseArray(array) {
    let newArray = array.slice()
    console.log(array)
    return newArray.reverse()
}
// console.log(reverseArray([1, 2, 3, 4, 5]));

function reversArray(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] < array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1]
                array[j + 1] = temp
            }
        }
    }
    console.log(array)
}
// console.log(reversArray([8, 2, 15, 6, 5]))

//Используйте метод reduce в комбинации с concat для свёртки массива массивов в один массив, у которого 
//есть все элементы входных массивов.

let arrays = [[1, 2, 3], [4, 5], [6]];
arrays = arrays.reduce((a, b) => a.concat(b));

// console.log(arrays);


//Например, если мы пропустим 9119 через функцию, то получим 811181, потому что 9 2 — это 81, 
//а 1 2 — это 1. (81-1-1-81)
//Пример №2: Ввод 765 вернет/должен вернуть 493625, потому что 7 2 равно 49, 6 2 равно 36, а 5 2 
//равно 25. (493625)
//Примечание: функция принимает целое число и возвращает целое число.

function mult(num) {
    const str = num.toString();
    const y = str.split('');
    let result = 0
    y.map((el) => parseInt(el))
    result = y.map((el) => Math.pow(el, 2));
    const fin = result.join('')
    return Number(fin);
}
// console.log(mult(765))



//Создайте метод, который принимает массив/список в качестве входных данных и выводит индекс, по которому 
//находится единственное нечетное число.Этот метод должен работать с массивами с отрицательными числами. 
//Если в массиве нет нечетных чисел, то метод должен вывести -1.

function index(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            return i
        }
    }
    return -1
}
// console.log(index([4,-8,98,-12,-7,90,100]))

///// ORRRR/////

function oddOne(arr) {
    return arr.findIndex(x => x % 2 != 0);
}


// function bigLetterForId(str, array) {
//     console.log(str)
//     // let str = string.split('')
//     for (let i = 0; i < str.length; i++) {
//         for (let j = 0; j < array.length; j++) {
//             if (i === array[j]) {
//              console.log(str[i].toUpperCase());

//             }
//         }
//     }
//     return str
// }

// console.log(bigLetterForId("abcdef",[1,2,5]))


function figures(str) {
    const array = ['a', 'e', 'i', 'o', 'u'];
    let sum = 0;
    console.log(str)
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (str[i] === array[j]) {
                sum++
            }
        }
    }
    return sum
}
// console.log(figures('anayagramma'))

const divisorsSum = (n) => {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        n % i === 0 && sum++
    }
    return sum
}
// console.log(divisorsSum(12))



//Запрограммируйте функцию sumAverage(arr), где arr— массив, содержащий массивы, заполненные числами.
//Сначала определите среднее значение каждого массива. Затем верните сумму всех средних значений.
//После вычисления всех средних значений сложите их вместе , а затем округлите в меньшую сторону

const sumAverage1 = (arr) => {
    let result;
    let sumMiddle = arr.map((arr => arr.reduce((acc, a) => acc + a, 0) / arr.length))
    let res = sumMiddle.reduce((el, a) => (el + a), 0)
    result = Math.floor(res)
    return result;
}
// console.log(sumAverage1([[3, 4, 1, 3, 5, 1, 4], [21, 54, 33, 21, 77]]))
// console.log(sumAverage1([[-4, 3, -8, -2], [2, 9, 1, -5], [-7, -2, -6, -4]]))

//В этом небольшом задании вам дана строка чисел, разделенных пробелами, и вам нужно вернуть 
//наибольшее и наименьшее число.
//highAndLow("1 2 3 4 5"); // return "5 1"
//highAndLow("1 2 -3 4 5"); // return "5 -3"
//highAndLow("1 9 3 4 -5"); // return "9 -5"

function highAndLow(numbers) {
    let ar = numbers.split(' ')
    let min = ar[0]
    let max = ar[0]
    for (let i of ar) {
        if (i < min) { min = i }
        if (i > max) { max = i }
    }
    return max + " " + min
}
// console.log(highAndLow("1 2 -3 4 5"))

//ORRRRR///

function highAndLow(numbers) {
    let item = numbers.split(' ')
    return Math.max(...item) + " " + Math.min(...item)
}
// console.log(highAndLow("1 2 -3 4 5"))


//Создайте функцию с именем divisors/, Divisorsкоторая принимает целое число n > 1и возвращает массив 
//со всеми делителями целого числа (кроме 1 и самого числа), от наименьшего к наибольшему. Если число 
//является простым, верните строку '(integer) is prime' 

function divisors(integer) {
    let arr = []
    for (let i = 2; i < integer; i++) {
        if (integer % i === 0) {
            arr.push(i)
        }
    }
    if (arr.length == 0) {
        return integer + " " + "is prime"
    } else {
        return arr
    }
}
// console.log(divisors(13))


//Подсчитайте количество делителей положительного целого числа n.
//Случайные тесты достигают n = 500000, а фиксированные тесты — выше.

function getDivisorsCnt(n) {
    let devisors = 0;
    for (let i = 1; i <= n; i++) {
        n % i === 0 && devisors++
    }
    return devisors
}

//  console.log(getDivisorsCnt(30))

//Создайте функцию, которая возвращает сумму двух наименьших положительных чисел, заданных массивом 
//из минимум 4 положительных целых чисел. Не будут переданы числа с плавающей точкой или неположительные 
//целые числа.
//Например, если массив передается как [19, 5, 42, 2, 77], то вывод должен быть 7.

function sumTwoSmallestNumbers(numbers) {
    var [a, b] = numbers.sort((a, b) => a - b)
    return a + b
}
console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]))


