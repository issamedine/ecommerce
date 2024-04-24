import React from 'react';

const Layout = ({ children }) => {
  return (
    <div>
      {/* Your common layout elements */}
      <header>Header</header>
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  );
};

export default Layout;