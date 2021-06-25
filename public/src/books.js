function findAuthorById(authors, id) {
  const found = authors.find( author =>  author.id === id);
  return found;
}

function findBookById(books, id) {
  const found = books.find( book => book.id === id);
  return found;
}


function partitionBooksByBorrowedStatus(books) {
  let returned = [];
  let kept = [];

  books.forEach((book) => {
    let keptBorrows = book.borrows.filter((borrow) => {
      if(!borrow.returned){return borrow}
    })

    if(keptBorrows.length > 0){
      kept.push(book)
    }
    else(
      returned.push(book)
    )
  })

  return [kept, returned];
}


function getBorrowersForBook(book, accounts) {
  const { borrows } = book;
  const borrowers = borrows.map(({ id, returned }) => {
  const user = accounts.find( account => account.id === id);
  return {
  ...user,
  returned
  };
  })
  return borrowers
    .slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
