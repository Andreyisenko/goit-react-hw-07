import { useDispatch, useSelector } from 'react-redux';
import css from './SearchBox.module.css';
import { useId } from 'react';
import { changeFilter, selectFilter } from '../../redux/filtersSlice';
const SearchBox = () => {
  const value = useSelector(selectFilter);
  const labId = useId();
  const dispatch = useDispatch();
  return (
    <div className={css.wrap}>
      <label htmlFor={labId}>Find contacts by name</label>
      <input
        type="text"
        value={value}
        onChange={e => dispatch(changeFilter(e.target.value))}
        id={labId}
        className={css.inp}
        name="search"
        placeholder="Search..."
      ></input>
      <p>{value}</p>
    </div>
  );
};

export default SearchBox;
