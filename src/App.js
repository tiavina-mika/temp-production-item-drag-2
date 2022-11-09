import {
  cardItem,
  newProductionDate,
  oldProdDataPlanning,
  oldProductionDate
} from "./data";
import "./styles.css";

// const updateProdData = (oldDate, newDate) => {
//   const newProd = [];
//   const newOld = oldProdDataPlanning.find(day => day.date === oldDate)
//   console.log("newOld", newOld);

//   for (const day of oldProdDataPlanning) {
//     if (day.date === oldDate) {
//       const productsByType = day.cards[cardItem.productType];
//       const newProductTypes = [];
//       for (const t of productsByType) {
//         if (t.id === cardItem.id) {
//           console.log("t", t);

//           const newData = {
//             ...cardItem,
//             dlc: cardItem.dlc.map((productDlc) => ({
//               ...productDlc,
//               value: newDate
//             }))
//           };
//           newProductTypes.push(newData);
//         } else {
//           newProductTypes.push(t);
//         }
//       }
//       newProd.push({ ...day, cards: newProductTypes });
//     } else {
//       newProd.push(day);
//     }
//   }
//   return newProd;
// };

const updateProdData = (oldDate, newDate) => {
  const newProd = [];
  const newProd2 = [...oldProdDataPlanning];
  // const newOld = newProd2.find(day => day.date === oldDate)
  // console.log("newOld", newOld);

  for (const day of oldProdDataPlanning) {
    const newProductTypes = [];

    if (day.date === oldDate) {
      // console.log("day.date", day.date);
      // console.log("newDate", newDate);
      const productsByType = day.cards[cardItem.productType];
      // console.log("productsByType", productsByType);
      for (const t of productsByType) {
        if (t.id === cardItem.id) {
          console.log("t", t);

          const newData = {
            ...cardItem,
            dlc: cardItem.dlc.map((productDlc) => ({
              ...productDlc,
              value: newDate
            }))
          };
          newProductTypes.push(newData);
        } else {
          newProductTypes.push(t);
        }
      }
      console.log("newProductTypes", newProductTypes);

      newProd.push({
        ...day,
        cards: {
          ...day.cards,
          [cardItem.productType]: newProductTypes
        }
      });
    } else {
      newProd.push(day);
    }
  }
  return newProd;
};

const newVal = updateProdData(oldProductionDate, newProductionDate);
console.log("newVal", newVal);

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
