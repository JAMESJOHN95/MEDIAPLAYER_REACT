import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {gethistoryApi, removehistoryApi} from '../Services/AllAPI'




function Watch() {

  const [history, setHistory] = useState([])
  const getHistory = async () => {
    const result = await gethistoryApi()
    if (result.status>=200 && result.status<300) {
      setHistory(result.data)
    }
  }
  useEffect(() => {
    getHistory()
  }, [])

  const deleteHistory =async (vId)=> {
    await removehistoryApi(vId)
    getHistory()
  } 

  return (
    <div className='container'>
      <div className="d-flex mt-5 mb-5 justify-content-between">
        <h3>Watch History</h3>
        <Link to={'/Home'}><i className="fa-solid fa-arrow-left"> Back TO Home</i></Link>
      </div>
      <table className='table mt-5 mb-5'>
        <thead>
          <tr >
            <th>#</th>
            <th>Caption</th>
            <th>Video Link</th>
            <th>Time Stamp</th>
            <th><i class="fa-solid fa-ellipsis-vertical"></i></th>
          </tr>
        </thead>
        <tbody>

          {/* ***************************************************************************** */}

          { history?.length > 0 ? history?.map((video,index) => (
            <tr key={index}>
              <td>{index+1}</td>
              <td>{video?.caption}</td>
              <td><a href={video?.youtubelink} target='Blank'>{video?.youtubelink}</a></td>
              <td>{video?.timestamp}</td>
              <td><i onClick={()=>deleteHistory(video.id)}  className="fa-solid fa-trash text-danger"></i></td>
            </tr>
            
          ))
        :
        <tr className='text-danger mt-2'>No Watch History To  Show</tr>
        
        }
        </tbody>
      </table>
    </div>
  )
}

export default Watch