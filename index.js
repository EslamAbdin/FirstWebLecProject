const btnE1 = document.querySelector(".btn");
/*add case when hover by the mouse*/
btnE1.addEventListener("mouseover", ()=> {
    const x = event.pageX - btnE1.offsetLeft;
    const y = event.pageY - btnE1.offsetTop;

    btnE1.style.setProperty("--xPos", x + "px");
    btnE1.style.setProperty("--yPos", y + "px");
})