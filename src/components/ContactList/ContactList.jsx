import { useDispatch, useSelector } from 'react-redux';
import {
  StyledContact,
  StyledContactList,
  StyledDatas,
  StyledListBtn,
} from './ContactListStyled';
import { selectFilteredContacts } from 'redux/selectors';
import { deleteContacts } from 'redux/operations';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
  return (
    <StyledContactList>
      {filteredContacts.map(({ id, phone, name }) => {
        return (
          <StyledContact key={id}>
            <StyledDatas>
              {name}: {phone}
            </StyledDatas>
            <StyledListBtn
              type="button"
              name="delete"
              onClick={() => {
                dispatch(deleteContacts(id));
              }}
            >
              Delete
            </StyledListBtn>
          </StyledContact>
        );
      })}
    </StyledContactList>
  );
};

export default ContactList;
