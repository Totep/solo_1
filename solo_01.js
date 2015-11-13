
var Employee = function(name, empNumber, salary, rating){
	this.name = name;
	this.empNumber = empNumber;
	this.salary = parseInt(salary);
	this.rating = rating;

this.calcStiPercentage = function(){

var bonus = 0;

if(this.rating <= 2){
	bonus = 0
} else if(this.rating === 3){
	bonus = 4
} else if(this.rating === 4){
	bonus = 6
} else if(this.rating === 5){
	bonus = 10
}
if(this.empNumber.length === 4){
    bonus += 5
}
if(this.salary > 65000){
	bonus -= 1
}
if(bonus >= 13){
	bonus = 13;
}
return bonus;
};
this.calcComp = function(salary, bonus){
	var dec = bonus / 100;

return salary *= (1 + dec);
};

this.roundedBonus = function(salary, bonus) {
	var total = salary * (bonus / 100);
	return Math.round(total);
};
};


function evalData(employee){
	
	var data = {};

	data.name = employee.name;
	data.STIPercentage = employee.calcStiPercentage();
	data.compensation = employee.calcComp(employee.salary, employee.calcStiPercentage());
	data.bonus = employee.roundedBonus(employee.salary, employee.calcStiPercentage());
	
	return data;
}

var employee1 = new Employee ('Atticus', '2405', '47000', 3);
var employee2 = new Employee ('Jem', '62347', '63500', 4);
var employee3 = new Employee ('Boo', '11435', '54000', 3);
var employee4 = new Employee ('Scout', '6243', '74750', 5);

var employees = [employee1, employee2, employee3, employee4];


for(var i = 0; i < employees.length; i++){
	console.log(evalData(employees[i]));
}

