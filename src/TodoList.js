import React from "react";
import { connect } from 'react-redux';


const TodoList = (props) => {
    const { inputValue, list, changeInputValue, handleClick } = props;
    return (
        <div>
            <div>
                <input onChange={changeInputValue} value={inputValue} />
                <button onClick={handleClick}>提交</button>
            </div>
            <ul>
                {
                    list.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })
                }
            </ul>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeInputValue(e) {
            const action = {
                type: 'change_input_value',
                value: e.target.value
            }
            dispatch(action)
        },
        handleClick() {
            const action = {
                type: 'add_item',
            }
            dispatch(action)
        }
    }
}
const ListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(TodoList);
  
export default ListContainer;

// export default connect(mapDispatchToProps,mapStateToProps)(TodoList);