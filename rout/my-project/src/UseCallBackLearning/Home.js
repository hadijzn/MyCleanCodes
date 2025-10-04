import { useCallback, useState } from "react";

const Home = () => {
  const [Count, SetCount] = useState(0);
  const [fruits, SetFruits] = useState(["orange", "banana"]);

//   const addToFruits = useCallback(() => {
//     if (!fruits.includes("cherry")) {
//       SetFruits([...fruits, "cherry"]);
//     }
//   }, [fruits]); //تا وقتی چیزی توی [] تغییر نکرده، همون قبلی رو نگه دار

  const addToFruits = () => {
    if(!fruits.includes('cherry')){
        SetFruits([...fruits,'cherry'])
        
    }
    console.log(fruits);
  }


  return (
    <div className="flex justify-between">
      <button onClick={addToFruits}>add to fruts</button>
      <button onClick={() => SetCount(Count + 1)}>increase</button>
      <p> count : {Count}</p>
    </div>
  );
};
export default Home;
