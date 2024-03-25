export default function DataSetSourcesNoSources() {
  return (
    <div className="p-4 bg-red-400 dark:bg-red-600 rounded-lg">
      <div className="font-bold text-sm">No Sources</div>
      <div className="text-sm">
        No verified sources have been provided for this dataset, please be
        careful when using this data.
      </div>
    </div>
  );
}
