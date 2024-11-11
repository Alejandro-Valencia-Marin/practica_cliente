//Forma simple

import { COMPANY, MODULE } from "./constants";


console.log("hello world" + COMPANY);
console.log("hello worls" + MODULE);


//forma default
import constants from "./constants";

console.log("Compañia" + constants.COMPANY)
console.log("Departamentos " + constants.MODULE)