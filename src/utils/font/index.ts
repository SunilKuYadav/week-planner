const getSize = (size: number): string => {
  return `${size}px`;
};

const Sizes = {
  // Font Size
  title: 18,
  paragraph: 16,
  smallText: 14,
  caption: 12,

  // Spacing
  small: 8,
  medium: 16,
  large: 24,
  extraLarge: 32,

  // additional
  match_width: "100%",
  match_height: "100%",

  match_window_width: "100vw",
  match_window_height: "100vh",
};

export const DP: { [key: string]: string } = {
  _600: getSize(600),
};
