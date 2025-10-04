import React, { useCallback, useState } from "react";

export default function Home() {
  const [tasks, setTasks] = useState([
    "LEARNING JS",
    "Call a friend",
    "Buy a battery",
  ]);
  const [deleteTask, setDeletetask] = useState(0);
  // const handleDeleteTask = useCallback(()=>{
  //     // setTasks(tasks.filter(task => task != 'LEARNING JS' ))
  //     setTasks(tasks.filter(task => task != task))
  //     console.log(tasks);
  // }
  // ,[tasks])
  const handleDeleteTask = useCallback(() => {
    if (deleteTask < tasks.length) { //اگه هنوز آیتمی برای حذف مونده (مثلاً نوبت حذف آیتم شماره ۲ باشه و لیست ۳ تا آیتم داشته باشه)
      const updatedTasks = tasks.filter((_, index) => index !== deleteTask); //یه لیست جدید بساز، که اون آیتمی که نوبتش رسیده (مثلاً شماره ۲) توش نباشه
      // filter می‌گه: فقط اونایی رو نگه دار که شماره‌شون با deleteIndex فرق داره
      // setTasks(updatedTasks);
      setTasks(prev => prev.slice(1)) //لیست جدید رو بذار جای لیست قبلی—یعنی آیتم حذف شد
      setDeletetask((prev) => prev + 1); // کار slice هم جدا کردن یه تیکه از کده
    }
  }, []);
  return (
    <div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
      <button onClick={handleDeleteTask} >sumbit</button>
    </div>
  );
}
// disabled={deleteTask >= tasks.length}