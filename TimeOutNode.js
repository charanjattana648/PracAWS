function myTimeout(label)
{
console.timeEnd(label);
}

console.time("Second_3");
setTimeout(myTimeout,3000,"Second_3");

console.time("Second_2");
setTimeout(myTimeout,2000,"Second_2");

console.time("Second_4");
setTimeout(myTimeout,4000,"Second_4");