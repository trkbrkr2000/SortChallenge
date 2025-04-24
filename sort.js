function sort(width, height, length, mass) {
    if(width <= 0 || height <= 0 || length <= 0 || mass <= 0) {
      return 'REJECTED';
    }
    
    const isHeavy = mass >= 20;
    const isBulky = (width * height * length) >= 1000000 || 
                    width >= 150 || 
                    height >= 150 || 
                    length >= 150;
  
    if (isHeavy && isBulky) {
      return 'REJECTED';
    }
  
    if (isHeavy || isBulky) {
      return 'SPECIAL';
    }
  
    return 'STANDARD';
  }
  
  module.exports = { sort };