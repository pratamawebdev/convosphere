import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

type ConfirmDeleteAlertProps = {
  handleDelete: () => Promise<void>;
};

export function confirmDeleteAlert({ handleDelete }: ConfirmDeleteAlertProps) {
  const MySwal = withReactContent(Swal);

  MySwal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      handleDelete()
        .then(() => {
          MySwal.fire({
            title: "Deleted!",
            text: "The user has been deleted.",
            icon: "success",
          });
        })
        .catch((error: Error) => {
          MySwal.fire({
            title: "Error!",
            text: "There was a problem deleting the user.",
            icon: "error",
          });
          console.error("Delete error:", error);
        });
    }
  });
}
