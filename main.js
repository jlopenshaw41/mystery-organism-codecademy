// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (number, array) => {
  return {
    specimenNum: number,
    dna: array,
    mutate: function () {
      let getRandomBaseIndex = [Math.floor(Math.random() * 14)];
      console.log(this.dna[getRandomBaseIndex]);
      let newBase = returnRandBase();
      if (this.dna[getRandomBaseIndex] !== newBase) {
        this.dna[getRandomBaseIndex] = newBase;
        console.log('Random');
      } else if (newBase === 'A') {
        this.dna[getRandomBaseIndex] = 'T';
      } else if (newBase === 'T') {
        this.dna[getRandomBaseIndex] = 'C';
      } else if (newBase === 'C') {
        this.dna[getRandomBaseIndex] = 'G';
      } else {
        this.dna[getRandomBaseIndex] = 'A';
      }
      console.log(this.dna[getRandomBaseIndex]);
    }
  }
}

console.log(pAequorFactory(1, mockUpStrand()).mutate());








