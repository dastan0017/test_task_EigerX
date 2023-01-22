const priceCheck = (products, productPrices, productSold, soldPrice) => {
    let errors = 0;
    for (let i = 0; i < productSold.length; i++) {
        let expectedPrice = productPrices[products.indexOf(productSold[i])];
        if (expectedPrice !== soldPrice[i]) {
            errors++;
        }
    }
    return errors;
}

console.log(priceCheck(
    products=['eggs', 'milk', 'cheese'],
    productPrices=[2.89, 3.29, 5.79],
    productSold=['eggs', 'eggs', 'cheese', 'milk'],
    soldPrice=[2.89, 2.99, 5.97, 3.29]
)); // should return 2

console.log(priceCheck(
    products=['rice', 'sugar', 'wheat', 'cheese'],
    productPrices=[16.89, 56.92, 20.89, 345.99],
    productSold=['rice', 'cheese'],
    soldPrice=[18.99, 400.89]
)); // should return 2



