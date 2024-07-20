import React, { useState } from 'react';
import "./Button.css";

const Button = () => {
  const [checkedItems, setCheckedItems] = useState({
    allPages: false,
    page1: false,
    page2: false,
    page3: false,
    page4: false
  });

  const handleAllPagesChange = () => {
    const newCheckedItems = {
      allPages: !checkedItems.allPages,
      page1: !checkedItems.allPages,
      page2: !checkedItems.allPages,
      page3: !checkedItems.allPages,
      page4: !checkedItems.allPages
    };
    setCheckedItems(newCheckedItems);
  };

  const handlePageChange = (page) => {
    const newCheckedItems = {
      ...checkedItems,
      [page]: !checkedItems[page]
    };
    newCheckedItems.allPages =
      newCheckedItems.page1 &&
      newCheckedItems.page2 &&
      newCheckedItems.page3 &&
      newCheckedItems.page4;

    setCheckedItems(newCheckedItems);
  };

  const handleDone = () => {
    setCheckedItems({
      allPages: false,
      page1: false,
      page2: false,
      page3: false,
      page4: false
    });
  };

  return (
    <div className="container">
      <div className="checkbox-container">
        <label htmlFor="all-pages">All pages</label>
        <input
          type="checkbox"
          id="all-pages"
          checked={checkedItems.allPages}
          onChange={handleAllPagesChange}
        />
      </div>
      <hr />
      <div className="checkbox-container">
        <label htmlFor="page-1">Page 1</label>
        <input
          type="checkbox"
          id="page-1"
          checked={checkedItems.page1}
          onChange={() => handlePageChange('page1')}
        />
      </div>
      <div className="checkbox-container">
        <label htmlFor="page-2">Page 2</label>
        <input
          type="checkbox"
          id="page-2"
          checked={checkedItems.page2}
          onChange={() => handlePageChange('page2')}
        />
      </div>
      <div className="checkbox-container">
        <label htmlFor="page-3">Page 3</label>
        <input
          type="checkbox"
          id="page-3"
          checked={checkedItems.page3}
          onChange={() => handlePageChange('page3')}
        />
      </div>
      <div className="checkbox-container">
        <label htmlFor="page-4">Page 4</label>
        <input
          type="checkbox"
          id="page-4"
          checked={checkedItems.page4}
          onChange={() => handlePageChange('page4')}
        />
      </div>
      <hr className="secondHr" />
      <button className="button" onClick={handleDone}>Done</button>
    </div>
  );
};

export default Button;
