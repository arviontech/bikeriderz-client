import Lottie from "lottie-react";
import spinner from "@/assets/lottie/spinner.json";

const DeleteConfirmModel = ({
  isOpen,
  onConfirm,
  onCancel,
  bikeName,
  isDeleteLoading,
}: {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  bikeName: string;
  isDeleteLoading: boolean;
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Overlay with black semi-transparent background */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Modal content */}
      <div className="relative bg-white p-6 rounded-lg shadow-2xl z-10">
        <h2 className="text-lg font-semibold mb-4">Confirm Deletion</h2>
        <p>
          Are you sure you want to delete the bike: <strong>{bikeName}</strong>?
        </p>
        <div className="flex justify-end mt-4">
          <button
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded mr-2 w-[100px]"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className={`${
              isDeleteLoading
                ? "bg-white w-[100px] px-4  border-red-500 border-2"
                : "bg-red-600 text-white rounded w-[100px]"
            } w-[100px]`}
            onClick={onConfirm}
          >
            {isDeleteLoading ? (
              <div className="flex items-center justify-center">
                <Lottie animationData={spinner} loop={true} />
              </div>
            ) : (
              <span>Confirm</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModel;
