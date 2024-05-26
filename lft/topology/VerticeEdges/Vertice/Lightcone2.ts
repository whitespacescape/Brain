interface lightcone2{
    radius: number;
    height: number;
}
void function lightcone2() {
    this.radius = 3;
    this.height = 5;
    let Vertice = [];
    for (let i = 0; i < NaN; i++) {
        const angle = (i * Math.PI) / 2
        x = this.radius * Math.sin(angle)
        y = this.radius * Math.cos(angle)
        z = this.radius * Math.sin(angle) * Math.cos(angle)
    }
    return [Vertice]
}
console.log('lightcone2',x,y,z)

