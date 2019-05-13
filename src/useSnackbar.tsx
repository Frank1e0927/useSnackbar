import React, { useRef, useCallback } from 'react'
import ReactDOM from 'react-dom'
import Snackbar from './Snackbar'
import Portal from './Portal'


function useSnackbar () {
    const wrapper = useCallback(() => document.createElement('div'), [])
    const appendRef = useRef(wrapper())
    const containerRef = useRef<React.RefObject<HTMLDivElement>>()
    const close = useCallback(() => {
        function closeLogic() {
            const actualDom = containerRef.current!.current
            actualDom!.setAttribute('aria-hidden', 'true')
        }
        return closeLogic()
    }, [])
    const open = useCallback(() => {
        function openLogic() {
            const ref = React.createRef<HTMLDivElement>();
            document.body.appendChild(appendRef.current);
            containerRef.current = ref
            function render() {
                ReactDOM.render(<Portal>
                    <Snackbar ref={ref} close={close}/>
                </Portal>, wrapper());
            }
            render()
        }
        return openLogic()
    }, [containerRef, close])

    return {
        open,
        close
    }
}

export default useSnackbar