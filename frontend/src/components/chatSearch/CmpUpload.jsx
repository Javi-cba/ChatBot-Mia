import React, { useContext } from 'react';
import { Button, Flex, Input, Image } from 'antd';
import { UploadOutlined, CloseOutlined } from '@ant-design/icons';
import { useImg } from '../../context/imgFileContext';

const CmpUpload = () => {
  const {
    file,
    setFile,
    getImageUrlLocal,
    handleRemoveImage,
    handleFileChange,
  } = useImg(); // Usamos useContext para acceder al contexto

  return (
    <Flex justify="flex-end" align="center" gap={8}>
      {file && (
        <div style={{ position: 'relative' }}>
          <Image
            width={50}
            height={50}
            src={getImageUrlLocal()}
            alt="Miniatura"
            style={{ objectFit: 'cover' }}
          />
          <CloseOutlined
            onClick={handleRemoveImage}
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              fontSize: '1rem',
              color: 'white',
              cursor: 'pointer',
            }}
          />
        </div>
      )}
      <Input
        type="file"
        onChange={handleFileChange}
        style={{ display: 'none' }}
        id="fileInput"
      />
      <Button
        icon={<UploadOutlined />}
        onClick={() => document.getElementById('fileInput').click()}
      ></Button>
    </Flex>
  );
};

export default CmpUpload;
