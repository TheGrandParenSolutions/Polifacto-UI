export enum PromiseRatingKey {
  Fulfilled = "fulfilled",
  InProgress = "in_progress",
  PartiallyFulfilled = "partially_fulfilled",
  NotYetEvaluated = "not_yet_evaluated",
  Broken = "broken",
  Stalled = "stalled",
}

export const paginationConfig = {
  itemsPerPage: 10,
  currentPage: 1,
  totalItems: 0,
};

export const getPaginationConfig = () => {
  return structuredClone(paginationConfig);
}

export enum BrokenImage {
  URL = "https://pmlrikjsxqgrgdkkqskv.supabase.co/storage/v1/object/public/images/icons/broken-robot.svg?t=2024-09-06T20%3A12%3A46.363Z"
}