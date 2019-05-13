import React, { useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'

const CommonPortal: React.FC = (props) => {
    const mountRootRef = useRef(document.body)
    const el = document.createElement('div')
    useEffect(() => {
        mountRootRef.current.appendChild(el)
        return () => {
            mountRootRef.current.removeChild(el)
        }
    }, [])
    return (
        ReactDOM.createPortal(props.children, el)
    )
}

export default CommonPortal