import listModel from './models/listModel.js';

exports.getAllLists = async (req, res) => {
    try {
      const lists = await List.find();
      res.status(200).json(lists);
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong' });
    }
  };

  exports.getListById = async (req, res) => {
    const listId = req.params.id;
    try {
      const list = await List.findById(listId);
      if (!list) {
        return res.status(404).json({ error: 'List not found' });
      }
      res.status(200).json(list);
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong' });
    }
  };

  exports.createList = async (req, res) => {
    const { name } = req.body;
    try {
      const newList = new List({ name });
      await newList.save();
      res.status(201).json({ message: 'List created successfully', list: newList });
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong' });
    }
  };

  exports.updateList = async (req, res) => {
    const listId = req.params.id;
    const { name } = req.body;
    try {
      const updatedList = await List.findByIdAndUpdate(
        listId,
        { name },
        { new: true }
      );
      if (!updatedList) {
        return res.status(404).json({ error: 'List not found' });
      }
      res.status(200).json({ message: 'List updated successfully', list: updatedList });
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong' });
    }
  };
  
  exports.deleteList = async (req, res) => {
    const listId = req.params.id;
    try {
      const deletedList = await List.findByIdAndDelete(listId);
      if (!deletedList) {
        return res.status(404).json({ error: 'List not found' });
      }
      res.status(200).json({ message: 'List deleted successfully', list: deletedList });
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong' });
    }
  };
  
  