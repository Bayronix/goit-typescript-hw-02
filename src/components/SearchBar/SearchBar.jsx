import { Formik, Form, Field } from "formik";
import PropTypes from "prop-types";
import Styles from "./SearchBar.module.css";

const SearchBar = ({ onSearch }) => {
  const handleSubmit = (values, { setSubmitting }) => {
    onSearch(values.text);
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{
        text: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={Styles.form}>
        <Field name="text" placeholder="Search..." />
        <button type="submit">Search</button>
      </Form>
    </Formik>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
