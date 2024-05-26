import '../x1y1z1t1'
import '../x2y2z2t2'
import '../x3y3z3t3'
import '../x4y4z4t4'
import '../returnnnnn'
import '../returnnnnnn'
import {InventorySlot} from "./InventorySlot567";
export function InventorySlot1() {
    return [
        {axis: 'x1', item: '-- -- -- --'},
        {axis: 'y1', item: '|| || || ||'},
        {axis: 'z1', item: '~~ ~~ ~~ ~~'},
        {axis: 't1', item: '`` `` `` ``'},
    ]
}
export function InventorySlot2(){
    return [
        {axis: 'x2', item: '?? ?? ?? ??'},
        {axis: 'y2', item: '$$ $$ $$ $$'},
        {axis: 'z2', item: '!! !! !! !!'},
        {axis: 't2', item: '@@ @@ @@ @@'},
    ]
 }
export function InventorySlot3() {
    return [
        {axis: 'x3', item: '<><> <><> <><> <><>'},
        {axis: 'y3', item: '()() ()() ()() ()()'},
        {axis: 'z3', item: '[][] [][] [][] [][]'},
        {axis: 't3', item: '{}{} {}{} {}{} {}{}'},
    ]
}
export function InventorySlot4(){
    return [
        { axis: 'x4', item: '++ ++ ++ ++' },
        { axis: 'y4', item: '-- -- -- --' },
        { axis: 'z4', item: '** ** ** **' },
        { axis: 't4', item: '%% %% %% %%' },
    ]
}
console.log(InventorySlot1,InventorySlot2,InventorySlot3,InventorySlot4)
