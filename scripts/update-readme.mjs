import fs from 'fs';
import path from 'path';
import { BuddyMaker } from '../packages/buddy-maker/dist/index.js';

const DIST_BUDDIES_DIR = path.join(process.cwd(), 'dist', 'buddies');
const DIST_EXAMPLES_DIR = path.join(process.cwd(), 'dist', 'examples');
const README_PATH = path.join(process.cwd(), 'README.md');

const featuredBuddies = [
  { id: 'example_king', name: 'The King', patternType: 'bengalMarks', patternColor: 'rgba(80,20,0,0.4)', config: { accessories: ['crown', 'scarf'], mouth: 'smile', whiskers: true, colors: ['#f8b146', '#e07d24', '#b34d0b'] } },
  { id: 'example_cool', name: 'Cool Cat', patternType: 'tabbyM', patternColor: 'rgba(0,0,0,0.3)', config: { accessories: ['sunglasses'], colors: ['#cfd4d8', '#a4aeb8', '#63717d'], mouth: 'smile', whiskers: true } },
  { id: 'example_dj', name: 'DJ Paws', patternType: 'tuxedoPatch', config: { accessories: ['headphones', 'sunglasses'], colors: ['#283747', '#17202a', '#0b0f13'], whiskers: true } },
  { id: 'example_gamer', name: 'Gamer', patternType: 'calicoPatch', config: { accessories: ['headphones'], mouth: 'surprised', colors: ['#ecf0f1', '#bdc3c7', '#95a5a6'], whiskers: true } },
  {
    id: 'example_tophat',
    name: 'Gentleman',
    patternType: 'gingerWhitePatch',
    config: { accessories: ['topHat'], mouth: 'smile', whiskers: true, colors: ['#ecf0f1', '#bdc3c7', '#95a5a6'] }
  },
  {
    id: 'example_smallhat',
    name: 'Party Time',
    patternType: 'cowSpots',
    config: { accessories: ['smallHat', 'bowTie'], mouth: 'smile', whiskers: true, colors: ['#ffffff', '#f4f6f7', '#dadddf'] }
  },
  {
    id: 'example_monocle',
    name: 'Distinguished',
    patternType: 'sphynxWrinkles',
    config: { accessories: ['monocle'], whiskers: true, colors: ['#633215', '#45210c', '#291205'] }
  },
  {
    id: 'example_scarf',
    name: 'Cozy',
    config: { accessories: ['scarf'], mouth: 'smile', whiskers: true, colors: ['#fdebd0', '#f5cba7', '#f0b27a'] }
  },
  {
    id: 'example_glasses',
    name: 'Nerdy',
    config: { accessories: ['glasses'], whiskers: true, colors: ['#3498db', '#2980b9', '#1f618d'] }
  },
  {
    id: 'example_bowtie',
    name: 'Dapper',
    config: { accessories: ['bowTie'], mouth: 'smile', whiskers: true, colors: ['#9b59b6', '#8e44ad', '#7d3c98'] }
  },
  {
    id: 'example_custom_eyes',
    name: 'Zany',
    config: { eyeLColor: '#ff00ff', eyeRColor: '#00ffff', whiskers: true, colors: ['#2ecc71', '#27ae60', '#1e8449'] }
  },
  { id: 'example_detective', name: 'Detective', config: { accessories: ['topHat', 'monocle'], colors: ['#fdfefe', '#f5f5f5', '#ebebeb'], whiskers: true } },
  { id: 'example_princess', name: 'Princess', patternType: 'tortoiseshellPatch', config: { accessories: ['crown', 'blush', 'pearlNecklace'], mouth: 'smile', colors: ['#ffffff', '#eceff1', '#c7d0d6'], eye: 'eyeCyan', whiskers: true } },
  { id: 'example_idol', name: 'Pop Idol', patternType: 'bengalMarks', patternColor: 'rgba(255,100,200,0.5)', config: { accessories: ['hairBow', 'eyeshadowPink', 'starHairpin'], colors: ['#fdf5df', '#fae5b1', '#f3ca6f'], eye: 'eyeBlue', whiskers: true } },
  { id: 'example_fashion', name: 'Fashionista', patternType: 'gingerWhitePatch', config: { accessories: ['smallHat', 'earring', 'blush', 'eyeshadowBlue'], colors: ['#cfd4d8', '#a4aeb8', '#63717d'], mouth: 'smile', whiskers: true } },
  { id: 'example_spring', name: 'Spring Love', patternType: 'calicoPatch', config: { accessories: ['flower', 'blush', 'ribbon'], colors: ['#ffffff', '#f4f6f7', '#dadddf'], eye: 'eyeGreen', whiskers: true } },
  { id: 'example_sweetheart', name: 'Sweetheart', patternType: 'sphynxWrinkles', config: { accessories: ['heartHairpin', 'pearlNecklace', 'blush'], colors: ['#f5cec9', '#e8a9a2', '#d68378'], eye: 'eyeCopper', whiskers: true } },
  { id: 'example_fancy', name: 'Fancy Lady', patternType: 'cowSpots', config: { accessories: ['hairBow', 'earring', 'ribbon'], colors: ['#fdfefe', '#f0f3f4', '#dfe5e8'], mouth: 'smile', whiskers: true } },
  { id: 'example_gamer_girl', name: 'Gamer Girl', patternType: 'tabbyM', patternColor: 'rgba(0,0,0,0.2)', config: { accessories: ['headphones', 'blush', 'heartHairpin'], colors: ['#ffffff', '#eceff1', '#c7d0d6'], mouth: 'surprised', eye: 'eyeBlue', whiskers: true } },
  { id: 'example_magic', name: 'Magician', config: { accessories: ['topHat', 'bowTie'], colors: ['#283747', '#17202a', '#0b0f13'], eye: 'eyeCopper', whiskers: true } },
  { id: 'example_golden', name: 'Golden Scarf', config: { accessories: ['scarf'], colors: ['#fbe0a3', '#f3c47f', '#e69f4e'], eye: 'eyeGreen', whiskers: true } },
  { id: 'example_boss', name: 'The Boss', config: { accessories: ['sunglasses', 'bowTie'], colors: ['#fdf5df', '#fae5b1', '#f3ca6f'], mouth: 'frown', whiskers: true } }
];

