const funcionario1= {
  "nome": "Sandra Giovanna Drumond",
  "cpf": "715.890.756-25",
  "salario": 4522,
  "desconto": 492.03,
  "dependentes": 3
}

const basicIRSalaryCalc = (employee) => {
  const { salario, desconto, dependentes } = employee;
  return dependentes === 0 
  ? salario - desconto
  : salario - desconto - (dependentes * 164.56)
}


const IRRFDiscountCalc = (baseSalary) => {  
    if(baseSalary < 1903.99) {
      return 0;
  } else if (baseSalary < 2826.66) {
    return baseSalary * 0.075 - 142.80;
  } else if (baseSalary < 3751.06) {
    return baseSalary * 0.15 - 354.80;
  } else if (baseSalary < 4664.69) {
    return baseSalary * 0.225 - 636.13;
  } else {
    return baseSalary * 0.275 - 869.36
  }
}