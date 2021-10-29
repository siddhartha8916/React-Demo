
function AppButton(props) {
  return (
    <>
      <svg id="Button" xmlns="http://www.w3.org/2000/svg" width="253" height="60" viewBox="0 0 253 60">
        <rect id="Background" width="253" height="60" rx="30" fill="#27214e" />
        <text id="Continue" transform="translate(126.5 35.5)" fill="#fff" font-size="18" font-family="SegoeUI, Segoe UI" letter-spacing="0.02em"><tspan x="-37.322" y="0">{props.text}</tspan></text>
      </svg>

    </>
  );
}


export default AppButton