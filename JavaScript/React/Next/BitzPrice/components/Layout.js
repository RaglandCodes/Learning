import Navbar from './Navbar';
import Head from 'next/head';

const Layout = props => (
  <div>
    <Head>
      <title>BitzPrice</title>
      <link
        href="https://stackpath.bootstrapcdn.com/bootswatch/4.3.1/cerulean/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-C++cugH8+Uf86JbNOnQoBweHHAe/wVKN/mb0lTybu/NZ9sEYbd+BbbYtNpWYAsNP"
        crossorigin="anonymous"
      ></link>
    </Head>
    <Navbar />
    <div className="container">{props.children}</div>
  </div>
);

export default Layout;
