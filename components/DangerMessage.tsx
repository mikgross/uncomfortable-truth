export default function DangerMessage({ title, body }: any) {
  return (
    <div className="p-4 bg-red-400 dark:bg-red-600 rounded-lg">
      <div className="font-bold text-sm">{title}</div>
      <div className="text-sm">{body}</div>
    </div>
  );
}
