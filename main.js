///////////// 1-misol /////////////

// let a = Math.floor(100000 + Math.random() * 100000)
// console.log(a)

///////////// 2-misol /////////////

// let arr = [2, 44, 7, 222, 534, 10]
// let max = Math.max(...arr)
// let min = Math.min(...arr)
// console.log(`eng kottasi: ${max}`)
// console.log(`eng kichigi: ${min}`)

///////////// 3-misol /////////////

// let a = prompt("Son kirting") - 0;
// let res = [];
// function findTub(value) {
//     if (value < 2) return;
//     let tub = true;
//     for (let i = 2; i < value; i++) {
//         if (value % i === 0) {
//             tub = false;
//             break;
//         }
//     }
//     if (tub) {
//         res.push(value);
//     }
// }
// for (let i = 1; i <= n; i++) {
//     findTub(i);
// }

// console.log(res);

///////////// 4-misol /////////////

// let a = prompt("Radius kiriting") - 0

// let yuzi = Math.PI * a ** 2

// console.log("Aylanani yuzini:", yuzi)

////////////// 5-misol /////////////

// function ortaArifmetik(a, b, c){
//     let ortacha = (a + b + c) / 3
//     return Math.round(ortacha)
// }
// console.log(ortaArifmetik(4, 7, 10))


////////////// 6-misol /////////////

// let random = Math.floor(Math.random() * 49)
// console.log(random)

////////////// 8-misol /////////////

// let a = 1;

// while (a <= 500) {
//     if (a % 7 === 0) {
//         console.log(a);
//     }
//     a++;
// }

////////////// 9-misol /////////////

// let a = prompt("son kiriting") - 0
// let sum = 0
// while (a > 0) {
//     sum += a % 10   
//     a = Math.floor(a / 10)
// }
// console.log("raqamla yigindisi", sum)

//////////// 10-misol /////////////

// let input;

// while (true) {
//     input = prompt("soz kiriting");

//     if (input.toLowerCase() === "stop") {
//         break;
//     }

//     console.log("barchasi", input);
// }

////////////// 11-misol /////////////

// let a = 0
// let b = 1

// while (a < 100) {
//     console.log(a)    
//     let keyingi = a + b
//     a = b            
//     b = keyingi           
// }


// let n = prompt("Son kirit") - 0
// let i = 1
// let faktorial = 1

// while (i <= n){
//     faktorial *= i
//     i++
// }

// console.log(`${n}! = ${faktorial}`)




// const password = "8007"
// let input
// do {
//     input = prompt("Parolli kiriting")
//     if (input !== password) {
//         console.log("habar op turas")
//     }
// } while (input !== password)
// console.log("togri parol")



// let secret = Math.floor(Math.random() * 20) + 1
// let imkoniyat
// do {
//     imkoniyat = prompt("1-20 orasida son kiriting:") - 0
//     if (imkoniyat === secret) {
//         console.log("Topildi 🎉");
//     } else {
    //         console.log("Topilmadi 😒")
//     }
// } while (imkoniyat !== secret)


// let sum = 0
// let count = 0
// let num
// do {
//     num = prompt("son kirit") - 0

//     if (num !== 0){
//         sum += num    
//         count++
//     }

// } while (num !== 0)

// if (count > 0) {
//     let orta = sum / count;
//     console.log("ortacha qiymati", orta);
// } 

// let oy = prompt ("oyni kirit")-0
// switch (oy){
//     case 12:
//     case 1:
//     case 2:
//     console.log("Qish")
//     break

//     case 3:
//     case 4:
//     case 5:
//     console.log("Bahor")
//     break

//     case 6:
//     case 7:
//     case 8:
//     console.log("Yoz")
//     break

//     case 9:
//     case 10:
//     case 11:
//     console.log("Kuz")
//     break

//     default:
//     console.log("Notogri oy")
// }


// let summa = prompt ("summani kiriting")
// let valyuta = prompt ("valyutani tanlang EURO USD UZS RUB")

// switch (valyuta.toLowerCase()){
//     case "usd":
//     console.log(summa*12250 ,"uzs")
//     break
//     case "eur":
//     console.log(summa*14371,"uzs")
//     break
//     case "rub":
//     console.log(summa*158160 , "uzs")
//     break
//     case "uzs":
//     console.log(summa +"uzs")
//     break 
//     default:
//     console.log("boshqa valyuta kiritikdi")
// }



// let ball = +prompt("ball kiritng");
// let bolish = Math.floor(ball / 10);
// switch (bolish) {
//     case 10:
//     case 9:
//     console.log("A");
//     break;

//     case 8:
//     console.log("B");
//     break;

//     case 7:
//     console.log("C");
//     break;

//     case 6:
//     console.log("D");
//     break;

//     case 5:
//     case 4:
//     case 3:
//     case 2:
//     case 1:
//     case 0:
//     console.log("E");
//     break;

//     default:
//     console.log("notogri bal");
// }



// let kun = prompt("hafta kunini kiriting");

// switch(kun) {
//     case "1":
//     console.log("Dushanba - Ish kuni");
//     break;
//     case "2":
//     console.log("Seshanba - Ish kuni");
//     break;
//     case "3":
//     console.log("Chorshanba - Ish kuni");
//     break;
//     case "4":
//     console.log("Payshanba - Ish kuni");
//     break;
//     case "5":
//     console.log("Juma - Ish kuni");
//     break;
//     case "6":
//     console.log("Shanba - Dam olish kuni");
//     break;
//     case "7":
//     console.log("Yakshanba - Dam olish kuni");
//     break;
//     default:
//     console.log("Notogri kun raqami");
// }


// let text = "sanjarbek___8007";
// function raqamniAjratsh(text){
//     let natija = "";
//     for (let i = 0; i < text.length; i++){
//         if (text[i] >= "0" && text[i] <= "9"){
//             natija += text[i]
//         }
//     }
//     return natija
// }
// console.log(raqamniAjratsh(text))


// let numbers = [1,2,3,4,5,6]
// let kvadrat = numbers.map(function(num){
//     return num * num
// })
// console.log(kvadrat)


// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let juftSon = numbers.filter(function(num){
//     return num % 2 === 0
// })
// console.log(juftSon)


// let numbers = [3, 7, 0, -5, 8, 2]
// let manfiy = numbers.find(function(num){
//     return num < 0
// })
// console.log(manfiy)


// function kattasi(a, b, c){
//     if (a >= b && a >= c){
//         return a
//     } else if (b >= a && b >= c){
//         return b
//     } else {
    //         return c
//     }
// }

// console.log(kattasi(10, 20, 30)) 



