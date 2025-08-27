// let num = 5;
// num = num + 1;
// alert(num++) // return 5 then update to 6
// alert(num++) // return 6 then update to 7
// alert(num++) // return 7 then update to 8
// alert(++num) // First Update to 6 then Return
// alert(++num) // First Update to 7 then Return
// alert(++num) // First Update to 8 then Return
// alert(++num)
// num++
// ++num
// ++num Pre-Increment
// num++ Post-Increment
// alert("Error \n Happy Coding")
// let num = 5;

// alert(num++) // 5 then update to 6
// alert(++num) // Update to 7 then return
// alert(++num) // 8
// alert(num++) // 8
// alert(++num) // 10
// alert(++num) // 11
// alert(++num) // 12
// alert(num++) // 12

// let num = 5;
            // num = 11
        //     6   +   6   +  7    +  9    + 9     + 10    + 12
// let result = ++num + num++ + num++ + ++num + num++ + num++ + ++num

            // num = 9
            // 5   +  6    -   8   +  9    -  9
// let result = num++ + num++ - ++num + ++num - num++

// alert(result);
// -1  --->    Hamza
// 3   --->    Laraib
// 10  --->    Anas
// 5   --->    Nabiullah
// 1   --->    Subhan
// 3   --->    Aqeel

// let myAge = 15;

// alert("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬")


// let newNum = 8;

//                 // newNum = 6
//                 // 8     +   8      +  8       +   8      +    7     +  7
// let newResult = newNum++ + --newNum + newNum-- + ++newNum + --newNum + newNum--

// alert(newResult);
// alert(newNum);

let num1 = 6;
let num2 = 8;
let num3 = -5;

        // num1 = 9, num2 = 11, num3 = -6
        //      6   +   -6   +  8     +    8   -   10   +  -7    +   8    +  10    +  -7
let result = num1++ + --num3 + num2++ + ++num1 - ++num2 + --num3 + num1++ + num2++ + num3++ 

// -6 + -1

alert(num1);
alert(num2);
// 7        ---> Nabiullah
alert(num3);
// -6       ---> Aqeel
// -4       ---> Nabiullah
// -20      ---> Laraib
alert(result); 
// 140      ---> Laraib
// 16       ---> Aqeel
// 66       ---> Nabiullah


// 6       ---> Uzair
// 7       ---> Maaz
// 48      ---> Ahmed, Ayan
// 40      ---> Ahmed
// 46      ---> Aqeel, Shayan, Laraib, Nabiullah