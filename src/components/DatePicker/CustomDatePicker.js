// import { useState } from "react";
import PropTypes from "prop-types";

import DatePicker from "react-datepicker";
import { getMonth, getYear } from "date-fns";
import range from "lodash/range";

import "react-datepicker/dist/react-datepicker.css";
import './customDatePicker.scss';

/**
 * @module CustomDatePicker - A custom Date picker based on "react-datepicker"
 * @param {String|object} startDate - The reference to the start date in the react state object
 * - for example : startDate={formData.dateOfBirth}
 * @param {Function} setStartDate - The callback that set the start date into the react state object
 * - for example : setStartDate={(date) => setFormData({ ...formData, dateOfBirth: date })}
 * @returns 
 */
const CustomDatePicker = ({ startDate, setStartDate }) => {

  const years = range(1950, getYear(new Date()) + 1, 1);

  const months = [
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

  return (
    <DatePicker
      renderCustomHeader={({
        date,
        changeYear,
        changeMonth,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
      }) => (
        <div
          style={{
            margin: 10,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
            {"<"}
          </button>
          <select
            value={getYear(date)}
            onChange={({ target: { value } }) => changeYear(value)}
          >
            {years.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <select
            value={months[getMonth(date)]}
            onChange={({ target: { value } }) =>
              changeMonth(months.indexOf(value))
            }
          >
            {months.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
            {">"}
          </button>
        </div>
      )}
      todayButton="Today"
      dateFormat="MM/dd/yyyy"
      className="input"
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      required
    />
  );
};

CustomDatePicker.propTypes = {
  // startDate is string before selection of the date in the date picker and then object Date
  startDate: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  setStartDate: PropTypes.func.isRequired,
}

export default CustomDatePicker;
