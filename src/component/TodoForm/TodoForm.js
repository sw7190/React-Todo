import React, { Component } from 'react';
import './TodoForm.css';

class TodoForm extends Component {
    render() {
        return(
            <div  class="form-wrap">
                <div>
                    <input/> <button>작성</button>
                </div>
            </div>
        )
    }
}

export default TodoForm;