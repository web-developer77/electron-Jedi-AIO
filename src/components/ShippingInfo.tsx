import React from 'react';

interface Props {
  open: boolean,
}

export function ShippingInfo({open}: Props){
  if(!open) return null;

  return (
    <div id="shipping">
      <p>Shipping Information</p>
      <div className="form-names">
        <div className="form-group">
          <label className="form-label">First Name</label>
          <input type="text" className="form-control" placeholder="First Name" />
        </div>
        <div className="form-group">
          <label className="form-label">Last Name</label>
          <input type="text" className="form-control" placeholder="Last Name" />
        </div>
      </div>
      <div className="form-address">
        <div className="form-group">
          <label className="form-label">Address</label>
          <input type="text" className="form-control" placeholder="Enter Address" />
        </div>
        <div className="form-group">
          <label className="form-label">Apt #</label>
          <input type="text" className="form-control" placeholder="Apt" />
        </div>
      </div>
      <div className="form-country">
        <div className="form-group">
          <label className="form-label">Country</label>
          <input type="text" className="form-control" placeholder="Country" />
        </div>
        <div className="form-group">
          <label className="form-label">State</label>
          <input type="text" className="form-control" placeholder="State" />
        </div>
      </div>
      <div className="form-city">
        <div className="form-group">
          <label className="form-label">City</label>
          <input type="text" className="form-control" placeholder="City" />
        </div>
        <div className="form-group">
          <label className="form-label">Zip</label>
          <input type="text" className="form-control" placeholder="Zip" />
        </div>
      </div>
      <div className="form-group">
        <label className="form-label">Phone Number</label>
        <input type="text" className="form-control" placeholder="Phone Number" />
      </div>
      <div className="form-group">
        <label className="form-label">Email</label>
        <input type="text" className="form-control" placeholder="Email" />
      </div>
    </div>
  );
}
