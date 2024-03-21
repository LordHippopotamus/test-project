import { v4 as uuidv4 } from "uuid";

export const generateTodos = () => {
  const todos = [];
  for (let i = 0; i < 20; i++) {
    todos.push({
      id: uuidv4(),
      title: `Todo ${i + 1}`,
      deadline: new Date(),
      lifeAspect: ["work", "home", "education", "relationships", "health"][
        Math.floor(Math.random() * 5)
      ],
      completed: false,
    });
  }
  return todos;
};
