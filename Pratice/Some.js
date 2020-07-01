  // Some-method-Examples1
  const greaterthan = [1, 1, 3].some((x) => x > 1);
  console.log("Some-method-Examples1", greaterthan);

  // Some-method-Examples1 true


  const greaterthan2 = [1, 1, 1].some((x) => x > 1);
  console.log("Some-method-Examples1.1", greaterthan2);
 

  //Some-method-Examples1.1 false



  // Some-method-Examples2

  const items = [
    { id: 1, name: "super Burger", price: 399, promo: false },
    { id: 2, name: "Pizza", price: 199, promo: false },
    { id: 3, name: "fish fires", price: 299, promo: true },
  ];

  const ispromo = items.some((item) => item.promo);

  const total = ispromo
    ? 600
    : items.reduce((prev, next) => prev + next.price, 0);

  console.log("Some-method-Examples2", total);

  const items2 = [
    { id: 1, name: "super Burger", price: 399, promo: false },
    { id: 2, name: "Pizza", price: 199, promo: false },
    { id: 3, name: "fish fires", price: 299, promo: false },
  ];

// Some-method-Examples2 600




  const ispromo2 = items2.some((item) => item.promo);

  const total2 = ispromo2
    ? 600
    : items2.reduce((prev, next) => prev + next.price, 0);

  console.log("Some-method-Examples2.1", total2);

// Some-method-Examples2.1 897