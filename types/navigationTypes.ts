export interface NavActionProps {
  text: string;
  href?: string;
  dropDown?: { href: string; hrefText: string }[];
}

export interface ActionButtonProps {
  title: string;
  onClick: () => void;
  variant?: "text" | "contained";
}
