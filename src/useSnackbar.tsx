import React, { useRef } from 'react'
import ReactDOM from 'react-dom'
import Snackbar from './Snackbar'
import Portal from './Portal'


function useSnackbar () {
    const wrapper = document.createElement('div')
    const appendRef = useRef(wrapper)
    const containerRef = useRef<React.RefObject<HTMLDivElement>>()
    function open() {
        const ref = React.createRef<HTMLDivElement>();
        document.body.appendChild(appendRef.current);
        containerRef.current = ref
        function render() {
            ReactDOM.render(<Portal>
                <Snackbar ref={ref} close={close}/>
            </Portal>, wrapper);
        }
        render()
    }
    function close() {
        const actualDom = containerRef.current!.current
        actualDom!.setAttribute('aria-hidden', 'true')
    }
    return {
        open,
        close
    }
}

export default useSnackbar