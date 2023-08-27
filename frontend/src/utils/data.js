// export default productsData = [
//   {
//     ID: 1,
//     Title: "A Book",
//     Image: "",
//     Price: 500,
//     Description: "A book is awesome!",
//     Quantity: 1500,
//     Action: "1",
//   },
//   {
//     ID: 2,
//     Title: "B Book",
//     Price: 600,
//     Description: "B book is awesome!",
//     Quantity: 1500,
//     Action: "2",
//   },
//   {
//     ID: 3,
//     Title: "C Book",
//     Price: 700,
//     Description: "C book is awesome!",
//     Quantity: 1500,
//     Action: "3",
//   },
// ];

export const transformProducts = (currentProducts) => {
  const updatedProducts = currentProducts.map((prod) => {
    return {
      ID: prod.id,
      Title: prod.title,
      Price: prod.price,
      ImageURL: prod.imageUrl,
      Description: prod.description,
      Quantity: prod.quantity,
    };
  });

  return updatedProducts;
};
