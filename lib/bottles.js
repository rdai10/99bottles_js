import { downTo } from './helpers';

class Bottles {
  verse(n) {
    return `${n} bottles of beer on the wall, ${n} bottles of beer.\nTake one down and pass it around, ${
      n - 1
    } bottles of beer on the wall.\n`;
  }

  verses(max, min) {
    const range = downTo(max, min);

    let verses = '';

    range.forEach((n, index) => {
      verses += this.verse(n);

      if (index + 1 !== range.length) {
        verses += '\n';
      }
    });

    return verses;
  }
}

export { Bottles };
