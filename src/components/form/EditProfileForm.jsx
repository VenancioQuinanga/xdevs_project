import Input from "./Input";
import formStyles from "./../form/Form.module.css"

function EditProfileForm({user,onHandleSubmit,onFileChange,onHandleChange}) {

  return (
    <form onSubmit={onHandleSubmit} className={formStyles.form_container}>
      <Input
        text="Imagem"
        type="file"
        name="image"
        event={onFileChange}
      />
      <Input
        text="E-mail"
        type="email"
        name="email"
        placeholder="Digite o e-mail"
        event={onHandleChange}
        value={user.email || ''}
      />
      <Input
        text="Nome"
        type="text"
        name="name"
        placeholder="Digite o nome"
        event={onHandleChange}
        value={user.name || ''}
      />
      <Input
        text="Senha"
        type="password"
        name="password"
        placeholder="Digite a sua senha"
        event={onHandleChange}
      />
      <Input
        text="Confirmação de senha"
        type="password"
        name="confirmpassword"
        placeholder="Confirme a sua senha"
        event={onHandleChange}
      />
      <Input
        type="submit"
        value="Editar"
      />
    </form>
  )
}

export default EditProfileForm
