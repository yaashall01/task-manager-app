import taskModel from './models/taskModel';

exports.getAllTasks = async (req, res) => {
    try {
      const tasks = await Task.find();
      res.status(200).json(tasks);
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong' });
    }
  };

  exports.getTaskById = async (req, res) => {
    const taskId = req.params.id;
    try {
      const task = await Task.findById(taskId);
      if (!task) {
        return res.status(404).json({ error: 'Task not found' });
      }
      res.status(200).json(task);
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong' });
    }
  };
  
  exports.createTask = async (req, res) => {
    const { title, dueDate, listId } = req.body;
    try {
      const newTask = new Task({ title, dueDate, listId });
      await newTask.save();
      res.status(201).json({ message: 'Task created successfully', task: newTask });
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong' });
    }
  };
  
  exports.updateTask = async (req, res) => {
    const taskId = req.params.id;
    const { title, dueDate, completed } = req.body;
    try {
      const updatedTask = await Task.findByIdAndUpdate(
        taskId,
        { title, dueDate, completed },
        { new: true }
      );
      if (!updatedTask) {
        return res.status(404).json({ error: 'Task not found' });
      }
      res.status(200).json({ message: 'Task updated successfully', task: updatedTask });
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong' });
    }
  };
  
  exports.deleteTask = async (req, res) => {
    const taskId = req.params.id;
    try {
      const deletedTask = await Task.findByIdAndDelete(taskId);
      if (!deletedTask) {
        return res.status(404).json({ error: 'Task not found' });
      }
      res.status(200).json({ message: 'Task deleted successfully', task: deletedTask });
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong' });
    }
  };
  