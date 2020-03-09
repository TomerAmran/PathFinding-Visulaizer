class Tutorial{
    constructor() {
    this.page = document.getElementById('tutorial');
    this.text = this.page.childNodes[3];
    this.pageNumber = this.page.childNodes[5];
    this.img = this.page.childNodes[7];
    this.index = 1;

    
}
initTutorail = () => {
    this.page.style.display = "inline";
    this.index =1;
    this.page1();
}
page1 = ()=>{
    this.index = 1;
    this.text.innerHTML = "Click and drag to move SOURCE and TARGET"
    this.pageNumber.innerHTML = "1/3";
    this.img.src = "gifs/source.gif";
}
page2 = ()=>{
    this.index = 2;
    this.text.innerHTML = "Click and drag to to draw WALLS"
    this.pageNumber.innerHTML = "2/3";
    this.img.src = "gifs/walls.gif";
}
page3 = ()=>{
    this.index = 3;
    this.text.innerHTML = "Click and drag after initialization"
    this.pageNumber.innerHTML = "3/3";
    this.img.src = "gifs/redo.gif";
}
next = ()=> {
    if (this.index ==2){
        this.page3();  
    }
    if (this.index == 1){
        this.page2();   
    }
}
prev = () => {
    if (this.index ==2){
        this.page1();   
    }
    if (this.index ==3){
        this.page2();   
    }
}
exit = () => {
    this.page.style.display = "none";
}
}
const tutorial = new Tutorial();
tutorial.initTutorail();
