import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Particles from "../components/particles";
import styles from "../styles/Home.module.scss";

const base = "https://jonathan-amdahl.com";

export default function Home() {
  //dynamic fields need state
  const [input, setInput] = useState("");
  const [short, setShort] = useState("");
  const [isError, setError] = useState(false);

  //handle the user clicking the "shorten" button
  function handleSubmit(e) {
    e.preventDefault(); //make the page not refresh

    //setup parameters for the request to backend
    const params = new URLSearchParams();
    params.append("origUrl", input);

    //ask backend to shorten
    axios
      .post(`${base}/api/short`, params)
      .then((data) => {
        setError(false);
        setShort(`${base}/l/${data.data}`);
      })
      .catch((err) => {
        console.error(err.toJSON());
        setError(true);
      });
  }

  return (
    <div className={styles.home}>
      <div className={styles.background}>
        <Particles />
      </div>
      <Image
        className={styles.tamid}
        src="/tamid-removebg-preview.png"
        alt="TAMID Group Logo"
        width={210}
        height={48}
      />
      <h1>
        <span>Tamid</span> URL Shortner
      </h1>
      <p>
        Create custom short links to easily share with others.
        <br />
        Get started for free by pasting your link, clicking shorten,
        <br />
        and copying your new link.
      </p>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          name="Link to shorten"
          value={input}
        />
        <button>Shorten</button>
      </form>
      {isError && (
        <p className={styles.error}>Error. Please enter a valid URL</p>
      )}
      <div className={styles.linkContainer}>
        <p>{short.length !== 0 ? short : "Shorten a link to start"}</p>
        <CopyToClipboard text={short}>
          <button>
            Copy{" "}
            <Image
              src="/copy-icon.svg"
              width={20}
              height={20}
              alt="Copy Text"
            />
          </button>
        </CopyToClipboard>
      </div>
    </div>
  );
}
