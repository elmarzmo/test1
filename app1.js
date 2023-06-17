var salary=0
var rent =0
function calculateSalary() {
  var hoursWorked = parseFloat(document.getElementById("hours").value);
  var hourlyRate = parseFloat(document.getElementById("rate").value);
  if (hoursWorked >=40){
  	 salary =(hoursWorked - 40)*hourlyRate*1.5 + hourlyRate*40
 } else{
  	 salary = hoursWorked * hourlyRate;
  }
  document.getElementById("result").innerHTML = "Monthly Salary: $" + salary.toFixed(2);
 calculateSpends()
  }
  function calculateSpends(){
   rent = salary*0.3;
  document.getElementById("rent").innerHTML = "based on your income this is what you supposed to pay for rent:" + rent.toFixed(2);
}
function calculateGrocery() {
  var person = parseFloat(document.getElementById("person").value);
  var groceryAmount = person * 200;
  document.getElementById("per").innerHTML = "You need to spend on groceries: $" + groceryAmount.toFixed(2);
}