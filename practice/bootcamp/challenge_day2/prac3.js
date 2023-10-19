function calculateLetterGrade(score) {
    if (score >= 90 && score <= 100) {
      return 'A';
    } else if (score >= 80 && score < 90) {
      return 'B';
    } else if (score >= 70 && score < 80) {
      return 'C';
    } else if (score >= 60 && score < 70) {
      return 'D';
    } else if (score >= 0 && score < 60) {
      return 'F';
    } else {
      return 'Invalid score. Score should be between 0 and 100.';
    }
  }

  const score = parseFloat(prompt('Enter your numerical score:'));

  if (!isNaN(score)) {
    const letterGrade = calculateLetterGrade(score);
    console.log(`Your letter grade is: ${letterGrade}`);
  } else {
    console.log('Invalid input. Please enter a valid numerical score.');
  }
  