import "../styles/globals.css"
import { Form } from "./components/Form";
import { useState } from "react";
import { Interview } from "./components/Interview";
import { Result } from "./components/result";

export function App() {
  const [page, setpage] = useState<"form" | "intervie" | "result">("form")


  return (
    <div>
      {page=="form" && <Form/>}
      {page=="intervie" && <Interview/>}
      {page=="result" && <Result/>}
    </div>
  );
}

export default App;
