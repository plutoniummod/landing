# GSC Compiler Limitations [WIP]

The compiler used for BO2 has some limitations and flaws that you will most likely run into at one point. Most of these are documented and are easy to work around if you just follow the correct way to do whatever you are doing. So, let's look at some.

**(Credits to [JezuzLizard](https://github.com/JezuzLizard) for documenting these)**

## Infinite Loops
- You cannot use any nested ``foreach`` as it will cause an infinite loop.
- You cannot use ``continue;`` in ``foreach`` or ``for`` loops as it will cause an infinite loop.

## Operators
You should always use parenthesis when comparing values that use conditions and while using operators. **P.E.M.D.A.S** and basic math will still matter when doing GSC. If you do not remember that, your script may mess up depending on what you are doing.</br>

- ``(0 - 1) < 1`` is not the same as ``0 - 1 < 1``. The compiler will recognize & compile it as</br> ``0 - (1 < 1)``.</br>
- ``(0 - 1) < 1`` will return ``true`` (or 1) because 1 is greater than -1</br>
- ``0 - 1 < 1 `` will return ``false`` (or 0) because it will compare the values then subtract.

If you still do not understand, just use parenthesis when operators are involved.

## if Statements
- You cannot use more than 2 conditions in an ``if`` statement connected by OR (``||``) operators enclosed in parenthesis.

   Example:
   ```cs
   if ((a || b || c) && d)
   ```
   This will not compile. However, you can rewrite this as either of the two:
   ```cs
   if ((a || b) && d || c && d)
   if (a && d || b && d || c && d)
   ```

- You cannot use OR (``||``) operators in an ``if`` statement and in parenthesis if the string of conditions would not be on the leftmost side of the if statement and the number of conditions on the rightmost side is not at least 2.

   Example:
   ```cs
   if (a && (b || c))
   ```
   This will not compile. However, 
   ```cs
   if ((b || c) && a)
   ```
   will compile in the case of:
   ```cs
   if ((a || b) && (c || d))
   ```

## Variables

- You cannot use variable-defined notifies/waittills with extra inputs/outputs.

   Example:
   ```cs
   var = "connected";
   level notify(var, player);
   level waittill(var, player);
   ```
   This will compile. However, the notify/waittill will not work. This is the only way to do this:
   ```cs
   level notify("connected", player);
   level waittill("connected", player);
   ```

## Animtree

Unfortunately, for certain scripts doing: </br>
``#using_animtree( "animtree" );`` </br>
is required for the script to function. Scripts containing it will crash on start/while running. There is a workaround using script names such as ``maps/mp/gametypes_zm/_globalentities.gsc`` and naming an extracted but not decompiled script.