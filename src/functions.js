export function removeItemByID(arr, id){
    const objectIndex = arr.findIndex(obj=>obj.id === id);
    arr.splice(objectIndex, 1);
    return arr;
}