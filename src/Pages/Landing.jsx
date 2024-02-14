import React from 'react'
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


function Landing() {
  const Navigate = useNavigate()

  const handlenavigate = ()=>{
    Navigate('/Home')

  }

  return (
   <>
      <div className='container mt-3'>
        <div className="header row align-item-center">
          <div className="col-lg-5 p-4">
            <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
            <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt alias, nostrum similique fugit esse, quis est, nisi neque velit possimus laudantium provident rerum magnam. Veniam doloremque neque facilis omnis non!</p>
            <button onClick = {handlenavigate} style={{border:'none',borderRadius:"15px",backgroundColor:'#acd4f2',width:'120px',height:'40px',color:'white',fontWeight:'500'}} className='mt-3 p-2 '>Get Started</button>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-6 ">
            <img  className='p-2 w-100' src="https://intellisyn.com/wp-content/uploads/2018/07/Music-Improves-Productivity-01-01.png" alt="Landing Image" />
          </div>

        </div>
        <div className="features mt-3 ">
          <h3 className='text-center'>Features</h3>
          <div className="row mt-3">
            <div className="col-lg-4 p-4"> <Card style={{height:'360px'}} >
      <Card.Img style={{height:'220px'}}  variant="top" src="https://images.ctfassets.net/lzny33ho1g45/favorite-zaps-manage-music-and-p-img/df7aa7cbe13d0c5e12e4dc3933771bba/file.png?w=1520&fm=avif&q=30&fit=thumb&h=760" />
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
         User can upload,view and remove videos
        </Card.Text>
      </Card.Body>
    </Card></div>
            <div className="col-lg-4 p-4"> <Card style={{height:'360px'}}>
      <Card.Img style={{height:'220px'}} variant="top" src="https://images.ctfassets.net/3s5io6mnxfqz/5YiSHPeCtOayNFkubXxKDZ/18ba44cfb198cf8fb9bbe6ab3e967be3/AdobeStock_238480884.jpeg?w=828" />
      <Card.Body>
        <Card.Title>Catogarise </Card.Title>
        <Card.Text>
          Users can categorise the videos accoding to their prefernce using drag and drop features
        </Card.Text>
      </Card.Body>
    </Card></div>
            <div className="col-lg-4 p-4"> <Card style={{height:'360px'}}>
      <Card.Img style={{height:'220px'}} variant="top" src="https://cdn.vectorstock.com/i/1000x1000/84/04/video-playlist-icon-for-web-and-apps-vector-46388404.webp" />
      <Card.Body>
        <Card.Title>Watching History</Card.Title>
        <Card.Text>
          user are able to see the history of watched videos
        </Card.Text>
      </Card.Body>
    </Card></div>
          </div>

        </div>
        <div className="row video p-4 mb-4 border rounded">
<div className="col-lg-6 p-3">
  <h3 className='text-warning'>Simple,Fast and Powerfull</h3>
  <p style={{textAlign:'justify'}}><span className='fs-4'>Play Everything:</span> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium accusamus odit sapiente, eaque </p>
  <p style={{textAlign:'justify'}}><span className='fs-4'>Categorise video:</span> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium accusamus odit sapiente, eaque </p>

  <p style={{textAlign:'justify'}}><span className='fs-4'>Watch History:</span> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium accusamus odit sapiente, eaque </p>

</div>
<div className="col-lg-6">
<iframe width="100%" height="315" src="https://www.youtube.com/embed/yG0RIU3y8QE?si=VdkPPdWmjB-7oUkS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
        </div>
  
      </div>
      <hr />
   </>
  )
}

export default Landing