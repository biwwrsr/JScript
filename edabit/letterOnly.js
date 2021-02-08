function letterOnly(str){
    let result = str.replace(/[^a-zA-Z]/g, "")
    return (result);
}
console.log(letterOnly("R!@#$%^&o%^&*c$%^&*ky"))