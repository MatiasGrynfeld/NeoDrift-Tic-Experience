const led_container = document.getElementById('led-container');
let colores = {
    1: {
        led1: "#FFF",
        led2: "#FFF",
        led3: "#FFF",
        led4: "#FFF",
        led5: "#FFF",
        led6: "#FFF",
        led7: "#FFF",
        led8: "#FFF",
        led9: "#FFF",
        led10: "#FFF",
        led11: "#FFF",
        led12: "#FFF",
        led13: "#FFF",
        led14: "#FFF",
        led15: "#FFF",
        led16: "#FFF",
        led17: "#FFF",
        led18: "#FFF",
        led19: "#FFF",
        led20: "#FFF",
        led21: "#FFF",
        led22: "#FFF",
        led23: "#FFF",
        led24: "#FFF",
        led25: "#FFF",
        led26: "#FFF",
        led27: "#FFF",
        led28: "#FFF",
        led29: "#FFF",
        led30: "#FFF",
        led31: "#FFF",
        led32: "#FFF",
        led33: "#FFF",
        led34: "#FFF",
        led35: "#FFF",
        led36: "#FFF",
        led37: "#FFF",
        led38: "#FFF",
        led39: "#FFF",
        led40: "#FFF",
        led41: "#FFF",
        led42: "#FFF",
        led43: "#FFF",
        led44: "#FFF",
        led45: "#FFF",
        led46: "#FFF",
        led47: "#FFF",
        led48: "#FFF",
        led49: "#FFF",
        led50: "#FFF",
        led51: "#FFF",
        led52: "#FFF",
        led53: "#FFF",
        led54: "#FFF",
        led55: "#FFF",
        led56: "#FFF",
        led57: "#FFF",
        led58: "#FFF",
        led59: "#FFF",
        led60: "#FFF",
        led61: "#FFF",
        led62: "#FFF",
        led63: "#FFF",
        led64: "#FFF"
    },
    2: {
        led1: "#FFF",
        led2: "#FFF",
        led3: "#FFF",
        led4: "#FFF",
        led5: "#FFF",
        led6: "#FFF",
        led7: "#FFF",
        led8: "#FFF",
        led9: "#FFF",
        led10: "#FFF",
        led11: "#FFF",
        led12: "#FFF",
        led13: "#FFF",
        led14: "#FFF",
        led15: "#FFF",
        led16: "#FFF",
        led17: "#FFF",
        led18: "#FFF",
        led19: "#FFF",
        led20: "#FFF",
        led21: "#FFF",
        led22: "#FFF",
        led23: "#FFF",
        led24: "#FFF",
        led25: "#FFF",
        led26: "#FFF",
        led27: "#FFF",
        led28: "#FFF",
        led29: "#FFF",
        led30: "#FFF",
        led31: "#FFF",
        led32: "#FFF",
        led33: "#FFF",
        led34: "#FFF",
        led35: "#FFF",
        led36: "#FFF",
        led37: "#FFF",
        led38: "#FFF",
        led39: "#FFF",
        led40: "#FFF",
        led41: "#FFF",
        led42: "#FFF",
        led43: "#FFF",
        led44: "#FFF",
        led45: "#FFF",
        led46: "#FFF",
        led47: "#FFF",
        led48: "#FFF",
        led49: "#FFF",
        led50: "#FFF",
        led51: "#FFF",
        led52: "#FFF",
        led53: "#FFF",
        led54: "#FFF",
        led55: "#FFF",
        led56: "#FFF",
        led57: "#FFF",
        led58: "#FFF",
        led59: "#FFF",
        led60: "#FFF",
        led61: "#FFF",
        led62: "#FFF",
        led63: "#FFF",
        led64: "#FFF"
    },
    3: {
        led1: "#FFF",
        led2: "#FFF",
        led3: "#FFF",
        led4: "#FFF",
        led5: "#FFF",
        led6: "#FFF",
        led7: "#FFF",
        led8: "#FFF",
        led9: "#FFF",
        led10: "#FFF",
        led11: "#FFF",
        led12: "#FFF",
        led13: "#FFF",
        led14: "#FFF",
        led15: "#FFF",
        led16: "#FFF",
        led17: "#FFF",
        led18: "#FFF",
        led19: "#FFF",
        led20: "#FFF",
        led21: "#FFF",
        led22: "#FFF",
        led23: "#FFF",
        led24: "#FFF",
        led25: "#FFF",
        led26: "#FFF",
        led27: "#FFF",
        led28: "#FFF",
        led29: "#FFF",
        led30: "#FFF",
        led31: "#FFF",
        led32: "#FFF",
        led33: "#FFF",
        led34: "#FFF",
        led35: "#FFF",
        led36: "#FFF",
        led37: "#FFF",
        led38: "#FFF",
        led39: "#FFF",
        led40: "#FFF",
        led41: "#FFF",
        led42: "#FFF",
        led43: "#FFF",
        led44: "#FFF",
        led45: "#FFF",
        led46: "#FFF",
        led47: "#FFF",
        led48: "#FFF",
        led49: "#FFF",
        led50: "#FFF",
        led51: "#FFF",
        led52: "#FFF",
        led53: "#FFF",
        led54: "#FFF",
        led55: "#FFF",
        led56: "#FFF",
        led57: "#FFF",
        led58: "#FFF",
        led59: "#FFF",
        led60: "#FFF",
        led61: "#FFF",
        led62: "#FFF",
        led63: "#FFF",
        led64: "#FFF"
    }
};

let init_mouse_x, init_mouse_y;
let color = "#000";
let isMouseDown = false;

const color_picker = document.getElementById('color-picker');
color_picker.addEventListener('input', (event) => {
    color = event.target.value;
});

const mouseDown = (event) => {
    init_mouse_x = event.clientX;
    init_mouse_y = event.clientY;
    isMouseDown = true;
    colorear(init_mouse_x, init_mouse_y);
    led_container.addEventListener('mousemove', mouseMove);
}

const mouseMove = (event) => {
    if (isMouseDown) {
        colorear(event.clientX, event.clientY);
    }
}

const mouseUp = () => {
    isMouseDown = false;
    led_container.removeEventListener('mousemove', mouseMove);
}

const colorear = (mouse_x, mouse_y) => {
    const element = document.elementFromPoint(mouse_x, mouse_y);
    if (element && element.classList.contains('led')) {
        element.style.backgroundColor = color;
        colores[perfil][element.id] = color;
    }
}

led_container.addEventListener('mousedown', mouseDown);
document.addEventListener('mouseup', mouseUp);

const reset_button = document.getElementById('reset-button');

const reset = () => {
    const leds = document.getElementsByClassName('led');
    for (let i = 0; i < leds.length; i++) {
        leds[i].style.backgroundColor = "#FFF";
        colores[perfil][leds[i].id] = "#FFF";
    }
    const picker = document.getElementById('color-picker');
    const hexValue = document.getElementById('hex-value');
    const rgbValue = document.getElementById('rgb-value');
    const hslValue = document.getElementById('hsl-value');
    picker.value = "#000000";
    hexValue.textContent = "Hex: #000000";
    rgbValue.textContent = "RGB: 0, 0, 0";
    hslValue.textContent = "HSL: 0, 0, 0";
    color = "#000";
}

reset_button.addEventListener('click', reset);