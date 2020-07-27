
let char = "*"
let H = 13

for (i = 1; i <= Math.floor(((H)/ 2)); i++) {
    console.log(" ".repeat(H - i) + char.repeat(i) + char.repeat(i - 1))
}
console.log(" ".repeat(H - i) + char.repeat(i) + " "+ char.repeat(i - 1));
for (i = Math.ceil(H / 2); i > 0; i--) {
    console.log(" ".repeat(H - i) + char.repeat(i) + char.repeat(i - 1))
}