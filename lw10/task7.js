function CreatePassword(length){
    if(length < 4) throw new ValueError("get out");
    const UpperCaseLetters = "QWERTYUIOPASDFGHJKLZXCVBNM".split("");
    const LowerCaseLetters = "qwertyuiopasdfghjklzxcvbnm".split("");
    const SpecialChars = "~!$&*+!;:?/,.".split("");
    const Digits = "0123456789".split("");
    let a = Math.floor(Math.random()*25);
    console.log(a);
    let password = UpperCaseLetters[a];
    a = Math.floor(Math.random()*25);
    console.log(a);
    password += LowerCaseLetters[a];
    a = Math.floor(Math.random()*9);
    console.log(a);
    password += Digits[a];
    a = Math.floor(Math.random()*(SpecialChars.length - 1));
    console.log(a);
    password += SpecialChars[a];
    for(let i=4; i < length; i++) 
        password += UpperCaseLetters.concat(LowerCaseLetters, Digits, SpecialChars)[Math.ceil(Math.random()*(9+26+26+SpecialChars.length))];
    password = password.split("");
    for(let i=0; i < Math.floor(Math.random()*10); i++)
        password.sort(() => Math.random() - 0.5);
    console.log(password.join(""));
}

CreatePassword(19);