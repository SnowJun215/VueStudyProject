import axios from "./index";

export const getTableData = () => {
  return axios.request({
    url: '/getTableData',
    method: 'GET'
  })
};

export const getFolderList = () => {
  return axios.request(({
    url: '/getFolderList',
    method: 'GET'
  }))
};

export const getFileList = () => {
  return axios.request(({
    url: '/getFileList',
    method: 'GET'
  }))
};

export const deleteFile = (id, type) => {
  return axios.request({
    url: '/deleteFile',
    method: 'POST',
    data: {
      type,
      id
    }
  })
};