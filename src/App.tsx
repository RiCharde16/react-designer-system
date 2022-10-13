import './styles/global.css'
import {Button} from './components/button'
import { TextInput, TextInputProps, TextInputRootprops} from './components/TextInput'
import { Envelope, Lock } from 'phosphor-react'
import { Checkbox } from './components/checkbox'
import { Logo } from './components/Logo'
import { Text } from './components/text'
import { Heading } from './components/heading'

export function App() {

  return (
    <div className='w-scream h-screen bg-gray-900 flex items-center justify-center flex-col text-gray-100'>
      <header className='flex flex-col items-center'>
        <Logo/>
        <Heading size='xl' className='mt-4'>
          Ingnite Lab
        </Heading>
        <Text size="sm" className='text-gray-400 mt-1'>
          Faça Login e comece a usar!
        </Text>
      </header>
      <form className='flex flex-col gap-4 items-stretch w-full max-w-[400px] mt-10'>
          <label htmlFor='email' className='font-semibold flex flex-col gap-3 mb-4'>
            <Text size='sm'>Endereço de E-mail</Text>
            <TextInput.Root>
              <TextInput.Icon>
                <Envelope/>
              </TextInput.Icon>
              <TextInput.Input placeholder='johdoe@example.com'
              type='email' id='email'/>
            </TextInput.Root>
          </label>
          <label htmlFor='senha' className='font-semibold flex flex-col gap-3'>
            <Text size='sm'>Sua Senha:</Text>
            <TextInput.Root>
              <TextInput.Icon>
                <Lock/>
              </TextInput.Icon>
              <TextInput.Input placeholder='************'
              type='password' id='senha'/>
            </TextInput.Root>
          </label>
          <label htmlFor='remember' className='flex items-center gap-2'>
            <Checkbox id='remember'/>
            <Text size='sm' className='text-gray-200'>Lembrar de min por 30 dias</Text>
          </label>
            <Button type='submit' children='Entrar na Plataforma' className='mt-4'/> 
      </form>
      <footer className='flex flex-col items-center gap-4 mt-8'>
        <a href='#' className='text-gray-400 underline text-sm hover:text-gray-200'>Esqeuceu sua senha?</a>
        <a href='#' className='text-gray-400 underline text-sm hover:text-gray-200'>Não posui conta? Crie uma agora!</a>
      </footer>
      {/* <button className="bg-cyan-500 font-medium px-4 py-2 w-[100px] text-white rounded hover:bg-cyan-300">Enviar</button> */}
      {/* <div className='flex p-2'>
        <Checkbox/>
        <p>Lembrar de min por 30 dias</p>
      </div> */}
    </div>
  )
}
