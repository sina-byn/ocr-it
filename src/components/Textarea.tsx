// * components
import Button from './Button';

// * react-hot-toast
import { toast } from 'react-hot-toast';

// * icons
import { PasteClipboard } from 'iconoir-react';

// * types
type TextareaProps = {
  title: string;
  value: string;
  onChange: (value: string) => void;
};

const Textarea = ({ title, value, onChange }: TextareaProps) => {
  const changeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;

    onChange(value);
  };

  const copyHandler = () => {
    if (!value) return;

    navigator.clipboard
      .writeText(value)
      .then(() => toast('detected text copied to clipboard', { icon: '📋' }))
      .catch(() => toast.error('failed to copy detected text'));
  };

  return (
    <div className="textarea-container flex flex-col w-full h-full text-primary-light border border-primary-light rounded-sm pt-1">
      <header className="textarea-header flex items-center justify-between border-b border-priamry-light px-2 pb-1">
        <h2 className="textarea-title text-lg text-secondary font-semibold">
          {title}
        </h2>
        <Button onClick={copyHandler} className="hover:text-secondary">
          <PasteClipboard width={20} height={20} />
        </Button>
      </header>
      <textarea
        readOnly
        value={value}
        onChange={changeHandler}
        placeholder="Read-Only"
        className="textarea w-full h-full resize-none bg-transparent focus:outline-none px-2 pb-1"
      />
    </div>
  );
};

export default Textarea;
