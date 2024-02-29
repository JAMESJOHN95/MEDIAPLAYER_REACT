import React, { useState } from 'react'
import { Card, Button, Modal } from 'react-bootstrap'
import { removevideoApi, savehistoryAPI } from '../Services/AllAPI';




function VideoCard({displaydata,Setdeletevideoresponse,insideCategory}) {
    const [show, setShow] = useState(false);

    const handleClose =  () => setShow(false);
    const handleShow = async () => {setShow(true)
        const{caption,youtubelink} = displaydata
        let timedata = new Date ()
        let timestamp = new Intl.DateTimeFormat('en-US',{
            year:'numeric',
            month:'2-digit',
            day:'2-digit',
            hour:'2-digit',
            minute:'2-digit',
            second:'2-digit'
        }).format(timedata)
        console.log(timestamp);
    await savehistoryAPI({caption,youtubelink,timestamp})}

// *************************************************************************************
        const deletevideo = async(vId)=>{
           const result=  await removevideoApi (vId)
           Setdeletevideoresponse(result.data)
        }

        // drag and drop
        const dragstarted =(e,vId)=>{
            console.log(`Dragging started with id:${vId}`);
            e.dataTransfer.setData("videoId",vId)
        }

    return (
        <>

            <Card draggable onDragStart={(e)=>dragstarted(e,displaydata?.id)} className='border' style={{boxshadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19'}} >
                <Card.Img style={{height:'150px'}} onClick={handleShow} variant="top" src={displaydata?.imageURL} />
                <Card.Body>
                    <Card.Title></Card.Title>
                    <div className='d-flex'>
                        <Card.Text>
                            <p>{displaydata?.caption}</p>
                        </Card.Text>
                        {!insideCategory && <Button onClick={()=>deletevideo(displaydata?.id)} style={{ backgroundColor: 'white', border: 'none' }} className='btn ms-2'><i className='fa-solid fa-trash text-danger'></i></Button>}
                    </div>
                </Card.Body>
            </Card>
            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>caption</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="480" src={`${displaydata?.youtubelink}?autoplay=1`} title="Tirumbi Paaru Kanne - Sabesh Manmathan (Official 3D Animated Lyrical Video)"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>            </Modal.Body>
      </Modal>

        </>
    )
}

export default VideoCard