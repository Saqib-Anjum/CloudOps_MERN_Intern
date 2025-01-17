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
