import { clsx } from 'clsx';
import { InputHTMLAttributes, ReactNode } from 'react';
import {Slot} from '@radix-ui/react-slot'

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement>{
    placeholder?: string;
}

export interface TextInputRootprops{
    children: ReactNode;
}

function TextInputRoot(props: TextInputRootprops){
    return(
        <div className={clsx(' flex items-center gap-3 py-4 px-3 rounded bg-gray-800 focus-within:ring-2 ring-cyan-300')}>
            {props.children}
        </div>

    )
}

export interface TextInputIconProps{
    children: ReactNode;
}

function TextInputIcon(props: TextInputIconProps){
    return(    
        <Slot className="w-6 h-6 text-gray-400">
            {props.children}
        </Slot>
    )
}
// TextInputIcon.displayName = 'TextInputIcon'

interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement>{
    placeholder?: string;
}

function TextInputInput(props: TextInputInputProps){
    return(
        <input className=" bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none  autofill:bg-slate-300" {...props}/>
    )
}
export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon,
}