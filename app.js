function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Fetching data...");
            resolve("data1");
        }, 1000);
    });
}

function processData(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Processing ${data}...`);
            resolve("data2");
        }, 1000);
    });
}

function saveData(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Saving ${data}...`);
            resolve("success");
        }, 1000);
    });
}


fetchData()
    .then(data1 => processData(data1))
    .then(data2 => saveData(data2))
    .then(result => console.log(result))
    .catch(err => console.error(err));


    const array1 = {a: 1, b: { c: 2 }};
    const array2 = {...array1};
    array2.b.c = 42;

    console.log(array2.b.c)