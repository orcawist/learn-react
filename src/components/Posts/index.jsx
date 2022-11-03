import React, { useCallback, useEffect, useReducer } from "react";

const initialState = {
  data: [],
  loading: true,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "end": {
      return {
        ...state,
        data: action.data,
        loading: false,
      };
    }
    case "error": {
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    }
    default: {
      throw new Error("switch error");
    }
  }
};

export const Posts = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getPosts = useCallback(async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts!");
      if (!res.ok) {
        // ここでtryの処理は終わってcatchに
        throw new Error("ERROR!");
      }
      const json = await res.json();
      dispatch({ type: "end", data: json });
    } catch (error) {
      dispatch({ type: "error", error: error });
    }
  }, []);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  //   console.log("foo");

  if (state.loading) {
    return <div>ローディング中です</div>;
  }

  if (state.error) {
    return <div>{state.error.message}</div>;
  }

  if (state.data.length === 0) {
    return <div>データは空です</div>;
  }
  return (
    <ol>
      {state.data.map((post) => {
        return <li key={post.id}>{post.title}</li>;
      })}
    </ol>
  );
};

export default Posts;
