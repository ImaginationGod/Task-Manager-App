import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useTasks } from "../../context/TaskContext";
import TaskItem from "./TaskItem";

export default function TaskList() {
    const { tasks, reorderTasks } = useTasks();

    const onDragEnd = (result) => {
        if (!result.destination) return;
        reorderTasks(result.source.index, result.destination.index);
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="tasks">
                {(provided) => (
                    <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        className="space-y-2"
                    >
                        {tasks.map((task, index) => (
                            <Draggable
                                key={task.id}
                                draggableId={task.id}
                                index={index}
                            >
                                {(provided) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                    >
                                        <TaskItem task={task} />
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
}
