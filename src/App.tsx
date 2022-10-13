import './styles/global.css'
import {Button} from './components/button'
import { TextInput, TextInputProps, TextInputRootprops} from './components/TextInput'
import { Envelope } from 'phosphor-react'
import { Checkbox } from './components/checkbox'

export function App() {

  return (
    <main className='flex flex-col w-[500px]'>
      <h1 className="font-bold text-2xl">Hello world</h1>
      <button className="bg-cyan-500 font-medium px-4 py-2 w-[100px] text-white rounded hover:bg-cyan-300">Enviar</button>
      <br/>
      <br/>
      {/*<Text/>*/}
      <TextInput.Root>
        <TextInput.Icon>
          <Envelope/>
        </TextInput.Icon>
        <TextInput.Input placeholder='johdoe@example.com'
        type='email'/>
      </TextInput.Root>
      <Button
      children='Salvar  '/> 
      <div className='flex p-2'>
        <Checkbox/>
        <p>Lembrar de min por 30 dias</p>
      </div>
    </main>
  )
}
