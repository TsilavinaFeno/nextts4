import { Modal } from "./modal";

export default function PhotoModal({
    params,
}: {
    params: { id: string };
}) {
    return <Modal>{params.id}</Modal>;
}
