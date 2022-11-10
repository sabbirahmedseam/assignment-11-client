import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title}-React-photography`;
  }, [title]);
};

export default useTitle;
