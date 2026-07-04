//With Promise
const promise = new Promise((resolve, reject) => {
    let success = 0;

    if (success) {
        resolve("Data Loaded");
    }
    else {
        reject("Error Loading Data");
    }
}
);

promise
    .then((msg) => {
        console.log(msg);
    })
    .catch((err) => {
        console.log(err);
    });