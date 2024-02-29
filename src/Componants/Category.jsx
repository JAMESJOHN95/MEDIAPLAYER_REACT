import React, { useEffect, useState } from 'react'
import { Modal, Button, FloatingLabel, Form } from 'react-bootstrap'
import { addcategoryApi, getcategoryApi, removeCategoryApi, getavideoApi,updatecategoriesApi } from '../Services/AllAPI';
import VideoCard from './VideoCard';



function category({removeCategoryVideoResponse}) {
  const [show, setShow] = useState(false);
  const [categoryname, setcategory] = useState("")
  // to get all categories from api
  const [AllCategories, SetAllCategories] = useState([])

  const handleClose = () => {
    setShow(false);
    setcategory("")
  }
  const handleShow = () => setShow(true);
  // function for on click add button

  const Handleaddclick = async () => {
    if (categoryname) {
      await addcategoryApi({ categoryname, Allvideos: [] })
      handleClose()
      GetAllCategories()
    }
    else {
      alert("Please Fill The Form")
    }
  }
  // get all categories------------------------------------------------------------------

  const GetAllCategories = async () => {
    const result = await getcategoryApi()
    SetAllCategories(result.data)
  }
  useEffect(() => {
    GetAllCategories()
  }, [removeCategoryVideoResponse])

  console.log(AllCategories);

  // function to prevent default refreshing------------------------------------------------

  const dragovercategory = (e) => {
    e.preventDefault()
    console.log("Dragging Over Category");
  }

  // drop video function-------------------------------------------------------------------

  const videodroped = async (e, categoryid) => {
    const videoId = e.dataTransfer.getData("videoId")
    console.log(`video dropped with vId : ${videoId} , inside Category Id : ${categoryid}`);
    // get vedia details ------------------------------------------------------------
    const { data } = await getavideoApi(videoId)
    console.log(data);

    // get the catogary selected -------------------------------------
    let selectedCategory = AllCategories.find(item=>item.id==categoryid)
    selectedCategory.Allvideos.push(data)
      console.log(selectedCategory);
      await updatecategoriesApi(categoryid,selectedCategory)
      GetAllCategories()
  }


  const handleremovecategory = async (cId) => {
    await removeCategoryApi(cId)
    GetAllCategories()
  }
// delete video from categories by drag and drop--------------------------------------------

  const DragStarted  = (e,categoryId,videoId) => {
    console.log(`Drag started from Category id : ${categoryId} with video id : ${videoId}`);
    let dataShare = {categoryId,videoId}
    e.dataTransfer.setData("removevideodetails",JSON.stringify(dataShare))

  }

  return (
    <>
      <button onClick={handleShow} className='mt-3' style={{ width: '300px', height: '40px', border: 'none', borderRadius: '15px', backgroundColor: '#adcdf7', color: 'white', fontWeight: '600' }}>Add New Category</button>

      <div className='border rounded mt-3 p-2 ' >
        {AllCategories.length > 0 ? AllCategories.map((item, index) => (

          <div droppable="true" onDragOver={(e) => dragovercategory(e)} onDrop={(e) => videodroped(e, item?.id)} key={index} className='border rounded p-3 mb-2' >

            <div className='d-flex justify-content-between'>
              <h3>{item.categoryname}</h3>
              <button onClick={() => handleremovecategory(item.id)} className='btn'><i className='fa-solid fa-trash  text-danger'></i></button>
            </div>
            <div className="row mt-2">
              {
                item.Allvideos?.length > 0 &&
                item.Allvideos?.map((video, index) => (
                  <div draggable onDragStart={e=>DragStarted(e,item.id,video.id)} key={index} className='col-lg-6'>
                    <VideoCard insideCategory={true} displaydata={video} />
                  </div>))
              }
            </div>
          </div>
        ))
          :
          <div>No Categories are added yet</div>
        }

      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please Fill The Form!!!!!!</p>
          <FloatingLabel
            controlId="floatingInputCaption"
            label="Category Name"
            className="mb-3"
          >
            <Form.Control value={categoryname} onChange={e => setcategory(e.target.value)} type="text" placeholder="Video Caption" />

          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={Handleaddclick} style={{ backgroundColor: '#adcdf7', color: 'white', fontWeight: '600' }} variant="primary">
            Add
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default category