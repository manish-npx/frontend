export default interface IMessageProp {
    header: string,
    body: string,
    status: boolean,
    small?: string | number,
    setMessage?: boolean | string,
}