function generateGallery() {
  if (!fs.existsSync(DIST_BUDDIES_DIR)) {
    fs.mkdirSync(DIST_BUDDIES_DIR, { recursive: true });
  }

  const presetKeys = Object.keys(BuddyMaker.presets);
  let table = `<table>
`;

  for (let i = 0; i < presetKeys.length; i += 3) {
    table += `  <tr>
`;
    for (let j = 0; j < 3; j++) {
      const key = presetKeys[i + j];
      if (key) {
        const preset = BuddyMaker.presets[key];
        const svg = BuddyMaker.preset(key);
        const fileName = `${preset.id}.svg`;
        const filePath = path.join(DIST_BUDDIES_DIR, fileName);
        fs.writeFileSync(filePath, svg);

        table += `    <td align="center">
`;
        table += `      <img src="./dist/buddies/${fileName}" width="100%" alt="${preset.name}" />
`;
        table += `      <br />
`;
        table += `      <code>${key}</code>
`;
        table += `    </td>
`;
      } else {
        table += `    <td></td>
`;
      }
    }
    table += `  </tr>
`;
  }
  table += `</table>`;
  return table;
}

function generateCustomizationSection() {
    if (!fs.existsSync(DIST_EXAMPLES_DIR)) {
        fs.mkdirSync(DIST_EXAMPLES_DIR, { recursive: true });
    }
    
    let table = `<table>
`;

    for (let i = 0; i < featuredBuddies.length; i += 2) {
        table += `  <tr>
`;
        for (let j = 0; j < 2; j++) {
            const buddy = featuredBuddies[i + j];
            if (buddy) {
                const config = { ...buddy.config, id: buddy.id, name: buddy.name };
                if (buddy.patternType) {
                    const patternFn = BuddyMaker.patterns[buddy.patternType];
                    config.patterns = buddy.patternColor ? patternFn(buddy.patternColor) : patternFn();
                }

                const svg = BuddyMaker.create(config);
                const fileName = `${buddy.id}.svg`;
                const filePath = path.join(DIST_EXAMPLES_DIR, fileName);
                fs.writeFileSync(filePath, svg);
                
                let configString = JSON.stringify(buddy.config, null, 2);
                if (buddy.patternType) {
                    const patternCall = buddy.patternColor ? `BuddyMaker.patterns.${buddy.patternType}('${buddy.patternColor}')` : `BuddyMaker.patterns.${buddy.patternType}()`;
                    configString = configString.replace(/}$/, `  "patterns": ${patternCall}\n}`);
                }

                table += `    <td width="50%" valign="top">
`;
                table += `      <img src="./dist/examples/${fileName}" width="100%" alt="${buddy.name}" />
`;
                table += `      <details>
`;
                table += `        <summary><b>${buddy.name}</b></summary>
`;
                table += `        <pre><code>BuddyMaker.create({
  id: '${buddy.id}',
  name: '${buddy.name}',
${configString.slice(1, -1)}
});</code></pre>
`;
                table += `      </details>
`;
                table += `    </td>
`;
            } else {
                table += `    <td></td>
`;
            }
        }
        table += `  </tr>
`;
    }

    table += `</table>`;
    return table;
}


function updateReadme() {
  const galleryTable = generateGallery();
  const customizationTable = generateCustomizationSection();
  
  let readme = fs.readFileSync(README_PATH, 'utf-8');
  readme = readme.replace(/<!-- BUDDY_GALLERY_START -->.*?<!-- BUDDY_GALLERY_END -->/s, `<!-- BUDDY_GALLERY_START -->
${galleryTable}
<!-- BUDDY_GALLERY_END -->`);
  readme = readme.replace(/<!-- CUSTOMIZATION_SECTION_START -->.*?<!-- CUSTOMIZATION_SECTION_END -->/s, `<!-- CUSTOMIZATION_SECTION_START -->
${customizationTable}
<!-- CUSTOMIZATION_SECTION_END -->`);
  fs.writeFileSync(README_PATH, readme);

  console.log('✅ README sections updated successfully!');
}

updateReadme();
