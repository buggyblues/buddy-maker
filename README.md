# BuddyMaker

A monorepo for creating buddies.

## @shadowob/buddy-maker

This package provides a library to generate fun and unique buddy SVGs.

### Installation

```bash
pnpm add @shadowob/buddy-maker
```

### Usage

```javascript
import { BuddyMaker, patterns } from '@shadowob/buddy-maker';

// Get a random buddy
const randomBuddy = BuddyMaker.random();

// Get a buddy from a preset
const cyborg = BuddyMaker.preset('CyberBlack');

// Create a custom buddy using new options and pattern helpers
const customBuddy = BuddyMaker.create({
  id: 'custom',
  name: 'My Custom Buddy',
  colors: ['#c0ffee', '#bad', '#dad'],
  eye: 'eyeGreen',
  mouth: 'smile',
  accessories: ['glasses', 'bowTie'],
  patterns: patterns.tabbyM('rgba(0,0,0,0.2)'),
});
```

## Customization

<!-- CUSTOMIZATION_SECTION_START -->
<table>
  <tr>
    <td width="50%" valign="top">
      <img src="./dist/examples/example_king.svg" width="100%" alt="The King" />
      <details>
        <summary><b>The King</b></summary>
        <pre><code>BuddyMaker.create({
  id: 'example_king',
  name: 'The King',

  "accessories": [
    "crown",
    "scarf"
  ],
  "mouth": "smile",
  "whiskers": true,
  "colors": [
    "#f8b146",
    "#e07d24",
    "#b34d0b"
  ]
  "patterns": BuddyMaker.patterns.bengalMarks('rgba(80,20,0,0.4)')

});</code></pre>
      </details>
    </td>
    <td width="50%" valign="top">
      <img src="./dist/examples/example_cool.svg" width="100%" alt="Cool Cat" />
      <details>
        <summary><b>Cool Cat</b></summary>
        <pre><code>BuddyMaker.create({
  id: 'example_cool',
  name: 'Cool Cat',

  "accessories": [
    "sunglasses"
  ],
  "colors": [
    "#cfd4d8",
    "#a4aeb8",
    "#63717d"
  ],
  "mouth": "smile",
  "whiskers": true
  "patterns": BuddyMaker.patterns.tabbyM('rgba(0,0,0,0.3)')

});</code></pre>
      </details>
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <img src="./dist/examples/example_dj.svg" width="100%" alt="DJ Paws" />
      <details>
        <summary><b>DJ Paws</b></summary>
        <pre><code>BuddyMaker.create({
  id: 'example_dj',
  name: 'DJ Paws',

  "accessories": [
    "headphones",
    "sunglasses"
  ],
  "colors": [
    "#283747",
    "#17202a",
    "#0b0f13"
  ],
  "whiskers": true
  "patterns": BuddyMaker.patterns.tuxedoPatch()

});</code></pre>
      </details>
    </td>
    <td width="50%" valign="top">
      <img src="./dist/examples/example_gamer.svg" width="100%" alt="Gamer" />
      <details>
        <summary><b>Gamer</b></summary>
        <pre><code>BuddyMaker.create({
  id: 'example_gamer',
  name: 'Gamer',

  "accessories": [
    "headphones"
  ],
  "mouth": "surprised",
  "colors": [
    "#ecf0f1",
    "#bdc3c7",
    "#95a5a6"
  ],
  "whiskers": true
  "patterns": BuddyMaker.patterns.calicoPatch()

});</code></pre>
      </details>
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <img src="./dist/examples/example_tophat.svg" width="100%" alt="Gentleman" />
      <details>
        <summary><b>Gentleman</b></summary>
        <pre><code>BuddyMaker.create({
  id: 'example_tophat',
  name: 'Gentleman',

  "accessories": [
    "topHat"
  ],
  "mouth": "smile",
  "whiskers": true,
  "colors": [
    "#ecf0f1",
    "#bdc3c7",
    "#95a5a6"
  ]
  "patterns": BuddyMaker.patterns.gingerWhitePatch()

});</code></pre>
      </details>
    </td>
    <td width="50%" valign="top">
      <img src="./dist/examples/example_smallhat.svg" width="100%" alt="Party Time" />
      <details>
        <summary><b>Party Time</b></summary>
        <pre><code>BuddyMaker.create({
  id: 'example_smallhat',
  name: 'Party Time',

  "accessories": [
    "smallHat",
    "bowTie"
  ],
  "mouth": "smile",
  "whiskers": true,
  "colors": [
    "#ffffff",
    "#f4f6f7",
    "#dadddf"
  ]
  "patterns": BuddyMaker.patterns.cowSpots()

});</code></pre>
      </details>
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <img src="./dist/examples/example_monocle.svg" width="100%" alt="Distinguished" />
      <details>
        <summary><b>Distinguished</b></summary>
        <pre><code>BuddyMaker.create({
  id: 'example_monocle',
  name: 'Distinguished',

  "accessories": [
    "monocle"
  ],
  "whiskers": true,
  "colors": [
    "#633215",
    "#45210c",
    "#291205"
  ]
  "patterns": BuddyMaker.patterns.sphynxWrinkles()

});</code></pre>
      </details>
    </td>
    <td width="50%" valign="top">
      <img src="./dist/examples/example_scarf.svg" width="100%" alt="Cozy" />
      <details>
        <summary><b>Cozy</b></summary>
        <pre><code>BuddyMaker.create({
  id: 'example_scarf',
  name: 'Cozy',

  "accessories": [
    "scarf"
  ],
  "mouth": "smile",
  "whiskers": true,
  "colors": [
    "#fdebd0",
    "#f5cba7",
    "#f0b27a"
  ]

});</code></pre>
      </details>
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <img src="./dist/examples/example_glasses.svg" width="100%" alt="Nerdy" />
      <details>
        <summary><b>Nerdy</b></summary>
        <pre><code>BuddyMaker.create({
  id: 'example_glasses',
  name: 'Nerdy',

  "accessories": [
    "glasses"
  ],
  "whiskers": true,
  "colors": [
    "#3498db",
    "#2980b9",
    "#1f618d"
  ]

});</code></pre>
      </details>
    </td>
    <td width="50%" valign="top">
      <img src="./dist/examples/example_bowtie.svg" width="100%" alt="Dapper" />
      <details>
        <summary><b>Dapper</b></summary>
        <pre><code>BuddyMaker.create({
  id: 'example_bowtie',
  name: 'Dapper',

  "accessories": [
    "bowTie"
  ],
  "mouth": "smile",
  "whiskers": true,
  "colors": [
    "#9b59b6",
    "#8e44ad",
    "#7d3c98"
  ]

});</code></pre>
      </details>
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <img src="./dist/examples/example_custom_eyes.svg" width="100%" alt="Zany" />
      <details>
        <summary><b>Zany</b></summary>
        <pre><code>BuddyMaker.create({
  id: 'example_custom_eyes',
  name: 'Zany',

  "eyeLColor": "#ff00ff",
  "eyeRColor": "#00ffff",
  "whiskers": true,
  "colors": [
    "#2ecc71",
    "#27ae60",
    "#1e8449"
  ]

});</code></pre>
      </details>
    </td>
    <td width="50%" valign="top">
      <img src="./dist/examples/example_detective.svg" width="100%" alt="Detective" />
      <details>
        <summary><b>Detective</b></summary>
        <pre><code>BuddyMaker.create({
  id: 'example_detective',
  name: 'Detective',

  "accessories": [
    "topHat",
    "monocle"
  ],
  "colors": [
    "#fdfefe",
    "#f5f5f5",
    "#ebebeb"
  ],
  "whiskers": true

});</code></pre>
      </details>
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <img src="./dist/examples/example_princess.svg" width="100%" alt="Princess" />
      <details>
        <summary><b>Princess</b></summary>
        <pre><code>BuddyMaker.create({
  id: 'example_princess',
  name: 'Princess',

  "accessories": [
    "crown",
    "blush",
    "pearlNecklace"
  ],
  "mouth": "smile",
  "colors": [
    "#ffffff",
    "#eceff1",
    "#c7d0d6"
  ],
  "eye": "eyeCyan",
  "whiskers": true
  "patterns": BuddyMaker.patterns.tortoiseshellPatch()

});</code></pre>
      </details>
    </td>
    <td width="50%" valign="top">
      <img src="./dist/examples/example_idol.svg" width="100%" alt="Pop Idol" />
      <details>
        <summary><b>Pop Idol</b></summary>
        <pre><code>BuddyMaker.create({
  id: 'example_idol',
  name: 'Pop Idol',

  "accessories": [
    "hairBow",
    "eyeshadowPink",
    "starHairpin"
  ],
  "colors": [
    "#fdf5df",
    "#fae5b1",
    "#f3ca6f"
  ],
  "eye": "eyeBlue",
  "whiskers": true
  "patterns": BuddyMaker.patterns.bengalMarks('rgba(255,100,200,0.5)')

});</code></pre>
      </details>
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <img src="./dist/examples/example_fashion.svg" width="100%" alt="Fashionista" />
      <details>
        <summary><b>Fashionista</b></summary>
        <pre><code>BuddyMaker.create({
  id: 'example_fashion',
  name: 'Fashionista',

  "accessories": [
    "smallHat",
    "earring",
    "blush",
    "eyeshadowBlue"
  ],
  "colors": [
    "#cfd4d8",
    "#a4aeb8",
    "#63717d"
  ],
  "mouth": "smile",
  "whiskers": true
  "patterns": BuddyMaker.patterns.gingerWhitePatch()

});</code></pre>
      </details>
    </td>
    <td width="50%" valign="top">
      <img src="./dist/examples/example_spring.svg" width="100%" alt="Spring Love" />
      <details>
        <summary><b>Spring Love</b></summary>
        <pre><code>BuddyMaker.create({
  id: 'example_spring',
  name: 'Spring Love',

  "accessories": [
    "flower",
    "blush",
    "ribbon"
  ],
  "colors": [
    "#ffffff",
    "#f4f6f7",
    "#dadddf"
  ],
  "eye": "eyeGreen",
  "whiskers": true
  "patterns": BuddyMaker.patterns.calicoPatch()

});</code></pre>
      </details>
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <img src="./dist/examples/example_sweetheart.svg" width="100%" alt="Sweetheart" />
      <details>
        <summary><b>Sweetheart</b></summary>
        <pre><code>BuddyMaker.create({
  id: 'example_sweetheart',
  name: 'Sweetheart',

  "accessories": [
    "heartHairpin",
    "pearlNecklace",
    "blush"
  ],
  "colors": [
    "#f5cec9",
    "#e8a9a2",
    "#d68378"
  ],
  "eye": "eyeCopper",
  "whiskers": true
  "patterns": BuddyMaker.patterns.sphynxWrinkles()

});</code></pre>
      </details>
    </td>
    <td width="50%" valign="top">
      <img src="./dist/examples/example_fancy.svg" width="100%" alt="Fancy Lady" />
      <details>
        <summary><b>Fancy Lady</b></summary>
        <pre><code>BuddyMaker.create({
  id: 'example_fancy',
  name: 'Fancy Lady',

  "accessories": [
    "hairBow",
    "earring",
    "ribbon"
  ],
  "colors": [
    "#fdfefe",
    "#f0f3f4",
    "#dfe5e8"
  ],
  "mouth": "smile",
  "whiskers": true
  "patterns": BuddyMaker.patterns.cowSpots()

});</code></pre>
      </details>
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <img src="./dist/examples/example_gamer_girl.svg" width="100%" alt="Gamer Girl" />
      <details>
        <summary><b>Gamer Girl</b></summary>
        <pre><code>BuddyMaker.create({
  id: 'example_gamer_girl',
  name: 'Gamer Girl',

  "accessories": [
    "headphones",
    "blush",
    "heartHairpin"
  ],
  "colors": [
    "#ffffff",
    "#eceff1",
    "#c7d0d6"
  ],
  "mouth": "surprised",
  "eye": "eyeBlue",
  "whiskers": true
  "patterns": BuddyMaker.patterns.tabbyM('rgba(0,0,0,0.2)')

});</code></pre>
      </details>
    </td>
    <td width="50%" valign="top">
      <img src="./dist/examples/example_magic.svg" width="100%" alt="Magician" />
      <details>
        <summary><b>Magician</b></summary>
        <pre><code>BuddyMaker.create({
  id: 'example_magic',
  name: 'Magician',

  "accessories": [
    "topHat",
    "bowTie"
  ],
  "colors": [
    "#283747",
    "#17202a",
    "#0b0f13"
  ],
  "eye": "eyeCopper",
  "whiskers": true

});</code></pre>
      </details>
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <img src="./dist/examples/example_golden.svg" width="100%" alt="Golden Scarf" />
      <details>
        <summary><b>Golden Scarf</b></summary>
        <pre><code>BuddyMaker.create({
  id: 'example_golden',
  name: 'Golden Scarf',

  "accessories": [
    "scarf"
  ],
  "colors": [
    "#fbe0a3",
    "#f3c47f",
    "#e69f4e"
  ],
  "eye": "eyeGreen",
  "whiskers": true

});</code></pre>
      </details>
    </td>
    <td width="50%" valign="top">
      <img src="./dist/examples/example_boss.svg" width="100%" alt="The Boss" />
      <details>
        <summary><b>The Boss</b></summary>
        <pre><code>BuddyMaker.create({
  id: 'example_boss',
  name: 'The Boss',

  "accessories": [
    "sunglasses",
    "bowTie"
  ],
  "colors": [
    "#fdf5df",
    "#fae5b1",
    "#f3ca6f"
  ],
  "mouth": "frown",
  "whiskers": true

});</code></pre>
      </details>
    </td>
  </tr>
