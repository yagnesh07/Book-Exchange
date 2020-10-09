import React, { Component } from 'react';
import CarouselPage from './CarouselPage';
import { BOOKS } from '../shared/products';
import Carousel from 'react-multi-carousel';
import { Link } from 'react-router-dom';
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBIcon,
  MDBTooltip,
  MDBContainer
} from 'mdbreact';

class HomePage extends Component {

  constructor(props){
    super(props);

    this.state = {
      books: BOOKS
    }
  }

  render(){
//------------------------------------------Settings of Books carousel -----------------------------------------------
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
//----------------------------------------over ------------------------------------------------

    const renderBooks = this.state.books.map((book) => {
      return(
        <div>
          <Link to = '/product'>
            <MDBCard key = {book.id} cascade narrow ecommerce className = "m-4">
              <MDBCardImage className = "product-image"
                cascade
                src={book.image}
                top
                alt={book.name}
                overlay='white-slight'
                zoom='true'
              />
            <MDBCardBody cascade className='text-center'>
              <a href='#!' className='grey-text'>
                <h5>{book.category}</h5>
              </a>
              <MDBCardTitle>
                <strong style = {{fontSize: "16px"}}>
                  <a href='#!'>{book.name}</a>
                </strong>
              </MDBCardTitle>
              {/*<MDBCardText>{book.description}</MDBCardText>*/}
              <MDBCardFooter className='px-1'>
                <span className='float-left font-weight-bold'>
                  <strong>{book.price}</strong>
                </span>
                <span className='float-right'>
                  <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-shopping-cart mr-3' />
                    <span>Add to Cart</span>
                  </MDBTooltip>
                  <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-share-alt mr-3' />
                    <span>Share</span>
                  </MDBTooltip>
                  <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-heart' />
                    <span>Add to Whishlist</span>
                  </MDBTooltip>
                </span>
              </MDBCardFooter>
            </MDBCardBody>
          </MDBCard>
        </Link>
      </div>
      );
  })
//-----------------------------------------render over--------------------------------------------------
    return (
      <div>
      <CarouselPage />
      <MDBContainer>
          <section className='text-center my-5'>
            <h2 className='h1-responsive font-weight-bold text-center my-5'>Our bestsellers</h2>
            <p className='grey-text text-center w-responsive mx-auto mb-5'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis
              totam voluptas nostrum quisquam eum porro a pariatur veniam.
            </p>
            <Carousel responsive={responsive}
                showDots={true}
                keyBoardControl={true}
                autoPlay={this.props.deviceType !== "mobile" ? true : false}
                itemClass="carousel-item-padding-40-px"
                infinite = "true">
              {renderBooks}
            </Carousel>
          </section>
      </MDBContainer>
      </div>
    );
  }
};

export default HomePage;