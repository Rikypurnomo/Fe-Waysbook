// import required modules
import { Link } from "react-router-dom";
import { useState } from "react";
import { Container, Row, Col, InputGroup, Form, Button } from "react-bootstrap";
import { useQuery } from "react-query";
import { API } from "../config/api";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
// Import Swiper React components
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/userContext";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { FaAccusoft } from "react-icons/fa";
// define format currency function
const formatIDR = new Intl.NumberFormat(undefined, {
  style: "currency",
  currency: "IDR",
  maximumFractionDigits: 0,
});

export default function ListBook() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const [modalLogin, setModalLogin] = useState(false);
  const [modalRegister, setModalRegister] = useState(false);
  const [state, dispatch] = useContext(UserContext)
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedBookId, setSelectedBookId] = useState(null);

  let { data: listBook, refetch } = useQuery("listBookCache", async () => {
    const response = await API.get("/books");
    return response.data.data;
  });



  const alertLogin =async ()=>{
    setModalLogin(true)
  }


  
  const isBookFound =
    listBook?.filter((value) => {
      if (search === "") {
        return value;
      } else if (
        value.title.toLowerCase().includes(search.toLocaleLowerCase())
      ) {
        return value;
      } else if (
        value.isbn.toLocaleLowerCase().includes(search.toLowerCase())
      ) {
        return value;
      } else if (
        value.author.toLocaleLowerCase().includes(search.toLowerCase())
      ) {
        return value;
      }
    }).length > 1;


  return (
    <Container>
      <Col md={9} className="text-end d-flex">
        <Col md={5}>
          <InputGroup className="mb-3 mt-2 shadow-2 fw-bold">
            <Form.Control  style={{ backgroundColor:"	lightCyan"}}
              onChange={(e) =>  {
                 setSearch(e.target.value);
               }}
              placeholder="Cari Buku"
            />
          </InputGroup>
        </Col>
      </Col>

      <h1 className=" fs-36 fw-bold mb-3">List Book</h1>
      {/* display message if no books found */}
      {!isBookFound && (
        <p className="text-center">
          No books found based on your search value!
        </p>
      )}

        {/* menampilkan daftar buku berdasarkan  src */}


      {isBookFound && (
        <Row className="d-flex justify-content-center mx-auto mb-5">
          <div className="d-flex flex-wrap">
            {listBook
              ?.filter((value) => {
                if (search === "") {
                  return value;
                } else if (
                  value.title
                    .toLowerCase()
                    .includes(search.toLocaleLowerCase())
                ) {
                  return value;
                } else if (
                  value.isbn.toLocaleLowerCase().includes(search.toLowerCase())
                ) {
                  return value;
                } else if (
                  value.author
                    .toLocaleLowerCase()
                    .includes(search.toLowerCase())
                ) {
                  return value;
                }
              })
              .map((item) => (
                <Col
                  key={item.id}
                  style={{
                    width: "250px",
                    cursor: "pointer",
                    
                  }}
                  className="text-start col-12 col-md-6 col-lg-3 text-center mb-4 p-2"

                >
                     {state.isLogin ? (
   <Link
    to={`/detail/${item?.id}`}
    style={{ display: "flex", flexDirection: "column"}}>
    <img
      className="mb-3"
      src={item?.thumbnail}
      alt="book"
      style={{
        height: "350px",
        objectFit: "cover",
        width: "100%",
        flex: "start",
      }}
    />

    <div className="w-full">
      <h5 style={{color:"black"}} className="text-start mb-1">{item?.title}</h5>
      <p
        className="text-start fs-14 mb-1"
        style={{
          fontSize: "14px",
          fontStyle: "italic",
          fontWeight: "400",
          color: "#929292",
        }}
      >
        By {item?.author}
      </p>
      <p
        className="fs-18 text-start fw-bold"
        style={{
          color: "green",
          fontSize: "23px",
          fontWeight: "800",
          lineHeight: "25px",
        }}
      >
        {formatIDR.format(item?.price)}
      </p>
    </div>
  </Link>
) : (
  <>
    <img
      onClick={alertLogin}
      className="mb-3"
      src={item?.thumbnail}
      alt="book"
      style={{
        height: "255px",
        objectFit: "cover",
        width: "100%",
        flex: "start",
      }}
    />

    <div className="w-full">
      <h4 className="fw-bold text-start mb-1">{item?.title}</h4>
      <p
        className="text-start fs-14 text-grey mb-1"
        style={{
          fontSize: "14px",
          fontStyle: "italic",
          fontWeight: "400",
          color: "#929292",
        }}
      >
        By {item?.author}
      </p>
      <p
        className="fs-18 text-start fw-bold"
        style={{
          color: "green",
          fontSize: "18px",
          fontWeight: "800",
          lineHeight: "25px",
        }}
      >
        {formatIDR.format(item?.price)}
      </p>
    </div>
  </>
)}

                </Col>
              ))}
          </div>
        </Row>
      )}

      <Login
        modalLogin={modalLogin}
        setModalLogin={setModalLogin}
        switchRegister={setModalRegister}
      />
      <Register
        modalRegister={modalRegister}
        setModalRegister={setModalRegister}
        switchLogin={setModalLogin}
      />
    </Container>
  );
}