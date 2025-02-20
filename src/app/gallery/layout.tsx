import './global.css';

export default function RootLayout(props: {
    children: React.ReactNode;
    modal: React.ReactNode;
}) {
    return (
        <>
            {props.children}
            {props.modal}
            <div id="modal-root" />
        </>
    );
}
