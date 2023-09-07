module.exports = {
  format_date: date => {
    // Format date as MM/DD/YYYY
    console.log(date)
    return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()}`
  },
  format_plural: (word, amount) => {
    if (amount !== 1) {
      return `${word}s`
    } return word
  }
};