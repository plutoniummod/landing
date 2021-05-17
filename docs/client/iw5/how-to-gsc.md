# How to: GSC in IW5

## Getting Started

You should have knowledge of loading GSC scripts before attempting to write them, please check [our guide about this](loading-gsc)

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

![img](https://i.imgur.com/htukqdt.png)

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

Example:
```cs
if(var1 == var2)
{
  // If it's true, run this code.
}
else
{
  // If it's false, run this code.
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

## Loops

Loops come in different forms...

**While** :: A while loop is a loop that keeps looping WHILE the arguement is true.

**For** :: A for loop is a loop that loops a set amount of times

To use a while loop, a condition/some conditions must be stated: `while(conditions)`

Often, this loop is used for infinite loops, which last forever unless specifically stopped.

This is done using the arguement of 1 or true (1 is the integer of true)

`while(1)`

`while(true)`

A while loop can also be used as a normal loop that loops while the arguement is true, when the arguement becomes false the loop exits automatically (or rather, doesn't begin executing the commands in the loop again but just finishes the loop in progress).

```cs
int = 0;

while(int < 10)
{
 wait 1;
 int++;
}
```

The above code will loop while 'int' is less than 10.

The loop waits 1 second, and then the loop increments 'int'.

Once 'int' is not less than 10, the loop breaks.

For loops require three arguments, `for(declare; while; do)`, a simple for loop looks like `for(i = 0; i < 10; i++)`, which means (i is 0, while i is smaller than 10, add one to i).

You can create an infinite loop, but be careful when you do. They require `wait`, and a `break` somewhere.

```cs
for(;;)
{
  wait 1;
  if(var1 == var2)
  {
    break;
  }
}
```

That code means to wait 1 second, then check the if statement, if var1 is equal to var2, break out of the loop - else continue the loop.

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

![img](https://i.imgur.com/5IBKF2F.png)

---

## Porting from other games

In case you couldn't tell, this guide was written with CoD4 in mind, but I changed *nothing* about it for IW5, this shows how versatile GSC really is. You can take simple code from other game's and port it to IW5 with minimal effort.

---

## Resources/Credits

[Download the script](https://cdn.discordapp.com/attachments/710609237805498500/842246918586761216/myFirstGSC.gsc) I used which demonstrates some of the topics discussed here.

[Zeroy's CoD4 GSC Introduction](https://wiki.zeroy.com/index.php?title=Call_of_Duty_4:_Introduction), which was taken from [this](http://www.codjumper.com/forums/viewtopic.php?t=4011) CoDJumper thread.

[iAegle's "Creating a HUD Element Guide"](https://www.itsmods.com/forum/Thread-Tutorial-Creating-a-HUD-Element-Text-Basics.html)
