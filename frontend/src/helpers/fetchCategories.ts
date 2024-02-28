


export default async function fetchCategories() {

  try {
    const categoriesPromise = await fetch(`http://62.72.58.111:1337/api/categories`,{cache:'no-cache'})
    const categories : categoriesType = await categoriesPromise.json()
    return categories.data as categorieType[]
  }

  catch(error) {
    throw Error(`failed while fetching categories`)
  }
}
