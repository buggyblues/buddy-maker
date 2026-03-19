// All the pattern functions (tabbyM, bengalMarks, etc.) go here.
// For brevity, they are not shown in this example.
const tabbyM = (color: string): string => `
  <path d="M 32,46 Q 36,38 41,47 L 50,42 L 59,47 Q 64,38 68,46" fill="none" stroke="${color}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" opacity="0.75"/>
  <path d="M 37,42 Q 41,35 50,45 Q 59,35 63,42" fill="none" stroke="${color}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" opacity="0.65"/>
  <path d="M 20,58 Q 25,60 30,60" fill="none" stroke="${color}" stroke-width="2.5" stroke-linecap="round" opacity="0.6"/>
  <path d="M 18,63 Q 23,65 28,64" fill="none" stroke="${color}" stroke-width="2.5" stroke-linecap="round" opacity="0.6"/>
  <path d="M 80,58 Q 75,60 70,60" fill="none" stroke="${color}" stroke-width="2.5" stroke-linecap="round" opacity="0.6"/>
  <path d="M 82,63 Q 77,65 72,64" fill="none" stroke="${color}" stroke-width="2.5" stroke-linecap="round" opacity="0.6"/>
`;
const bengalMarks = (color: string): string => `
  <path d="M 28,45 C 32,38 38,40 38,48" fill="none" stroke="${color}" stroke-width="3.5" stroke-linecap="round" opacity="0.75"/>
  <path d="M 72,45 C 68,38 62,40 62,48" fill="none" stroke="${color}" stroke-width="3.5" stroke-linecap="round" opacity="0.75"/>
  <path d="M 40,35 C 45,30 55,30 60,35" fill="none" stroke="${color}" stroke-width="3.5" stroke-linecap="round" opacity="0.75"/>
  <path d="M 22,58 C 26,52 30,55 32,60" fill="none" stroke="${color}" stroke-width="3" stroke-linecap="round" opacity="0.75"/>
  <path d="M 78,58 C 74,52 70,55 68,60" fill="none" stroke="${color}" stroke-width="3" stroke-linecap="round" opacity="0.75"/>
`;
const tuxedoPatch = (): string => `
  <path d="M 50,45 C 38,55 28,75 28,90 L 72,90 C 72,75 62,55 50,45 Z" fill="#ffffff" />
  <ellipse cx="50" cy="70" rx="20" ry="12" fill="#ffffff" />
`;
const gingerWhitePatch = (): string => `
  <path d="M 50,40 C 25,45 15,65 15,90 L 85,90 C 85,65 75,45 50,40 Z" fill="#ffffff" />
  <ellipse cx="50" cy="72" rx="22" ry="14" fill="#ffffff" />
`;
const calicoPatch = (): string => `
  <path d="M 15,38 C 30,25 42,45 35,58 C 28,68 12,55 15,38 Z" fill="#e67e22" opacity="0.95"/>
  <path d="M 85,35 C 70,20 55,45 65,60 C 75,70 90,50 85,35 Z" fill="#1a1a1c" opacity="0.95"/>
  <path d="M 48,32 C 55,30 58,38 52,42 C 45,45 42,35 48,32 Z" fill="#1a1a1c" opacity="0.95"/>
`;
const tortoiseshellPatch = (): string => `
  <path d="M 20,38 C 30,28 38,45 30,58 C 22,68 12,50 20,38 Z" fill="#d35400" opacity="0.85"/>
  <path d="M 80,42 C 68,32 60,55 70,65 C 80,75 90,55 80,42 Z" fill="#e67e22" opacity="0.85"/>
  <path d="M 40,75 C 50,65 60,65 60,80 C 50,85 40,85 40,75 Z" fill="#d35400" opacity="0.85"/>
  <circle cx="52" cy="40" r="8" fill="#e67e22" opacity="0.85"/>
`;
const cowSpots = (): string => `
  <path d="M 25,38 C 35,32 42,42 38,52 C 32,62 18,52 25,38 Z" fill="#1a1a1c" opacity="0.95"/>
  <path d="M 68,62 C 78,58 85,72 75,82 C 65,88 58,75 68,62 Z" fill="#1a1a1c" opacity="0.95"/>
  <path d="M 60,35 C 68,32 72,38 65,45 C 58,48 52,40 60,35 Z" fill="#1a1a1c" opacity="0.95"/>
`;
const sphynxWrinkles = (): string => `
  <path d="M 35,42 Q 50,48 65,42" fill="none" stroke="#b03a2e" stroke-width="1.5" opacity="0.3" />
  <path d="M 38,46 Q 50,52 62,46" fill="none" stroke="#b03a2e" stroke-width="1.5" opacity="0.3" />
  <path d="M 42,38 Q 50,44 58,38" fill="none" stroke="#b03a2e" stroke-width="1.5" opacity="0.3" />
  <path d="M 22,60 Q 25,65 20,70" fill="none" stroke="#b03a2e" stroke-width="1.5" opacity="0.3" />
  <path d="M 78,60 Q 75,65 80,70" fill="none" stroke="#b03a2e" stroke-width="1.5" opacity="0.3" />
`;
const whiskers = () => `
  <path d="M 25,62 Q 15,64 5,60" fill="none" stroke="#1a1a1c" stroke-width="1.5" stroke-linecap="round" />
  <path d="M 25,68 Q 15,69 5,65" fill="none" stroke="#1a1a1c" stroke-width="1.5" stroke-linecap="round" />
  <path d="M 75,62 Q 85,64 95,60" fill="none" stroke="#1a1a1c" stroke-width="1.5" stroke-linecap="round" />
  <path d="M 75,68 Q 85,69 95,65" fill="none" stroke="#1a1a1c" stroke-width="1.5" stroke-linecap="round" />
`;
const mouthPaths = {
  default: `
    <path d="M 40,69 Q 45,74.5 50,69" fill="none" stroke="#1a1a1c" stroke-width="2.5" stroke-linecap="round" />
    <path d="M 50,69 Q 55,74.5 60,69" fill="none" stroke="#1a1a1c" stroke-width="2.5" stroke-linecap="round" />
  `,
  smile: `<path d="M 40,69 Q 50,80 60,69" fill="none" stroke="#1a1a1c" stroke-width="2.5" stroke-linecap="round" />`,
  frown: `<path d="M 40,72 Q 50,65 60,72" fill="none" stroke="#1a1a1c" stroke-width="2.5" stroke-linecap="round" />`,
  surprised: `<ellipse cx="50" cy="72" rx="5" ry="3" fill="#3a2a26" />`,
};

