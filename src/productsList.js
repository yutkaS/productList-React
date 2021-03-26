function generateProductList(count) {
    let productArr = [];
    for(let i = 0; i < count; i++){
        productArr.push(`duck` + i)
    }
    return productArr;
}
export const products = generateProductList(20);


