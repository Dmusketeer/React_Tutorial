import React, { useEffect, useState } from "react";

const Fetch = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((d) => setData(d));
  }, []);

  return <></>;
};

export default Fetch;
