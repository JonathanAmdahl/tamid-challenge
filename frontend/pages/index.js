import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Particles from "../components/particles";
import styles from "../styles/Home.module.scss";

const base = "http://localhost:3333";

export default function Home() {
  const [input, setInput] = useState("");
  const [short, setShort] = useState("");
  const [isError, setError] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(`/api/short`);
    axios
      .post(
        `${base}/api/short`,
        { origUrl: input },
        {
          headers: {
            "access-control-allow-origin": "*",
          },
        }
      )
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.error(err.toJSON());
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
