import { Dispatch, SetStateAction } from 'react';

// * mantine-dropzone
import { Dropzone } from '@mantine/dropzone';

// * components
import Button from './Button';

// * icons
import { MediaImage } from 'iconoir-react';

// * MIME_TYPES
const IMAGE_MIME_TYPE = ['image/png', 'image/jpeg'];

//  * types
type ImageDropzoneProps = {
  onChange: Dispatch<SetStateAction<string | null>>;
};

const ImageDropzone = ({ onChange }: ImageDropzoneProps) => {
  const dropHandler = (files: File[]) => {
    const file = files[0];

    const reader = new FileReader();

    reader.onload = (e: ProgressEvent<FileReader>) => {
      const imageData = e.target?.result as string;
      if (!imageData) return;

      onChange(imageData);
    };

    reader.readAsDataURL(file);
  };

  return (
    <div>
      <Dropzone
        multiple={false}
        accept={IMAGE_MIME_TYPE}
        onDrop={dropHandler}
        className="image-dropzone flex flex-col justify-center h-52 lg:h-full bg-transparent hover:bg-transparent [&>div]:h-fit"
      >
        <div className="dropzone-content flex flex-wrap justify-center items-center gap-2 w-full h-full text-center text-primary-light md:p-5">
          <MediaImage width={40} height={40} />
          Drop image here or
          <Button className="browse-button bg-secondary text-sm text-primary font-semibold">
            Browse images
          </Button>
        </div>
      </Dropzone>
    </div>
  );
};

export default ImageDropzone;
