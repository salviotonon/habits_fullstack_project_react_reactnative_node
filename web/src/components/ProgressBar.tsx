interface ProgressBarProps {
  progress: number;
}

export const ProgressBar = (props: ProgressBarProps) => {
  const progressStyles = {
    width: `${props.progress}%`,
  };
  console.log(props.progress);
  return (
    <div className="h-3 rounded-xl bg-zinc-700 mt-4">
      <div
        role="progressbar"
        className="h-3 rounded-xl bg-violet-600 transition-all"
        aria-label="Progresso de hábitos completados nesse dia"
        aria-valuenow={props.progress}
        style={progressStyles}
      ></div>
    </div>
  );
};
