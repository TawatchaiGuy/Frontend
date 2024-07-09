import Navbar from '../app/component/nav'


export default function Home() {
  return (
    <>
      <br />
      <Navbar />
      <br />
            <div id="carouselExample" class="carousel slide">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="https://mercular.s3.ap-southeast-1.amazonaws.com/images/products/2022/08/Blog/week4/%E0%B8%97%E0%B8%B3%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%AA%E0%B8%B0%E0%B8%AD%E0%B8%B2%E0%B8%94%E0%B8%84%E0%B8%AD%E0%B8%A1/clean%2001.jpg" class="d-block w-100" alt="..."></img>
                </div>
                <div class="carousel-item">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZXDcsB8c9KXUi_rRwwXoP-j1mk8Q4jaBBgVMChwp3KO1kKssLjAW5yO7rlbk-QULo4G0&usqp=CAU" class="d-block w-100" alt="..."></img>
                </div>
                <div class="carousel-item">
                  <img src="https://www.kmss.co.th/wp-content/uploads/2022/12/0x0.jpg" class="d-block w-100" alt="..."></img>
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          
            <br/>
            <div className="container-fluid">
                <div className="row mt-4">
                    <div className="col-md-4">
                        <div className="card">
                            <img className="card-img-top" src="https://fortunetown.co.th/wp-content/uploads/2022/02/Screen-Shot-2022-02-28-at-8.01.25-PM-1024x686.png" alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">Card 1</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img className="card-img-top" src="https://notebookspec.com/web/wp-content/uploads/2020/06/103976078_3402032336498173_7234178586174089968_o-1.jpg" alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Card 2</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img className="card-img-top" src="https://oneesports.blob.core.windows.net/cdn-data/sites/3/2019/10/logatalk5-1024x677.jpg" alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Card 3</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="text-center text-white mt-5 flex-grow-1" style={{ backgroundColor: '#0a4275' }}>
                <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    สนใจสินค้าและบริการ ติดต่อได้ที่
                    <a className="text-white" href="https://www.google.com/"> google</a>
                </div>
            </footer>
    </>

  );
}
