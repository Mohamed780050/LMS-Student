import InfoCard from "@/components/InfoCard";
import getStudentCourses from "@/config/getStudentCouses";
import { useQuery } from "@tanstack/react-query";
import { CheckCircle, Clock } from "lucide-react";

function Home() {
  const user = JSON.parse(`${window.localStorage.getItem("userInfo")}`);
  console.log(user)
  const {} = useQuery({
    queryKey: [Home],
    queryFn: async () => await getStudentCourses(`${user.id}`),
  });
  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1">
        <div>
          <InfoCard numberOfItem={5} icon={Clock} label="In Progress" />
        </div>
        <div>
          <InfoCard
            numberOfItem={5}
            variant="success"
            icon={CheckCircle}
            label="In Progress"
          />
        </div>
      </div>
    </div>
  );
}
export default Home;
