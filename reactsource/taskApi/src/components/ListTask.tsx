import { useState } from "react";
import { MdCheckBoxOutlineBlank, MdOutlineCheckBox } from "react-icons/md";
import type { TaskProps } from "./MainTask";

type TaskListProps = {
  task: TaskProps[];
  handleUpdateTask: (task: TaskProps) => void;
  onRemoveTask: (taskid: number) => void;
};
// Omit<타입명, "제거 속성">
type TaskItemProps = Omit<TaskItemProps, "tasks"> & {
  task: TaskItemProps;
};

const ItemTask = ({
  task,
  handleUpdateTask,
  onRemoveTask,
  onToggleTask,
}: TaskItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isDone, setIsDone] = useState(task.done);
  const [text, setText] = useState(task.text);
  const taskTextChange = () => {
    handleUpdateTask({
      ...task,
      text: text,
    });
    setIsEditing(false);
  };

  // 클릭 시 체크박스 변경
  const CheckboxIcon = isDone ? MdOutlineCheckBox : MdCheckBoxOutlineBlank;

  const taskDoneChange = () => {
    setIsDone(!isDone);
    onToggleTask({
      ...task,
      done: isDone,
    });
  };
  return (
    <div className="flex items=center justify-between px-3 py-2">
      <div className="flex items-center gap-3 w-full mr-2">
        <CheckboxIcon onClick={taskDoneChange} />
        {isEditing ? (
          <input
            type="text"
            className="border p-2 w-full"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        ) : (
          <span className="text-gray-800">{text}</span>
        )}
      </div>
      <div className="flex items-center gap-2">
        {isEditing ? (
          <button
            type="button"
            onClick={taskTextChange}
            className="rounded border px-3 py-2 text-sm text-green-600 hover:text-green-800"
          >
            Save
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setIsEditing(true)}
            className="rounded border px-3 py-2 text-sm text-green-600 hover:text-green-800"
          >
            Edit
          </button>
        )}
        <button
          type="button"
          onClick={() => onRemoveTask(task.id)}
          className="rounded border px-3 py-2 text-sm text-red-600 hover:text-red-800"
        >
          Delete
        </button>
      </div>
    </div>
  );
};
const ListTask = ({ tasks, handleUpdateTask, onRemoveTask }) => {
  return (
    <div className="space-y-3">
      {tasks.map((task) => (
        <ItemTask
          task={task}
          handleUpdateTask={handleUpdateTask}
          onRemoveTask={onRemoveTask}
        />
      ))}
    </div>
  );
};

export default ListTask;
