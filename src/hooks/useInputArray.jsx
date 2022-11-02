import { useCallback, useState } from "react";

export const useInputArray = () => {
  const [text, setText] = useState("");
  const [array, setArray] = useState([]);

  const handleChange = useCallback((e) => {
    if (text.length > 5) return;
    setText(e.target.value);
  }, []);

  const handleAdd = useCallback(() => {
    setArray((prevArray) => {
      if (prevArray.some((item) => item === text)) {
        alert("同じのがある");
        return prevArray;
      }
      return [...prevArray, text];
    });
  }, [text]);

  return { text, array, handleChange, handleAdd };
};
