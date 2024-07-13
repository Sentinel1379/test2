import { useState } from "react";
import "./Filter.css";

export default function FilterOffcanvas() {
  const [content, setContent] = useState("گیاهی");
  const [delivery, setDelivery] = useState("ارسال با پیک");
  const [bonusPoints, setBonusPoints] = useState(false);
  const [discountCode, setDiscountCode] = useState(false);

  const applyFilters = () => {
    console.log({
      content,
      delivery,
      bonusPoints,
      discountCode,
    });
  };

  const resetFilters = () => {
    setContent("گیاهی");
    setDelivery("ارسال با پیک");
    setBonusPoints(false);
    setDiscountCode(false);
  };
  return (
    <>
      <button
        className="btn btn-primary FoodPage-body-filter-1-button"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasBottom"
        aria-controls="offcanvasBottom"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#000"
          className="bi bi-funnel"
          viewBox="0 0 16 16"
        >
          <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2z" />
        </svg>
        <span> فیلتر بر اساس</span>
      </button>

      <div
        className="offcanvas offcanvas-bottom"
        tabindex="-1"
        id="offcanvasBottom"
        aria-labelledby="offcanvasBottomLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasBottomLabel">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#000"
              className="bi bi-funnel"
              viewBox="0 0 16 16"
            >
              <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2z" />
            </svg>
            <span> فیلتر ها</span>
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <form className="Filter-1-form">
            <div className="form-group Filter-1-row1">
              <label htmlFor="content" className="Filter-1-row1-lable">
                محتویات
              </label>
              <select
                className="form-control form-select Filter-1-row1-select"
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              >
                <option>گیاهی</option>
              </select>
            </div>
            <div className="form-group Filter-1-row2">
              <label htmlFor="delivery" className="Filter-1-row2-lable">
                روش تحویل
              </label>
              <select
                className="form-control form-select Filter-1-row2-select"
                id="delivery"
                value={delivery}
                onChange={(e) => setDelivery(e.target.value)}
              >
                <option>ارسال با پیک</option>
              </select>
            </div>
            <div className="form-group form-check Filter-1-row3">
              <input
                type="checkbox"
                className="form-check-input"
                id="bonusPoints"
                checked={bonusPoints}
                onChange={(e) => setBonusPoints(e.target.checked)}
              />
              <label className="form-check-label" htmlFor="bonusPoints">
                دارای امتیاز پس از خرید
              </label>
            </div>
            <div className="form-group form-check Filter-1-row3">
              <input
                type="checkbox"
                className="form-check-input"
                id="discountCode"
                checked={discountCode}
                onChange={(e) => setDiscountCode(e.target.checked)}
              />
              <label className="form-check-label" htmlFor="discountCode">
                دارای کد تخفیف
              </label>
            </div>
            <div className="Filter-1-btn">
              <button
                type="button"
                className="btn btn-primary Filter-1-btn1"
                onClick={applyFilters}
              >
                اعمال فیلتر
              </button>
              <button
                type="button"
                className="btn btn-secondary Filter-1-btn2"
                onClick={resetFilters}
              >
                حذف فیلترها
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
