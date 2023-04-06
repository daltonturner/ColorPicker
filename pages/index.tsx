import { useState } from 'react';
import { ChromePicker } from 'react-color';

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
    <div>
      <h1>Color Picker Example Site</h1>
      <div style={{ marginTop: '1rem', textAlign: 'center' }}>
        <button onClick={generateColorPalette}>Generate Color Palette</button>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
        {palette.map((color, index) => (
          <div key={index} style={{ textAlign: 'center' }}>
            <ChromePicker color={color} disableAlpha />
            <p>{color}</p>
          </div>
        ))}
      </div>
    </div>
  );
}


