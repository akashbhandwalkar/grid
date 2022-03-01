const grandparent = document.querySelector('.grandparent');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');


grandparent.onclick = (event) => {
    log(event);
};


parent.onclick = (event) => {
    log(event);

}


child.onclick = (event) => {
    log(event);
}

const log = (event) =>  {
    const { target, currentTarget } = event;
    console.log("classNames", {
        target: target.className,
        currentTarget: currentTarget.className,
    });
}