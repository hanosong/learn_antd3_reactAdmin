import React, { memo, useState } from "react";
import { useEffect } from "react";
import Son from "./cpn/son";
const index = memo(() => {
  const [msg, setMsg] = useState("");
  const renderSon = () => <Son msg={msg} />;

  useEffect(() => {
    setMsg("把我传给子元素");
  }, [msg, setMsg]);

  return (
    <div>
      <h2>father</h2>
      {renderSon()}
    </div>
  );
});

export default index;
