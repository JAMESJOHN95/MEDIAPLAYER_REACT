import VideoCard from './VideoCard'
import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { getallvideosApi,getsinglecategoriesApi,updatecategoriesApi } from '../Services/AllAPI'


function View({uploadvideoresponse,setRemoveCategoryVideoResponse}) {
    const [Allvideos,setAllvideos] = useState([])
    // ----------------------------------------------------- delete video response -----state lifting

    const[deletevideoresponse,Setdeletevideoresponse]=useState('')


    const getallvideostoview = async () => {
        const Result = await getallvideosApi()
        // console.log(Result);
        if (Result?.status == 200) {
            setAllvideos(Result?.data);
        }
    }
    useEffect(() => {
        getallvideostoview()
    },[uploadvideoresponse,deletevideoresponse])
console.log(Allvideos);

// droping video function defining-+----------------------------------------------

const dragoverview = (e)=>{
    e.preventDefault()

}
const handlecategoryvideo=async(e)=>{
    const {categoryId,videoId} = JSON.parse(e.dataTransfer.getData("removevideodetails"))
    console.log(`Remove video Id : ${videoId} from Category Id :${categoryId}`);
    // get a category
const {data} = await getsinglecategoriesApi(categoryId)
const updatedvideolist = data.Allvideos.filter(item=>item.id!=videoId)
console.log(updatedvideolist);
const {id,categoryname} = data
const result = await updatecategoriesApi (categoryId,{id,categoryname,Allvideos:updatedvideolist}) 
setRemoveCategoryVideoResponse(result.data)
}


    return (
        <>
            <Row droppable="true" onDragOver={e=>dragoverview(e)} onDrop={e=>handlecategoryvideo(e)} className='mt-5'>
                { Allvideos?.length>0? Allvideos?.map((video,index)=>(
                    <Col className='mt-3 ' key={index}  sm={12} md={6} lg={4}>
                    <VideoCard  Setdeletevideoresponse={Setdeletevideoresponse}  displaydata={video}  />
                </Col>
                )) :
                <div>Nothing to display</div>
                 }               
            </Row>
        </>
    )
}

export default View