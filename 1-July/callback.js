function Hello(name, callback) {
    console.log("Hello", name)
    one = "one"
    two = "two"
    callback(one, two)
}

Hello("Manvir", (a, b) => {
    console.log(a)
    console.log(b)
})