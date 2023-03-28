export default function Loading() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-light_bg_Main py-3 dark:bg-dark_bg_Main">
      <div
        class="text-info inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-amber-500 motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-indigo-600"
        role="status"
      ></div>
      <span class=" space-x-2 text-xl text-amber-500 ![clip:rect(0,0,0,0)] dark:text-indigo-600">
        Loading ...{" "}
      </span>
    </div>
  );
}
