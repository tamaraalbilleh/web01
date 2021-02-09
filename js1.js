
//opening action
alert ("hello!")


// order action
var order = prompt ("what type of donut do you want to order? pink or white ");
function ord () { 
    order = prompt ("what type of donut do you want to order? pink or white ");
}


// to repeate order action if not entered correctly 
function repete () {
    while (order !== "white" && order !== "pink")
{
    ord ();
}
}
repete ();



// to show related imgs
var itemorder = '';
function imgs (){
    if (order == "white") 
{
    itemorder ='<img src= "d3.png"/>';
}
else if(order == "pink")
{
    itemorder = '<img src= "ss.png"/>';
}
}
imgs ();



var numofd = prompt ("how many donuts do you want ? please write a number ");
var result = '';
for (var i=0; i<numofd; i++)
{
   result = result + itemorder 
}
document.write (result);

var con = prompt ("do you want to confirm the purchase ? yes or no ");
function conf (){
    con = prompt ("do you want to confirm the purchase ? yes or no ");
}
// repete question
while (con !== "yes" && con !== "no")
{
    conf ();
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