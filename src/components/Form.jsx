const Form = ({ taskName, handleChange, handleSubmit }) => {
  return (
    <div>
      <form>
        <label htmlFor="input_task">Enter task here:</label>
        <input
          type="text"
          value={taskName}
          onChange={handleChange}
          name="text"
          id="input_task"
          autoComplete="off"
        />
        <button type="submit" onClick={handleSubmit}>
          Add Task
        </button>
      </form>
    </div>
  );
};

export default Form;