const accessoriesPaths: Record<string, string> = {
    bowTie: `<g transform="translate(0, 2)"><path d="M 46,76 Q 34,68 33,78 Q 32,88 46,80 Z" fill="#e74c3c" stroke="#1a1a1c" stroke-width="2" stroke-linejoin="round" /><path d="M 54,76 Q 66,68 67,78 Q 68,88 54,80 Z" fill="#e74c3c" stroke="#1a1a1c" stroke-width="2" stroke-linejoin="round" /><circle cx="50" cy="78" r="5" fill="#c0392b" stroke="#1a1a1c" stroke-width="2" /></g>`,
    glasses: `<path d="M 24,57 L 10,54" stroke="#1a1a1c" stroke-width="2.5" stroke-linecap="round" /><path d="M 76,57 L 90,54" stroke="#1a1a1c" stroke-width="2.5" stroke-linecap="round" /><circle cx="32" cy="57" r="8" fill="none" stroke="#1a1a1c" stroke-width="2" /><circle cx="68" cy="57" r="8" fill="none" stroke="#1a1a1c" stroke-width="2" /><path d="M 40,57 H 60" stroke="#1a1a1c" stroke-width="2" stroke-linecap="round" />`,
    topHat: `<path d="M 28,42 V 15 C 28,8 72,8 72,15 V 42 Z" fill="#2c3e50" stroke="#1a1a1c" stroke-width="2" stroke-linejoin="round"/><path d="M 8,40 C 8,48 92,48 92,40 C 92,35 8,35 8,40 Z" fill="#2c3e50" stroke="#1a1a1c" stroke-width="2" stroke-linejoin="round"/>`,
  smallHat: `<g transform="translate(67, 30) rotate(14) scale(0.78)"><path d="M -8,0 V -18 C -8,-23 8,-23 8,-18 V 0 Z" fill="#3498db" stroke="#1a1a1c" stroke-width="2" stroke-linejoin="round"/><path d="M -16,1 C -16,5 16,5 16,1 C 16,-3 -16,-3 -16,1 Z" fill="#3498db" stroke="#1a1a1c" stroke-width="2" stroke-linejoin="round"/><path d="M -8,-7 C -3,-10 3,-10 8,-7" fill="none" stroke="#5dade2" stroke-width="1.5" stroke-linecap="round" opacity="0.55"/></g>`,
    scarf: `<g transform="translate(0, 3)"><path d="M 24,78 C 36,94 64,94 76,78 C 84,88 70,102 50,102 C 30,102 16,88 24,78 Z" fill="#e67e22" stroke="#1a1a1c" stroke-width="2" stroke-linejoin="round" /><path d="M 52,89 C 55,102 52,108 47,105 C 41,101 42,92 43,89 Z" fill="#e67e22" stroke="#1a1a1c" stroke-width="2" stroke-linejoin="round" /></g>`,
    monocle: `<circle cx="32" cy="57" r="7" fill="none" stroke="#f1c40f" stroke-width="2" /><path d="M 25 57 L 15 50" stroke="#f1c40f" stroke-width="1.5" stroke-linecap="round" />`,
    crown: `<path d="M 38,38 L 35,12 L 43,26 L 50,8 L 57,26 L 65,12 L 62,38 Z" fill="#f1c40f" stroke="#1a1a1c" stroke-width="2" stroke-linejoin="round" />`,
  sunglasses: `<g transform="translate(0, -1)"><path d="M 26,53 L 9,48" stroke="#161616" stroke-width="2.5" stroke-linecap="round" /><path d="M 74,53 L 91,48" stroke="#161616" stroke-width="2.5" stroke-linecap="round" /><path d="M 22,53 C 25,50 33,49 40,50 C 41,54 40,58 37,61 C 31,63 25,61 22,53 Z" fill="#0c0c0e" stroke="#1f1f22" stroke-width="2" stroke-linejoin="round" /><path d="M 60,50 C 67,49 75,50 78,53 C 75,61 69,63 63,61 C 60,58 59,54 60,50 Z" fill="#0c0c0e" stroke="#1f1f22" stroke-width="2" stroke-linejoin="round" /><path d="M 22,53 C 28,55 34,56 40,55" fill="none" stroke="#3a3a40" stroke-width="1.2" opacity="0.35" /><path d="M 60,55 C 66,56 72,55 78,53" fill="none" stroke="#3a3a40" stroke-width="1.2" opacity="0.35" /><path d="M 40,51 Q 50,48 60,51" fill="none" stroke="#161616" stroke-width="3" stroke-linecap="round" /></g>`,
    headphones: `<path d="M 12,48 C 12,15 88,15 88,48" fill="none" stroke="#2c3e50" stroke-width="6" stroke-linecap="round" /><rect x="2" y="42" width="16" height="32" rx="6" fill="#e74c3c" stroke="#1a1a1c" stroke-width="2" /><rect x="82" y="42" width="16" height="32" rx="6" fill="#e74c3c" stroke="#1a1a1c" stroke-width="2" />`,
  hairBow: `<g transform="translate(29, 31) rotate(-18)"><path d="M -1,-1 C -10,-10 -18,-9 -17,0 C -16,8 -8,8 -1,2 Z" fill="#e74c3c" stroke="#1a1a1c" stroke-width="2" stroke-linejoin="round" /><path d="M 1,-1 C 7,-8 14,-8 18,-2 C 14,2 8,4 1,2 Z" fill="#e74c3c" stroke="#1a1a1c" stroke-width="2" stroke-linejoin="round" /><ellipse cx="0" cy="0" rx="4.2" ry="3.6" fill="#c0392b" stroke="#1a1a1c" stroke-width="2" /><path d="M -13,-5 L -19,-11" stroke="#1a1a1c" stroke-width="1.5" stroke-linecap="round" opacity="0.35" /></g>`,
    blush: `<circle cx="20" cy="66" r="5" fill="#ff77aa" opacity="0.6" /><circle cx="80" cy="66" r="5" fill="#ff77aa" opacity="0.6" />`,
    eyeshadowPink: `<path d="M 23,56 A 11 11 0 0 1 41,56 Z" fill="#ff66b2" opacity="0.5" /><path d="M 59,56 A 11 11 0 0 1 77,56 Z" fill="#ff66b2" opacity="0.5" />`,
    eyeshadowBlue: `<path d="M 23,56 A 11 11 0 0 1 41,56 Z" fill="#3498db" opacity="0.5" /><path d="M 59,56 A 11 11 0 0 1 77,56 Z" fill="#3498db" opacity="0.5" />`,
    flower: `<g transform="translate(70, 35)"><circle cx="0" cy="-6" r="4" fill="#fff" stroke="#1a1a1c" stroke-width="1"/><circle cx="6" cy="-2" r="4" fill="#fff" stroke="#1a1a1c" stroke-width="1"/><circle cx="4" cy="5" r="4" fill="#fff" stroke="#1a1a1c" stroke-width="1"/><circle cx="-4" cy="5" r="4" fill="#fff" stroke="#1a1a1c" stroke-width="1"/><circle cx="-6" cy="-2" r="4" fill="#fff" stroke="#1a1a1c" stroke-width="1"/><circle cx="0" cy="0" r="3" fill="#f1c40f" stroke="#1a1a1c" stroke-width="1"/></g>`,
    pearlNecklace: `<g fill="#fdfdfd" stroke="#e0e0e0" stroke-width="1"><circle cx="28" cy="80" r="3"/><circle cx="34" cy="83" r="3.5"/><circle cx="41" cy="86" r="4"/><circle cx="50" cy="87" r="4.5"/><circle cx="59" cy="86" r="4"/><circle cx="66" cy="83" r="3.5"/><circle cx="72" cy="80" r="3"/></g>`,
    starHairpin: `<g transform="translate(28, 35) rotate(-10)"><path d="M 0,-6 L 2,-2 L 6,-2 L 3,1 L 4,5 L 0,3 L -4,5 L -3,1 L -6,-2 Z" fill="#f1c40f" stroke="#1a1a1c" stroke-width="1"/></g>`,
    heartHairpin: `<g transform="translate(62, 34) rotate(15)"><path d="M 0,2 Q -4,-2 -4,-5 A 3 3 0 0 1 0,-6 A 3 3 0 0 1 4,-5 Q 4,-2 0,2 Z" fill="#e74c3c" stroke="#1a1a1c" stroke-width="1.5" transform="scale(1.2)"/></g>`,
    ribbon: `<g transform="translate(50, 82)"><path d="M -4,-1 C -12,-8 -20,-8 -21,0 C -21,8 -12,10 -5,5 Z" fill="#f5a623" stroke="#1a1a1c" stroke-width="1.8" stroke-linejoin="round" /><path d="M 4,-1 C 12,-8 20,-8 21,0 C 21,8 12,10 5,5 Z" fill="#f5a623" stroke="#1a1a1c" stroke-width="1.8" stroke-linejoin="round" /><circle cx="0" cy="1" r="4.2" fill="#e67e22" stroke="#1a1a1c" stroke-width="1.8" /><path d="M -5,5 L -12,24 L -4,20 L -1,8 Z" fill="#f39c12" stroke="#1a1a1c" stroke-width="1.5" stroke-linejoin="round" /><path d="M 5,5 L 12,24 L 4,20 L 1,8 Z" fill="#f39c12" stroke="#1a1a1c" stroke-width="1.5" stroke-linejoin="round" /></g>`,
    earring: `<g transform="translate(18, 42)"><circle cx="0" cy="4" r="3" fill="none" stroke="#f1c40f" stroke-width="2"/><path d="M 0,7 L -2,12 L 0,15 L 2,12 Z" fill="#9b59b6" stroke="#1a1a1c" stroke-width="1"/></g>`,
};

