import PropTypes from "prop-types";

import PrimaryButton from "../../UI/Button/PrimaryButton";
import Form from "../../UI/Form";
import FormGroup from "../../UI/Form/Group";
import FormLabel from "../../UI/Form/Label";
import FormTextArea from "../../UI/Form/TextArea";
import FormInput from "../../UI/Form/Input";
import FormError from "../../UI/Form/Error";
import useInput from "../../../hooks/use-input";

const NoteForm = ({ onSave }) => {
    const {
        value: title,
        isValid: titleIsValid,
        isError: titleIsError,
        onBlur: onTitleBlur,
        onValueChange: onTitleChange,
    } = useInput({ required: true });

    const {
        value: body,
        isValid: bodyIsValid,
        isError: bodyIsError,
        onBlur: onBodyBlur,
        onValueChange: onBodyChange,
    } = useInput({ required: true, textarea: true });

    const formIsValid = titleIsValid && bodyIsValid;
    const formIsError = titleIsError || bodyIsError;

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formIsError) return;

        const newNote = { title, body };
        onSave(newNote);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <FormLabel forField="title">Judul</FormLabel>
                <FormInput
                    id="title"
                    name="title"
                    placeholder="Topik catatan"
                    onChange={onTitleChange}
                    onBlur={onTitleBlur}
                >
                    {title}
                </FormInput>
                <FormError error={titleIsError}>Judul tidak valid</FormError>
            </FormGroup>
            <FormGroup>
                <FormLabel forField="body">Isi</FormLabel>
                <FormTextArea
                    id="body"
                    placeholder="Isi catatan"
                    onChange={onBodyChange}
                    onBlur={onBodyBlur}
                />
                <FormError error={bodyIsError}>Isi tidak valid</FormError>
            </FormGroup>
            <PrimaryButton type="submit" disabled={!formIsValid}>
                Tambahkan
            </PrimaryButton>
        </Form>
    );
};

NoteForm.propTypes = {
    onSave: PropTypes.func.isRequired,
};

export default NoteForm;
