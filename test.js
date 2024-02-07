// let a = 10,
//   b = 1;
// let fact = 1;
// while (b < a) {
//   b += 1;
//   fact *= b;
// }
// console.log("fact of " + a + "   " + fact);

// for (b; b < a; b++) {
//   fact *= b;
// }
// console.log("fact of " + a + "   " + fact);

// let a = 27,
//   b = 1;
// while (a > b) {
//   if (x % 3 == 0) {
//     console.log("fass   --  " + x);
//   }
//   if (x % 5 == 0) {
//     console.log("pass");
//   }
//   if (x % (5 * 3) != 0) {
//     console.log("no pas         number is :" + "  " + x);
//   }
//   if (x % (5*3) == 0) {
//     console.log("fass and  pass       number is :" + "  " + x);
//   }

//   a -= 1;
// }

// let x = 27;
// let y = 1;

// console.log(
//   "***********************************************************************"
// );
// console.log(
//   "***********************************************************************"
// );
// console.log(
//   "***********************************************************************"
// );
// for (x; x > y; ) {
//   if (x % 3 == 0) {
//     console.log("fass   --  " + x);
//   }
//   if (x % 5 == 0) {
//     console.log("pass");
//   }
//   if (x % (5 * 3) != 0) {
//     console.log("no pas         number is :" + "  " + x);
//   }
//   if (x % (5 * 3) == 0) {
//     console.log("fass and  pass       number is :" + "  " + x);
//   }
//   x--;
//

function fizzBuzz(less, grate) {
  while (grate > less) {
    let str = "";
    if (grate % 3 == 0 || grate % 5 == 0) {
      if (grate % 3 == 0) {
        str += "Fizz ";
      }
      if (grate % 5 == 0) {
        str += "buzz ";
      }
    }
    console.log(str || grate);
    grate--;
  }
  console.log("*******************************");
}

fizzBuzz(10, 20);
fizzBuzz(24, 29);
