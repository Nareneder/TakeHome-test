import React from 'react';

const CompareBar = ({ compareList, onCompare, onClear, onRemove }) => {
  if (compareList.length < 2) return null;

  return (
    <div className="fixed-bottom bg-light border-top p-3 d-flex justify-content-between align-items-center shadow">
      <div>
        {compareList.map(p => (
          <span key={p.id} className="badge bg-primary me-2">
            {p.name}
            <button
              onClick={() => onRemove(p.id)}
              className="btn-close btn-close-white btn-sm ms-2"
            />
          </span>
        ))}
      </div>
      <div>
        <button className="btn btn-success me-2" onClick={onCompare}>Compare</button>
        <button className="btn btn-outline-secondary" onClick={onClear}>Clear All</button>
      </div>
    </div>
  );
};

export default CompareBar;