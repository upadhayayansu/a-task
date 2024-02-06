import propTypes from "prop-types";

import "./icon.css";
import { FaCheckCircle } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

export const Icon = (props) => {
  return (
    <>
      <div className='item_container'>
        <div className='check-item'>
          <div className='icon'>
            <FaCheckCircle color='#5f08ae' />
          </div>
          <div className='icon_text'>
            <p>{props.text}</p>
          </div>
        </div>

        <div className='icon_selection'>
          <MdEdit />
          <MdDelete
            onClick={() => {
              props.onDelete(props.id);
            }}
          />
        </div>
      </div>
    </>
  );
};
Icon.propTypes = {
  text: propTypes.string,
  onDelete: propTypes.func,
  id: propTypes.string,
};
