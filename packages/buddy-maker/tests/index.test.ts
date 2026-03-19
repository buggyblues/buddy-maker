import { BuddyMaker, BuddyConfig } from '../src/index';

describe('BuddyMaker SDK', () => {

  describe('BuddyMaker.create', () => {
    it('should create a default buddy', () => {
      const defaultConfig: BuddyConfig = {
        id: 'default',
        name: 'Default Buddy',
        colors: ['#6c757d', '#495057', '#343a40'],
      };
      const svg = BuddyMaker.create(defaultConfig);
      expect(svg).toContain('<svg');
      expect(svg).toContain('id="body_default"');
      expect(svg).toContain('M 40,69 Q 45,74.5 50,69');
      expect(svg).not.toContain('M 25,62 Q 15,64 5,60');
    });

    it('should toggle whiskers', () => {
      const configWithWhiskers: BuddyConfig = {
        id: 'whisker', name: 'Whisker Buddy', colors: ['#6c757d', '#495057', '#343a40'], whiskers: true,
      };
      const svgWith = BuddyMaker.create(configWithWhiskers);
      expect(svgWith).toContain('M 25,62 Q 15,64 5,60');

      const configWithoutWhiskers: BuddyConfig = {
        id: 'nowhisker', name: 'No Whisker Buddy', colors: ['#6c757d', '#495057', '#343a40'], whiskers: false,
      };
      const svgWithout = BuddyMaker.create(configWithoutWhiskers);
      expect(svgWithout).not.toContain('M 25,62 Q 15,64 5,60');
    });

    it('should change mouth expression', () => {
      const configSmile: BuddyConfig = {
        id: 'smile', name: 'Happy Buddy', colors: ['#6c757d', '#495057', '#343a40'], mouth: 'smile',
      };
      const svgSmile = BuddyMaker.create(configSmile);
      expect(svgSmile).toContain('M 40,69 Q 50,80 60,69');
    });

    it('should add accessories', () => {
      const configGlasses: BuddyConfig = {
        id: 'glasses', name: 'Nerdy Buddy', colors: ['#6c757d', '#495057', '#343a40'], accessories: ['glasses'],
      };
      const svgGlasses = BuddyMaker.create(configGlasses);
      expect(svgGlasses).toContain('<circle cx="32" cy="57" r="8"');

      const configBowTie: BuddyConfig = {
        id: 'bowtie', name: 'Dapper Buddy', colors: ['#6c757d', '#495057', '#343a40'], accessories: ['bowTie'],
      };
      const svgBowTie = BuddyMaker.create(configBowTie);
      expect(svgBowTie).toContain('circle cx="50" cy="78" r="5"');
        
      const configTopHat: BuddyConfig = {
        id: 'tophat', name: 'Fancy Buddy', colors: ['#6c757d', '#495057', '#343a40'], accessories: ['topHat'],
      };
      const svgTopHat = BuddyMaker.create(configTopHat);
      expect(svgTopHat).toContain('V 15 C 28,8 72,8 72,15');

      const configScarf: BuddyConfig = {
        id: 'scarf', name: 'Cozy Buddy', colors: ['#6c757d', '#495057', '#343a40'], accessories: ['scarf'],
      };
      const svgScarf = BuddyMaker.create(configScarf);
      expect(svgScarf).toContain('M 24,78 C 36,94 64,94 76,78');

      const configMonocle: BuddyConfig = {
        id: 'monocle', name: 'Posh Buddy', colors: ['#6c757d', '#495057', '#343a40'], accessories: ['monocle'],
      };
      const svgMonocle = BuddyMaker.create(configMonocle);
      expect(svgMonocle).toContain('<circle cx="32" cy="57" r="7"');
    });

    it('should allow custom eye colors', () => {
      const configCustomEyes: BuddyConfig = {
        id: 'customEyes',
        name: 'Custom Eyed Buddy',
        colors: ['#6c757d', '#495057', '#343a40'],
        eyeLColor: '#ff00ff',
        eyeRColor: '#00ffff',
      };
      const svg = BuddyMaker.create(configCustomEyes);
      expect(svg).toContain('id="customEyeL_customEyes"');
      expect(svg).toContain('stop-color="#ff00ff"');
      expect(svg).toContain('id="customEyeR_customEyes"');
      expect(svg).toContain('stop-color="#00ffff"');
    });
  });

  describe('BuddyMaker.preset', () => {
    it('should return an SVG string for a valid preset name', () => {
      const svg = BuddyMaker.preset('CyberBlack');
      expect(svg).toContain('<svg');
      expect(svg).toContain('id="body_1_CyberBlack"');
    });
  });

  describe('BuddyMaker.random', () => {
    it('should return a random buddy SVG', () => {
      const svg = BuddyMaker.random();
      expect(svg).toContain('<svg');
    });
  });

});
