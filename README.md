# liz_first_project

```
Assignment:
Write a program that solves for y given the following inputs:
- an equation in format y=mx+b
- the value of x

If b is positive, the equation will be in the format "y=mx+b", if b is negative, the equation is "y=mx-b".
M can be an integer, a floating-point number, and either positive or negative.

Test cases:
IN y=.5x-3, x=10   OUT y=7
IN y=3x+10, x=-8   OUT y=14
IN y=-2x-.5, x=42  OUT y=-84.5

Your application should take in your two inputs in the form of command line arguments separated by a space.  For example:

node myscript.js y=5x-3 20
node myscript.js y=8x+10 2

Where the first argument is the path to your script, the second argument is the equation, and the third argument is the value of x.

Clues:
- Look into the use of the array process.argv, which is a nodeJS array which exposes the command line arguments to you.
- Look into the functions parseInt() and parseFloat() in order to convert from strings to either integers or floating point numbers.
- Remember that all strings are arrays.
```