import React, { useState } from 'react'

export const QRcode = () => {
    const [set, setcount] = useState("")
    const [loading, setloading] = useState(false)
    const [qrdata, qrdataon] = useState("Theeran")
    const [size, sizeto] = useState("150")
    const [name,nameset] = useState("Theeran")

    const generater = async () => {
        setloading(true);
        try {
            const url = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(qrdata)}`
            setcount(url)
        } catch (error) {
            console.log("Error generating QR code :", error)
        } finally {
            setloading(false)
        }

    }
    const downloadQR = async () => {
        fetch(set).then((response) => response.blob())
            .then((blob) => {
                const link = document.createElement("a");
                link.href = URL.createObjectURL(blob)
                link.download = `${name}.jpg`
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link)
            }).catch(() => {
                alert("NOT DOWNLOAD")
            })
    }

    return (
        <div className="app-cointainer">
            <h1 className='h1'>QR CODE GENERATOR</h1>
            {set && <img src={set} alt="QR" className='qr-code-img' width={"200px"} />}
            {loading && <h1>Plase Wait...</h1>}
            <div>
                <label htmlFor="datainput" className='input-label'>
                    Data for Qr code:
                </label>
                <input type="text" onChange={(e) => { qrdataon(e.target.value) }} id='datainput' placeholder='Enter Your QR Code' />

                <label htmlFor="sizeinput" className='input-label'>
                    File name (e.g., Address name)
                </label>
                <input type="text" id='sizeinput'  onChange={(e) => { nameset(e.target.value) }} placeholder='Enter Your QR name ' />
                <label htmlFor="sizeinput" className='input-label'>
                    Image size (e.g., 150)
                </label>
                <input type="text" id='sizeinput' value={size} onChange={(e) => { sizeto(e.target.value) }} placeholder='Enter Your Size ' />

                <button className='generater-button' onClick={generater} disabled={loading}>Generate QR Code</button>
                <button className='download-button' onClick={downloadQR}>Download QR Code</button>
            </div>
            <p>Designed by Theeran</p>
        </div>

    )
}
