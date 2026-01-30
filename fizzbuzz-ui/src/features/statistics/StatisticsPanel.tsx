import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchMostFrequentRequest } from "./statisticsSlice";

const StatisticsPanel: React.FC = () => {
  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector((state) => state.statistics);

  //   useEffect(() => {
  //     dispatch(fetchMostFrequentRequest());
  //   }, [dispatch]);
  useEffect(() => {
    dispatch(fetchMostFrequentRequest());
  }, [dispatch]);

  if (loading) return <div>Loading statistics...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="statistics-panel">
      <h2>Most Frequent Request</h2>

      {data?.mostFrequentRequest ? (
        <>
          <div className="stats-card">
            <div className="stats-row">
              <span>int1:</span>
              <strong>{data.mostFrequentRequest.int1}</strong>
            </div>
            <div className="stats-row">
              <span>int2:</span>
              <strong>{data.mostFrequentRequest.int2}</strong>
            </div>
            <div className="stats-row">
              <span>limit:</span>
              <strong>{data.mostFrequentRequest.limit}</strong>
            </div>
            <div className="stats-row">
              <span>str1:</span>
              <strong>{data.mostFrequentRequest.str1}</strong>
            </div>
            <div className="stats-row">
              <span>str2:</span>
              <strong>{data.mostFrequentRequest.str2}</strong>
            </div>
            <div className="stats-row highlight">
              <span>Total Hits:</span>
              <strong>{data.hitCount}</strong>
            </div>
            <div className="stats-row">
              <span>Last Updated:</span>
              <span>{new Date(data.lastUpdated).toLocaleString()}</span>
            </div>
          </div>
        </>
      ) : (
        <p>No requests have been made yet.</p>
      )}

      <button
        onClick={() => dispatch(fetchMostFrequentRequest())}
        className="refresh-btn"
      >
        Refresh Statistics
      </button>
    </div>
  );
};

export default StatisticsPanel;
