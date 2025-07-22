import React from 'react';

const ComparisonView = ({ compareList, onClose }) => {
  const fields = ['brand', 'price', 'features'];

  const isDifferent = (field) => {
    const values = compareList.map(p => JSON.stringify(p[field]));
    return new Set(values).size > 1;
  };

  return (
    <div className="modal show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-xl modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Product Comparison</h5>
            <button type="button" className="btn-close" onClick={onClose} />
          </div>
          <div className="modal-body">
            <table className="table table-bordered text-center">
              <thead className="table-light">
                <tr>
                  <th>Attribute</th>
                  {compareList.map(p => (
                    <th key={p.id}>{p.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {fields.map(field => (
                  <tr key={field} className={isDifferent(field) ? 'table-warning' : ''}>
                    <td className="fw-bold text-capitalize">{field}</td>
                    {compareList.map(p => (
                      <td key={p.id}>
                        {Array.isArray(p[field]) ? (
                          <ul className="list-unstyled small mb-0">
                            {p[field].map((f, i) => <li key={i}>{f}</li>)}
                          </ul>
                        ) : (
                          p[field]
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonView;