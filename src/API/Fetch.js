export default class Fetch {
  static async getAll(limit,page){
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`)
    return response
  }
  static async getOne(id){
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    let data = await response.json()
    return data
  }
  static async getComments(id){
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    let data = await response.json()
    return data
  }
}