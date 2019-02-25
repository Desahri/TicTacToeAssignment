# Data
The data will be in JSON format

The object will map a number to the grid state
e.g:
{
    0: [null,null,X,null,null,null,null,null,null],
    1: [null,null,X,null,null,null,null,null,O]
}

In the first turn (number 0), an X is placed in the upper right corner
In the second turn (number 1), an O is placed in the lower right corner

the grid is represented as follows:
[
    0, 1, 2,
    3, 4, 5,
    6, 7, 8
]

In the previous example, grid 2 has an X and grid 8 has an O