import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const productsData = [
  {
    id: 1,
    name: 'Laptop',
    price: 30000,
    quantity: 0,
  },
  {
    id: 2,
    name: 'Mobile',
    price: 20000,
    quantity: 0,
  },
  {
    id: 3,
    name: 'TV',
    price: 50000,
    quantity: 0,
  }
]

const Home = () => {
  const [products, setProducts] = useState(productsData);
  const [product, setProduct] = useState({});

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
   
  };

  const handleClose = () => {
    setOpen(false);
  };

  const decrementOrder = (id) => {
    console.log("decrement", id);

  }
  const incrementOrder = (id) => {
    const newProducts = products.map((product) => {
      if (product.id === id) {
        return { ...product, quantity: product.quantity + 1 }
      }
      return product
    })
    setProducts(newProducts)
  }
  const showDetail = (id) => {
    console.log("showDetail", id);
    setProduct(products.find(product => product.id === id))
    setOpen(true);

  }
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px", padding: "10px", flexWrap: "wrap" }}>
      {/* <Link to="/counter">
         Go To Counter
        </Link> */}
      <React.Fragment>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Use Google's location service?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
             <h1>{product.name}</h1>
             <p>{product.price}</p>
             <div style={{ display: "flex", gap: "10px" }}>
             <button>-</button>
             <span>{product.quantity}</span>
             <button>+</button>
             </div>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Disagree</Button>
            <Button onClick={handleClose} autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
      {
        products?.map((product) => (
          <div key={product.id} style={{ padding: "10px", border: "1px solid black" }}>
            <h1>{product.name}</h1>
            <p>{product.price}</p>
            <div style={{ display: "flex", gap: "10px" }}>
              <button onClick={() => decrementOrder(product.id)}>-</button>
              <span>{product.quantity}</span>
              <button onClick={() => incrementOrder(product.id)}>+</button>
              <button onClick={()=>showDetail(product.id)}>Details</button>
            </div>

          </div>
        ))
      }

    </div>
  )
}

export default Home