type EyeColor = 'eyeYellow' | 'eyeCyan' | 'eyeGreen' | 'eyeBlue' | 'eyeCopper' | 'eyeHazel';
type MouthExpression = 'default' | 'smile' | 'frown' | 'surprised';
type Accessory = 'bowTie' | 'glasses' | 'topHat' | 'smallHat' | 'scarf' | 'monocle' | 'crown' | 'sunglasses' | 'headphones' | 'hairBow' | 'blush' | 'eyeshadowPink' | 'eyeshadowBlue' | 'flower' | 'pearlNecklace' | 'starHairpin' | 'heartHairpin' | 'ribbon' | 'earring';

export interface BuddyConfig {
  id: string;
  name: string;
  readonly colors: readonly [string, string, string];
  eyeL?: EyeColor;
  eyeR?: EyeColor;
  eye?: EyeColor;
  eyeLColor?: string;
  eyeRColor?: string;
  patterns?: string;
  pointColor?: string;
  earColor?: string;
  inner?: string;
  whiskers?: boolean;
  mouth?: MouthExpression;
  accessories?: Accessory[];
}

export const presets = {
  CyberBlack: { id: '1_CyberBlack', name: '原味赛博', colors: ['#5a5a5e', '#3d3d40', '#18181a'], eyeL: 'eyeYellow', eyeR: 'eyeCyan', whiskers: true },
  BrownTabby: { id: '2_BrownTabby', name: '狸花猫', colors: ['#9c6f44', '#704f30', '#3b2918'], eye: 'eyeGreen', patterns: tabbyM('rgba(0,0,0,0.5)'), whiskers: true },
  OrangeTabby: { id: '3_OrangeTabby', name: '橘猫', colors: ['#f8b146', '#e07d24', '#b34d0b'], eye: 'eyeCopper', patterns: tabbyM('rgba(160,50,0,0.6)'), whiskers: true },
  AmShorthair: { id: '4_AmShorthair', name: '美短', colors: ['#cfd4d8', '#a4aeb8', '#63717d'], eye: 'eyeHazel', patterns: tabbyM('rgba(20,20,30,0.5)'), whiskers: true },
  Calico: { id: '5_Calico', name: '三花猫', colors: ['#ffffff', '#f4f6f7', '#dadddf'], eye: 'eyeCopper', patterns: calicoPatch(), whiskers: true },
  Tortoiseshell: { id: '6_Tortoiseshell', name: '玳瑁猫', colors: ['#283747', '#17202a', '#0b0f13'], eye: 'eyeCopper', patterns: tortoiseshellPatch(), whiskers: true },
  Tuxedo: { id: '7_Tuxedo', name: '奶牛猫', colors: ['#283747', '#17202a', '#0b0f13'], eye: 'eyeYellow', patterns: tuxedoPatch(), whiskers: true },
  Siamese: { id: '8_Siamese', name: '暹罗猫', colors: ['#fbeee6', '#f2d7d5', '#e6b0aa'], eye: 'eyeBlue', pointColor: '#3e2723', earColor: '#3e2723', whiskers: true },
  BritShorthair: { id: '9_BritShorthair', name: '英短蓝猫', colors: ['#8ba1b5', '#607994', '#394d63'], eye: 'eyeCopper', whiskers: true },
  RussianBlue: { id: '10_RussianBlue', name: '俄罗斯蓝猫', colors: ['#6a7f94', '#455a73', '#253545'], eye: 'eyeGreen', whiskers: true },
  WhiteCat: { id: '11_WhiteCat', name: '纯白猫', colors: ['#ffffff', '#fdfefe', '#e8ecef'], eye: 'eyeBlue', whiskers: true },
  BlackCat: { id: '12_BlackCat', name: '纯黑猫', colors: ['#283747', '#17202a', '#0b0f13'], eye: 'eyeYellow', whiskers: true },
  Ragdoll: { id: '13_Ragdoll', name: '布偶猫', colors: ['#fdfefe', '#f0f3f4', '#dfe5e8'], eye: 'eyeBlue', pointColor: '#5a4d45', earColor: '#5a4d45', patterns: tuxedoPatch(), whiskers: true },
  Bengal: { id: '14_Bengal', name: '豹猫', colors: ['#f5b041', '#e67e22', '#ba4a00'], eye: 'eyeYellow', patterns: bengalMarks('rgba(80,20,0,0.6)'), whiskers: true },
  GingerWhite: { id: '15_GingerWhite', name: '橘白猫', colors: ['#f8b146', '#e07d24', '#b34d0b'], eye: 'eyeCopper', patterns: gingerWhitePatch(), whiskers: true },
  CowCat: { id: '16_CowCat', name: '黑白花猫', colors: ['#ffffff', '#f4f6f7', '#dadddf'], eye: 'eyeYellow', patterns: cowSpots(), whiskers: true },
  LilacPoint: { id: '17_LilacPoint', name: '淡紫重点色', colors: ['#fdfefe', '#f5f5f5', '#ebebeb'], eye: 'eyeBlue', pointColor: '#9ea0a8', earColor: '#9ea0a8', whiskers: true },
  BluePoint: { id: '18_BluePoint', name: '蓝重点色', colors: ['#fdfefe', '#f0f3f4', '#dadddf'], eye: 'eyeBlue', pointColor: '#5d6d7e', earColor: '#5d6d7e', whiskers: true },
  GoldenChinchilla: { id: '19_GoldenChinchilla', name: '金渐层', colors: ['#fbe0a3', '#f3c47f', '#e69f4e'], eye: 'eyeGreen', patterns: tabbyM('rgba(200,80,0,0.15)'), whiskers: true },
  SilverChinchilla: { id: '20_SilverChinchilla', name: '银渐层', colors: ['#ffffff', '#eceff1', '#c7d0d6'], eye: 'eyeGreen', patterns: tabbyM('rgba(0,0,0,0.1)'), whiskers: true },
  CreamTabby: { id: '21_CreamTabby', name: '乳色虎斑', colors: ['#fdf5df', '#fae5b1', '#f3ca6f'], eye: 'eyeCopper', patterns: tabbyM('rgba(220,120,40,0.3)'), whiskers: true },
  Chocolate: { id: '22_Chocolate', name: '巧克力猫', colors: ['#633215', '#45210c', '#291205'], eye: 'eyeCopper', whiskers: true },
  Fawn: { id: '23_Fawn', name: '灰黄猫', colors: ['#e5cfb5', '#d6b693', '#ba936a'], eye: 'eyeYellow', whiskers: true },
  Smoke: { id: '24_Smoke', name: '烟色猫', colors: ['#7c8996', '#415263', '#1e2833'], eye: 'eyeCopper', patterns: `<ellipse cx="50" cy="70" rx="30" ry="20" fill="url(#smoke_24_Smoke)" opacity="0.6"/>`, whiskers: true },
  Sphynx: { id: '25_Sphynx', name: '无毛猫', colors: ['#f5cec9', '#e8a9a2', '#d68378'], eye: 'eyeGreen', patterns: sphynxWrinkles(), whiskers: false }
} as const;

