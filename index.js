// class Formatter {
//   //add static methods here
// }



class Formatter {
  // Static method to capitalize the first letter in a string
  static capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // Static method to remove non-alphanumeric characters except for dash, single quote, and space
  static sanitize(string) {
      return string.replace(/[^a-zA-Z0-9\-\'\s]/g, '');
  }

  // Static method to titleize a string
  static titleize(string) {
      const nonCapitalizedWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
      const words = string.split(' ');

      const titleizedWords = words.map((word, index) => {
          if (index === 0 || !nonCapitalizedWords.includes(word)) {
              return this.capitalize(word);
          } else {
              return word;
          }
      });

      return titleizedWords.join(' ');
  }
}

// Ensure the class is available globally or in the scope where the tests are running
// For example, you can define it in the same file as your tests or export/import it if needed

// Example usage in a test file:
// You may need to adjust the test cases based on your specific requirements

// Rest of your tests...
