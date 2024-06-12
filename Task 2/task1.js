function generatePattern(n) {
    let pattern = [];
    let maxLength = (n * 2 - 1) * 2; // Maximum length of the longest line
    for (let i = 1; i <= n; i++) {
      let line = '';
      for (let j = 1; j <= i * 2 - 1; j += 2) {
        line += j + ' ';
      }
      for (let k = 0; k < i - 1; k++) {
        line += String.fromCharCode(65 + k) + ' ';
      }
      pattern.push(line.trim());
    }
    for (let i = n - 1; i >= 1; i--) {
      let line = '';
      for (let j = 1; j <= i * 2 - 1; j += 2) {
        line += j + ' ';
      }
      for (let k = 0; k < i - 1; k++) {
        line += String.fromCharCode(65 + k) + ' ';
      }
      pattern.push(line.trim());
    }
    // Center the pattern
    return pattern.map(line => {
      let spaces = ' '.repeat((maxLength - line.length) / 2);
      return spaces + line + spaces;
    });
  }
  function displayPattern(pattern) {
    pattern.forEach(line => {
      console.log(line);
    });
  }
  // Get the size of the pattern from the user
  const n = parseInt(prompt("Enter the size of the pattern: "), 10);
  // Check if the input is a valid number
  if (!isNaN(n) && n > 0) {
    const pattern = generatePattern(n);
    displayPattern(pattern);
  } else {
    console.log("Please enter a valid positive number.");
  }