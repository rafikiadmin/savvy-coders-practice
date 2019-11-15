// Use your looping skills to write out 'All work and no play makes Jack a dull boy' a given number of times.
// Your function writePsychoBook(num)
// Preferably, your function DOES NOT use 'console.log()
// Instead, it builds (concatenates) a long string and returns it.
// Then we can log it ourselves in the global scope.

function writePsychoBook(num) {
  let str = "";

  for (let i = 1; i <= num; i += 1) {
    str += "All work and no play makes Jack a dull boy! ";
  }

  return str;
}
