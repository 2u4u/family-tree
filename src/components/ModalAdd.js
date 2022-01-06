import React from 'react';

function ModalAdd({ nodes, hide, add }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const newObj = {};
    newObj.id = nodes.length + 1;
    newObj.pid = e.target.connection.value;
    newObj.tags = e.target.gender.value === 'male' ? ["m"] : [];
    newObj.name = e.target.name.value;
    newObj.img = `https://ui-avatars.com/api/?name=${e.target.name.value.split(' ').join('+')}`;
    if (e.target.relationship.value === 'children') {
      const spouse = nodes.filter((node) => node.pid === Number(e.target.connection.value) && node.tags?.includes('partner'));
      newObj.ppid = spouse[0].id;
    }
    add(newObj);
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
                  <label htmlFor="connection" className="form-label">Connect with family member</label>
                  <select name='connection' id='connection' className="form-select" aria-label="Select family member" required>
                    <option selected disabled value="">Select family member</option>
                    {nodes.map((member) => {
                      return <option key={member.id} value={member.id}>{member.name}</option>
                    })}
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="relationship" className="form-label">Relationship type</label>
                  <select name='relationship' id='relationship' className="form-select" aria-label="Select relationship type" required>
                    <option selected disabled value="" >Select relationship type</option>
                    <option value='partner'>Spouse</option>
                    <option value='children'>Children</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="gender" className="form-label">Gender</label>
                  <select name='gender' id='gender' className="form-select" aria-label="Select gender" required>
                    <option selected disabled value="">Select gender</option>
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control" id="name" required/>
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

export default ModalAdd;