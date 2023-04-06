import { useState } from 'react';
import { ChromePicker } from 'react-color';
import styles from '../styles/styles.module.css';

export default function Home() {
  const [color, setColor] = useState('#ffffff');
  const [palette, setPalette] = useState([]);

  const handleColorChange = (color) => {
    setColor(color.hex);
  };

  const generateColorPalette = () => {
    const colorCount = 5;
    const newPalette = Array.from({ length: colorCount }, () => {
      const randomColor = Math.floor(Math.random() * 16777215).toString(16);
      return `#${randomColor.padStart(6, '0')}`;
    });
    setPalette(newPalette);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Color Picker Example</h1>
      <div className={styles.colorPickerContainer}>
        <div style={{ marginTop: '1rem', textAlign: 'center' }}>
          <button className={styles.button} onClick={generateColorPalette}>Generate Color Palette</button>
        </div>
      </div>
      <div className={styles.paletteContainer}>
        {palette.map((color, index) => (
          <div key={index} className={styles.paletteItem}>
            <ChromePicker color={color} disableAlpha />
            <p>{color}</p>
          </div>
        ))}
      </div>
    </div>
  );
}


