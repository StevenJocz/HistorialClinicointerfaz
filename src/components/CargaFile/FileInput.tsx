import React, { useState, ChangeEvent } from 'react';
import { IonIcon } from '@ionic/react';
import { documentOutline, imageOutline, newspaperOutline } from 'ionicons/icons';
import './FileInput.css'

interface FileInputProps {  
    accept: string;
}

const FileInput: React.FC<FileInputProps> = ({ accept }) => {
    const [file, setFile] = useState<File | null>(null);

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0] || null;
        setFile(selectedFile);
    };

    const getFileExtension = (fileName: string) => {
        return fileName.split('.').pop()?.toLowerCase() || '';
    };

    const iconMappings: { [key: string]: string } = {
        png: imageOutline,
        jpg: imageOutline,
        jpeg: imageOutline,
        gif: imageOutline,
        pdf: newspaperOutline,
        doc: documentOutline,
        docx: documentOutline,
        // Agrega más extensiones e iconos según tus necesidades
    };

    const fileExtension = file && getFileExtension(file.name);
    const isImage = file && file.type.startsWith('image/');

    const renderIcon = () => {
        if (fileExtension && iconMappings && iconMappings[fileExtension]) {
            const IconComponent = iconMappings[fileExtension];
            return <IonIcon icon={IconComponent} />;
        }
        // Default icon if no mapping or extension provided
        return <i className="default-file-icon" />;
    };

    return (
        <div className=''>
            <label htmlFor="fileInput" className="file-input-label">
                <button className="file-input-button">Seleccionar archivo</button>
                <input
                    id="fileInput"
                    type="file"
                    onChange={handleFileChange}
                    accept={accept} 
                />
            </label>
            <div className="preview-container">
                {file && (
                    <>
                        {isImage ? (
                            <img src={URL.createObjectURL(file)} alt="Imagen seleccionada" />
                        ) : (
                            renderIcon()
                        )}
                        <p>{file.name}</p>
                    </>
                )}
            </div>
        </div>
    );
};

export default FileInput;
