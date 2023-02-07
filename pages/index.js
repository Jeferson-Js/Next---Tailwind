import Head from "next/Head"
import Home from "../components/Home";
const index = () => {
  return (
    <>
    <Head>
      <title>Página Principal</title>
      <meta name="keywords" content="pokemon, anime"></meta>
      <meta name="description" content="projeto desenvolvido com next.js e tailwindCss"></meta>
    </Head>
     <div>
      <Home />
     </div>
    </>
  );
};

export default index;
