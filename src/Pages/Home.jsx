import React, { useState } from 'react'
import Add from '../Componants/Add'
import { Link } from 'react-router-dom'
import View from '../Componants/View'
import Category from '../Componants/Category'


function Home() {
  const [removeCategoryVideoResponse,setRemoveCategoryVideoResponse] = useState("")
  const [uploadvideoresponse,setuploadvideoresponse]=useState('')
  return (
    <>
    <div className="container d-flex mt-5 justify-content-between m-s2">
      <Add setuploadvideoresponse={setuploadvideoresponse}/>
      <Link to = {'/Watch'}><button>View History</button></Link>
    </div>
    <div className="row mt-3 ms-3 me-3">
      <div className="col-lg-6">
        <h3>All Videos</h3>
        <View uploadvideoresponse={uploadvideoresponse} setRemoveCategoryVideoResponse={setRemoveCategoryVideoResponse}/>
      </div>
      <div className="col-lg-2"></div>
      <div className="col-lg-4 ">
        <div className=' justify-content-between'>
          {/* <h3>Category</h3> */}
          <Category removeCategoryVideoResponse={removeCategoryVideoResponse}/>
        </div>
      </div>
    </div>

    </>
  )
}

export default Home