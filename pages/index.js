import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import axios from "axios";

export default function Home() {
  const [url, setText] = useState("");
  const [name, setName] = useState("");
  const [img, setImg] = useState(
    "data:image/png;base64,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"
  );
  const handleClick = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post("/api/scrap", { url, name }, config);
    console.log(data);
    setImg(data.url);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <input
        type="text"
        value={url}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleClick}>Click</button>
      <Image src={img} width={500} height={500} />
    </div>
  );
}
