import { useNavigate } from "react-router-dom";
import Form from "../../components/UI/Form";
import FormGroup from "../../components/UI/Form/Group";
import FormLabel from "../../components/UI/Form/Label";
import FormInput from "../../components/UI/Form/Input";
import FormError from "../../components/UI/Form/Error";
import PrimaryButton from "../../components/UI/Button/PrimaryButton";
import { useAuth } from "../../contexts/auth-context";
import { useLocale } from "../../contexts/locale-context";
import useInput from "../../hooks/use-input";
import { form } from "../../lang/form";

const LoginPage = () => {
    const authContext = useAuth();
    const { locale } = useLocale();
    const navigate = useNavigate();

    const {
        value: email,
        isValid: emailIsValid,
        isError: emailIsError,
        onBlur: onEmailBlur,
        onValueChange: onEmailChange,
    } = useInput({ required: true, isEmail: true });
    const {
        value: password,
        isValid: passwordIsValid,
        isError: passwordIsError,
        onBlur: onPasswordBlur,
        onValueChange: onPasswordChange,
    } = useInput({ required: true, minLength: 6 });

    const formIsValid = emailIsValid && passwordIsValid;
    const formIsError = emailIsError || passwordIsError;

    const handleLogin = async (e) => {
        e.preventDefault();
        if (formIsError) return;

        await authContext.onLogin({ email, password });
        navigate("/notes");
    };

    return (
        <Form onSubmit={handleLogin}>
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
            <PrimaryButton type="submit" disabled={!formIsValid}>
                {form[locale].action.login}
            </PrimaryButton>
        </Form>
    );
};

export default LoginPage;