</table>
<!-- CUSTOMIZATION_SECTION_END -->

## Presets Gallery

<!-- BUDDY_GALLERY_START -->
<table>
  <tr>
    <td align="center">
      <img src="./dist/buddies/1_CyberBlack.svg" width="100%" alt="原味赛博" />
      <br />
      <code>CyberBlack</code>
    </td>
    <td align="center">
      <img src="./dist/buddies/2_BrownTabby.svg" width="100%" alt="狸花猫" />
      <br />
      <code>BrownTabby</code>
    </td>
    <td align="center">
      <img src="./dist/buddies/3_OrangeTabby.svg" width="100%" alt="橘猫" />
      <br />
      <code>OrangeTabby</code>
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="./dist/buddies/4_AmShorthair.svg" width="100%" alt="美短" />
      <br />
      <code>AmShorthair</code>
    </td>
    <td align="center">
      <img src="./dist/buddies/5_Calico.svg" width="100%" alt="三花猫" />
      <br />
      <code>Calico</code>
    </td>
    <td align="center">
      <img src="./dist/buddies/6_Tortoiseshell.svg" width="100%" alt="玳瑁猫" />
      <br />
      <code>Tortoiseshell</code>
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="./dist/buddies/7_Tuxedo.svg" width="100%" alt="奶牛猫" />
      <br />
      <code>Tuxedo</code>
    </td>
    <td align="center">
      <img src="./dist/buddies/8_Siamese.svg" width="100%" alt="暹罗猫" />
      <br />
      <code>Siamese</code>
    </td>
    <td align="center">
      <img src="./dist/buddies/9_BritShorthair.svg" width="100%" alt="英短蓝猫" />
      <br />
      <code>BritShorthair</code>
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="./dist/buddies/10_RussianBlue.svg" width="100%" alt="俄罗斯蓝猫" />
      <br />
      <code>RussianBlue</code>
    </td>
    <td align="center">
      <img src="./dist/buddies/11_WhiteCat.svg" width="100%" alt="纯白猫" />
      <br />
      <code>WhiteCat</code>
    </td>
    <td align="center">
      <img src="./dist/buddies/12_BlackCat.svg" width="100%" alt="纯黑猫" />
      <br />
      <code>BlackCat</code>
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="./dist/buddies/13_Ragdoll.svg" width="100%" alt="布偶猫" />
      <br />
      <code>Ragdoll</code>
    </td>
    <td align="center">
      <img src="./dist/buddies/14_Bengal.svg" width="100%" alt="豹猫" />
      <br />
      <code>Bengal</code>
    </td>
    <td align="center">
      <img src="./dist/buddies/15_GingerWhite.svg" width="100%" alt="橘白猫" />
      <br />
      <code>GingerWhite</code>
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="./dist/buddies/16_CowCat.svg" width="100%" alt="黑白花猫" />
      <br />
      <code>CowCat</code>
    </td>
    <td align="center">
      <img src="./dist/buddies/17_LilacPoint.svg" width="100%" alt="淡紫重点色" />
      <br />
      <code>LilacPoint</code>
    </td>
    <td align="center">
      <img src="./dist/buddies/18_BluePoint.svg" width="100%" alt="蓝重点色" />
      <br />
      <code>BluePoint</code>
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="./dist/buddies/19_GoldenChinchilla.svg" width="100%" alt="金渐层" />
      <br />
      <code>GoldenChinchilla</code>
    </td>
    <td align="center">
      <img src="./dist/buddies/20_SilverChinchilla.svg" width="100%" alt="银渐层" />
      <br />
      <code>SilverChinchilla</code>
    </td>
    <td align="center">
      <img src="./dist/buddies/21_CreamTabby.svg" width="100%" alt="乳色虎斑" />
      <br />
      <code>CreamTabby</code>
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="./dist/buddies/22_Chocolate.svg" width="100%" alt="巧克力猫" />
      <br />
      <code>Chocolate</code>
    </td>
    <td align="center">
      <img src="./dist/buddies/23_Fawn.svg" width="100%" alt="灰黄猫" />
      <br />
      <code>Fawn</code>
    </td>
    <td align="center">
      <img src="./dist/buddies/24_Smoke.svg" width="100%" alt="烟色猫" />
      <br />
      <code>Smoke</code>
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="./dist/buddies/25_Sphynx.svg" width="100%" alt="无毛猫" />
      <br />
      <code>Sphynx</code>
    </td>
    <td></td>
    <td></td>
  </tr>
</table>
<!-- BUDDY_GALLERY_END -->
