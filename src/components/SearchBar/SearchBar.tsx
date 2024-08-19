import { Formik, Form, Field } from "formik";
import PropTypes from "prop-types";
import Styles from "./SearchBar.module.css";

type SearchBarProps = {
  onSearch: (text: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const handleSubmit = (
    values: { text: string },
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    onSearch(values.text);
    setSubmitting(false);
  };

  return (
    <Formik initialValues={{ text: "" }} onSubmit={handleSubmit}>
      <Form className={Styles.form}>
        <Field name="text" placeholder="Search..." />
        <button type="submit">Search</button>
      </Form>
    </Formik>
  );
};

export default SearchBar;
