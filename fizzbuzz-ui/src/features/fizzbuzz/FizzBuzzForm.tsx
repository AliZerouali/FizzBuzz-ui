import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { generateFizzBuzz, updateRequest } from "./fizzBuzzSlice";

const FizzBuzzForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const { request, loading, error, response } = useAppSelector(
    (state) => state.fizzBuzz,
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(generateFizzBuzz(request));
  };

  const handleChange = (
    field: keyof typeof request,
    value: string | number,
  ) => {
    dispatch(updateRequest({ [field]: value }));
  };

  useEffect(() => {
    // Load initial data
    dispatch(generateFizzBuzz(request));
  }, []);

  return (
    <div className="fizzbuzz-form">
      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="int1">First Number (int1):</label>
            <input
              type="number"
              id="int1"
              min="1"
              value={request.int1}
              onChange={(e) => handleChange("int1", parseInt(e.target.value))}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="str1">First String (str1):</label>
            <input
              type="text"
              id="str1"
              value={request.str1}
              onChange={(e) => handleChange("str1", e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="int2">Second Number (int2):</label>
            <input
              type="number"
              id="int2"
              min="1"
              value={request.int2}
              onChange={(e) => handleChange("int2", parseInt(e.target.value))}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="str2">Second String (str2):</label>
            <input
              type="text"
              id="str2"
              value={request.str2}
              onChange={(e) => handleChange("str2", e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="limit">Limit:</label>
            <input
              type="number"
              id="limit"
              min="1"
              max="1000"
              value={request.limit}
              onChange={(e) => handleChange("limit", parseInt(e.target.value))}
              required
            />
          </div>
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Generating..." : "Generate FizzBuzz"}
        </button>
      </form>

      {error && <div className="error-message">Error: {error.message}</div>}

      {response && (
        <div className="results">
          <h3>Results:</h3>
          <div className="results-grid">
            {response.result.map((item, index) => (
              <span key={index} className="result-item">
                {item}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FizzBuzzForm;
