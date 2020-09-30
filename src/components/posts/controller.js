const store = require('./store')

const getAllPost = async (country, city, skill, position, salary) => {
  const result = await store.get(country, city, skill, position, salary)
  return result
}

const getPost = async (id) => {
  const result = await store.getFilter(id)
  return result
}

const addPost = async (position, salary, rating, description, company, url, skill, user, country, city, image) => {
  try {
    if (!position || !salary || !rating || !description || !company || !url || !skill || !user || !country || !city) {
      console.log('[CONTROLLER] invalid data form')
      throw new Error('Missin Data')
    }

    let fileUrl = ''
    if (image) {
      fileUrl = `http://localhost:4000/app/files/${image.filename}`
    }

    const post = {
      position,
      image: fileUrl,
      salary,
      rating,
      description,
      company,
      url,
      skill,
      user,
      country,
      city
    }
    const newPost = await store.add(post)

    finalResponse = {
      newPost,
      'System message': 'Post successfully created'
    }

    return (finalResponse)
  } catch (error) {
    throw new Error(error)
  }
}

const updatePost = (id, position, salary, rating, description, company, url, skill, user, country, city, image) => {
  return new Promise((resolve, reject) => {
    if (!id || !position || !salary || !rating || !description || !company || !url || !skill || !user || !country || !city) {
      reject('Missing data')
    }

    let fileUrl = ''
    if (image) {
      fileUrl = `http://localhost:4000/app/files/${image.filename}`
    }

    const post = {
      position,
      image: fileUrl,
      salary,
      rating,
      description,
      company,
      url,
      skill,
      user,
      country,
      city
    }

    const result = store.update(id, post)

    const finalResponse = {
      post,
      'System Message': 'Post succesfully updated'
    }
    resolve(finalResponse)
  })
}

const deletePost = (id) => {
  return new Promise((resolve, reject) => {
    if (!id) {
      reject('Missing data')
    }

    store.remove(id)
      .then(() => {
        resolve('Post deleted')
      })
      .catch(error => {
        reject(error)
      })
  })
}

const favoritePost = async (id, idUser) => {
  if (!id || !idUser) {
    throw new Error('falta informacion')
  } else {
    const data = await store.addFavorite(id, idUser)
    return data
  }
}

const deleteFavoritePost = async (id, idUser) => {
  if (!id || !idUser) {
    throw new Error('falta informacion')
  } else {
    const data = await store.deleteFavorite(id, idUser)
    return data
  }
}

module.exports = {
  addPost,
  getAllPost,
  getPost,
  updatePost,
  deletePost,
  favoritePost,
  deleteFavoritePost
}
