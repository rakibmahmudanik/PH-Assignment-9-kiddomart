import { useEffect } from "react";

const useDocumentTitle = (title) => {
  useEffect(() => {
    document.title = `KiddoMart | ${title}`;
  }, [title]);
};

export default useDocumentTitle;
