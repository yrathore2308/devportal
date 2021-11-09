

var style = {
    backgroundColor: "rgb(33 37 41)",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
}

var outerFooterDiv = {
  display: 'block',
  padding: '20px',
  height: '60px',
  width: '100%'
 
}

function Footer() {
    return (
        <div>
            <div style={outerFooterDiv} />
            <div style={style}>
                <p style={{color:'white'}}>Privacy | Site Terms | Cookie Preferences | © 2021,  Inc. or its affiliates. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer