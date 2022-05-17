// @packages
import Box from '@mui/material/Box';

// @types
import type { ReactNode } from 'react';

// @Interface
interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => <Box>{children}</Box>;

export default Layout;
