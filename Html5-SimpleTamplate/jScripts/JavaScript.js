function myFunc()
{
    //alert('hello');
    //var x = 3;
    //x += 7;
    //alert(x);
    // document.getElementById("myDiv").innerHTML=x 


    var x = parseFloat(document.getElementById("Text1").value);
    var y = parseFloat(document.getElementById("Text2").value);
    var z = parseFloat(document.getElementById("Text3").value);
    var c = (x + y + z) /3;
    document.getElementById("myDiv").innerHTML = c;
}