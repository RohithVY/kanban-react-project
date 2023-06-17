const initialData = {
  tasks: {
    "task-1": {
      id: "task-1",
      priority: "low",
      tasktitle: "Brainstorming",
      image: "",
      description:
        "Brainstorming brings team members' diverse experience into play. ",
      teamcount: 2,
    },
    "task-2": {
      id: "task-2",
      priority: "high",
      tasktitle: "Onboarding Illustrations",
      image:
        "https://images.unsplash.com/photo-1530903677198-7c9f3577a63e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1552&q=80",
      description: "",
      teamcount: 3,
    },
    "task-3": {
      id: "task-3",
      priority: "completed",
      tasktitle: "Design System",
      image: "",
      description: "It just needs to adapt the UI from what you did before ",
      teamcount: 5,
    },
    "task-4": {
        id: "task-4",
        priority: "high",
        tasktitle: "Wireframes",
        image: "",
        description: "Low fidelity wireframes include the most basic content and visuals.",
        teamcount: 10,
      },
      "task-5": {
        id: "task-5",
        priority: "completed",
        tasktitle: "Plant Care App",
        image: "https://cdn.dribbble.com/users/3550736/screenshots/15663044/media/9e3f7ff227f795ca4f6f593b4dcbf434.jpg?compress=1&resize=1600x1200&vertical=center",
        description: "",
        teamcount: 1,
      },
  },
  columns: {
    "column-1": {
      id: "column-1",
      name: "violet",
      title: "To do",
      btn: true,
      taskIds: ["task-1", "task-4"],
    },
    "column-2": {
      id: "column-2",
      name: "orange",
      title: "On Progress",
      btn: false,
      taskIds: ["task-2"],
    },
    "column-3": {
      id: "column-3",
      name: "green",
      title: "Done",
      btn: false,
      taskIds: ["task-3", "task-5"],
    },
  },
  columnOrder: ["column-1", "column-2", "column-3"],
};

export default initialData;
