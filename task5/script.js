function chosenBook(book){
    let Books = document.getElementsByTagName("li")
    for (let i = 0; i < Books.length; i++){
        Books[i].classList.remove("active");
    }
    book.classList.add("active")
}