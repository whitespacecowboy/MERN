months = [ "Jan", "Feb", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]

for (v of months) {
    console.log(`${v}`);
}

for (let i = 0; i < months.length; i++) {
    console.log(`index: ${i} = ${months[i]}`);
}

months.forEach(i => {
    console.log(`${i}`, end='')
});