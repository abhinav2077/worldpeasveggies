import { toast } from "react-toastify";

export const handleSuccess = (msg) => {
    toast.success(msg, {
        position: "top-center",
        autoClose: 2000, // Closes the toast after 3 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: { fontSize: "14px" }, // Custom font size
    });
}

export const handleError = (msg) => {
    toast.error(msg,{
        position : "top-center"
    })
}