
export const getProducts = async () => {
  try {
    const response = await fetch('http://localhost:3001/product');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Could not fetch products:', error);
    throw error;
  }
};
