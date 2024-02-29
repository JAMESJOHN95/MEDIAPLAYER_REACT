import React, { useState } from 'react'
import { Modal, Button, Form, FloatingLabel } from 'react-bootstrap'
import { uploadvideoAPI } from '../Services/AllAPI';


function Add({setuploadvideoresponse}) {
    const [uploadvideos, setuploadvideos] = useState({ caption: "", imageURL: "", youtubelink: "" })
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
        setuploadvideos({ ...uploadvideos, caption: "", imageURL: "", youtubelink: "" })
    }
    const handleShow = () => setShow(true);
    console.log(uploadvideos);

    // To upload a youtube link 

    const getyoutubeembedlink = (link) => {
        if (link.includes("v=")) {
            let videoId = link.split("v=")[1].slice(0, 11)
            setuploadvideos({ ...uploadvideos, youtubelink: `https://www.youtube.com/embed/${videoId}` })
        }
        else {
            setuploadvideos({ ...uploadvideos, youtubelink: "" })
            alert("Input Proper Youtube Link!!!!")
        }


    }

    const handleupload = async () => {

        const { caption, imageURL, youtubelink } = uploadvideos
        if (caption && imageURL && youtubelink) {
            const result = await uploadvideoAPI(uploadvideos)
            console.log(result);

            if (result.status>=200 && result.status<300) {
                alert(`Video ${uploadvideos.caption} is succesfull`)
                setuploadvideoresponse(result.data)
                handleClose()
            }
            else {
                alert("video is not uploaded")
            }


        }
        else {
            alert("Please fill the form completely")
        }
    }
    return (
        <>
            <div className='d-flex '>

                <h5>Upload A Video</h5>
                <button onClick={handleShow} style={{ border: 'none' }} className='btn ms-2 '><i class="fa-regular fa-square-plus"></i></button>
            </div>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Upload Video Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Please Fill The Following Details!!!!</p>
                    <div className='border border-rounded p-2'>
                        <FloatingLabel
                            controlId="floatingInputCaption"
                            label="Video Caption"
                            className="mb-3"
                        >
                            <Form.Control value={uploadvideos.caption} type="text" placeholder="Video Caption" onChange={e => setuploadvideos({ ...uploadvideos, caption: e.target.value })} />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingInputUrl"
                            label="Image Url"
                            className="mb-3"
                        >
                            <Form.Control value={uploadvideos.imageURL} type="text" placeholder="Image Url" onChange={e => setuploadvideos({ ...uploadvideos, imageURL: e.target.value })} />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingInputLink"
                            label="Youtube Link"
                            className="mb-3"
                        >
                            <Form.Control value={uploadvideos.youtubelink} onChange={e => getyoutubeembedlink(e.target.value)} type="text" placeholder="Youtube Link" />
                        </FloatingLabel>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button onClick={handleupload} variant="primary">Upload</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Add