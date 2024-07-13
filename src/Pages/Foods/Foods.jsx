import "./Fodds.css";
import img1 from "../../assets/img1.jpeg";
import FilterOffcanvas from "./Components/Filter";

export default function Foods() {
  return (
    <>
      <div className="FoodPage">
        <div className="FoodPage-container">
          <section className="FoodPage-seachBar">
            <input type="search" placeholder="جستجو" />
            <button className="seachBar-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#000"
                class="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </button>
          </section>
          <section className="FoodPage-categories">
            <ul className="FoodPage-categories-ul">
              <li className="FoodPage-category">خوراک</li>
              <li className="FoodPage-category">سوپ</li>
              <li className="FoodPage-category">سالاد</li>
              <li className="FoodPage-category">نوشیدنی</li>
              <li className="FoodPage-category">سالاد</li>
            </ul>
          </section>
          <section className="FoodPage-body">
            <div className="FoodPage-body-header">
              <div className="FoodPage-body-title">
                <h3>خوراک</h3>
              </div>
              <div className="FoodPage-body-filters">
                <section className="FoodPage-body-filter-1">
                  <FilterOffcanvas/>
                </section>
                <section className="FoodPage-body-filter-2">
                  <button className="btn btn-primary FoodPage-body-filter-2-button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#000"
                      class="bi bi-sort-down"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.5 2.5a.5.5 0 0 0-1 0v8.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L3.5 11.293zm3.5 1a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5M7.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z" />
                    </svg>
                  </button>
                </section>
              </div>
            </div>
            <div className="FoodPage-body-content">
              <div
                className="card mb-3 Food-Card"
                style={{ maxWidth: "540px" }}
              >
                <div className="row g-0">
                  <div className="col-8">
                    <div className="card-body">
                      <h5 className="card-title Food-Card-title">
                        کباب چوبی ژیوان (سیخ چوبی)
                      </h5>
                      <p className="card-text Food-Card-text">
                        <small className="text-body-secondary">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-truck"
                            viewBox="0 0 16 16"
                          >
                            <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
                          </svg>
                          ارسال با پیک
                        </small>
                      </p>
                      <p className="card-text Food-Card-text">
                        <small className="text-body-secondary">69.000 T</small>
                      </p>
                      <div className="Cart-number">
                        <button className="Cart-number-plusBTN">+</button>
                        <span>1</span>
                        <button className="Cart-number-trashBTN">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="#000"
                            class="bi bi-trash"
                            viewBox="0 0 16 16"
                          >
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-4 Food-Card-img">
                    <img
                      src={img1}
                      className="img-fluid rounded-start"
                      alt="img1"
                    />
                  </div>
                </div>
              </div>
              <div
                className="card mb-3 Food-Card"
                style={{ maxWidth: "540px" }}
              >
                <div className="row g-0">
                  <div className="col-8">
                    <div className="card-body">
                      <h5 className="card-title Food-Card-title">
                        کباب چوبی ژیوان (سیخ چوبی)
                      </h5>
                      <p className="card-text Food-Card-text">
                        <small className="text-body-secondary">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-truck"
                            viewBox="0 0 16 16"
                          >
                            <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
                          </svg>
                          ارسال با پیک
                        </small>
                      </p>
                      <p className="card-text Food-Card-text">
                        <small className="text-body-secondary">69.000 T</small>
                      </p>
                      <div className="Cart-number">
                        <button className="Cart-number-plusBTN">+</button>
                        <span>1</span>
                        <button className="Cart-number-trashBTN">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="#000"
                            class="bi bi-trash"
                            viewBox="0 0 16 16"
                          >
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-4 Food-Card-img">
                    <img
                      src={img1}
                      className="img-fluid rounded-start"
                      alt="img1"
                    />
                  </div>
                </div>
              </div>
              <div
                className="card mb-3 Food-Card"
                style={{ maxWidth: "540px" }}
              >
                <div className="row g-0">
                  <div className="col-8">
                    <div className="card-body">
                      <h5 className="card-title Food-Card-title">
                        کباب چوبی ژیوان (سیخ چوبی)
                      </h5>
                      <p className="card-text Food-Card-text">
                        <small className="text-body-secondary">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-truck"
                            viewBox="0 0 16 16"
                          >
                            <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
                          </svg>
                          ارسال با پیک
                        </small>
                      </p>
                      <p className="card-text Food-Card-text">
                        <small className="text-body-secondary">69.000 T</small>
                      </p>
                      <div className="Cart-number">
                        <button className="Cart-number-plusBTN">+</button>
                        <span>1</span>
                        <button className="Cart-number-trashBTN">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="#000"
                            class="bi bi-trash"
                            viewBox="0 0 16 16"
                          >
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-4 Food-Card-img">
                    <img
                      src={img1}
                      className="img-fluid rounded-start"
                      alt="img1"
                    />
                  </div>
                </div>
              </div>
              <div
                className="card mb-3 Food-Card"
                style={{ maxWidth: "540px" }}
              >
                <div className="row g-0">
                  <div className="col-8">
                    <div className="card-body">
                      <h5 className="card-title Food-Card-title">
                        کباب چوبی ژیوان (سیخ چوبی)
                      </h5>
                      <p className="card-text Food-Card-text">
                        <small className="text-body-secondary">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-truck"
                            viewBox="0 0 16 16"
                          >
                            <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
                          </svg>
                          ارسال با پیک
                        </small>
                      </p>
                      <p className="card-text Food-Card-text">
                        <small className="text-body-secondary">69.000 T</small>
                      </p>
                      <div className="Cart-number">
                        <button className="Cart-number-plusBTN">+</button>
                        <span>1</span>
                        <button className="Cart-number-trashBTN">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="#000"
                            class="bi bi-trash"
                            viewBox="0 0 16 16"
                          >
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-4 Food-Card-img">
                    <img
                      src={img1}
                      className="img-fluid rounded-start"
                      alt="img1"
                    />
                  </div>
                </div>
              </div>
              <div
                className="card mb-3 Food-Card"
                style={{ maxWidth: "540px" }}
              >
                <div className="row g-0">
                  <div className="col-8">
                    <div className="card-body">
                      <h5 className="card-title Food-Card-title">
                        کباب چوبی ژیوان (سیخ چوبی)
                      </h5>
                      <p className="card-text Food-Card-text">
                        <small className="text-body-secondary">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-truck"
                            viewBox="0 0 16 16"
                          >
                            <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
                          </svg>
                          ارسال با پیک
                        </small>
                      </p>
                      <p className="card-text Food-Card-text">
                        <small className="text-body-secondary">69.000 T</small>
                      </p>
                      <div className="Cart-number">
                        <button className="Cart-number-plusBTN">+</button>
                        <span>1</span>
                        <button className="Cart-number-trashBTN">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="#000"
                            class="bi bi-trash"
                            viewBox="0 0 16 16"
                          >
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-4 Food-Card-img">
                    <img
                      src={img1}
                      className="img-fluid rounded-start"
                      alt="img1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
