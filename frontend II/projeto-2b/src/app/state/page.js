'use client'
import { useState } from "react"

export default function State() {
    const [msg, setMsg] = useState('Boa tarde!')
    const [mostrarDiv, setMostrardiv] = useState(true)

    // const alterarmsg = () => {
    //     setMsg((prevMsg => {
    //         prevMsg = 'Bom tarde'
    //         console.log(prevMsg)
    //         return prevMsg
    //     }))

    // }

    const monitorarInput = (evento) => {
        console.log(evento.target.value)
        setMsg(evento.target.value)
    }

    return (
        <div>
            {/* <p>{msg}</p> */}
            {/* <button onClick={alterarmsg}>Alterar</button> */}
            <p>Sua mensagem: {msg}</p>
            <input type="text" onChange={monitorarInput} />
            <button onClick={() => setMostrardiv(!mostrarDiv)}>{mostrarDiv?'Esconder':'Mostrar'}</button>
            {mostrarDiv && (
                <div>
                    <p>Parágrafo dinâmico</p>
                </div>
            )
            }
        </div>
    )
}