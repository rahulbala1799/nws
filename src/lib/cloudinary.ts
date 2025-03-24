import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadImageClient = async (file: File): Promise<string> => {
  try {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'printing_website'); // Your upload preset name
    formData.append('cloud_name', 'rahulbala1799');
    
    const response = await fetch(`https://api.cloudinary.com/v1_1/rahulbala1799/image/upload`, {
      method: 'POST',
      body: formData,
    });
    
    if (!response.ok) {
      throw new Error('Failed to upload image');
    }
    
    const data = await response.json();
    return data.secure_url;
  } catch (error) {
    console.error('Error uploading image to Cloudinary:', error);
    return 'https://res.cloudinary.com/rahulbala1799/image/upload/v1312461204/sample.jpg';
  }
};

export const deleteImage = async (_publicId: string): Promise<void> => {
  // In a real implementation, this would delete an image from Cloudinary
  // using the public_id
  return Promise.resolve();
};

export const getCloudinaryUrl = (publicId: string): string => {
  return `https://res.cloudinary.com/rahulbala1799/image/upload/c_fill,g_auto,h_500,w_500/q_auto,f_auto/${publicId}`;
};

export default cloudinary; 