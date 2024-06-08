import Image from 'next/image'

const getImage = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/images');
    if (!response.ok) {
      throw new Error('Failed to fetch image');
    }
    const data = await response.text()
    console.log(data,'dataamazon')
    return data
  } catch (error) {
    console.error('Error fetching image:', error);
  }
}

export default async function ScreenshotImage() {
 const imageUrl = await getImage()
 

  return (
    <div>

        <p>Loading image...</p>

    </div>
  );
};