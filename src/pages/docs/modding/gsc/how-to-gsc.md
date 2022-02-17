# How to: GSC

## Getting Started

While GSC is very limited, it does offer features that any basic C++ developer should be familiar with already. If you are not familiar with it, don't worry! They are super simple to learn and use.

You should have knowledge of loading GSC scripts before attempting to write them, please check [our guide about this](/docs/modding/loading-mods)

## Comments

Comments exist in two ways, one-line, or multi-line block comments.

```cs
// This is a one-line comment.

/*
This is a comment across
multiple lines!
*/
```

## Declaring Functions

You can declare functions in GSC by giving it a name, followed by a `(){` and a closing `}` at the end of your function.
Example:

```cs
myFunction()
{
 self iprintlnbold("^2My First Function!"); 
}
```

## Calling Functions

To call a function, there are different ways to go about it.

Functions can be threaded or called sequentially.

If a function is threaded, then that function is performed while the script continues, whereas if a function is called sequentially, the script waits until the function is completed before it continues.

```cs
function(); // The script will stop at this line and carry out function() before going down to the next line.
thread function(); // This will start function() and carry on to execute the next line.
```

If you call a function on an entity e.g `unnamedent thread dostuff()`, then within the function `dostuff()`, you can refer to unnamedent as `self`.

Example:

```cs
something()
{
 ent = getent("ent","targetname");
 ent function();
}

function()
{
 self moveZ(150, 5);
}
```

Example with Context:

```cs
connected()
{
  self endon("disconnect");
  for(;;)
  {
    self waittill("spawned_player");
    self thread myFunction();
  }
}
myFunction()
{
 self iprintlnbold("^2My First Function!"); 
}
```

![img](/images/docs/modding/gsc/how-to-gsc/htukqdt.png)

## Using Variables

Variables can be used in several ways, but in all cases they are used to store some data for the duration of the game.

Variables come in different forms: integers, floats, entities, strings, arrays and booleans, there are also several different ways variables can be stored.

A simple variable is simply declared using

`variable = data;`

