const picker = document.getElementById('color-picker');
const hexValue = document.getElementById('hex-value');
const rgbValue = document.getElementById('rgb-value');
const hslValue = document.getElementById('hsl-value');

picker.addEventListener('input', () => {
    const color = picker.value;
    hexValue.textContent = `Hex: ${color}`;
    rgbValue.textContent = `RGB: ${hexToRgb(color).join(', ')}`;
    hslValue.textContent = `HSL: ${rgbToHsl(...hexToRgb(color)).join(', ')}`;
    }
);

function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16)
    ] : null;
}

function rgbToHsl(r, g, b){
    r/=255;
    g/=255;
    b/=255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;
    if (max === min){
        h = s = 0;
    } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max){
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }
    return [Math.round(h*360), Math.round(s*100), Math.round(l*100)];
}