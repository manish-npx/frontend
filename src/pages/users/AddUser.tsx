import AddStepWizard from "./AddStepWizard";

export type AddUserProps = {
    name: string
}

export const AddUser: React.FC<AddUserProps> = ({ name }: AddUserProps) => {

    console.log('name', { name })

    return (
        <>
            <AddStepWizard />


        </>

    )
};


export default AddUser;