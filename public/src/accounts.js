function findAccountById(accounts, id) {
  const found = accounts.find( account => account.id === id);
  return found;
}


function sortAccountsByLastName(accounts) {
  let filteredAccounts = accounts.sort((accountA, accountB) => accountA.name.last.toLowerCase() < accountB.name.last.toLowerCase() ? -1 : 1);
  return filteredAccounts;
}


function getTotalNumberOfBorrows(account, books) {
  const user = account.id;
  let total = 0;
  books.forEach( book => book.borrows.forEach( borrow => user === borrow.id && total++));
  return total;
}

function getBooksPossessedByAccount(account, books, authors) {
  const user = account.id;
  const booksTakenOut = books.filter( book => book.borrows.some( borrow => borrow.id === user && !borrow.returned));
  booksTakenOut.forEach( book => book.author = authors.find( author => book.authorId === author.id))
  return booksTakenOut;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
