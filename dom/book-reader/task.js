const fonts = document.querySelectorAll('.font-size');
const book = document.querySelector('.book');

fonts.forEach(el => {
  el.addEventListener('click', i => {
    i.preventDefault();
    
    fonts.forEach(el => {
      el.classList.remove('font-size_active');
    });
    
    el.classList.add('font-size_active');
    
    const size = el.getAttribute('data-size');
    
    book.classList.remove('book_fs-big', 'book_fs-small');
    

    if (size === 'big') {
      book.classList.add('book_fs-big');
    } else if (size === 'small') {
      book.classList.add('book_fs-small');
    }
  });
});
