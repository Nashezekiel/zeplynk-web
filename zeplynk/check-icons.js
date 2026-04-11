import * as SI from 'react-icons/si';
import * as FA from 'react-icons/fa';

const siIcons = [
    'SiReact', 'SiNextdotjs', 'SiTypescript', 'SiTailwindcss',
    'SiNodedotjs', 'SiPython', 'SiPostgresql', 'SiMongodb',
    'SiDocker', 'SiAmazon', 'SiOpenai'
];

const faIcons = ['FaJava'];

console.log("Checking Simple Icons:");
siIcons.forEach(icon => {
    if (!SI[icon]) {
        console.error(`MISSING: ${icon}`);
    } else {
        console.log(`OK: ${icon}`);
    }
});

console.log("Checking Font Awesome:");
faIcons.forEach(icon => {
    if (!FA[icon]) {
        console.error(`MISSING: ${icon}`);
    } else {
        console.log(`OK: ${icon}`);
    }
});
