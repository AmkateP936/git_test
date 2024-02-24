
function sayHello(name){
    return `Hi ${name} your welcome ☺`;

}

const waitForUser = window.prompt(`what you name?`);
const sayThat = sayHello(waitForUser);
window.alert(sayThat);

