import Swal, { SweetAlertIcon } from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

interface ResponseAlertProps {
  title: string;
  message: string;
  icon: SweetAlertIcon;
}

export function responseAlert({ title, message, icon }: ResponseAlertProps) {
  const MySwal = withReactContent(Swal);

  MySwal.fire({
    title: title,
    text: message,
    icon: icon,
  });
}