const getSvg = (buddy: BuddyConfig): string => {
  const eLId = buddy.eyeLColor ? `customEyeL_${buddy.id}` : (buddy.eyeL || buddy.eye || 'eyeYellow');
  const eRId = buddy.eyeRColor ? `customEyeR_${buddy.id}` : (buddy.eyeR || buddy.eye || 'eyeYellow');
  
  const inner = buddy.inner || 'rgba(255,255,255,0.08)';
  const earColor = buddy.earColor || `url(#body_${buddy.id})`;
  const patterns = buddy.patterns || '';
  const mouthSvg = mouthPaths[buddy.mouth || 'default'];
  const whiskersSvg = (buddy.whiskers ?? false) ? whiskers() : '';
    const layerOrder: Record<string, number> = { blush: 1, eyeshadowPink: 1, eyeshadowBlue: 1, scarf: 2, pearlNecklace: 2, ribbon: 2, glasses: 3, sunglasses: 3, monocle: 3, headphones: 4, earring: 4, smallHat: 5, hairBow: 5, flower: 5, starHairpin: 5, heartHairpin: 5, crown: 5, topHat: 6, bowTie: 7 };
  const accessoriesSvg = buddy.accessories?.slice().sort((a, b) => (layerOrder[a as string] || 0) - (layerOrder[b as string] || 0)).map(acc => accessoriesPaths[acc as string] || '').join('') || '';

  let customDefs = '';
  if (buddy.eyeLColor) {
    customDefs += `<radialGradient id="${eLId}" cx="35%" cy="35%" r="65%"><stop offset="0%" stop-color="${buddy.eyeLColor}33" /><stop offset="35%" stop-color="${buddy.eyeLColor}" /><stop offset="100%" stop-color="${buddy.eyeLColor}ff" /></radialGradient>`;
  }
  if (buddy.eyeRColor) {
    customDefs += `<radialGradient id="${eRId}" cx="35%" cy="35%" r="65%"><stop offset="0%" stop-color="${buddy.eyeRColor}33" /><stop offset="35%" stop-color="${buddy.eyeRColor}" /><stop offset="100%" stop-color="${buddy.eyeRColor}ff" /></radialGradient>`;
  }
  
  const pointDef = buddy.pointColor ? `
    <radialGradient id="point_${buddy.id}" cx="50%" cy="58%" r="45%">
      <stop offset="0%" stop-color="${buddy.pointColor}" stop-opacity="0.9" />
      <stop offset="50%" stop-color="${buddy.pointColor}" stop-opacity="0.5" />
      <stop offset="100%" stop-color="${buddy.pointColor}" stop-opacity="0" />
    </radialGradient>
  ` : '';
  
  const pointElement = buddy.pointColor ? `
    <ellipse cx="50" cy="58" rx="26" ry="22" fill="url(#point_${buddy.id})" />
  ` : '';

  const smokeDef = buddy.id === '24_Smoke' ? `
    <radialGradient id="smoke_${buddy.id}" cx="50%" cy="75%" r="50%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.8" />
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0" />
    </radialGradient>
  ` : '';

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="1024" height="1024">
  <defs>
    <radialGradient id="body_${buddy.id}" cx="50%" cy="35%" r="70%">
      <stop offset="0%" stop-color="${buddy.colors[0]}" />
      <stop offset="50%" stop-color="${buddy.colors[1]}" />
      <stop offset="100%" stop-color="${buddy.colors[2]}" />
    </radialGradient>
    
    ${pointDef}
    ${smokeDef}
    ${customDefs}

    <radialGradient id="eyeYellow" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#ffffcc" /><stop offset="35%" stop-color="#f5d142" /><stop offset="100%" stop-color="#b38a00" />
    </radialGradient>
    <radialGradient id="eyeCyan" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#ccffff" /><stop offset="35%" stop-color="#42e6f5" /><stop offset="100%" stop-color="#0092b3" />
    </radialGradient>
    <radialGradient id="eyeGreen" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#ddffcc" /><stop offset="35%" stop-color="#6df542" /><stop offset="100%" stop-color="#1b8a00" />
    </radialGradient>
    <radialGradient id="eyeBlue" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#cce6ff" /><stop offset="35%" stop-color="#4293f5" /><stop offset="100%" stop-color="#0046b3" />
    </radialGradient>
    <radialGradient id="eyeCopper" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#ffeacc" /><stop offset="35%" stop-color="#f58a42" /><stop offset="100%" stop-color="#a34100" />
    </radialGradient>
    <radialGradient id="eyeHazel" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#efffcc" /><stop offset="35%" stop-color="#baf542" /><stop offset="100%" stop-color="#698500" />
    </radialGradient>
    
    <clipPath id="headClip_${buddy.id}"><ellipse cx="50" cy="62" rx="38" ry="26" /></clipPath>
  </defs>
  <g transform="translate(0, -2)">
    ${buddy.accessories?.includes('topHat') ? '' : `
    <!-- Ears (Tinted for point breeds) -->
    <path d="M 22,47 Q 15,24 28,24 Q 34,24 40,40" fill="${earColor}" stroke="#1a1a1c" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M 78,47 Q 85,24 72,24 Q 66,24 60,40" fill="${earColor}" stroke="#1a1a1c" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
    `}
    <!-- Head Base -->
    <ellipse cx="50" cy="62" rx="38" ry="26" fill="url(#body_${buddy.id})" stroke="#1a1a1c" stroke-width="2.5" />
    
    <!-- Point Faces (Siamese, Ragdoll) -->
    ${pointElement}

    <!-- Patterns (Masked to Head) -->
    <g clip-path="url(#headClip_${buddy.id})">${patterns}</g>
    
    <!-- Inner Head Outline -->
    <ellipse cx="50" cy="61" rx="35" ry="23" fill="none" stroke="${inner}" stroke-width="1.5" />
    
    <!-- Left Eye -->
    <circle cx="32" cy="57" r="6.5" fill="url(#${eLId})" stroke="#1a1a1c" stroke-width="1.5" />
    <circle cx="30" cy="54.5" r="2.2" fill="#ffffff" />
    <circle cx="34" cy="60" r="1.2" fill="#ffffff" opacity="0.6" />
    
    <!-- Right Eye -->
    <circle cx="68" cy="57" r="6.5" fill="url(#${eRId})" stroke="#1a1a1c" stroke-width="1.5" />
    <circle cx="66" cy="54.5" r="2.2" fill="#ffffff" />
    <circle cx="70" cy="60" r="1.2" fill="#ffffff" opacity="0.6" />
    
    <!-- Nose -->
    <ellipse cx="50" cy="64" rx="4" ry="2.5" fill="#3a2a26" />
    <ellipse cx="49.5" cy="63.2" rx="1.5" ry="0.8" fill="#8c7772" />
    
    <!-- Mouth -->
    ${mouthSvg}

    <!-- Whiskers -->
    ${whiskersSvg}

    <!-- Accessories -->
    ${accessoriesSvg}
  </g>
</svg>`;
};

interface RandomOptions {
    format?: 'svg';
}

export const patterns = {
  tabbyM,
  bengalMarks,
  tuxedoPatch,
  gingerWhitePatch,
  calicoPatch,
  tortoiseshellPatch,
  cowSpots,
  sphynxWrinkles,
};

export const BuddyMaker = {
  presets,
  patterns,

  create(config: BuddyConfig): string {
    return getSvg(config);
  },

  preset<T extends keyof typeof presets>(name: T): string {
    const config = presets[name];
    return getSvg(config as BuddyConfig);
  },

  random(options?: RandomOptions): string {
    if (options?.format && options.format !== 'svg') {
        throw new Error("Currently only 'svg' format is supported.");
    }
    const presetKeys = Object.keys(presets) as (keyof typeof presets)[];
    const randomKey = presetKeys[Math.floor(Math.random() * presetKeys.length)];
    const config = presets[randomKey];
    return getSvg(config as BuddyConfig);
  }
};

export default BuddyMaker;
