import React, { useState } from "react";
import { useQuery, useMutation } from "react-query";
import { useParams } from "react-router-dom";
import { API } from "../config/api";
import cartIconWhite from "../assets/cartWhite.png";
import Swal from "sweetalert2";
import NavbarUser from "../components/Navbar";
import { useContext } from "react";
import { UserContext } from "../context/userContext";
import { Card, Nav, Button, Table } from 'react-bootstrap';
import { FaDownload, FaFileDownload, FaShoppingCart } from 'react-icons/fa';




const DetailBook = () => {
  const [state, dispatch] = useContext(UserContext)
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [book, setBook] = useState(null);
  const [userBooks, setUserBooks] = useState([]);
  const [cartList, setCartList] = useState([]);

  const formatRp = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(number);
  };

  const publishDateFormat = (dateToFormat) => {
    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      year: "numeric",
    }).format(new Date(dateToFormat));
  };

  const getBook = async () => {
    setIsLoading(true);
    try {
      const res = await API.get("/book/" + id);
      setBook(res.data.data);
    } catch (error) {
      console.log(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  const getUserBooks = async () => {
    setIsLoading(true);
    try {
      const res = await API.get("/books-user");
      setUserBooks(res.data.data);
    } catch (error) {
      console.log(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddToCart = useMutation(async () => {
    setIsLoading(true);
    try {
      const res = await API.post("/cart/" + id);
      Swal.fire({
        icon: "success",
        title: res.data.data,
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.log(error.response.data.message);
      Swal.fire({
        icon: "info",
        text: error.response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
    } finally {
      setIsLoading(false);
      refetch();
    }
  });

  const getCartList = async () => {
    setIsLoading(true);
    try {
      const res = await API.get("/cart-user");
      setCartList(res.data.data);
    } catch (error) {
      console.log(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  const { refetch } = useQuery("cartUserLengthCache", getCartList);

  React.useEffect(() => {
    getBook();
    getUserBooks();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  const bookIsPurchased = userBooks?.includes(Number(id));

  return (
    <>
    <NavbarUser />
    <div className=" flex flex-col mx-auto px-5 md:px-20 lg:px-36 justify-center">
      <div className="d-flex ">
        
        <div>
          <div  className="overflow-hidden">
          <img 
          src={book?.thumbnail}
          alt={book?.title}
          style={{width:"250px"}}
        />
          </div>
        

        <h1 className="font-bold text-3xl">{book?.title}</h1>
        <p className="font-semibold">Price</p>
            <p style={{color:"green", fontSize:"30px", fontWeight: "bold"}}>{formatRp(book?.price ?? 0)}</p>

        </div>

        <div>       
        <Table striped="columns">
      <h1 style={{color:"Gray"}}>Spesifikasi Buku</h1> 
      <tbody>
        <tr>
          <td> <p className="text-slate-500">Penulis </p></td>
          <td>{book?.author}</td>
        </tr>
        <tr>
          <td className="font-semibold">Tahun Rilis</td>
          <td >{publishDateFormat(book?.publication_date ?? "2020-01-01")}</td>
        </tr>
        <tr>
          <td>pages</td>
          <td>{book?.pages}</td>
        </tr>
        <tr>
          <td>ISBN</td>
          <td>{book?.isbn}</td>
        </tr>
        <tr>
          <td>About This Book</td>
          <td style={{width:"400px"}}>{book?.about}</td>
        </tr>
      </tbody>
    </Table>

    {state?.user?.role === "" || (bookIsPurchased && state?.user?.role === "user") ? (
      <div className="d-flex justify-content-end" style={{margin:"10px",alignItems:"flex-end",display:"flex"}}>
     <button className="btn btn-outline-danger btn-sm">
  <a 
    href={book?.content}
    className="" style={{color:"black"}}
    download
  ><FaDownload style={{margin:"5px"}}/>
    Download
  </a>
      </button>
      </div>


) : (
  <div style={{display:"flex", justifyContent:"flex-end"}}>
  <button
    onClick={() => handleAddToCart.mutate()}
    className="btn btn-outline-warning btn-sm"
    disabled={isLoading}
  >
    <span style={{color:"orangeRed"}}>  <FaShoppingCart style={{fontSize: "30px"}}/>{isLoading ? "Adding to cart..." :  "Tambah Keranjang "}</span>{" "}
  </button>
  </div>
)}

        </div>
        
      </div>

    </div>


    
    </>
  );
};

export default DetailBook;