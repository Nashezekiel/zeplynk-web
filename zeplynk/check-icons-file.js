import * as SI from 'react-icons/si';
import * as FA from 'react-icons/fa';
import fs from 'fs';

const siIcons = [
    'SiReact', 'SiNextdotjs', 'SiTypescript', 'SiTailwindcss',
    'SiNodedotjs', 'SiPython', 'SiPostgresql', 'SiMongodb',
    'SiDocker', 'SiAmazon', 'SiOpenai'
];

const faIcons = ['FaJava'];

let output = "Icon Check Results:\n";

siIcons.forEach(icon => {
    if (!SI[icon]) {
        output += `MISSING: ${icon} in react-icons/si\n`;
    } else {
        output += `OK: ${icon}\n`;
    }
});

faIcons.forEach(icon => {
    if (!FA[icon]) {
        output += `MISSING: ${icon} in react-icons/fa\n`;
    } else {
        output += `OK: ${icon}\n`;
    }
});

fs.writeFileSync('icon_check_results.txt', output);
