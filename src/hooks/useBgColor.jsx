import { useRouter } from "next/router";
import { useEffect, useMemo } from "react";

export const useBgColor = () => {
  const router = useRouter();

  const bgColor = useMemo(() => {
    return router.pathname === "/" ? "lightblue" : "beige";
  }, [router.pathname]);

  useEffect(() => {
    document.body.style.backgroundColor = bgColor;

    // 第2引数の変更でここが呼ばれる時はマウント時の処理より先にここが動く
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [bgColor]);
};
