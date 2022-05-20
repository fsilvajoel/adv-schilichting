export enum EListBackground {
  backgroundGray900 = 'backgroundGray900',
  backgroundGray800 = 'backgroundGray800',
  backgroundGrayGradient = 'backgroundGrayGradient',
  backgroundIce = 'backgroundIce',
  backgroundWhite = 'backgroundWhite',
  backgroundBlack = 'backgroundBlack',
  backgroundTransparent = 'backgroundTransparent',
}

export type TContainerProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
  fullWidth?: boolean;
  backgroundColor?: keyof typeof EListBackground;
};
