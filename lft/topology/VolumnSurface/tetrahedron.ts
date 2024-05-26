class Tetrahedron {
    constructor(sideLength: number) {
        this.sideLength = sideLength
    }
    sideLength = NaN
    public getVolumn(): number {
        return Math.sqrt(3) * (this.sideLength^2)
    }
    public getSurfaceArea(): number {
        return Math.sqrt(3) * this.sideLength
    }
}
let tetrahedron = new Tetrahedron(1)
console.log('getVolumn','getSurfaceArea',tetrahedron)
