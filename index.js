
  function upperCase(){
    let words = document.getElementById("text_id").value;
    let w= words.split(" ");
    for (let i = 0; i < w.length; i++) {
      w[i] = w[i][0].toUpperCase() + w[i].substr(1);
  }
  let r = w.join(" ");
  document.getElementById("result").innerHTML = r; 
  }

 function lowerCase(){
  let words = document.getElementById("text_id").value;
  let w= words.split(" ");
  for (let i = 0; i < w.length; i++) {
    w[i] = w[i].toLowerCase() ;
}
let r = w.join(" ");
document.getElementById("result").innerHTML = r; 
  }


