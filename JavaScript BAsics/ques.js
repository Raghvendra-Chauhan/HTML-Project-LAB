let str = "swiss";
let result = null;
for (let i = 0; i < str.length; i++) {
    let isUnique = true;
    for (let j = 0; j < str.length; j++) {
        if (i !== j && str[i] === str[j]) {
            isUnique = false;
            break;
        }
    }
    if (isUnique) {
        result = str[i];
        break;
    }
}