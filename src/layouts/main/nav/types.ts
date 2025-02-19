import { StackProps } from '@mui/material/Stack';

// ----------------------------------------------------------------------

export type NavItemBaseProps = {
  title: string;
  path: string;
  children?: {
    subheader: string;
    isNew?: boolean;
    cover?: string;
    items: {
      title: string;
      path: string;
    }[];
  }[];
};

export type NavItemStateProps = {
  open?: boolean;
  active?: boolean;
  subItem?: boolean;
  hasChild?: boolean;
  externalLink?: boolean;
};

export interface NavItemProps extends NavItemStateProps {
  title: string;
  path: string;
  subItem?: boolean;
  hasChild?: boolean;
  externalLink?: boolean;
  open?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onLinkClick?: (event: React.MouseEvent<HTMLAnchorElement>, path: string) => void;
}

export interface NavListProps {
  data: NavItemBaseProps;
  onLinkClick?: (event: React.MouseEvent<HTMLAnchorElement>, path: string) => void;
}

export type NavSubListProps = {
  subheader: string;
  isNew?: boolean;
  cover?: string;
  items: {
    title: string;
    path: string;
  }[];
};

export type NavProps = StackProps & {
  data: NavItemBaseProps[];
};
