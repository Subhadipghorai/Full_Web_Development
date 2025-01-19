const addItem = async (item) => {
    await randomDelay();
    let div = document.createElement("div");
    div.innerHTML = item;
    document.body.append(div);
};

const randomDelay = () => {
    return new Promise((resolve, reject) => {
        timeOut = 1 + 6 * Math.random();
        setTimeout(() => {
            resolve();
        }, timeOut * 1000);
    });
};

async function main() {
    let t = setInterval(() => {
        let last = document.body.getElementsByTagName("div");
        last = last[last.length - 1];
        if (last.innerHTML.endsWith("...")) {
            last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length - 3);
        } else {
            last.innerHTML = last.innerHTML + ".";
        }
    }, 400);

    let text = [
        "Initializing Hacking ",
        " Reading your files",
        "password Files detected",
        "Sending all password and personal  files to server",
        "Cleaning up",
    ];
    for (const item of text) {
        await addItem(item);
    }
    await randomDelay()
    clearInterval(t);
}
main();
