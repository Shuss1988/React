import { useForm } from "react-hook-form";



const Form = ()=>{
//sacamos stas dos funciones de useForm
//y no cnfundir la función register con registrarse en una web o algo parecido
    const { handleSubmit, register } = useForm();

    const onFormSubmit = (values) => {
        console.log(values);
    };
    const onFormErrors = (errors) => {
        console.error(errors);
    };

    return <div>
         {/* ejecutamos en el submit nuestra función custon onFormSubmit a traves de la herramiemta handleSubmit de react hook form, esta herramienta va ser capaz de leer los valores del formulario*/}
        <form onSubmit={handleSubmit(onFormSubmit, onFormErrors)}>
            <input type="text" 
            placeholder="username" 
            id="username" 
            name="username"
            { ...register("username", {
                required: true,
                minLength: 5,
                maxLength: 10,
            })} />

            <input type="text" 
            placeholder="password" 
            id="password"
            name="password"
            { ...register("password", {
                required: true,
                minLength: 8,
            })} />
            <button>submit</button>
        </form>
    </div>
}
export default Form;