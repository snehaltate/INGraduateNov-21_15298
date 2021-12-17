function book(bookname,bookid,authorname){
    this.bookname=bookname;
    this.bookid=bookid;
    this.authorname=authorname;
    this.displayDetails=function (){
    return "Book_Name is: "+ " " +this.bookname+"   Book_Id is: "+" "+this.bookid+"    AuthorName is : "+" "+this.authorname;
    }
    }
    
    
    
    const book1=new book("Mrutyunjay","2","Shivaji Sawant");
    const result=document.getElementById("result");
    result.innerHTML=book1.displayDetails();