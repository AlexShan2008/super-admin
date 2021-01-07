import { Inspector } from 'react-dev-inspector';
import React from 'react';

const InspectorWrapper = process.env.NODE_ENV === 'development' ? Inspector : React.Fragment;

const Layout: React.FC = ({ children }) => {
  return <InspectorWrapper>{children}</InspectorWrapper>;
};

export default Layout;
