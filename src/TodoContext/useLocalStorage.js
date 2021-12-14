import React from "react";

function useLocalStorage(itemName, defaultValue){
  
  const [item, setItem] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(()=>{
    setTimeout(()=>
      {
        try {          
          const localStorageItem = localStorage.getItem(itemName);
          let parsedTodos = JSON.parse(localStorageItem) || defaultValue;
          setItem(parsedTodos);
          setLoading(false);
        }
        catch(e) {
          setLoading(false);
          setError(e);
        }
      } , 1000);
  })

  const onSave=(newItem)=>{
    try {
      const stringified = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringified);
      setItem(newItem);
    } 
    catch(e) {
      setError(e)
    }
  }

  return {
          item, 
          onSave,
          loading,
          error,
        };
}

export { useLocalStorage }