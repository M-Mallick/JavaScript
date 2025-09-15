const products = [
    { id: 1, name: 'Product 1', price: 40 },
    { id: 2, name: 'Product 2', price: 60 },
    { id: 3, name: 'Product 3', price: 30 }
  ];
  const expensiveProducts = [];
  for (let i = 0; i < products.length; i++) {
    if (products[i].price > 50) {
      expensiveProducts.push(products[i]);
    }
  }
  // expensiveProducts: [{ id: 2, name: 'Product 2', price: 60 }]
