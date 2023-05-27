
function App() {
  return (
    <div className="wrapper clear">
    <header className="d-flex justify-between alighn-center p-40">
      <div className="headerLeft">
        <img width={40} height={40} src="/img/logo.png" />
        <div className="headerInfo">
          <h3 className="text-uppercase">React Sneakers</h3>
          <p>Store of the best skeakers</p>
        </div>
      </div>
   
      <ul className="d-flex">
        <li className="mr-30">
          <img width={18} height={18} src="/img/cart.svg" />
          <span>$69,00</span>
        </li>
        <li>
          <img width={18} height={18} src="/img/cart.svg" />
        </li>
      </ul>

      </header>
      <div className="content p-40">
        <h1>All sneakers</h1>

      <div className="d-flex">
        
        <div className="card">
            <img width={133} height={122}src="/img/sneakers/1.jpg" alt="sneakers" />
            <p>Man's Sneakers Nike Blazer Mid Suede</p>
              <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column ">
                  <span>Price:</span>
                  <b>$177,00</b>
                </div>
                <button className="buttom">
                  <img width={11} height={11}src="/img/plus.svg" />
                </button>
              </div>
          </div>
          <div className="card">
            <img width={133} height={122}src="/img/sneakers/2.jpg" alt="sneakers" />
            <p>Man's Sneakers Nike Blazer Mid Suede</p>
              <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column ">
                  <span>Price:</span>
                  <b>$177,00</b>
                </div>
                <button className="buttom">
                  <img width={11} height={11}src="/img/plus.svg" />
                </button>
              </div>
          </div>
          <div className="card">
            <img width={133} height={122}src="/img/sneakers/3.jpg" alt="sneakers" />
            <p>Man's Sneakers Nike Blazer Mid Suede</p>
              <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column ">
                  <span>Price:</span>
                  <b>$177,00</b>
                </div>
                <button className="buttom">
                  <img width={11} height={11}src="/img/plus.svg" />
                </button>
              </div>
          </div>
          <div className="card">
            <img width={133} height={122}src="/img/sneakers/4.jpg" alt="sneakers" />
            <p>Man's Sneakers Nike Blazer Mid Suede</p>
              <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column ">
                  <span>Price:</span>
                  <b>$177,00</b>
                </div>
                <button className="buttom">
                  <img width={11} height={11}src="/img/plus.svg" />
                </button>
              </div>
          </div>
        
      </div>

    </div>  

  </div>    


    
  );
}

export default App;
