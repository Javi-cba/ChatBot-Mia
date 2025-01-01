import { createContext, useContext, useState, useRef } from 'react';
import { message } from 'antd';

const ImgContext = createContext();

export const ImgProvider = ({ children }) => {
  const [file, setFile] = useState(null);
  const uploadImageRef = useRef(null);

  // Función para obtener la URL de la imagen seleccionada
  const getImageUrlLocal = () => {
    if (file) {
      console.log(URL.createObjectURL(file));
      return URL.createObjectURL(file);
    }
    return null;
  };
  const uploadImage = async () => {
    if (!file) {
      return null;
    }

    const formData = new FormData();
    formData.append('image', file);

    const API_KEY = import.meta.env.VITE_KEY_HOST_IMG;
    try {
      const response = await fetch(
        `https://api.imgbb.com/1/upload?key=${API_KEY}`,
        {
          method: 'POST',
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error('Error al subir la imagen');
      }

      const data = await response.json();
      const uploadedImageUrl = data.data.url; // URL de la imagen subida
      message.success('Imagen subida correctamente');
      console.log(uploadedImageUrl);
      return uploadedImageUrl; // Guardar la URL
    } catch (error) {
      message.error('Error al subir la imagen ' + error);
    }
  };
  // Función para eliminar la imagen
  const handleRemoveImage = () => {
    setFile(null); // Limpiar el archivo
    message.info('Imagen eliminada');
  };
  const getFile = () => {
    return file;
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    // Verificar si se ha seleccionado un archivo
    if (!selectedFile) {
      message.error('No se ha seleccionado ningún archivo');
      return;
    }

    // Validar que el archivo sea una imagen
    const isImage = selectedFile.type.startsWith('image/');
    if (!isImage) {
      message.error('Por favor, selecciona un archivo de tipo imagen');
      setFile(null); // Limpiar el archivo si no es una imagen
      return;
    }

    // Si el archivo es válido, actualizar el estado
    setFile(selectedFile);
    console.log(getFile());
  };
  uploadImageRef.current = uploadImage;

  return (
    <ImgContext.Provider
      value={{
        file,
        setFile,
        getFile,
        getImageUrlLocal,
        uploadImage,
        handleRemoveImage,
        handleFileChange,
      }}
    >
      {children}
    </ImgContext.Provider>
  );
};

// Hook para usar el contexto
export const useImg = () => {
  const {
    file,
    setFile,
    getImageUrlLocal,
    uploadImage,
    handleRemoveImage,
    handleFileChange,
  } = useContext(ImgContext);

  return {
    file,
    setFile,
    getImageUrlLocal,
    uploadImage,
    handleRemoveImage,
    handleFileChange,
  };
};
