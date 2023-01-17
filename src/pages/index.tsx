import axios from "axios";
import { useEffect } from "react";
import yayJpg from "../assets/yay.jpg";

export default function HomePage() {
  useEffect(() => {
    console.log(axios.create());
  }, []);

  return (
    <div>
      <h2>Yay! Welcome to umi!</h2>
      <p>
        <img src={yayJpg} width="388" />
      </p>
      <p>
        To get started, edit <code>pages/index.tsx</code> and save to reload.
      </p>
    </div>
  );
}
