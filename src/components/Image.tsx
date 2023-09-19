// * icons
import { MediaImage } from 'iconoir-react';

// * types
type ImageProps = {
  src: string | null;
};

const Image = ({ src }: ImageProps) => {
  return (
    <figure className="image-container relative h-full w-full overflow-hidden">
      {src !== null ? (
        <img
          src={src}
          alt="uploaded-image"
          className="uploaded-image h-full max-w-full max-h-full object-contain object-center select-none mx-auto"
        />
      ) : (
        <div className="image-fallback flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-secondary font-semibold">
          <MediaImage className="text-4xl" />
          <span className="text-lg text-center">Uploaded Image Goes Here</span>
        </div>
      )}
    </figure>
  );
};

export default Image;
