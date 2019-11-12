import Fetch from 'isomorphic-unfetch';
import Prices from '../components/Prices';
import Layout from '../components/Layout';

const Index = props => (
  <Layout>
    <div>
      <h1>Welcome to BitzPrize</h1>
      <p> Check current rate</p>
      <Prices bpi={props.bpi} />
    </div>
  </Layout>
);

Index.getInitialProps = async function() {
  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
  const data = await res.json();
  return {
    bpi: data
  };
};
export default Index;
