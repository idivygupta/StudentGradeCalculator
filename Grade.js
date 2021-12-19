  
const calcy = () =>{

  let ds = document.getElementById('ds').value;
  let cc = document.getElementById('cc').value;
  let hv = document.getElementById('hv').value;
  let maths = document.getElementById('maths').value;
  let grades = "";

  if (ds < 101 && cc < 101 && hv < 101 && maths < 101) {
  
    let totalGrades = parseFloat(ds) + parseFloat(cc) + parseFloat(hv) + parseFloat(maths); //ParseFloat used for adding numbers.

    alert('Obtained Marks : ' + totalGrades);

    let perc = (totalGrades/400) * 100;
    alert('Percentage : ' + perc);

     debugger;

     if(perc <= 100  && perc >= 80){
      grades = 'A';
     }else if(perc <= 79  && perc >= 60){
      grades = 'B';
     }else if(perc <= 59  && perc >= 40){
      grades = 'C';
     }else{
      grades = 'F';
     }

    if(perc >= 39.5){
      document.getElementById('showData').innerHTML = ` Out of 400, your Total is  ${totalGrades} and Percentage is ${perc}%. <br><br> Grade ${grades}. PASSED. `
    }
      else{
        document.getElementById('showData').innerHTML = ` Out of 400, your Total is  ${totalGrades} and Percentage is ${perc}%. <br><br> Grade ${grades}. FAILED. `
      }

  } else {
     alert('Entered Marks were wrong. Submit your marks again!!!');
    }
 
}
