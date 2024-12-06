import { useState } from "react";
import { Button } from "./ui/button";
import buyCourse from "@/config/buyCourse";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

function EnrollButton() {
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const userInfo = JSON.parse(`${window.localStorage.getItem("userInfo")}`);
  return (
    <Button
      disabled={loading}
      onClick={async () => {
        setLoading(true);
        await buyCourse(`${id}`, userInfo.id);
        console.log(id);
        setLoading(false);
      }}
      className="bg-emerald-500 hover:bg-emerald-600"
    >
      Enroll
    </Button>
  );
}
export default EnrollButton;
