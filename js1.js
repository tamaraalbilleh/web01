
//opening action
alert ("hello!")
var order = prompt ("what type of donut do you want to order? pink or white ");
while (order !== "white" && order !== "pink")
{
    order = prompt ("what type of donut do you want to order? pink or white ");
}
// repete action
var itemorder = '';
if (order == "white") 
{
    itemorder ='<img src= "d3.png"/>';
}
else if(order == "pink")
{
    itemorder = '<img src= "ss.png"/>';
}
var numofd = prompt ("how many donuts do you want ? please write a number ");
var result = '';
for (var i=0; i<numofd; i++)
{
   result = result + itemorder 
}
document.write (result);
var con = prompt ("do you want to confirm the purchase ? yes or no ")
// repete question
while (con !== "yes" && con !== "no")
{
    con = prompt ("do you want to confirm the purchase ? yes or no ")
}
var ans ='';
if (con == "yes")
{
 ans = '<img src="thanks.jpg"/>'
}
else if (con == "no")
{
    ans = '<img src="why.gif"/>'
}
document.write (ans);