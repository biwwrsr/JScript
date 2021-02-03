const promise = new Promise((resolve,relect) => {
    const res = true;

    if (res){
        resolve("Resolved!");
    } else {
        PromiseRejectionEvent(Error("Fatal Error"));
    }
});

promise.then(
    (res) => console.log(res),
    (err) => console.log(err),

)