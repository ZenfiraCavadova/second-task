// ===========FIRST PROBLEM=============
// Günün saatına görə mesaj çıxaran alqoritm.
//Verilmiş saat əgər 12 dən kiçikdirsə “Sabahın xeyir”
//12-dən böyük 17 - dən kiçik olarsa “Günortanız xeyir”
//17-dən böyük olarsa “Axşamınız xeyir” mesajını yazsın
let clock = 17;
if (clock <= 12) {
  console.log("Sabahınız xeyir");
} else if (12 < clock && clock <= 17) {
  console.log("Günortanız xeyir");
} else if (clock > 17 && clock <= 24) {
  console.log("Axşamınız xeyir");
} else {
  console.log("Zəhmət olmasa saatı düz qeyd edin");
}

// ==============SECOND PROBLEM======================
//Verilmiş 3 ədədin Ortalamasını tapan və həmin ortalama 20 dən kiçik olarsa “Aktiv”
//20 -dən böyük olarsa Deaktiv yazılsın
let numberOne = 5,
  numberTwo = 12,
  numberThree = 4;
let numericalAverage = (numberOne + numberTwo + numberThree) / 3;
console.log(numericalAverage);
if (numericalAverage >= 20) {
  console.log(`This number is ${numericalAverage}and aktiv`);
} else {
  console.log(`This number is ${numericalAverage} and deaktiv`);
}

//==================FIRST PROBLEM=====================
//İstifadəçidən 3 dənə tərəf alın side1 , side2, side3
//bu tərəflərə görə üçbucağın mövcudluğunu yoxlayın.
// Mövcuddursa Ekrana mövcuddur deyilsə mövcud deyildir yazsın.
// let side1=+prompt("Zəhmət olmasa 1-ci tərəfi daxil edin");
// let side2=+prompt("Zəhmət olmasa 2-ci tərəfi daxil edin");
// let side3=+prompt("Zəhmət olmasa 3-cü tərəfi daxil edin");

// if(side1+side2>side3 && side2+side3>side1 && side1+side3>side2){
//     alert("Bu üçbucaq mövcuddur");
// }
// else{
//     alert("Bu üçbucaq mövcud deyil");
// }

//=====================SECOND PROBLEM=====================
//Üçbucağın tərəflərin mövcudluğunu yoxladıqdan sonra üçbucağın tərəfinə görə tipin tapın
//bərabər tərəfli müxtəlif tərəfli və ya bərabəryanlı olduğunu təyin edin.let side1=+prompt("Zəhmət olmasa 1-ci tərəfi daxil edin");
// let side1 = +prompt("Zəhmət olmasa 1-ci tərəfi daxil edin");
// let side2 = +prompt("Zəhmət olmasa 2-ci tərəfi daxil edin");
// let side3 = +prompt("Zəhmət olmasa 3-cü tərəfi daxil edin");

// if (side1 + side2 > side3 && side2 + side3 > side1 && side1 + side3 > side2) {
//   alert("Bu üçbucaq mövcuddur");
//   if (side1 == side2 && side1 === side3) {
//     alert("Bu üçbucaq bərabər tərəflidir");
//   } else if (side1 == side2 || side1 == side3 || side2 == side3) {
//     alert("Bu üçbucaq bərabəryanlıdır");
//   } else {
//     alert("BU üçbucaq müxtəlif tərəflidir");
//   }
// } else {
//   alert("Bu üçbucaq mövcud deyil");
// }

//====================THIRD PROBLEM======================
//Havanın tipinə görə havanın yağışlı günəşli qarlı olduğunu yazın switch case ilə yazın.
//'cloudy'  olarsa hava 'It might be cold, you need a jacket.' yazsın məsələn.
// let weather = "snowy";
// switch (weather) {
//   case "sunny": {
//     console.log("Today weather is perfect, you can go for a walk");
//     break;
//   }
//   case "cloudy": {
//     console.log("It might be cold, you need a jacket.");
//     break;
//   }
//   case "rainy": {
//     console.log("You should take an umbrella");
//     break;
//   }
//   case "snowy": {
//     console.log(
//       "If you don't have important work, you shouldn't leave the house"
//     );
//     break;
//   }
//   default: {
//     console.log("Weather is normal");
//   }
// }

//================FOURTH PROBLEM==================
//İstifadəçidən ədəd alsın ədəd 1-12 arası olsun bu ədədlərdən kiçik və böyük olarsa ekrana ədəd doğru deyil yazsın. Sonra ədədə görə ilin ayını müəyyən etsin.
// məsələn ədəd 11 olarsa Ekrana bu noyabr ayıdır yazsın. Switch casse ilə yazın .
// let month = +prompt("Zəhmət olmasa 1-12 arası ədəd daxil edin");

// switch (month) {
//   case 1:
//     alert("Bu ay yanvar ayıdır");
//     break;

//   case 2:
//     alert("Bu ay fevral ayıdır");
//     break;

//   case 3:
//     alert("Bu ay mart ayıdır");
//     break;
//   case 4:
//     alert("Bu ay aprel ayıdır");
//     break;
//   case 5:
//     alert("Bu ay may ayıdır");
//     break;
//   case 6:
//     alert("Bu ay iyun ayıdır");
//     break;
//   case 7:
//     alert("Bu ay iyul ayıdır");
//     break;
//   case 8:
//     alert("Bu ay avqust ayıdır");
//     break;
//   case 9:
//     alert("Bu ay sentyabr ayıdır");
//     break;
//   case 10:
//     alert("Bu ay oktyabr ayıdır");
//     break;
//   case 11:
//     alert("Bu ay noyabr ayıdır");
//     break;
//   case 12:
//     alert("Bu ay dekabr ayıdır");
//     break;
//   default:
//     alert("Daxil etdiyiniz ədəd 1-12 arası deyil");
// }

// İstifadəçidən ədəd alın bu ədədin mənfi və ya müsbət olmasını ekrana yazdırın Ternary operatordan istifadə edərək.
// let number = +prompt("Zəhmət olmasa integer ədəd daxil edin");
// number >= 1 ? alert("Bu ədəd müsbət ədəddir") : alert("Bu ədəd mənfi ədəddir");
