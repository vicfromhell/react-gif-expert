import { useState } from "react";
import { AddCategory, GifGrid } from "./components";
import { MyButton } from "./hooks/testHook";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['MARIO BROS']);


  const onAddCategory = (newCategory) => {

    if (categories.includes(newCategory)) return;

    console.log(newCategory);

    setCategories([newCategory, ...categories]);

  }


  return (
    <>

      <h1>GifExpertApp</h1>

       <AddCategory
        onNewCategory={(event) => onAddCategory(event)}
      />

      {categories
      .map((category) => (
        
        <GifGrid key={category} category={category} 
        
        />
      ))
      } 
      <MyButton></MyButton>

    </>
  )
}
