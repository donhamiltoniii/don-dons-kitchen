import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Dondon&apos;s Dirty Kitchen</title>
        <meta
          name="description"
          content="Home and Menu of Dondon's Dirty Kitchen"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Dondon&apos;s Dirty Kitchen</h1>
      <h2>Menu</h2>
      <p>
        The following are specialties of the house that may be requested at any
        time:
      </p>
      <ul>
        <li>
          <h3>Cauliflower Mac and Cheese with Chicken and Bacon</h3>
          <picture>
            <img
              src="/img/cauliflower-mac-and-cheese-with-chicken-and-bacon.jpg"
              alt="Cauliflower Mac and Cheese with Chicken and Bacon"
            />
          </picture>
        </li>
      </ul>
    </div>
  );
};

export default Home;
