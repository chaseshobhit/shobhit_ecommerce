// components/common/Layout.js
import Header from './header';
import Footer from './footer';

const Layout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
