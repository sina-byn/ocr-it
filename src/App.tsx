import { useState } from 'react';

// * tesseract.js
import { createWorker } from 'tesseract.js';

// * react-hot-toast
import { Toaster } from 'react-hot-toast';

// * components
import Image from './components/Image';
import Button from './components/Button';
import Textarea from './components/Textarea';
import ProgressBar from './components/ProgressBar';
import ImageDropzone from './components/ImageDropzone';

// * types
type Progress = {
  percent: number;
  status: string;
};

const App = () => {
  const [imageData, setImageData] = useState<string | null>(null);
  const [detectedText, setDetectedText] = useState<string>('');
  const [progress, setProgress] = useState<Progress>({
    percent: 0,
    status: '',
  });

  const extractHandler = async () => {
    const worker = await createWorker({
      logger: message => {
        if ('progress' in message) {
          setProgress({
            percent: message.progress * 100,
            status: message.progress === 1 ? 'Done' : message.status,
          });
        }
      },
    });

    setProgress({
      percent: 0,
      status: 'starting',
    });

    await worker.loadLanguage('eng');
    await worker.initialize('eng');
    const response = await worker.recognize(imageData!);
    setDetectedText(response.data.text);
  };

  return (
    <div className="app-container grid grid-rows-[auto,_1fr,_auto] min-w-screen min-h-screen lg:h-screen">
      <Toaster
        position="bottom-left"
        toastOptions={{
          duration: 1500,
          className:
            'bg-secondary text-primary text-sm font-semibold shadow-lg',
        }}
      />
      <header className="app-header bg-primary-dark text-secondary py-3 px-2 md:px-4">
        <div className="container max-w-[1660px] flex justify-between mx-auto">
          <h1 className="app-title text-xl font-semibold">OCR-it</h1>
          <a
            target="_blank"
            className="underline text-center"
            href="https://github.com/naptha/tesseract.js#tesseractjs"
          >
            tesseract.js v4.1.2
          </a>
        </div>
      </header>
      <div className="container max-w-[1660px] mx-auto">
        <main className="main-content grid lg:grid-cols-2 lg:grid-rows-2 gap-2 h-full bg-primary p-2 md:p-4">
          <ImageDropzone onChange={setImageData} />
          <section className="lg:row-span-2 flex flex-col gap-2 h-72 lg:h-auto">
            <Image src={imageData} />
            {imageData && (
              <Button
                onClick={extractHandler}
                className="extract-button justify-center bg-secondary hover:text-primary-light"
              >
                Extract
              </Button>
            )}
          </section>
          <section className="flex flex-col gap-2 h-52 lg:h-auto">
            <ProgressBar percent={progress.percent} status={progress.status} />
            <Textarea
              title="Detected Text"
              value={detectedText}
              onChange={setDetectedText}
            />
          </section>
        </main>
      </div>
      <footer className="app-footer bg-primary-dark text-sm text-secondary py-2 px-2 md:px-4">
        <div className="container max-w-[1660px] flex flex-col sm:flex-row justify-between gap-x-4 mx-auto">
          <span className="text-sm text-center font-medium">
            &copy; 2023 - OCR-it | All rights reserved
          </span>
          <a
            target="_blank"
            className="underline text-center"
            href="https://portfolio-sina-byn.vercel.app/"
          >
            Developed by Sina Bayandorian with &#10084;
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;
