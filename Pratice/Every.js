var Profiles = [
  {
    name: "Ram",
    age: 12,
  },
  {
    name: "Harish",
    age: 15,
  },
  {
    name: "Kumar",
    age: 12,
  },
  {
    name: "Teja",
    age: 15,
  },
];

const CheackingprofilesAge = () => {
  return Profiles.every((issameageProfiles) => issameageProfiles.age >= 32);
};
console.log("EveryExample1", CheackingprofilesAge());

//EveryExample1 false




//EveryExample2

const items = [
  { id: 1, name: "super Burger", price: 399, stock: true },
  { id: 2, name: "Pizza", price: 199, stock: true },
  { id: 2, name: "fish fires", price: 299, stock: false },
];

const isstock = items.every((item) => item.stock);
if (!isstock) {
  console.log("name out of stock ---- ",
    `sorry ${items.find((item) => !item.stock).name} is out of the  stock`
  );
}

//name out of stock ----  sorry fish fires is out of the  stock
