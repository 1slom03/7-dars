//////////////////////////

// let a = Math.floor(100000 + Math.random() * 100000)
// console.log(a)

//////////////////////////

// let arr = [2, 44, 7, 222, 534, 10]
// let max = Math.max(...arr)
// let min = Math.min(...arr)
// console.log(`eng kottasi: ${max}`)
// console.log(`eng kichigi: ${min}`)

//////////////////////////

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

//////////////////////////

// let a = prompt("Radius kiriting") - 0

// let yuzi = Math.PI * a ** 2

// console.log("Aylanani yuzini:", yuzi)

//////////////////////////

// function ortaArifmetik(a, b, c){
//     let ortacha = (a + b + c) / 3
//     return Math.round(ortacha)
// }
// console.log(ortaArifmetik(4, 7, 10))


//////////////////////////

// let random = Math.floor(Math.random() * 49)
// console.log(random)

//////////////////////////

// let a = 1;

// while (a <= 500) {
//     if (a % 7 === 0) {
//         console.log(a);
//     }
//     a++;
// }

//////////////////////////

// let a = prompt("son kiriting") - 0
// let sum = 0
// while (a > 0) {
//     sum += a % 10   
//     a = Math.floor(a / 10)
// }
// console.log("raqamla yigindisi", sum)

/////////////////////////

// let input;

// while (true) {
//     input = prompt("soz kiriting");

//     if (input.toLowerCase() === "stop") {
//         break;
//     }

//     console.log("barchasi", input);
// }

///////////////////////////

// let a = 0
// let b = 1

// while (a < 100) {
//     console.log(a)    
//     let next = a + b
//     a = b            
//     b = next           
// }

///////////////////////////
// let a = prompt("Son kirit") - 0
// let i = 1
// let fak = 1

// while (i <= a){
//     fak *= i
//     i++
// }

// console.log(`${a}! = ${fak}`)



//////////////////////////
// const password = "7844"
// let input
// do {
//     input = prompt("Parolli kiriting")
//     if (input !== password) {
//         console.log("Notogri parol, qayta urinib ko'ring")
//     }
// } while (input !== password)
// console.log("Kirish muvaffaqiyatli")


//////////////////////////
// let a = Math.floor(Math.random() * 20) + 1
// let urinish
// do {
//     urinish = prompt("1-20 gacha son kiriting:") - 0
//     if (urinish === a) {
//         console.log("Topingiz! ");
//     } else {
    //         console.log("Topilmadi, qayta urinib ko'ring.");
//     }
// } while (urinish !== a)

//////////////////////////
// let a = 0
// let b = 0
// let nan
// do {
//     nan = prompt("son kirit") - 0

//     if (nan !== 0){
//         a += nan    
//         b++
//     }

// } while (nan !== 0)

// if (b > 0) {
//     let orta = a / b;
//     console.log("ortacha qiymati", orta);
// } 

///////////////////////////

// let a = prompt ("oyning nomini kiriting")-0
// switch (a){
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
//     console.log("Notogri kiritildi")
// }

////////////////////////

// let a = prompt ("summani kiriting")
// let b = prompt ("valyutani tanlang EURO USD UZS RUB")

// switch (b.toLowerCase()){
//     case "usd":
//     console.log(a*12250 ,"uzs")
//     break
//     case "eur":
//     console.log(a*14371,"uzs")
//     break
//     case "rub":
//     console.log(a*158160 , "uzs")
//     break
//     case "uzs":
//     console.log(a +"uzs")
//     break 
//     default:
//     console.log("Iltimos faqat korsatilgan valyutalardan birini tanlang")
// }

//////////////////////////

// let a = +prompt("ballingizni kiritng");
// let b = Math.floor(a / 10);
// switch (b) {
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
//     console.log("notogri ball kiritildi");
// }

///////////////////////////

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
//     console.log("Notogri kun kiritdingiz");
// }