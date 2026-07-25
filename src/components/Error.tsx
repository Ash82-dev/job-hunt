import Button from "./Button";

type ErrorProps = {
  message: string;
  onRetry: () => void;
};

function Error({ message, onRetry }: ErrorProps) {
  return (
    <div className="flex flex-col items-center gap-8 px-4 py-6 m-4 rounded-sm bg-error-container text-on-error-container">
      <p className="text-lg">{message}</p>
      <Button variant="error" className="w-1/4" onClick={onRetry}>
        Retry
      </Button>
    </div>
  );
}

export default Error;