This variable can be used in the current function and any function that passes it as an argument, or is called on it (so it'd be used as `self`).

Variables can be global (which can be used in all threads without needing to be called) by using the

`level.variable = data;`

or they can be assigned to entities individually

`entity.variable = data;`

for things like player.health (integer, already built-in, but can be modified) and level.teamBased (boolean).

## Math & Operators

Math is used throughout scripting to get many different values, be it the distance between two objects or to calculate an equation.

For example, a variable can be given data from a simple math equation.

`myVariable = 5 * 2;`

However, that isn't really useful. (You can just do the math prior to placing it into the script) But, variables can be calculated using other variables.

`varAnswer = var1 + var2;`

There are several operators you can use for math.

```cs
+ :: Addition
- :: Subtraction
* :: Multiplication
/ :: Division
% :: Modulus (Remainder)
= :: Equals
++ :: Increment (+1)
-- :: Decrement (-1)
+= :: Incrementation (requires number)
-= :: Decrementation (requires number)
```

Examples:

```cs
var++; // Set var to var + 1
var--; // Set var to var - 1
var += int; // Set var to var + int
var -= int; // Set var to var - int
```

## If Statements

An 'if' statement is used to verify whether some data satisfies certain conditions, and then to execute code depending on the outcome.

To understand this section, you must first know the operators used to compare data:

```cs
== :: Equal To
!= :: Not Equal To
!  :: Negation (Not equal to)
<  :: Less than
>  :: Greater than
<= :: Less or Equal to
>= :: Greater or Equal to
&& :: And
|| :: Or
```

<Details title="Bitwise Information">

You can also use [Bitwise (Wikipedia)](https://en.wikipedia.org/wiki/Bitwise_operation) operation inside IW5 (MW3) GSC scripts.

```cs
& :: Bitwise And
| :: Bitwise Or (inclusive or)
^ :: Bitwise Xor (exclusive or)
<< :: Left Shift
>> :: Right Shift
~ :: Bitwise NOT (one's complement)
```

</Details>

Example:

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

You can also use an "else if" in the statement. This is used in a scenario where you want to check multiple comparisons.

```cs
if(var1 == var2)
{
  // If above arguement is true
}
else if(!var1 && var3)
{
  // If var1 is false but var3 is true
}
else
{
  // If all other if statements were false
}
```

In GSC, you can check if a variable is defined as a condition. This function is called ``isDefined``, it takes the variable as the only parameter, and returns true/false. If a variable equals ``undefined`` or just isn't defined at all, you should get ``false``.

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

## Loops

Loops come in different forms...

**While** :: A while loop is a loop that keeps looping WHILE the arguement is true.

**For** :: A for loop is a loop that loops a set amount of times

**Foreach** :: A foreach loop is used when you want to do something on all items in an array.

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

### ``foreach``

Foreach loops are loops that let you do something on every item in an array.

A foreach loop looks like:

```cs
foreach(something in array)
{
  // Do something
}
```

An example would look something like this:

```cs
foreach(player in level.players) // "For every player in the game"
{
    player giveWeapon("dsr50_mp", 0); // Give every player in the game a DSR 50.
}
```

## Wait

GSC is ran on every server frame, which consists of 20 server frames per 1 second. If this is called on a non-threaded function, it will hold the server/entity.

```cs
wait 0.05; // 1 server frame
wait 0.5;  // 10 server frames
wait 1;    // 20 server frames
wait (1);  // 20 server frames
```

## Switch

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

## Notify / Endon / Waittill

These 3 functions allow you to make a script wait for specific events and then trigger those events in different parts of the scripts.

The following triggers the `killed_player` notification on `self` (which is a player in this case):

`self notify("killed_player");`

If you use `player waittill("x")` or `player endon("x")`, then using a `level notify("x")` will not trigger either of them - level is not the same entity as player, and all entities' triggers are independant.

Using the functions is easy. Firstly, decide which entity you want to wait for the trigger on. This is a player most of the time, but if you want a global trigger then use `level`.

Then you must decide which trigger to use. You can choose either `endon` or `waittill` - they are both self explanatory, one will end the function it is running in when triggered, and the other will 'wait' until the specified trigger.

Example:

```cs
spawnPlayer()
{
  self notify("spawned");
  
  /*
     ... Code snipped ... this is another type of 
     comment that can span multiple lines. 
  */
  
}

Callback_PlayerKilled(attacker, some other arguments)
{
  self endon("spawned"); // This makes callback_playerkilled() terminate when "spawned" is triggered in spawnplayer().
}
```

## Including other GSC

By using the format `#include path\filename;` you can include a GSC file into your existing GSC file.  
Filenames can either have or not have the file extension, folders are separated by a backslash.  
All of the path must be in one word, may have spaces/tabs/newlines before and after filename until semicolon.  
Includes must be done before any sort of function is defined inside the file.  

## HUD Elements

**Note** For certain things (HUD Elements in mind) you are **required** to use a `include`, simply wack `#include maps\mp\gametypes\_hud_util;` at the very top of your script and the following will work.

You can get text on players screens with relative ease. We use the following to do so:

For `setPoint` you can use any of the following, or just direct values. Note that if you are using values, the quotes are not required.

`self.someText setPoint(<POINT1>, <POINT2>, <POINT3>, <POINT4>);`

```cs
<POINT1> This is the Horizontal "Point"
<POINT2> This is the Vertical "Point"
<POINT3> This can either be a Number (X) or a "Point". (Horizontal)
<POINT4> This can either be a Number (Y) or a "Point". (Vertical)

Horizontal:
LEFT
RIGHT
CENTER

Vertical:
BOTTOM
TOP
CENTER
```

Note: there are more, but I dont suggest you use these.

Example:

```cs
self.someText = self createFontString( "Objective", 1.5 );
self.someText setPoint( "CENTER", "CENTER", "CENTER", "CENTER" );
self.someText setText( "^1forum.plutonium.pw" ); 
```

![img](/images/docs/modding/gsc/how-to-gsc/5IBKF2F.png)

---

## Porting from other games

This guide has parts from Zeroy's CoD 4 GSC guide, but nothing was changed about it for our games, this shows how versatile GSC really is. You can take simple code from other games and port it with minimal effort.

---

## Resources/Credits

[Download the script](https://cdn.discordapp.com/attachments/710609237805498500/842246918586761216/myFirstGSC.gsc) I used which demonstrates some of the topics discussed here.

[Zeroy's CoD4 GSC Introduction](https://wiki.zeroy.com/index.php?title=Call_of_Duty_4:_Introduction)

[Ingramz's CoDScript Example](https://gist.github.com/ChxseH/aa1a67e9b1254620b4909aa42ef60184)

[iAegle's "Creating a HUD Element Guide"](https://www.itsmods.com/forum/Thread-Tutorial-Creating-a-HUD-Element-Text-Basics.html)
