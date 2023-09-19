// * types
type ProgressBarProps = {
  percent: number;
  status: string;
};

const ProgressBar = ({ percent, status }: ProgressBarProps) => {
  if (!status) return null;
  
  return (
    <div className="progress">
      <span className="status text-primary-light font-semibold">{status}</span>
      <div className="progress-bar relative w-full h-1.5 bg-primary-light rounded-full overflow-hidden">
        <div
          style={{ width: `${percent}%` }}
          className="progress-fill absolute inset-0 h-full bg-secondary"
        />
      </div>
    </div>
  );
};

export default ProgressBar;
