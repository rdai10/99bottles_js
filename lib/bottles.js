import { downTo } from './helpers';

class Bottles {
  verse(n) {
    let current = `${n} bottles`;
    let future = `${n - 1} bottles`;

    switch (n) {
      case 2:
        current = '2 bottles';
        future = '1 bottle';
        break;
      case 1:
        return '1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n';
      case 0:
        return 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n';
      default:
        current = `${n} bottles`;
        future = `${n - 1} bottles`;
    }

    return `${current} of beer on the wall, ${current} of beer.\nTake one down and pass it around, ${future} of beer on the wall.\n`;
  }

  verses(max, min) {
    return downTo(max, min)
      .map((n) => this.verse(n))
      .join('\n');
  }

  song() {
    return this.verses(99, 0);
  }
}

export { Bottles };
