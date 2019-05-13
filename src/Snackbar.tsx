import React from 'react'
import './index.css'

interface IProps {
    close: () => void
}
const Snackbar = React.forwardRef<HTMLDivElement, IProps>((props, ref) => (
    <div className="snackbar" ref={ref}>
        <div style={{ padding: '10px', color: 'pink', fontSize: '16px', fontWeight: 600 }}>action <span onClick={props.close}>close</span></div>
    </div>
));

  
export default Snackbar