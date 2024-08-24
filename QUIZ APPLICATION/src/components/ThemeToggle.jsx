import React, { useContext } from 'react';
import { Switch } from 'antd';
import { ThemeContext } from '../context/ThemeContext';

function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  if (!theme || !toggleTheme) {
    return null; // Avoid rendering if the context is not available
  }

  return (
    <Switch
      checked={theme === 'dark'}
      onChange={toggleTheme}
      checkedChildren="Dark"
      unCheckedChildren="Light"
    />
  );
}

export default ThemeToggle;
