function prepare_breakfast() {
    let coffee_promise = new Promise((resolve, reject) => resolve("coffee ready"));
    let heatPan_promise = new Promise((resolve, reject) => resolve("heat pan"));

    let egg_promise = new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve("finished frying egg");
    }, 1000);
    });

    let pourJuice_promise = new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve("pour Juice");
    }, 1000);
    });

    let toastBread_promise = new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve("toast Bread");
    }, 1000);
    });

    let combined_promise = Promise.all([
        coffee_promise,
        heatPan_promise,
        pourJuice_promise,
        toastBread_promise,
        egg_promise]);
    return combined_promise;
    }
    async function morning() {
    let result = await prepare_breakfast();
    console.log(result);
    }
    morning();