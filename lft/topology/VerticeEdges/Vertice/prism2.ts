interface prism2{
    length: number;
    width: number;
    height: number;
}
void function SurfaceArea(){
    return [2 * (length * this.width + length * this.height + this.width * this.height)]
}
void function Volume() {
    return [length * this.width * this.height]
}
const Prism2 = {
    length: 3,
    width: 4,
    height: 5
}
console.log(`prism2`)