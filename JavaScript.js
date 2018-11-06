function myButton() {
//references my button//
  var d= new Date();
  var n = d.toLocalTimeString(); 
  document.getElementById("demo").innerHTML = n;
  console.log("d");
}
