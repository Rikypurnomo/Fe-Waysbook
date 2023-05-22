import React from "react";
import Modal from "react-bootstrap/Modal";

const DetailTransaction = ({
  show,
  handleClose,
  transaction,
}) => {

 const formatRp = (number) => {
        return new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR",
          minimumFractionDigits: 0,
        }).format(number);
      };
      


const dateFormat = (dateStr) => {
        const month = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];
        const days = [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ];
        let date = new Date(dateStr);
      
        let dayName = days[date.getDay()];
        let dayMonth = date.getDate();
        let monthName = month[date.getMonth()];
        let year = date.getFullYear();
        return `${dayName}, ${dayMonth} ${monthName} ${year}`;
      };
      


  return (
    <>
      {transaction && (

        <Modal show={show} size="sm" popup={true} onHide={handleClose}>
  <Modal.Header style={{backgroundColor:"red"}}> <h3 style={{color:"white"}}>Your Transations</h3></Modal.Header>
  <Modal.Body style={{backgroundColor:"lightSteelBlue"}}>
    <div className="px-2 pb-4 sm:pb-6 lg:px-2 xl:pb-2">
      <div>
        <p>Transaction ID : {transaction.id}</p>
        <p>Date : {dateFormat(transaction.created_at)}</p>
      </div>
      <div className="bg-slate-100 rounded p-4">
        {transaction.books.map((book) => (
          <div className="flex items-center mb-4">
            <img
              src={book.thumbnail}
              alt={book.title}
              className="w-20 h-28 object-cover rounded-md"
            />
            <div className="flex flex-col justify-between flex-1">
              <div>
                <p className="font-semibold text-lg">{book.title}</p>
                <p className="text-slate-500 text-sm">
                  By {book.author}
                </p>
              </div>
              <p className="text-lg" style={{color:"green", fontSize:"30px"}}> {formatRp(book.price)}</p>
            </div>
          </div>
        ))}
        <p className="text-right font-semibold" style={{color:"red", fontSize:"25px"}}>
          Total Price : {formatRp(transaction.total_price)}
        </p>
      </div>
    </div>
  </Modal.Body>
</Modal>

      )}
    </>
  );
};

export default DetailTransaction;