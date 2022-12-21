import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../../utils/network-data";

import Form from "../../components/UI/Form";
import FormGroup from "../../components/UI/Form/Group";
import FormLabel from "../../components/UI/Form/Label";
import FormInput from "../../components/UI/Form/Input";
import PrimaryButton from "../../components/UI/Button/PrimaryButton";
import useInput from "../../hooks/use-input";
import FormError from "../../components/UI/Form/Error";
import Loading from "../../components/UI/Loading";

import { useLocale } from "../../contexts/locale-context";
import { form } from "../../lang/form";

const RegisterPage = () => {
    const navigate = useNavigate();
    const { locale } = useLocale();
    const [isLoading, setIsLoading] = useState(false);

    const {
        value: name,
        isValid: nameIsValid,
        isError: nameIsError,
        onValueChange: onNameChange,
        onBlur: onNameBlur,
    } = useInput({ required: true });

    const {
        value: email,
        isValid: emailIsValid,
        isError: emailIsError,
        onValueChange: onEmailChange,
        onBlur: onEmailBlur,
    } = useInput({ required: true, isEmail: true });

    const {
        value: password,
        isValid: passwordIsValid,
        isError: passwordIsError,
        onValueChange: onPasswordChange,
        onBlur: onPasswordBlur,
    } = useInput({ required: true, minLength: 6 });

    const {
        value: confirmPassword,
        isValid: confirmPasswordIsValid,
        isError: confirmPasswordIsError,
        onValueChange: onConfirmPasswordChange,
        onBlur: onConfirmPasswordBlur,
    } = useInput({ required: true, minLength: 6, confirm: password });

    const formIsValid =
        nameIsValid &&
        emailIsValid &&
        passwordIsValid &&
        confirmPasswordIsValid;

    const formIsError =
        nameIsError ||
        emailIsError ||
        passwordIsError ||
        confirmPasswordIsError;

    const handleRegister = async (e) => {
        e.preventDefault();
        if (formIsError) return;

        setIsLoading(true);
        const { error } = await register({ name, email, password });
        setIsLoading(false);
        if (error) return;
        navigate("/login");
    };

    if (isLoading) return <Loading />;

    return (
        <Form onSubmit={handleRegister}>
            <FormGroup>
                <FormLabel forField="name">{form[locale].field.name}</FormLabel>
                <FormInput
                    id="name"
                    name="name"
                    placeholder={form[locale].field.name}
                    onChange={onNameChange}
                    onBlur={onNameBlur}
                >
                    {name}
                </FormInput>
                <FormError error={nameIsError}>Nama tidak valid</FormError>
            </FormGroup>
            <FormGroup>
                <FormLabel forField="email">
                    {form[locale].field.email}
                </FormLabel>
                <FormInput
                    type="email"
                    id="email"
                    name="email"
                    placeholder={form[locale].field.email}
                    onChange={onEmailChange}
                    onBlur={onEmailBlur}
                >
                    {email}
                </FormInput>
                <FormError error={emailIsError}>Email tidak valid</FormError>
            </FormGroup>
            <FormGroup>
                <FormLabel forField="password">
                    {form[locale].field.password}
                </FormLabel>
                <FormInput
                    type="password"
                    id="password"
                    name="password"
                    placeholder={form[locale].field.password}
                    onChange={onPasswordChange}
                    onBlur={onPasswordBlur}
                >
                    {password}
                </FormInput>
                <FormError error={passwordIsError}>
                    Password tidak valid
                </FormError>
            </FormGroup>
            <FormGroup>
                <FormLabel forField="confirm-password">
                    {form[locale].field.confirmPassword}
                </FormLabel>
                <FormInput
                    type="password"
                    id="confirm-password"
                    name="confirm_password"
                    placeholder={form[locale].field.confirmPassword}
                    onChange={onConfirmPasswordChange}
                    onBlur={onConfirmPasswordBlur}
                >
                    {confirmPassword}
                </FormInput>
                <FormError error={confirmPasswordIsError}>
                    Konfirmasi Password tidak valid
                </FormError>
            </FormGroup>
            <PrimaryButton type="submit" disabled={!formIsValid}>
                {form[locale].action.register}
            </PrimaryButton>
        </Form>
    );
};

export default RegisterPage;
