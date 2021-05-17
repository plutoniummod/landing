# GSC Syntax & Features [WIP]

While GSC is very limited, it does offer features that any basic C++ developer should be familiar with already. If you are not familiar with it, don't worry! They are super simple to learn and use.

## Control Flow

### ``wait``
GSC is ran on every server frame, which consists of 20 server frames per 1 second. If this is called on a non-threaded function, it will hold the server/entity.

```cs
wait 0.05; // 1 server frame
wait 0.5;  // 10 server frames
wait 1;    // 20 server frames
wait (1);  // 20 server frames
```

### ``switch``
Switch cases are useful for checking the case of a lot of values. This is usually seen to be faster and recommended to use than a ``if`` statement.

```cs
value = 3;
switch (value)
{
    case 1:
        iprintln("Value was 1");
        break;
    case 2:
        iprintln("Value was 2");
        break;
    case 3:
        iprintln("Value was 3");
        break;
    default:
        iprintln("Value was not found");
        break;
}
```

### ``if``
If statements are used to check if 1 or more condition(s) are met and run specific code based on that.

```cs
if (3 < 5) {
    iprintln("Condition met");
} else {
    iprintln("Condition not met");
}
```

This can also be used to check the conditions of player variables or just variables.
```cs
self.condition = false;
if (self.condition) { // is true?
    self iprintln("self.condition is true");
} else {
    self iprintln("self.condition is false");
}
```

```cs
number = 5;
if (number == 5) {
    iprintln("number is 5");
} else {
    iprintln("number is not 5");
}
```

In GSC, you can check if a variable is defined as a condition. This function is called ``isDefined``, it takes the variable as the only parameter, and returns true/false. If a variable equals ``undefined`` or just isn't defined at all, you should get ``true``.
```cs
var = 5;
var2 = 6;

if (isDefined(var)) { // var is defined as 5
    iprintln("var is defined");
    var2 = undefined; // undefine var2
}

if (isDefined(var2)) { // this should not be met as var2 was undefined.
    iprintln("var2 is defined");
} else if (!isDefined(var2)) {
    iprintln("var2 is undefined");
}
```

### ``for``
For loops are loops that can be infinite or loops that only run until a condition of some sort is met.

A infinite loop looks like:
```cs
for(;;) {
    iprintln("Infinite loop!");
    wait 0.05; // **IMPORTANT! ONLY RUNS EVERY SERVER FRAME!**
}
```

A loop that will stop after ``i`` is no longer less than ``var``, which equals 10.
```cs
var = 10;
for(i=0; i<var; i++) {
    iprintln("Looping! " + i);
}
```

### ``while``
While loops are basically for loops, but only checks if the condition is true/false. 

In this example, if ``number`` is true (not 0) then it will keep running. But, every time the while loop is ran, we decrease ``number`` by 1.
```cs
number = 5;
while (number) {
    iprintln("Number equals: " + number);
    number--;
}

iprintln("The while loop has ended."); // this will only be seen if the loop ended

/*

5 prints should have been made:
"Number equals: 5"
"Number equals: 4"
"Number equals: 3"
"Number equals: 2"
"Number equals: 1"
"The while loop has ended."

*/
```