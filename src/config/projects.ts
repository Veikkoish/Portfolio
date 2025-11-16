import type { Category } from './colors';

export interface OverviewSection {
  description: string;
  image?: string;
  imagePosition?: 'left' | 'right';
}

export interface Project {
  title: string;
  description: string; // Short description for card
  image: string;
  category: Category[];
  skills: { name: string; category: Exclude<Category, 'all'> }[];
  year: number | string;
  inProgress?: boolean;
  video?: string;
  slug: string;
  overview?: OverviewSection[]; // Detailed overview sections for project page
}

function createSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

const BASE_URL = import.meta.env.BASE_URL;

export const projects: Project[] = [
  {
    title: 'Omniframe',
    slug: createSlug('Omniframe'),
    description: 'Open-source e-ink IoT art frame with a novel solar charging system for up to infinite battery life. ',
    image: `${BASE_URL}/public/Omniframe/placeholder.webp`,
    video: `${BASE_URL}/public/Omniframe/omniframe.webm`,
    category: ['hardware', 'software', 'mechanical'],
    skills: [
      { name: 'PCB Design', category: 'hardware' },
      { name: 'ESP32-S3', category: 'hardware' },
      { name: 'E-Ink', category: 'hardware' },
      { name: 'Solar Cell Design', category: 'hardware' },
      { name: 'Power Delivery Design', category: 'hardware' },
      { name: 'IoT', category: 'hardware' },
      { name: 'Fusion 360', category: 'mechanical' },
      { name: 'Blender', category: 'mechanical' },
      { name: 'DFM', category: 'mechanical' },
      { name: 'DFA', category: 'mechanical' },
      { name: 'Injection Molding', category: 'mechanical' },
      { name: 'Resin Printing', category: 'mechanical' },
      { name: 'CNC', category: 'mechanical' },
      { name: 'Embedded C', category: 'software' },
      { name: 'ESP Wifi & BLE', category: 'software' },
      { name: 'Display Driver Development', category: 'software' },
      { name: 'Waveform Development', category: 'software' },
      { name: 'Image Processing', category: 'software' },
      { name: 'Pillow', category: 'software' },
      { name: 'AWS', category: 'software' },
      { name: 'Full Stack Development', category: 'software' }
    ],
    year: '2023 - 2025',
    overview: [
      {
        description: 'I started building this e-ink frame back when there were almost no such products in the market and no open-source designs available. E-ink uses very little power so I wanted to challenge myself by developing a solar charging system into the frame in a way that is invisible to the user. The power architecture is the most advanced one in the whole field, and it makes this one of the few energy-independent consumer electronics devices in the world. ',
        image: `${BASE_URL}/public/Omniframe/overview.jpg`,
        imagePosition: 'left',
      },
    ],
  },
  {
    title: 'RoboChess',
    slug: createSlug('RoboChess'),
    description: 'Voice-controlled chess board with robotic piece movement. A magnet moving inside the board make the pieces slide on the surface. \n\n Winner of RAD engineering showcase at NYU.',
    image: `${BASE_URL}/public/RoboChess/RoboChess Render.webp`,
    category: ['hardware', 'software', 'mechanical'],
    skills: [
      { name: 'Arduino Mega 2560', category: 'hardware' },
      { name: 'Sensor Matrix', category: 'hardware' },
      { name: 'Motor Controller', category: 'hardware' },
      { name: 'Stepper Motor', category: 'hardware' },
      { name: 'Bluetooth LE', category: 'software' },
      { name: 'Motion Control', category: 'software' },
      { name: 'C++', category: 'software' },
      { name: 'Gantry Design', category: 'mechanical' },
      { name: 'Blender', category: 'mechanical' },
      { name: 'Laser Cutting', category: 'mechanical' },
      { name: '3D Printing', category: 'mechanical' },
    ],
    year: 2022,
    overview: [
      {
        description: 'This was my first project at NYU and my first big electromechanic project. I had never worked with stepper motors, sensors, bluetooth or voice-recognition technology before. It took plenty of learning about all these technologies and long days of work to get it running before the demo showcase.',
        image: `${BASE_URL}/public/RoboChess/overview.jpg`,
        imagePosition: 'left',
      },
    ],
  },
  {
    title: 'Pocket Veila',
    slug: createSlug('Pocket Veila'),
    description: 'Anniversary gift for my girlfriend: a tiny e-ink device that each day displays a memory from the past year.',
    image: `${BASE_URL}/public/Pocket Veila/cover.webp`,
    category: ['hardware', 'software', 'mechanical'],
    skills: [
      { name: 'RP2040', category: 'hardware' },
      { name: 'Feather ThinkInk', category: 'hardware' },
      { name: 'E-Ink', category: 'hardware' },
      { name: 'CircuitPython', category: 'software' },
      { name: 'Image Processing', category: 'software' },
      { name: 'Pillow', category: 'software' },
      { name: 'Blender', category: 'mechanical' },
      { name: 'Fusion 360', category: 'mechanical' },
      { name: 'CNC', category: 'mechanical' },
      { name: 'Resin Printing', category: 'mechanical' },
    ],
    year: 2025,
  },
  {
    title: 'Vitrail',
    slug: createSlug('Vitrail'),
    description: 'My first audio engineering project: a battery-powered 60W bluetooth speaker with a walnut enclosure and magnetically attached front grill with an abstract design.',
    image: `${BASE_URL}/public/Vitrail/placeholder.webp`,
    category: ['hardware', 'mechanical'],
    skills: [
      { name: 'System Integration', category: 'hardware' },
      { name: 'Power Management', category: 'hardware' },
      { name: 'Audio System Design', category: 'hardware' },
      { name: 'Bluetooth', category: 'hardware' },
      { name: 'Class-D Amplifier', category: 'hardware' },
      { name: 'Acoustics Engineering', category: 'mechanical' },
      { name: 'Industrial Design', category: 'mechanical' },
      { name: 'Blender', category: 'mechanical' },
      { name: 'Fusion 360', category: 'mechanical' },
      { name: 'CNC', category: 'mechanical' },
      { name: 'DFM', category: 'mechanical' },
    ],
    year: 2025,
  },
  {
    title: 'Lampiron',
    slug: createSlug('Lampiron'),
    description: 'Arguably the most over-engineered table lamp ever. It dims by changing the number of windows that are lit up.',
    image: `${BASE_URL}/public/Lampiron/placeholder.webp`,
    category: ['hardware', 'mechanical', 'software'],
    skills: [
      { name: 'PCB Design', category: 'hardware' },
      { name: 'ESP32-S2', category: 'hardware' },
      { name: 'SK6812', category: 'hardware' },
      { name: 'USB PD', category: 'hardware' },
      { name: 'Hall-Effect Sensor', category: 'hardware' },
      { name: 'Blender', category: 'mechanical' },
      { name: 'Resin Printing', category: 'mechanical' },
      { name: 'DFM', category: 'mechanical' },
      { name: 'DFA', category: 'mechanical' },
      { name: 'Surface Finishing', category: 'mechanical' },
      { name: 'LED Control', category: 'software' },
      { name: 'Lighting Animation', category: 'software' },
    ],
    year: 2025,
    inProgress: true,
    overview: [
      {
        description: 'I love the Flatiron Building and wanted to create a lamp in its shape. The shell is resin-printed and surface-finished to look realistic. To enhance the realism, each window features a diffuser and a small LED. A microcontroller drives over 500 LEDs individually to create a dimming effect where the number of windows lit up changes.',
        image: `${BASE_URL}/public/Lampiron/overview.jpg`,
        imagePosition: 'left',
      },
    ],
  },
  {
    title: 'Hey Mac',
    slug: createSlug('Hey Mac'),
    description: "Miniature iMac G3 personal assistant and desk clock powered by an old iPhone Xs and Claude API.",
    image: `${BASE_URL}/public/Hey Mac/placeholder.webp`,
    category: ['software'],
    skills: [
      { name: 'IOS Development', category: 'software' },
      { name: 'Swift', category: 'software' },
      { name: 'Python', category: 'software' },
      { name: 'LLM Agents', category: 'software' },
      { name: 'Solidworks', category: 'mechanical' },
      { name: 'Blender', category: 'mechanical' },

    ],
    year: 2025,
    inProgress: true,
  },
  {
    title: 'Sunwhisper',
    slug: createSlug('Sunwhisper'),
    description: 'A simulation platform for discovering non-silicon solar chemistries through multi-stage analysis of molecular databases. The system evaluates synthesizability and other metrics, runs particle simulations to predict performance, and tunes against experimental data.',
    image: `${BASE_URL}/public/Sunwhisper/placeholder.webp`,
    category: ['software'],
    skills: [
      { name: 'Python', category: 'software' },
      { name: 'NumPy', category: 'software' },
      { name: 'LLM Agents', category: 'software' },
      { name: 'Vector Database', category: 'software' },
      { name: 'Data Pipeline', category: 'software' },
      { name: 'AWS S3', category: 'software' },
      { name: 'AWS EC2', category: 'software' },
      { name: 'AWS Lambda', category: 'software' },
      { name: 'AWS Bedrock', category: 'software' },
      { name: 'PubChem API', category: 'software' },
      { name: 'Quantum Chemistry', category: 'software' },
      { name: 'Molecular Simulation', category: 'software' },
      { name: 'Data Visualization', category: 'software' },
      { name: 'PostgreSQL', category: 'software' },
    ],
    year: 2025,
    inProgress: true,
  },
  {
    title: 'Daylight',
    slug: createSlug('Daylight'),
    description: 'An attempt to build an AR headset with a transparent waveguide. I had a problem with having limited screen real estate when working on my laptop and I thought a lightweight AR headset would be the ideal solution.',
    image: `${BASE_URL}/public/Daylight/Daylight Render.webp`,
    category: ['hardware', 'mechanical'],
    skills: [
      { name: 'PCB Design', category: 'hardware' },
      { name: 'Micro OLED Displays', category: 'hardware' },
      { name: 'KiCad', category: 'hardware' },
      { name: 'Optics Design', category: 'mechanical' },
      { name: 'Blender', category: 'mechanical' },
      { name: 'Onshape', category: 'mechanical' },
    ],
    year: 2023,
  },
  {
    title: 'Go-Kart V2',
    slug: createSlug('Go-Kart V2'),
    description: 'Improved version of a simpler kart I made in 2016. Built on a new chassis, and had a custom suspension system and improved steering.',
    image: `${BASE_URL}/public/Go-Kart V2/Go kart V2 nobg.webp`,
    category: ['mechanical'],
    skills: [
      { name: 'Mechanical Design', category: 'mechanical' },
      { name: 'Metalwork', category: 'mechanical' },
      { name: 'Vehicle Dynamics', category: 'mechanical' },
      { name: 'CAD', category: 'mechanical' },
    ],
    year: 2018,
    overview: [
      {
        description: 'Building on the experience from my first go-kart, I designed and fabricated a second iteration with significant improvements. This version featured suspension, improved steering geometry, and a more robust frame design. \n\n There are few options in Finland for affordable go-kart parts, so most of the parts were custom-made or sourced from used mopeds and ATVs.',
        image: `${BASE_URL}/public/Go-Kart V2/20190707_134948.webp`,
        imagePosition: 'left',
      },
    ],
  },
];

