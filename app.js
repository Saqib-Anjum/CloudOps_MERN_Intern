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


async function task() {
    try {
        const data1 = await fetchData();
        const data2 = await processData(data1);
        const result = await saveData(data2);
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

task();