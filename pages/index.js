import Particles from "../components/particles";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.home}>
      <Particles />
      <h1>Tamid URL Shortner</h1>
      <p>
        Create custom short links to easily share with others. Get started for
        free by pasting your link, clicking shorten, and copying your new link.
      </p>
      <form>
        <input />
        <button>Shorten</button>
      </form>
      <p>Your new link will appear here after clicking shorten</p>
      <button>Copy</button>
    </div>
  );
}
