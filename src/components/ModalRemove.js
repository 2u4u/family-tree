import React from 'react';

function ModalRemove({ nodes, hide, remove }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = e.target.connection.value;
    remove(id);
  }

  return (
    <>
      <div className="modal fade show" tabIndex="-1" style={{ display: 'block' }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <form onSubmit={handleSubmit}>
              <div className="modal-header">
                <h5 className="modal-title">Add new family member</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={hide}></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label htmlFor="connection" className="form-label">Member to remove</label>
                  <select name='connection' id='connection' className="form-select" aria-label="Select family member" required>
                    <option selected disabled value="">Select member to remove</option>
                    {nodes.map((member) => {
                      return <option key={member.id} value={member.id}>{member.name}</option>
                    })}
                  </select>
                </div>
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show"></div>
    </>
  );
}

export default ModalRemove;