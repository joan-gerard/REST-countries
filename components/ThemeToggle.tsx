import styled from "@emotion/styled";
import { useEffect, useState } from "react";

const ToggleButton = styled.button`
  --toggle-width: 80px;
  --toggle-height: 38px;
  --toggle-padding: 4px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 1.5rem;
  line-height: 1;
  width: var(--toggle-width);
  height: var(--toggle-height);
  padding: var(--toggle-padding);
  border: 0;
  border-radius: calc(var(--toggle-width) / 2);
  cursor: pointer;
  background: var(--color-bg-toggle);
  transition: background 0.25s ease-in-out;
`;

enum Themes {
  light = "light",
  dark = "dark",
}

const toggleThumbStyle = (activeTheme: Themes) => {

    const transformValue = activeTheme === Themes.dark
    ? "translate3d(calc(var(--toggle-width) - var(--toggle-height)), 0, 0)"
    : "none";
    
  return styled.span`
    position: absolute;
    top: var(--toggle-padding);
    left: var(--toggle-padding);
    width: calc(var(--toggle-height) - (var(--toggle-padding) * 2));
    height: calc(var(--toggle-height) - (var(--toggle-padding) * 2));
    border-radius: 50%;
    background: white;
    transition: transform 0.25s ease-in-out;
    transform: ${transformValue};
  `;
};

const ThemeToggle = () => {
  const [activeTheme, setActiveTheme] = useState<Themes>(Themes.light);

  useEffect(() => {
    document.body.dataset.theme = activeTheme;
  }, [activeTheme]);

  const ToggleThumb = toggleThumbStyle(activeTheme)

  return (
    <ToggleButton
      type="button"
      onClick={() =>
        setActiveTheme(
          activeTheme === Themes.light ? Themes.dark : Themes.light
        )
      }
    >
      <ToggleThumb />
      <span>🌙</span>
      <span>☀️</span>
    </ToggleButton>
  );
};

export default ThemeToggle;
