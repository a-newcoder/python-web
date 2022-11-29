var dom=document.forms[0].elements[0]
//第一种
var dom=document.myForm.t
//第二种 myForm对应one.html中的<form name="myForm">， t对应one.html中的<input type="button" name="t">
//XHTML1.1中已经不支持name属性，但html5支持，所以没啥问题
var dom=document.getElementById("turnIton")
// 参数的值可以表达式，但表达式的结果必须是字符串

// 如果是一组复选框或单选按钮时一般相同的name，但id不同，所以getElementById()使用不方便
// 可以用下面一种方法来访问
var num=0;
var dom=document.getElementById("myForm");
for (index=0; index < dom.vehicles.length;index++)
    if(dom.vehicles[index].checked)
        numChecked++;
        