import React from 'react';

function Form() {
  return (
    <div>
      <form>
        <label htmlFor="Title">
          Title
          <input type="text" />
        </label>
        <label htmlFor="Autor">
          Author
          <input type="text" />
        </label>
        <input type="submit" value="ADD BOOK" />
      </form>
    </div>
  );
}

export default Form;