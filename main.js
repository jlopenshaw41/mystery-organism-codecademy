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
      let newBase = returnRandBase();

      if (this.dna[getRandomBaseIndex] !== newBase) {
        this.dna[getRandomBaseIndex] = newBase;
      } else if (newBase === 'A') {
        this.dna[getRandomBaseIndex] = 'T';
      } else if (newBase === 'T') {
        this.dna[getRandomBaseIndex] = 'C';
      } else if (newBase === 'C') {
        this.dna[getRandomBaseIndex] = 'G';
      } else {
        this.dna[getRandomBaseIndex] = 'A';
      }
    },
    compareDNA: function (pAequor) {
      let ex1 = this.dna;
      let ex2 = pAequor.dna;
      let noOfMatches = 0;

      for (let i = 0; i < ex1.length; i++) {
        if (ex1[i] === ex2[i]) {
          noOfMatches++;
        }
      };
      
      let percentageMatch = (noOfMatches / 15 * 100).toFixed();

      console.log(`Specimen ${this.specimenNum} and specimen ${pAequor.specimenNum} have ${percentageMatch}% DNA in common`);
    },
    willLikelySurvive: function () {
      let countCOrG = 0;
      
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === 'C' || this.dna[i] === 'G') {
          countCOrG++;
        };
      }
      
      if (((countCOrG / 15 * 100).toFixed()) >= 60) {
        return true;
      } else {
        return false;
      }
    }
  }
}

let create30Specimens = () => {
  let specimenTotal = 0;
  let specimenNum = 1;
  let specimens = [];

  for (let i = 0; specimenTotal < 30; i++) {
    let currentSpecimen = pAequorFactory(specimenNum, mockUpStrand());
    if (currentSpecimen.willLikelySurvive()) {
      specimens.push(currentSpecimen);
      specimenNum++;
      specimenTotal++;
    } else {
      specimenNum++;
    }
  }
} 

create30Specimens();












