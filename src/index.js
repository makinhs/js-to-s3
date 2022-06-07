export default class CustomSDK {
    constructor() {
        console.log('Custom SDK loaded');
    }

    sayHi(){
        console.log('Hello World hey hey')
    }

    alertMe(){
        alert('Hey')
    }
}

window.CustomSDK = CustomSDK;