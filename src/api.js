export async function getProductCategory(productCategory) {
  try {
    let response = await fetch(`https://fakestoreapi.com/${productCategory}`);
    let b = await response.json();
    return b;
  } catch (e) {
    console.log(e);
  }
}
