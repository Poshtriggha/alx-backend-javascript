export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    // Remove the redeclarations of task and task2
    // They will retain their initial values defined outside the conditional block
  }

  return [task, task2];
}
