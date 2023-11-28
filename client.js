// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

//console.log('array of employee data: ',  employees );


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

/*
* Loop through employees array
*  Log to the console results from calling calculateIndividualEmployeeBonus(eachEmployee) 
*/

for (let employee of employees) {
  //console.log('Current employee within loop:', employee);
  console.log('Current employee bonus', calculateIndividualEmployeeBonus(employee));
}


// This function will calculate 1 employee's bonus!
//
function calculateIndividualEmployeeBonus(employee) {
  // your logic here
  // console.log('Employee within calculateIndividualEmployeeBonus', employee);
  let employeeAfterPayRaise = {};
  let name = employee.name;
  let annualSalary = parseInt(employee.annualSalary);
  let totalCompensation = 0;
  let bonusPercentage = 0;
  let totalBonus = 0;

  // check rating condition, apply bonus as described in readme.md
  // console.log("employee rating:", employee.reviewRating);
  switch (employee.reviewRating) {
    case (5):
      bonusPercentage = 0.10;
      totalBonus = annualSalary * bonusPercentage;
      // console.log("calculated bonus for current employee:", totalBonus);

      totalCompensation = annualSalary + totalBonus;
      // console.log("calculated totalCompensation for current employee:", totalCompensation);
      employeeAfterPayRaise.name = name;
      employeeAfterPayRaise.bonusPercentage = bonusPercentage;
      employeeAfterPayRaise.totalCompensation = totalCompensation;
      employeeAfterPayRaise.totalBonus = totalBonus;
      break
    case (4):
      bonusPercentage = 0.06;
      totalBonus = annualSalary * bonusPercentage;
      // console.log("calculated bonus for current employee:", totalBonus);

      totalCompensation = annualSalary + totalBonus;
      // console.log("calculated totalCompensation for current employee:", totalCompensation);
      employeeAfterPayRaise.name = name;
      employeeAfterPayRaise.bonusPercentage = bonusPercentage;
      employeeAfterPayRaise.totalCompensation = totalCompensation;
      employeeAfterPayRaise.totalBonus = totalBonus;
      break
    case (3):
      bonusPercentage = 0.04;
      totalBonus = annualSalary * bonusPercentage;
      // console.log("calculated bonus for current employee:", totalBonus);

      totalCompensation = annualSalary + totalBonus;
      // console.log("calculated totalCompensation for current employee:", totalCompensation);
      employeeAfterPayRaise.name = name;
      employeeAfterPayRaise.bonusPercentage = bonusPercentage;
      employeeAfterPayRaise.totalCompensation = totalCompensation;
      employeeAfterPayRaise.totalBonus = totalBonus;
      break
    default:
      bonusPercentage = 0.00;
      totalBonus = annualSalary * bonusPercentage;
      // console.log("calculated bonus for current employee:", totalBonus);

      totalCompensation = annualSalary + totalBonus;
      // console.log("calculated totalCompensation for current employee:", totalCompensation);
      employeeAfterPayRaise.name = name;
      employeeAfterPayRaise.bonusPercentage = bonusPercentage;
      employeeAfterPayRaise.totalCompensation = totalCompensation;
      employeeAfterPayRaise.totalBonus = totalBonus;
      break
      
  }

  if (employee.employeeNumber.length === 4) {
    let additionalBonusPercentage = 0.05;
    bonusPercentage += additionalBonusPercentage;
    totalBonus = annualSalary * bonusPercentage;
    totalCompensation = annualSalary + totalBonus;

    employeeAfterPayRaise.bonusPercentage = bonusPercentage;
    employeeAfterPayRaise.totalCompensation = totalCompensation;
    employeeAfterPayRaise.totalBonus = totalBonus;
  }

  if (employee.annualSalary > 65000) {
    bonusPercentage -= 0.01;
    totalBonus = annualSalary * bonusPercentage;
    totalCompensation = annualSalary + totalBonus;

    employeeAfterPayRaise.bonusPercentage = bonusPercentage;
    employeeAfterPayRaise.totalCompensation = totalCompensation;
    employeeAfterPayRaise.totalBonus = totalBonus;
  }

  if (bonusPercentage > 0.13) {
    employeeAfterPayRaise.bonus = 0.13;
    totalBonus = annualSalary * bonusPercentage;
    totalCompensation = annualSalary + totalBonus;

    employeeAfterPayRaise.bonusPercentage = bonusPercentage;
    employeeAfterPayRaise.totalCompensation = totalCompensation;
    employeeAfterPayRaise.totalBonus = totalBonus;
  }
  if (bonusPercentage < 0.00) {
    bonusPercentage = 0.00;
    totalBonus = annualSalary * bonusPercentage;
    totalCompensation = annualSalary + totalBonus;

    employeeAfterPayRaise.bonusPercentage = bonusPercentage;
    employeeAfterPayRaise.totalCompensation = totalCompensation;
    employeeAfterPayRaise.totalBonus = totalBonus;
  }
  // return new object with bonus results
  return employeeAfterPayRaise;
}

