import React, { FC } from "react";

interface IComponentProps {
    name: string;
    test?: string;
    title: string;
    status?: boolean;
    func: () => void;
    returningFunc: (message: string) => string;
}

// const Component = ({ name, title, status }: IComponentProps) => {
const Component: FC<IComponentProps> = ({ name, title, status, func, returningFunc }) => {

    return( <>
    <button onClick={() => console.log(returningFunc('This is message'))} >Button</button>
    </>)
}

export default Component;