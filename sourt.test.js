const { sort } = require('./sort');

describe('sort', () => {
    it('should mark a package REJECTED', () => {
        expect(sort(150, 150, 150, 25)).toBe("REJECTED");
    });

    it('should mark a package SPECIAL (bulky by volume)', () => {
        expect(sort(100, 100, 100, 10)).toBe("SPECIAL");
    });

    it('should mark a package STANDARD', () => {
        expect(sort(50, 50, 50, 10)).toBe("STANDARD");
    });

    it('should mark a package SPECIAL (heavy)', () => {
        expect(sort(120, 90, 80, 21)).toBe("SPECIAL");
    });

    it('should mark a package STANDARD (not bulky or heavy)', () => {
        expect(sort(160, 30, 20, 5)).toBe("SPECIAL");
    });

    it('should mark a package REJECTED (negative dimensions)', () => {
        expect(sort(-1, 50, 50, 10)).toBe("REJECTED");
    }); 

    it('should mark a package REJECTED (zero dimensions)', () => {
        expect(sort(0, 50, 50, 10)).toBe("REJECTED");
    });

    it('should mark a package REJECTED (zero mass)', () => {
        expect(sort(50, 50, 50, 0)).toBe("REJECTED");
    });

    it('should mark a package REJECTED (negative mass)', () => {
        expect(sort(50, 50, 50, -10)).toBe("REJECTED");
    });
    it('should mark a package REJECTED (mass and dimensions zero)', () => {
        expect(sort(0, 0, 0, 0)).toBe("REJECTED");
    });
});