import { commonApi } from "./commonAPI"
import { SERVER_URL } from "./server_url"

export const uploadvideoAPI = async(video)=>{
  return  await commonApi("POST",`${SERVER_URL}/videos`,video)
}

// to get videos from local host 3000/videos .... it is displayed in view componant......

export const getallvideosApi = async ()=> {
  return  await commonApi("GET",`${SERVER_URL}/videos`,"")
}

// to store data to history- ---need to call in videocard

export const savehistoryAPI = async (videodetails)=> {
  return await  commonApi("POST", `${SERVER_URL}/history`,videodetails)
}

// get history from localhost:3000/history

export const gethistoryApi = async ()=>{
  return await  commonApi("GET", `${SERVER_URL}/history`,"")

}

// remove data from history

export const removehistoryApi = async (videoid)=>{
  return await  commonApi("DELETE", `${SERVER_URL}/history/${videoid}`,{})

}

/// remove videos from all videos

export const removevideoApi = async (videoid)=> {
  return await commonApi("DELETE",`${SERVER_URL}/videos/${videoid}`,{})
}

/// add catogary to category componant

export const addcategoryApi = async(categorydetails)=>{
  return await commonApi("POST", `${SERVER_URL}/category`,categorydetails)
}

// get category to category componant

export const getcategoryApi = async ()=>{
  return await commonApi("GET", `${SERVER_URL}/category`,"")
}

// delete category

export const removeCategoryApi = async (categoryid)=>{
  return await  commonApi("DELETE", `${SERVER_URL}/category/${categoryid}`,{})

}

// get single video API for Drag and Drop

export const getavideoApi = async (videoId)=>{
  return await commonApi("GET",`${SERVER_URL}/videos/${videoId}`,"")
}
// update categories
export const updatecategoriesApi = async(categoryId,updatedcategorydetails)=>{
  return await commonApi("PUT",`${SERVER_URL}/category/${categoryId}`,updatedcategorydetails)
}

// get a single  categories api
export const getsinglecategoriesApi = async(categoryId)=>{
  return await commonApi("GET",`${SERVER_URL}/category/${categoryId}`,"")
}