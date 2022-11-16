import Image from "next/image";
import Particles from "../components/particles";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.background}>
        <Particles />
      </div>
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
      <form>
        <input />
        <button>Shorten</button>
      </form>
      <div className={styles.linkContainer}>
        <p>Shorten a link to start</p>
        <button>
          Copy{" "}
          <Image src="/copy-icon.svg" width={20} height={20} alt="Copy Text" />
        </button>
      </div>
    </div>
  );
}
