function SignUpComponent() {
  return (
    <div className="signUp">
      <p className="plan-details">Try it free 7 days then $20/mo. thereafter</p>
      <div className="sign-up-form">
        <input className="input-fields" type="text" placeholder="First Name" />
        <input className="input-fields" type="text" placeholder="Last Name" />
        <input
          className="input-fields"
          type="text"
          placeholder="Email Address"
        />
        <input
          className="input-fields"
          type="password"
          placeholder="Password"
        />
        <button className="free-tial">CLAIM YOUR FREE TRIAL</button>
        <p className="conditons">
          By clicking the button, you are agreeing to our
          <span className="terms-and-services"> Terms and Services </span>
        </p>
      </div>
    </div>
  );
}

export default SignUpComponent;
