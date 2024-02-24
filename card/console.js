
function sayHello(name){
    console.log(`Hi ${this.name}`);

}

const waitForUser = prompt(`what you name?`);

window.alert(sayHello(waitForUser));

