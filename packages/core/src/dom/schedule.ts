const queue: (() => void)[] = [];
let scheduled = false;
const FRAME_BUDGET = 8; // ms, for 60fps safety

export function enqueue(job: () => void) {
  queue.push(job);
  scheduleFlush();
}

function scheduleFlush() {
  if (scheduled) return;
  scheduled = true;

  requestAnimationFrame(() => {
    const start = performance.now();

    while (queue.length && performance.now() - start < FRAME_BUDGET) {
      const job = queue.shift();
      job?.();
    }

    scheduled = false;
    if (queue.length > 0) scheduleFlush(); // continue next frame
  });
}
