export default function DataSetReviewersNoReviewers() {
  return (
    <div className="p-4 bg-red-400 dark:bg-red-600 rounded-lg">
      <div className="font-bold text-sm">No Reviewers</div>
      <div className="text-sm">
        No official reviewers have been assigned to this dataset, please be
        careful when using it, its source or publishers as it may contain
        inadequate information.
      </div>
    </div>
  );
}
