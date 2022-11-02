import { useEffect } from "react";

export const useBgLightblue = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";

    // 第2引数の変更でここが呼ばれる時はマウント時の処理より先にここが動く
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);
};
