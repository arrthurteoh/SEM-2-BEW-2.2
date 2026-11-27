import { sayHello } from "./greetings.js";
import { add, subtract } from "./mathOperations.js";
import onlyOneFunction from "./defaultExporter.js"


sayHello()
console.log(add(5,7))
console.log(subtract(55, 3))
onlyOneFunction()