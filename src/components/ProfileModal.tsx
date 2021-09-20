// @flow
import * as React from 'react';
import close from "../assets/img/header/close.png";
import {useState} from "react";
import Switch from "react-switch";

type Props = {
  isOpen: boolean;
  isClosed: any,
};

export function ProfileModal({isOpen, isClosed}: Props) {
  if (!isOpen) return null;
  const [ checked, setState ] = useState(false);

  const [step, setStep] = useState({
    currentStep: 1,
    ProfileName: '',
    Address: '',
    Name: '',
    Address2: '',
    email: '',
    country: '',
    phoneNumber: '',
    city: '',
    zipCode: '',
    CardName: '',
    Expire: '',
    CardNumber: '',
    CVV: ''

  });
  function handleSameChange(checked: React.SetStateAction<boolean>) {
    setState(checked);
  }
  const handleChange = (event: { target: { name: any; value: any; }; }) => {
    const {name, value} = event.target;
    setStep({
      CVV: value,
      CardNumber: value,
      Expire: value,
      CardName: value,
      Address: value,
      Address2: value,
      Name: value,
      ProfileName: value,
      city: value,
      country: value,
      currentStep: 1,
      email: value,
      phoneNumber: value,
      zipCode: value,
      [name]: value
    })
  };
  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    console.log('submitted!');
  };
  function previousButton() {
    let currentStep = step.currentStep;
    if(currentStep !==1){
      return (
        <button
          className="btn btn-secondary btn-back"
          type="button" onClick={_prev}>
          Back
        </button>
      )
    }
    return null;
  }
  // @ts-ignore
  function _next () {
    let currentStep = step.currentStep;
    currentStep = currentStep >= 2? 3: currentStep + 1;
    setStep({
      CVV: "", CardNumber: "", Expire: "",
      CardName: "",
      Address: "",
      Address2: "",
      Name: "",
      ProfileName: "",
      city: "",
      country: "",
      email: "",
      phoneNumber: "",
      zipCode: "",
      currentStep: currentStep
    })
  }

  function _prev() {
     let currentStep = step.currentStep;
    currentStep = currentStep <= 1? 1: currentStep - 1;
    setStep({
      CVV: "", CardNumber: "", Expire: "",
      CardName: "",
      Address: "",
      Address2: "",
      Name: "",
      ProfileName: "",
      city: "",
      country: "",
      email: "",
      phoneNumber: "",
      zipCode: "",
      currentStep: currentStep
    })
  }
  let currentStep = step.currentStep;

  function nextButton(){
    if(currentStep <2){
      return (
        <div className="buttons">
          <div className="shippingInfo">
            <span>Same Billing information</span>
            <Switch
              onChange={handleSameChange}
              checked={checked}
              offColor={'#ccc'}
              onColor={'#2196F3'}
              uncheckedIcon={false}
              checkedIcon={false}
            />
          </div>
            <button
                className="btn btn-primary nextBtn"
                type="button" onClick={_next}>
                Continue
            </button>
        </div>

      )
    }
    return null;
  }
  function Step1(props: {
    zipCode: any;
    city: any;
    phoneNumber: any;
    email: any;
    Address: any;
    ProfileName: any;
    currentStep: number;
  }) {
    if (props.currentStep !== 1) {
      return null
    }
    return (
      <div className="form-group">
        <h2 className="modalTitle">Add profile - shipping info</h2>
        <img src={close} className="modal-close" onClick={isClosed} alt={"close"}/>
        <div className="Modal-content">
          <div className="profileNameGroup">
            <div className="listContent form-group">
              <label htmlFor="listName">Profile Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Johnathan Doe 1"
                value={props.ProfileName}
                onChange={handleChange}
              />
            </div>
            <div className="listContent form-group">
              <label htmlFor="E-Address">Address</label>
              <input
                type="text"
                className="form-control"
                placeholder="johnathandoe@gmail.com"
                value={props.Address}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="profileInfoGroup">
            <div className="listContent form-group">
              <label htmlFor="listName">Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Josh Walter"
                value={props.Address}
                onChange={handleChange}
              />
            </div>
            <div className="listContent form-group">
              <label htmlFor="E-Address">Address 2</label>
              <select className="form-control" value={props.Address}
                      onChange={handleChange}>
                <option value="Select">Select</option>
                <option value="Select">Select</option>
              </select>
            </div>
          </div>
          <div className="profileInfoGroup2">

            <div className="listContent form-group">
              <label htmlFor="AddressLine">Email</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter"
                value={props.email}
                onChange={handleChange}
              />
            </div>
            <div className="listContent form-group">
              <label htmlFor="listName form-group">Country</label>
              <img src={require('../assets/img/arrow_down.png').default} alt="" className="arrow-country"/>
              <select className="form-control" value={props.Address}
                      onChange={handleChange}>
                <option value="Select">Select</option>
                <option value="Residential">United States of America</option>
              </select>
            </div>
          </div>
          <div className="profileInfoGroup2">
            <div className="listContent form-group">
              <label htmlFor="PNumber">Phone Number</label>
              <input
                type="text"
                className="form-control"
                placeholder="1234567890"
                value={props.phoneNumber}
                onChange={handleChange}
              />
            </div>
            <div className="city-zipCode form-group">
              <div className="listContent">
                <label htmlFor="AddressLine">City</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter"
                  value={props.city}
                  onChange={handleChange}
                />
              </div>
              <div className="listContent">
                <label htmlFor="AddressLine">ZIP Code</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="32100"
                  value={props.zipCode}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }

  function Step2(props: {
    CVV: any;
    Expire: any;
    CardNumber: any;
    CardName: any;
    currentStep: number; }) {
    if (props.currentStep != 2) {
      return null;
    }
    return (
      <div className="form-group">
        <h2 className="modalTitle">Add profile - card details</h2>
        <img src={close} className="modal-close" onClick={isClosed} alt={"close"}/>
        <div className="Modal-content cardDetail">
          <div className="CardName">
            <label htmlFor="listName">Card name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Johnathan Doe 1"
              value={props.CardName}
              onChange={handleChange}
            />
          </div>
          <div className="CardNumber">
            <label htmlFor="listName">Card number</label>
            <input
              type="text"
              className="form-control"
              placeholder="Johnathan Doe 1"
              value={props.CardNumber}
              onChange={handleChange}
            />
          </div>
          <div className="Expire-CVV">
            <div className="Exp">
              <label htmlFor="listName">Exp</label>
              <input
                type="date"
                className="form-control"
                placeholder="Johnathan Doe 1"
                value={props.Expire}
                onChange={handleChange}
              />
            </div>
            <div className="CVV">
              <label htmlFor="listName">CVV</label>
              <input
                type="text"
                className="form-control"
                placeholder="Johnathan Doe 1"
                value={props.CVV}
                onChange={handleChange}
              />
            </div>
          </div>
          </div>
        <div className="buttons">
          {previousButton()}
          <button className="btn btn-success btn-save">Save</button>
        </div>
      </div>
    )
  }

  return (
    <div className={currentStep<2?"CreatedProfile":"CreatedProfile step"}>
      <div className="create-modal-wrapper" onClick={isClosed}/>
      <div className="create-profile">
        <form onSubmit={handleSubmit}>
          <Step1
            currentStep={step.currentStep}
            ProfileName={step.ProfileName}
            Address={step.Address}
            city={step.city}
            email={step.email}
            phoneNumber={step.phoneNumber}
            zipCode={step.zipCode}/>
          <Step2
            currentStep={step.currentStep}
            CardName={step.CardName}
            CVV={step.CVV}
           CardNumber={step.CardNumber}
           Expire={step.Expire}/>
          {nextButton()}
        </form>


      </div>

    </div>
  );
};
