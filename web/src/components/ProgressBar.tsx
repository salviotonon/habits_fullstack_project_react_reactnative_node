interface ProgressBarProps {
  progress: number;
}

export const ProgressBar = (props: ProgressBarProps) => {
  const progressStyles = {
    width: `${props.progress}%`,
  };
  return (
    <div className="h-3 rounded-xl bg-zinc-700 mt-4">
      <div
        role="progressbar"
        className="h-3 rounded-xl bg-violet-600 w-3/4"
        aria-label="Progresso de hábitos completados nesse dia"
        aria-valuenow={props.progress}
        style={progressStyles}
      ></div>
    </div>
  );
};
